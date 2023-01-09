<?php

namespace App\Http\Controllers;

use App\Models\Fund;
use App\Models\Jevh;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Http\Requests\JevhValidation;
use App\Http\Requests\PostingValidationRequest;
use App\Models\Jevd;

class JevhController extends Controller
{
    public function __construct(Jevh $model, Fund $funds, Jevd $jevd)
    {
        $this->model = $model;
        $this->funds = $funds;
        $this->jevd = $jevd;
    }
    public function index(Request $request){
        
        return inertia('Jevh/Index', [
            "jevh" => $this->model
                            ->when($request->search, function ($query, $searchItem) {
                                $query->where('fjevno', 'like', '%' . $searchItem . '%')
                                ->orWhere('fjevtyp', 'like', '%'.$searchItem.'%')
                                ->orWhere('fchkno', 'like', '%'.$searchItem.'%')
                                ->orWhere('frefno', 'like', '%'.$searchItem.'%')
                                ->orWhere('fpayee', 'like', '%'.$searchItem.'%');
                            })
                            ->when($request->fundscode, function($q,$filterItem) {
                                $q->where('fund_scode', 'like', '%' . $filterItem . '%');
                            })
                            ->when($request->jType, function($q,$filterItem) {
                                $q->where('fjevtyp', 'like', '%' . $filterItem . '%');
                            })
                            ->when($request->FJEVNO, function($q,$filterItem) {
                                $q->where('fjevno', 'like', '%' . $filterItem . '%');
                            })
                            ->when($request->FCHKNO, function($q,$filterItem) {
                                $q->where('fchkno', 'like', '%' . $filterItem . '%');
                            })
                            ->when($request->FREFNO, function($q,$filterItem) {
                                $q->where('frefno', 'like', '%' . $filterItem . '%');
                            })
                            ->when($request->FPAYEE, function($q,$filterItem) {
                                $q->where('fpayee', 'like', '%' . $filterItem . '%');
                            })
                            ->when($request->from && $request->to, function($q) use($request) {
                                $q->whereBetween('fjevdate', [$request->from, $request->to])
                                    ->orderBy('fjevdate', 'asc');
                            })
                            ->orderBy('recid', 'desc')
                            ->paginate(10)
                            ->withQueryString(),
            "filters" => $request->only(['search']),
        ]);
    }
    public function getFundDetail()
    {
        return DB::table('funds_details')->select(DB::raw('TRIM(funds_details.FUND_SCODE) as FUND_SCODE'), 'FUNDDETAIL_NAME')->get();
    }
    public function getFundDetails()
    {
        return $this->funds->select(DB::raw('TRIM(FUND_SCODE) as FUND_SCODE'), 'FUNDDETAIL_NAME')->get();
    }
    public function create()
    {
        return inertia('Jevh/Create');
    }
    public function storeJev(JevhValidation $request)
    {
        // dd($request);
        $request->validated();
        if(!$request->edit_id){
            $jevhData = $this->model->create([
                    "fiscalyear"    =>  $request->jevh['fiscalyear'],
                    "fund_scode"    =>  $request->jevh['fund_scode'],
                    "fjevno"        =>  $request->jevh['fjevno'],
                    "fjevtyp"       =>  $request->jevh['fjevtyp'],
                    "fjevdate"      =>  $request->jevh['fjevdate'],
                    "fpayee"        =>  $request->jevh['fpayee'],
                    "fchkno"        =>  $request->jevh['fchkno'],
                    "fremk"         =>  $request->jevh['fremk'],
                    "frefno"        =>  $request->jevh['frefno'],
                    "fprepby"       =>  $request->jevh['fprepby'],
                    "fprepd"        =>  $request->jevh['fprepd'],
                    "fappvby"       =>  $request->jevh['fappvby'],
                    "fappvd"        =>  $request->jevh['fappvd'],
            ]);
        } else {
            $jevhData = $this->model->findOrFail($request->edit_id);
            
            $jevhData->update([
                "fiscalyear"    =>  $request->jevh['fiscalyear'],
                "fund_scode"    =>  $request->jevh['fund_scode'],
                "fjevno"        =>  $request->jevh['fjevno'],
                "fjevtyp"       =>  $request->jevh['fjevtyp'],
                "fjevdate"      =>  $request->jevh['fjevdate'],
                "fpayee"        =>  $request->jevh['fpayee'],
                "fchkno"        =>  $request->jevh['fchkno'],
                "fremk"         =>  $request->jevh['fremk'],
                "frefno"        =>  $request->jevh['frefno'],
                "fprepby"       =>  $request->jevh['fprepby'],
                "fprepd"        =>  $request->jevh['fprepd'],
                "fappvby"       =>  $request->jevh['fappvby'],
                "fappvd"        =>  $request->jevh['fappvd'],
            ]);
        }

        $data = collect($request->jevd)->map( fn($item) => [
             collect($item)->merge([
                 'FJEVNO'=> $request->jevh['fjevno'],
                 'FUND_SCODE'=> $request->jevh['fund_scode'],
                 'fiscalyear'=> $request->jevh['fiscalyear'],
             ])->except(['FTITLE','FSTITLE', 'FSTITLE2', 'isSubcode1', 'isSubcode2','FUNDDETAIL_NAME'])->all()
        ]);
         $this->jevd->upsert($data->flatten(1)->toArray(), ['recid'],[
             'FRESPCTR',
             'FACTCODE',
             'FSUBCDE',
             'FSUBCDE2',
             'FALOBNO',
             'FVOUCHNO',
             'FPRNO', 
             'FDEBIT',
             'FCREDIT',
             'FREMARKS',
         ]);  
        return redirect("/jevh/index")->with('message', 'Added Successfully');
    }
    public function JevReport()
    {
       return inertia('Jevh/JevReport');
    }
    public function edit(Request $request, $recid)
    {
        $data = $this->model->where('recid',$recid)->first();
        $jevD =  DB::table('jevd')
                    ->select('jevd.*',
                            'chartofaccounts.FTITLE',
                            'subaccounts1.FTITLE',
                            'subaccounts1.FSTITLE',
                            'subaccounts2.FSTITLE2'
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
                    ->orderBy('jevd.recid', 'desc')
                    ->get();
        return inertia('Jevh/Edit',[
            'editData'  => $data,
            'factcodes' => getChartAccount(),
            'jevd'      => $jevD
        ]);
    }
    public function deleteJevh(Request $request)
    {
        $data = $this->model->findorFail($request->recid);
      
        $childdata = DB::table('jevd')->where('FJEVNO',$data->fjevno)
                                    ->where('FUND_SCODE',$data->fund_scode)
                                    ->where('fiscalyear',$data->fiscalyear);
        
        $data->delete();
        $childdata->delete();
        
        return back()->with('message', 'Record deleted!');
    }
    public function postingIndex()
    {
        return inertia('Jevh/Posting');
    }
    public function posting(PostingValidationRequest $request)
    {
        $request->validated();
        $data = $this->model
                ->whereBetween('fjevdate',[$request->from,$request->to]);           
        $data->update([
            'fdatepost' => $request->fdatepost
        ]);
        return redirect("/jevh/index")->with('message', 'Posted Successfully');
    }
}
