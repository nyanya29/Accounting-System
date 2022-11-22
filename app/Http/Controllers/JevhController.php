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

        // $index = $this->model->with('jevd');
        // dd($index);
        
        $index = $this->getFilter($request);
        // dd($index->with('jevd')->get());

        return inertia('Jevh/Index', [
            "jevh" => $index->with(['jevd'])
            // "jevh" => $index->with(['jevd' => function($q) use($index){
            //     $q->where('FUND_SCODE', $index->jevd->FUND_SCODE);
            // }])
            // "jevh" => $index->with('jevd')
            ->when($request->search, function ($query, $searchItem) {
                $query->where('FJEVNO', 'like', '%' . $searchItem . '%');
            })
            ->orderBy('FJEVNO')
            ->paginate(10)
            ->withQueryString(),
            "filters" => $request->only(['search']),
           // "jevd" =>  
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
        // dd($request);
        $request->validated();

        $data = $this->model->create($request->all());
        return redirect("/jevh/jevd-create/$data->recid")->with('message', 'Added Successfully');
    }

    //garcia
    public function jevhCreate()
    {
        return inertia('Jevh/JevhCreate');
    }
    public function jevdCreate($id)
    {
        $data = $this->model->find($id);
        return inertia('Jevh/Jevd/Create',[
            'data' => $data,
        ]);
    }

    public function JevReport()
    {
       return inertia('Jevh/JevReport');
    }
    public function editJevh(Request $request, $recid)
    {
        $data = $this->model->where('recid',$recid)->first();
        return inertia('Jevh/JevhCreate',[
            'editData'=> $data
        ]);
    }
    public function updateJevh(Request $request)
    {
        $data = $this->model->findOrFail($request->recid);
        // dd($data);
        $data->update($request->all());

        return redirect("/jevh/jevd-create/$data->recid")->with('message', 'Updated Successfully');
    }
    public function deleteJevh(Request $request)
    {
        $data = $this->model->findOrFail($request->recid);
        $data->delete();
        
        return back()->with('message', 'Record deleted!');
    }
}
