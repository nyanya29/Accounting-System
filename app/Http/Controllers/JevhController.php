<?php

namespace App\Http\Controllers;

use App\Models\Fund;
use App\Models\Jevh;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Http\Requests\JevhValidation;
use App\Models\Jevd;

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
                            ->orderBy('recid', 'desc')
                            ->paginate(10)
                            ->withQueryString(),
                            // ->through(fn($item) => [
                            //     'fiscalyear' => $item->fiscalyear,
                            //     'fund_scode' => $item->fund_scode,
                            //     'fjevno' => $item->fjevno,
                            //     'fjevdate' => $item->fjevdate,
                            //     'fchkno' => $item->fchkno,
                            //     'fpayee' => $item->fpayee,
                            //     'fremk' => $item->fremk,
                            //     'recid' => $item->recid,
                            //     'fprepby' => $item->fprepby,
                            //     'fprepd' => $item->fprepd,
                            //     'fappvby' => $item->fappvby,
                            //     'fappvd' => $item->fappvd,
                            //     'fjevtyp' => $item->fjevtyp,
                            //     'canDelete' => !Jevd::where('FUND_SCODE', $item->fund_scode)->where('FJEVNO',  $item->fjevno)->first()
                            // ]),
            "filters" => $request->only(['search']),
        ]);
       
    }
    
    public function getFilter($request)
    {
        $index = $this->model;
        
        if ($request->fundscode) {
            $index = $index->where('fund_scode', 'like', '%' . $request->fundscode . '%');
        }
        if ($request->jType) {
            $index = $index->where('fjevtyp', 'like', '%' . $request->jType . '%');
        }
        if ($request->FJEVNO) {
            $index = $index->where('fjevno', 'like', '%' . $request->FJEVNO . '%');
        }
        if ($request->FCHKNO) {
            $index = $index->where('fchkno', 'like', '%' . $request->FCHKNO . '%');
        }
        if ($request->FREFNO) {
            $index = $index->where('frefno', 'like', '%' . $request->FREFNO . '%');
        }
        if ($request->FPAYEE) {
            $index = $index->where('fpayee', 'like', '%' . $request->FPAYEE . '%');
        }
        if (($request->from && !$request->to) || ($request->to && !$request->from)) {
            
            $date = $request->from ? $request->from : $request->to;
            
            $index = $index->whereDate('fjevdate', $date);
        } 
        if($request->from && $request->to) {
            $index = $index->whereBetween('fjevdate', [$request->from, $request->to]);
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
    public function jevdCreate(Request $request, $id)
    {

        // $data = $this->model->find($id);
        $data = $this->model->findOrFail($id);
        // dd($data);    
        
        $jevD =  DB::table('jevd')
                    ->select('jevd.*',
                            'chartofaccounts.FTITLE',
                            'subaccounts1.FTITLE',
                            'subaccounts1.FSTITLE',
                            'subaccounts2.FSTITLE2',
                            'funds_details.FUNDDETAIL_NAME',
                            'jevd.FCREDIT',
                            'jevd.FDEBIT',
                            DB::raw(
                                'FORMAT(jevd.FCREDIT, 2) as jevdCredit, 
                                FORMAT(jevd.FDEBIT, 2) as jevdDebit'
                            )
                        )
                    ->leftJoin('chartofaccounts', function ($query) {
                        $query->on('chartofaccounts.FACTCODE', '=', 'jevd.FACTCODE')
                            ->on('jevd.fiscalyear', '>=', 'chartofaccounts.fiscalyear')
                            ->on('jevd.fiscalyear', '<=', 'chartofaccounts.fiscalyear_to');
                    })
                    ->leftJoin('subaccounts1', function ($query) {
                        $query->on('subaccounts1.FACTCODE', '=', 'jevd.FACTCODE')
                            ->on('subaccounts1.FSUBCDE', '=', 'jevd.FSUBCDE');
                    })
                    ->leftJoin('subaccounts2', function ($query) {
                        $query->on('subaccounts2.FACTCODE', '=', 'jevd.FACTCODE')
                            ->on('subaccounts2.FSUBCDE', '=', 'jevd.FSUBCDE')
                            ->on('subaccounts2.FSUBCDE2', '=', 'jevd.FSUBCDE2');
                    })
                    ->leftJoin('funds_details', 'jevd.FUND_SCODE', 'funds_details.FUND_SCODE')
                    ->where('jevd.FJEVNO','=',$data->fjevno)
                    ->where('jevd.FUND_SCODE','=',$data->fund_scode)
                    ->where('jevd.fiscalyear','=',$data->fiscalyear)
                    ->get();
        // dd($jevD);
        return inertia('Jevh/Jevd/Create',[
            // 'data' => $data[0]['jevh'],
            'jevd1' => $jevD,
            'data' => $data,
            'totalDebit' => $jevD->sum('FDEBIT'),
            'totalCredit' => $jevD->sum('FCREDIT'),
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
        try {
            //code...
            $data = $this->model->findOrFail($request->recid);
            // dd($request->all());
            $data->update($request->all());
        } catch (\Throwable $th) {
            //throw $th;
            return $th->getMessage();
        }
        // dd("test");

        return redirect("/jevh/jevd-create/".$data->recid)->with('message', 'Updated Successfully');
    }
    public function deleteJevh(Request $request)
    {
        $jevh = $this->model
                    ->rightJoin('jevd', function($q){
                        $q->on('jevd.FJEVNO','jevh.fjevno')
                            ->on('jevd.FUND_SCODE','jevh.fund_scode');
                    })
                    ->where('jevh.recid', $request->recid)
                    ->count();
        dd($jevh);

        // $data = $this->model->findOrFail($request->recid);
        // $data->delete();
        
        return back()->with('message', 'Record deleted!');
    }
}
