<?php

namespace App\Http\Controllers;

use App\Models\Fund;
use App\Models\Jevh;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Http\Requests\JevhValidation;

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
            ->orderBy('FJEVNO')
            ->simplePaginate(10)
            ->withQueryString(),
            "filters" => $request->only(['search']),
        ]);

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
    public function create()
        {
            return inertia('Jevh/Create');
        }
    
    public function getFundDetail()
    {
        return DB::table('funds_details')->select(DB::raw('TRIM(funds_details.FUND_SCODE) as FUND_SCODE'), 'FUNDDETAIL_NAME')->get();
    }
    public function getFundDetails()
    {
        return $this->funds->select(DB::raw('TRIM(FUND_SCODE) as FUND_SCODE'), 'FUNDDETAIL_NAME')->get();
    }

    public function store(JevhValidation $request)
    {
        $validated = $request->validated();

        return $this->model->create($request->all());

       // return redirect('/jevh/index')->with('message', 'Added Successfully');//
    }
    
}
