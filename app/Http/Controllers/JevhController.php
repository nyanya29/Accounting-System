<?php

namespace App\Http\Controllers;

use App\Models\Fund;
use App\Models\Jevh;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class JevhController extends Controller
{
    public function __construct(Jevh $model, Fund $funds)
    {
        $this->model = $model;
        $this->funds = $funds;
    }
    public function index(Request $request){

        $index = $this->getFilter($request);

        return inertia('Jevh/Index', [
            "jevh" => $index
            ->when($request->search, function ($query, $searchItem) {
                $query->where('FJEVNO', 'like', '%' . $searchItem . '%');
            })
            ->simplePaginate(10)
            ->withQueryString(),
            "filters" => $request->only(['search']),
        ]);
    }
    public function getFundDetails()
    {
        return $this->funds->select(DB::raw('TRIM(FUND_SCODE) as FUND_SCODE'), 'FUNDDETAIL_NAME')->get();
    }
    public function getFilter($request)
    {
        $index = $this->model;

        if ($request->fundscode) {
            $index = $index->where('FUND_SCODE', 'like', '%' . $request->fundscode . '%');
        }
        if ($request->jType) {
            $index = $index->where('FJEVTYP', 'like', '%' . $request->jType . '%');
        }
        if ($request->FJEVNO) {
            $index = $index->where('FJEVNO', 'like', '%' . $request->FJEVNO . '%');
        }
        if ($request->FCHKNO) {
            $index = $index->where('FCHKNO', 'like', '%' . $request->FCHKNO . '%');
        }
        if ($request->FREFNO) {
            $index = $index->where('FREFNO', 'like', '%' . $request->FREFNO . '%');
        }
        if ($request->FPAYEE) {
            $index = $index->where('FCHKNO', 'like', '%' . $request->FPAYEE . '%');
        }
        if ($request->FCHKNO) {
            $index = $index->where('FCHKNO', 'like', '%' . $request->FCHKNO . '%');
        }
        if (($request->from && !$request->to) || ($request->to && !$request->from)) {
            
            $date = $request->from ? $request->from : $request->to;
            
            $index = $index->whereDate('FJEVDATE', $date);
        } 
        if($request->from && $request->to) {
            $index = $index->whereBetween('FJEVDATE', [$request->from, $request->to]);
        }
        if ($request->sortBy) {
            $index = $this->model->orderBy($request->sortBy, 'asc');
        }

        return $index;
    }
}
