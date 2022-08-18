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
        return inertia('Jevh/Index', [
            "jevh" => $this->model
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
        // return $this->funds->through(fn($funds) => [
        //     'FUND_SCODE' => $funds->FUND_SCODE,
        //     'FUNDDETAIL_NAME' => $funds->FUNDDETAIL_NAME
        // ]);
    }
}
