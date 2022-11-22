<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class JevdReportsController extends Controller
{
    public function jevdReport(Request $request){
        $details = DB::table('jevd')
                    ->select(
                        'jevd.*',
                        'chartofaccounts.FTITLE',
                        'subaccounts1.FTITLE',
                        'subaccounts1.FSTITLE',
                        'subaccounts2.FSTITLE2',
                        'funds_details.FUNDDETAIL_NAME',
                        'jevh.FJEVTYP',
                        'jevh.FPREPBY',
                        'jevh.FPREPD',
                        'jevh.FAPPVBY',
                        'jevh.FAPPVD',
                        'jevh.FJEVDATE',
                        'jevh.FCHKNO',
                        DB::raw('FORMAT(jevd.FCREDIT, 2) as jevdCredit, FORMAT(jevd.FDEBIT, 2) as jevdDebit'),
                    )
                    ->leftjoin('jevh', function ($query){
                        $query->on('jevh.FUND_SCODE', '=', 'jevd.FUND_SCODE')
                            ->on('jevd.FJEVNO', '=', 'jevh.FJEVNO');
                    })
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
                    ->where('jevd.FJEVNO','=',$request->FJEVNO)
                    ->where('jevd.FUND_SCODE','=',$request->FUND_SCODE)
                    ->where('jevd.fiscalyear','=',$request->fiscalyear)
                    ->orderBy('jevd.FACTCODE')
                    // ->groupBy('recid')
                    ->get();
        
            return $details;
    }
    public function jevdTypeReport(Request $request)
    {
        $details = DB::table('jevd')
                    ->select(
                        // 'jevh.*',
                        'jevh.recid',
                        'jevd.FDEBIT',
                        'jevd.FUND_SCODE',
                        'jevd.FCREDIT',
                        'jevd.fiscalyear',
                        'jevh.FJEVNO',
                        'jevd.FACTCODE',
                        'jevh.FJEVTYP',
                        'jevh.FPAYEE',
                        'jevh.FJEVDATE',
                        'funds_details.FUNDDETAIL_NAME',
                        DB::raw('SUM(CASE WHEN jevd.FACTCODE=10101010 THEN jevd.FDEBIT else null END) as debit101'),
                        DB::raw('SUM(CASE WHEN jevd.FACTCODE=40102080 THEN jevd.FCREDIT else null END) as credit080'),
                        DB::raw('SUM(CASE WHEN jevd.FACTCODE=40102040 THEN jevd.FCREDIT else null END) as credit040'),
                        DB::raw('SUM(CASE WHEN jevd.FACTCODE=40202050 THEN jevd.FCREDIT else null END) as credit050'),
                        DB::raw('SUM(CASE WHEN jevd.FACTCODE=40201040 THEN jevd.FCREDIT else null END) as credit1040'),
                        DB::raw('SUM(CASE WHEN jevd.FACTCODE=40202200 THEN jevd.FCREDIT else null END) as credit2200'),
                        DB::raw('SUM(CASE WHEN jevd.FACTCODE=10102010 THEN jevd.FDEBIT else null END) as debit2010'),
                        DB::raw('SUM(CASE WHEN jevd.FACTCODE=10201010 THEN jevd.FDEBIT else null END) as debit201010'),
                        DB::raw('SUM(CASE WHEN jevd.FACTCODE=10101010 THEN jevd.FCREDIT else null END) as credit101010'),
                    )

                    ->leftJoin('jevh', function($query){
                        $query->on('jevh.FUND_SCODE', '=', 'jevd.FUND_SCODE')
                        ->on('jevh.FJEVNO', '=', 'jevd.FJEVNO')
                        ->on('jevh.fiscalyear', '=', 'jevd.fiscalyear');                     
                    })

                    ->leftJoin('funds_details', 'jevd.FUND_SCODE','=', 'funds_details.FUND_SCODE')
                    ->where('jevh.FJEVTYP','=',$request->FJEVTYP)
                    ->where('jevd.FUND_SCODE','=',$request->FUND_SCODE)
                    ->whereBetween('jevh.FJEVDATE',[$request->from,$request->to])
                    ->groupBy(
                        'jevh.recid',
                        'jevd.FDEBIT',
                        'jevd.FUND_SCODE',
                        'jevd.FCREDIT',
                        'jevd.fiscalyear',
                        'jevh.FJEVNO',
                        'jevd.FACTCODE',
                        'jevh.FJEVTYP',
                        'jevh.FPAYEE',
                        'jevh.FJEVDATE',
                        'funds_details.FUNDDETAIL_NAME'
                    )->orderBy('jevh.FJEVNO');

        $this->temp = $details
        // ->where('jevh.FJEVTYP','=',$request->FJEVTYP)
        // ->where('jevd.FUND_SCODE','=',$request->FUND_SCODE)
        // ->whereBetween('jevh.FJEVDATE',[$request->from,$request->to])
        ->get()
        ->groupBy('recid')
        // ->sortBy('jevd.FJEVNO')
        ->map(fn($item) => [
                    'debit101'          => $item->sum('debit101'),
                    'credit080'         => $item->sum('credit080'),
                    'credit040'         => $item->sum('credit040'),
                    'credit050'         => $item->sum('credit050'),
                    'credit1040'        => $item->sum('credit1040'),
                    'credit2200'        => $item->sum('credit2200'),
                    'debit2010'         => $item->sum('debit2010'),
                    'debit201010'       => $item->sum('debit201010'),
                    'credit101010'      => $item->sum('credit101010'),
                    "recid"             => $item[0]->recid,
                    "FDEBIT"            => $item->sum('FDEBIT'),
                    "FUND_SCODE"        => $item[0]->FUND_SCODE,
                    "FCREDIT"           => $item->sum('FCREDIT'),
                    "fiscalyear"        => $item[0]->fiscalyear,
                    "FJEVNO"            => $item[0]->FJEVNO,
                    "FACTCODE"          => "",//$item[0]->FACTCODE,
                    "FJEVTYP"           => $item[0]->FJEVTYP,
                    "FPAYEE"            => $item[0]->FPAYEE,
                    "FJEVDATE"          => $item[0]->FJEVDATE,
                    "FUNDDETAIL_NAME"   => $item[0]->FUNDDETAIL_NAME,
                    'dateFrom'          => Carbon::parse($request->from)->format('F d, Y'),
                    'dateTo'            => Carbon::parse($request->to)->format('F d, Y')
                ])->values();
         
        $this->temp_index = 0;
        $this->FJEVDATE   = "";
        $this->FJEVNO     = "";

        $details = $details
                    ->where('jevd.FACTCODE','!=','40102080')
                    ->where('jevd.FACTCODE','!=','40102040')
                    ->where('jevd.FACTCODE','!=','40202050')
                    ->where('jevd.FACTCODE','!=','40201040')
                    ->where('jevd.FACTCODE','!=','40202200')
                    ->where('jevd.FACTCODE','!=','10101010')
                    ->where('jevd.FACTCODE','!=','10102010')
                    ->where('jevd.FACTCODE','!=','10201010')
                    ->where('jevh.FJEVTYP','=',$request->FJEVTYP)
                    ->where('jevd.FUND_SCODE','=',$request->FUND_SCODE)
                    ->whereBetween('jevh.FJEVDATE',[$request->from,$request->to])
                    ->get()
                    ->map(function($item,$index)
                    {

                        $debit101       = "";  
                        $credit080      = "";
                        $credit040      = "";
                        $credit050      = "";
                        $credit1040     = "";
                        $credit2200     = "";
                        $debit2010      = "";
                        $debit201010    = "";
                        $credit101010   = "";
                        $dateFrom       = "";
                        $dateTo         = "";
                        $finalFJEVDATE  = "";

                        foreach ($this->temp as $x)
                            { 
                            
                                if(    $x["FJEVNO"]         == $item->FJEVNO
                                    && $x["FJEVTYP"]        == $item->FJEVTYP 
                                    && $x["FUND_SCODE"]     == $item->FUND_SCODE)
                                {
                                    if($index > 0)
                                    {
                                        if($item->FJEVNO ==  $this->FJEVNO)
                                        {
                                            $debit101       = 0  ;  
                                            $credit080      = 0  ;
                                            $credit040      = 0  ;
                                            $credit050      = 0  ;
                                            $credit1040     = 0  ;
                                            $credit2200     = 0  ;
                                            $debit2010      = 0  ;
                                            $debit201010    = 0  ;
                                            $credit101010   = 0  ;
                                            $dateFrom       = $x["dateFrom"]    ;  
                                            $dateTo         = $x["dateTo"]      ;
                                            $finalFJEVDATE  = ""; 
                                        }
                                        else
                                        {
                                            $debit101       =   $x["debit101"]    ;  
                                            $credit080      =   $x["credit080"]   ;
                                            $credit040      =   $x["credit040"]   ;
                                            $credit050      =   $x["credit050"]   ;
                                            $credit1040     =   $x["credit1040"]  ;
                                            $credit2200     =   $x["credit2200"]  ;
                                            $debit2010      =   $x["debit2010"]   ;
                                            $debit201010    =   $x["debit201010"] ;
                                            $credit101010   =   $x["credit101010"];
                                            // $dateFrom       =   $x["dateFrom"]    ;  
                                            // $dateTo         =   $x["dateTo"]      ;
                                            $finalFJEVDATE  =   $x["FJEVDATE"]    ;
                                        }
                                      
                                    }
                                    else
                                    {
                                        $debit101       =   $x["debit101"]    ;  
                                        $credit080      =   $x["credit080"]   ;
                                        $credit040      =   $x["credit040"]   ;
                                        $credit050      =   $x["credit050"]   ;
                                        $credit1040     =   $x["credit1040"]  ;
                                        $credit2200     =   $x["credit2200"]  ;
                                        $debit2010      =   $x["debit2010"]   ;
                                        $debit201010    =   $x["debit201010"] ;
                                        $credit101010   =   $x["credit101010"];
                                        $dateFrom       =   $x["dateFrom"]    ;  
                                        $dateTo         =   $x["dateTo"]      ;
                                        $finalFJEVDATE  =   $x["FJEVDATE"]    ;  
                                    }
                                   
                                }
                            }

                            $this->FJEVNO = $item->FJEVNO;

                        return [
                            'debit101'          => $debit101    ,//GIKAN KA TEMP
                            'credit080'         => $credit080   ,//GIKAN KA TEMP
                            'credit040'         => $credit040   ,//GIKAN KA TEMP
                            'credit050'         => $credit050   ,//GIKAN KA TEMP
                            'credit1040'        => $credit1040  ,//GIKAN KA TEMP
                            'credit2200'        => $credit2200  ,//GIKAN KA TEMP
                            'debit2010'         => $debit2010   ,//GIKAN KA TEMP
                            'debit201010'       => $debit201010 ,//GIKAN KA TEMP
                            'credit101010'      => $credit101010,//GIKAN KA TEMP

                            "recid"             => $item->recid,
                            "FDEBIT"            => $item->FDEBIT,
                            "FUND_SCODE"        => $item->FUND_SCODE,
                            "FCREDIT"           => $item->FCREDIT,
                            "fiscalyear"        => $item->fiscalyear,
                            "FJEVNO"            => $item->FJEVNO,
                            "FACTCODE"          => $item->FACTCODE,
                            "FJEVTYP"           => $item->FJEVTYP,
                            "FPAYEE"            => $item->FPAYEE,
                            "FJEVDATE"          => $finalFJEVDATE,//$item->FJEVDATE,//
                            "FUNDDETAIL_NAME"   => $item->FUNDDETAIL_NAME,
                            'dateFrom'          => $dateFrom,//$item->$dateFrom, //GIKAN KA TEMP
                            'dateTo'            => $dateTo,//$item->$dateTo, //GIKAN KA TEMP
                        ];
                    });

            foreach ($this->temp as $x)
            { 
                $found = 0;
                foreach($details as $y)
                {
                    if(     $x["FJEVNO"]        ==  $y["FJEVNO"]    
                        &&  $x["FJEVTYP"]        == $y["FJEVTYP"]   
                        &&  $x["FUND_SCODE"]     == $y["FUND_SCODE"])
                    {
                        $found = 1;
                    }
                }

                if($found == 0)
                {
                    $details->add($x);
                }
            }
        return $details;   
    }
    public function jevdTypeSecondReport(Request $request)
    {
        $details = DB::table('jevd')
                        ->select(
                            'jevh.recid',
                            'jevd.FDEBIT',
                            'jevd.FUND_SCODE',
                            'jevd.FCREDIT',
                            'jevd.fiscalyear',
                            'jevd.FJEVNO',
                            'jevd.FACTCODE',
                            'jevh.FJEVTYP',
                            'jevh.FPAYEE',
                            'jevh.FJEVDATE',
                            'funds_details.FUNDDETAIL_NAME',
                            'chartofaccounts.FTITLE',
                        )

        ->leftJoin('jevh', function($query){
            $query->on('jevh.FUND_SCODE', '=', 'jevd.FUND_SCODE')
            ->on('jevh.FJEVNO', '=', 'jevd.FJEVNO')
            ->on('jevh.fiscalyear', '=', 'jevd.fiscalyear');                     
        })
        ->leftJoin('chartofaccounts', function ($query) {
            $query->on('chartofaccounts.FACTCODE', '=', 'jevd.FACTCODE')
                ->on('jevd.fiscalyear', '>=', 'chartofaccounts.fiscalyear')
                ->on('jevd.fiscalyear', '<=', 'chartofaccounts.fiscalyear_to');
        })

        ->leftJoin('funds_details', 'jevd.FUND_SCODE','=', 'funds_details.FUND_SCODE')
        ->where('jevh.FJEVTYP','=',$request->FJEVTYP)
        ->where('jevd.FUND_SCODE','=',$request->FUND_SCODE)
        ->whereBetween('jevh.FJEVDATE',[$request->from,$request->to])
        ->groupBy(
            'jevh.recid',
            'jevd.FDEBIT',
            'jevd.FUND_SCODE',
            'jevd.FCREDIT',
            'jevd.fiscalyear',
            'jevd.FJEVNO',
            'jevd.FACTCODE',
            'jevh.FJEVTYP',
            'jevh.FPAYEE',
            'jevh.FJEVDATE',
            'funds_details.FUNDDETAIL_NAME',
            'chartofaccounts.FTITLE'
        )
        ->orderBy('FJEVDATE')
        ->get();

        return $details->map(fn($item) => [
            "recid" => $item->recid,
            "FDEBIT" => $item->FDEBIT,
            "FUND_SCODE" => $item->FUND_SCODE,
            "FCREDIT" => $item->FCREDIT,
            "fiscalyear" => $item->fiscalyear,
            "FJEVNO" => $item->FJEVNO,
            "FACTCODE" => $item->FACTCODE,
            "FJEVTYP" => $item->FJEVTYP,
            "FPAYEE" => $item->FPAYEE,
            "FJEVDATE" => $item->FJEVDATE,
            "FUNDDETAIL_NAME" => $item->FUNDDETAIL_NAME,
            "FTITLE" => $item->FTITLE,
            'date' => Carbon::parse($item->FJEVDATE)->format('F Y'),
        ]);
    }
}
