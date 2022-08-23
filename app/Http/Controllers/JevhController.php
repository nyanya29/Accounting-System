<?php

namespace App\Http\Controllers;

use App\Models\Jevh;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\JevhValidation;

class JevhController extends Controller
{
    public function __construct(Jevh $model)
    {
        $this->model = $model;
    }
    public function index(Request $request){
        return inertia('Jevh/Index', [
            "jevh" => $this->model
            ->when($request->search, function ($query, $searchItem) {
                $query->where('FJEVNO', 'like', '%' . $searchItem . '%');
            })
            ->latest()
            ->simplePaginate(10)
            ->withQueryString(),
            "filters" => $request->only(['search']),
        ]);

    }
    public function create()
        {
            return inertia('Jevh/Create');
        }
    
    public function getFundDetail()
    {
        return DB::table('funds_details')->select(DB::raw('TRIM(funds_details.FUND_SCODE) as FUND_SCODE'), 'FUNDDETAIL_NAME')->get();
    }

    public function store(JevhValidation $request)
    {
        $validated = $request->validated();

        $this->model->create($request->all());

        return redirect("/jevh/index")->with('message', 'Added Successfully');
    }

    
}
