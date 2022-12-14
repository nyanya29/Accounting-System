<?php

namespace App\Http\Controllers;

use App\Models\Jevd;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\JevdValidation;
use Inertia\Inertia;

class JevdController extends Controller
{
    public function __construct(Jevd $model)
    {
        $this->model = $model;
    }

    public function jevDetails(Request $request)
    {
        $details = DB::table('jevd')
                    ->select('jevd.*',
                            'chartofaccounts.FTITLE',
                            'subaccounts1.FTITLE',
                            'subaccounts1.FSTITLE',
                            'subaccounts2.FSTITLE2',
                            'funds_details.FUNDDETAIL_NAME',
                            DB::raw('FORMAT(jevd.FCREDIT, 2) as jevdCredit, FORMAT(jevd.FDEBIT, 2) as jevdDebit')
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
                    ->where('jevd.FJEVNO','=',$request->fjevno)
                    ->where('jevd.FUND_SCODE','=',$request->fund_scode)
                    ->where('jevd.fiscalyear','=',$request->fiscalyear)
                    ->get();

            return $details;
    }
    
    public function jevdTotal(Request $request)
    {
        $totalSum = DB::table('jevd')
                ->select(DB::raw('FORMAT(SUM(jevd.FCREDIT),2) as totalCredit,FORMAT(SUM(jevd.FDEBIT),2) as totalDebit')
                    
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
                ->where('jevd.FJEVNO','=',$request->fjevno)
                ->where('jevd.FUND_SCODE','=',$request->fund_scode)
                ->where('jevd.fiscalyear','=',$request->fiscalyear)
                ->first();

        return $totalSum;
        // dd($totalSum);
    }
    // public function create()
    // {
    //     return inertia('Jevd/Create');
    // }

    public function getChartAccount()
    {
        return DB::table('chartofaccounts')
                ->select(DB::raw('TRIM(FACTCODE) as FACTCODE'), 'FTITLE')
                ->get()
                ->map(fn($item) => [
                    'id'    =>  $item->FACTCODE,
                    'text'  =>  "$item->FTITLE",
                    // 'text1' =>  "$item->FACTCODE ------ $item->FTITLE"
                ]);
    }

    public  function getSubCode1(Request $request)
    {
       return DB::table('subaccounts1')
                ->select(
                    'subaccounts1.*',
                    'chartofaccounts.FACTCODE',
                    'chartofaccounts.FTITLE',
                    'subaccounts1.FSUBCDE',
                    'subaccounts1.FSTITLE',
                    DB::raw('TRIM(subaccounts1.FSUBCDE) as FSUBCDE, TRIM(subaccounts1.FSTITLE) as FSTITLE')
                )
                ->leftJoin('chartofaccounts', function ($query) {
                    $query->on('chartofaccounts.FACTCODE', '=', 'subaccounts1.FACTCODE');
                })
                ->where('subaccounts1.FACTCODE','=',$request->FACTCODE)
                ->get()
                ->map(fn($item) => [
                   'id'     =>  $item->FSUBCDE,
                   'text'   =>  $item->FSTITLE
                ]);

                // return $subcode1;
    }
    
    public function getSubCode2(Request $request)
    {
        return DB::table('subaccounts2')
                ->select(
                    'subaccounts2.*',
                    'chartofaccounts.FACTCODE',
                    'chartofaccounts.FTITLE',
                    'subaccounts2.FSUBCDE',
                    'subaccounts2.FSTITLE',
                    DB::raw('TRIM(FSUBCDE2) as FSUBCDE2, TRIM(subaccounts2.FSTITLE2) as FSTITLE2')
                )
                ->leftJoin('chartofaccounts', function ($query) {
                    $query->on('chartofaccounts.FACTCODE', '=', 'subaccounts2.FACTCODE');
                })
                ->where('subaccounts2.FACTCODE', '=', $request->FACTCODE)
                ->get()
                ->map(fn($item) => [
                    'id'     =>  $item->FSUBCDE2,
                    'text'   =>  $item->FSTITLE2
                ]);
    }
    //jevd crud
    public function store(JevdValidation $request)
    {
        $request['FCREDIT'] = $request->FCREDIT ? $request->FCREDIT : 0;
        $request['FDEBIT'] = $request->FDEBIT ? $request->FDEBIT : 0;
        $validated = $request->validated();
        
        $jevd = $this->model->create($request->all());
        return redirect()->back()->with('message', "Added Successfully");
    }

    public function editJevd(Request $request,$id)
    {
        $data = $this->model->where('recid', $id)->first();
        $data->FCREDIT = $data->FCREDIT != 0 ? $data->FCREDIT : ''; 
        $data->FDEBIT = $data->FDEBIT != 0 ? $data->FDEBIT : ''; 
        return $data;
    }

    public function update(Request $request, $id)
    {
        $request['FCREDIT'] = $request->FCREDIT ? $request->FCREDIT : 0;
        $request['FDEBIT'] = $request->FDEBIT ? $request->FDEBIT : 0;   
        $data = $this->model->findOrFail($request->id);
        $data->update($request->all());

        return back()->with('message', "Updated Succesfuly");
    }

    public function destroy(Request $request)
    {
        $data = $this->model->findOrFail($request->id);
        $data->delete();
        
       return back()->with('message', 'Successfully Deleted!');
    }
}
