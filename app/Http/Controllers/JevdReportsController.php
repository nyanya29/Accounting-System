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
                        'jevh.fjevtyp',
                        'jevh.fprepby',
                        'jevh.fprepd',
                        'jevh.fappvby',
                        'jevh.fappvd',
                        'jevh.fjevdate',
                        'jevh.fchkno',
                        DB::raw('FORMAT(jevd.FCREDIT, 2) as jevdCredit, FORMAT(jevd.FDEBIT, 2) as jevdDebit'),
                    )
                    ->leftjoin('jevh', function ($query){
                        $query->on('jevh.fund_scode', '=', 'jevd.FUND_SCODE')
                            ->on('jevd.FJEVNO', '=', 'jevh.fjevno');
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
                    ->groupBy('recid')
                    // ->groupBy('jevh.recid')
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
                        'jevh.fjevno',
                        'jevd.FACTCODE',
                        'jevh.fjevtyp',
                        'jevh.fpayee',
                        'jevh.fjevdate',
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
                        $query->on('jevh.fund_scode', '=', 'jevd.FUND_SCODE')
                        ->on('jevh.fjevno', '=', 'jevd.FJEVNO')
                        ->on('jevh.fiscalyear', '=', 'jevd.fiscalyear');                     
                    })

                    ->leftJoin('funds_details', 'jevd.FUND_SCODE','=', 'funds_details.FUND_SCODE')
                    ->where('jevh.fjevtyp','=',$request->FJEVTYP)
                    ->where('jevd.FUND_SCODE','=',$request->FUND_SCODE)
                    ->whereBetween('jevh.fjevdate',[$request->from,$request->to])
                    ->groupBy(
                        'jevh.recid',
                        'jevd.FDEBIT',
                        'jevd.FUND_SCODE',
                        'jevd.FCREDIT',
                        'jevd.fiscalyear',
                        'jevh.fjevno',
                        'jevd.FACTCODE',
                        'jevh.fjevtyp',
                        'jevh.fpayee',
                        'jevh.fjevdate',
                        'funds_details.FUNDDETAIL_NAME'
                    )->orderBy('jevh.fjevno');

                    // dd($details->get());
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
                    "FJEVNO"            => $item[0]->fjevno,
                    "FACTCODE"          => "",//$item[0]->FACTCODE,
                    "FJEVTYP"           => $item[0]->fjevtyp,
                    "FPAYEE"            => $item[0]->fpayee,
                    "FJEVDATE"          => $item[0]->fjevdate,
                    "FUNDDETAIL_NAME"   => $item[0]->FUNDDETAIL_NAME,
                    'dateFrom'          => Carbon::parse($request->from)->format('F d, Y'),
                    'dateTo'            => Carbon::parse($request->to)->format('F d, Y')
                ])->values();
        //  dd($this->temp);
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
                    ->where('jevh.fjevtyp','=',$request->FJEVTYP)
                    ->where('jevd.FUND_SCODE','=',$request->FUND_SCODE)
                    ->whereBetween('jevh.fjevdate',[$request->from,$request->to])
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
                            
                                if(    $x["FJEVNO"]         == $item->fjevno
                                    && $x["FJEVTYP"]        == $item->fjevtyp 
                                    && $x["FUND_SCODE"]     == $item->FUND_SCODE)
                                {
                                    if($index > 0)
                                    {
                                        if($item->fjevno ==  $this->FJEVNO)
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

                            $this->FJEVNO = $item->fjevno;

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
                            "FJEVNO"            => $item->fjevno,
                            "FACTCODE"          => $item->FACTCODE,
                            "FJEVTYP"           => $item->fjevtyp,
                            "FPAYEE"            => $item->fpayee,
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
                            'jevd.FACTCODE',
                            'funds_details.FUNDDETAIL_NAME',
                            'jevh.fjevtyp',
                            'chartofaccounts.FTITLE',
                            DB::raw('SUM(jevd.FDEBIT) as FDEBIT'),
                            DB::raw('SUM(jevd.FCREDIT) as FCREDIT'),
                            DB::raw("DATE_FORMAT('$request->from', '%M %e, %Y') as date_from"),
                            DB::raw("DATE_FORMAT('$request->to', '%M %e, %Y') as date_to")
                            )
                            ->leftJoin('jevh', function($query){
                                $query->on('jevh.fund_scode', '=', 'jevd.FUND_SCODE')
                                ->on('jevh.fjevno', '=', 'jevd.FJEVNO')
                                ->on('jevh.fiscalyear', '=', 'jevd.fiscalyear');                  
                            })
                            ->leftJoin('chartofaccounts', function ($query) {
                                $query->on('chartofaccounts.FACTCODE', '=', 'jevd.FACTCODE')
                                    ->on('jevd.fiscalyear', '>=', 'chartofaccounts.fiscalyear')
                                    ->on('jevd.fiscalyear', '<=', 'chartofaccounts.fiscalyear_to');
                            })
                            ->leftJoin('funds_details', 'jevd.FUND_SCODE', 'funds_details.FUND_SCODE')
                            ->where('jevh.fjevtyp','=',$request->FJEVTYP)
                            ->where('jevd.FUND_SCODE','=',$request->FUND_SCODE)
                            ->whereBetween('jevh.fjevdate',[$request->from,$request->to])
                            ->where('jevd.fiscalyear','=','2022')
                            ->groupBy('jevd.FACTCODE')
                            ->orderBy('jevd.FACTCODE')
                            ->get();

        return $details;
    }
    public function checkDisbursementJournal(Request $request)
    {
        // dd(getChartAccount());
        $details = DB::table('jevd')
                        ->select(
                            'jevh.recid',
                            'jevh.fchkno',
                            // 'jevd.FDEBIT',
                            'jevd.FUND_SCODE',
                            'jevd.FALOBNO',
                            'jevd.FVOUCHNO',
                            DB::raw('SUM(CASE WHEN jevd.FACTCODE NOT IN (
                                10102010,
                                10305020,
                                10305040,
                                20101010,
                                50203090,
                                50213060,
                                10305030
                            ) THEN jevd.FDEBIT else null END) as FDEBIT'),
                            DB::raw('SUM(CASE WHEN jevd.FACTCODE NOT IN (
                                10102010,
                                10305020,
                                10305040,
                                20101010,
                                50203090,
                                50213060,
                                10305030
                            ) THEN jevd.FCREDIT else null END) as FCREDIT'),
                            'jevd.fiscalyear',
                            'jevh.fjevno',
                            'jevd.FACTCODE',
                            'jevh.fjevtyp',
                            'jevh.fpayee',
                            'jevh.fjevdate',
                            'funds_details.FUNDDETAIL_NAME',
                            DB::raw('SUM(CASE WHEN jevd.FACTCODE=10102010 THEN jevd.FCREDIT else null END) as credit10102010'),
                            DB::raw('SUM(CASE WHEN jevd.FACTCODE=10305020 THEN jevd.FDEBIT else null END) as debit10305020'),
                            DB::raw('SUM(CASE WHEN jevd.FACTCODE=10305040 THEN jevd.FDEBIT else null END) as debit10305040'),
                            DB::raw('SUM(CASE WHEN jevd.FACTCODE=20101010 THEN jevd.FDEBIT else null END) as debit20101010'),
                            DB::raw('SUM(CASE WHEN jevd.FACTCODE=50203090 THEN jevd.FDEBIT else null END) as debit50203090'),
                            DB::raw('SUM(CASE WHEN jevd.FACTCODE=50213060 THEN jevd.FDEBIT else null END) as debit50213060'),
                            DB::raw('SUM(CASE WHEN jevd.FACTCODE=10305030 THEN jevd.FDEBIT else null END) as debit10305030'),
                        )

                        ->leftJoin('jevh', function($query){
                            $query->on('jevh.fund_scode', '=', 'jevd.FUND_SCODE')
                            ->on('jevh.fjevno', '=', 'jevd.FJEVNO')
                            ->on('jevh.fiscalyear', '=', 'jevd.fiscalyear');                     
                        })

                        ->leftJoin('funds_details', 'jevd.FUND_SCODE','=', 'funds_details.FUND_SCODE')
                        ->where('jevh.fjevtyp','=',$request->FJEVTYP)
                        ->where('jevd.FUND_SCODE','=',$request->FUND_SCODE)
                        ->whereBetween('jevh.fjevdate',[$request->from,$request->to])
                        ->groupBy('jevd.FJEVNO','jevd.FACTCODE')
                        ->orderBy('jevh.fjevno')
                        ->orderBy('jevd.FACTCODE');

                        $this->temp = $details
                            ->get()
                            ->groupBy('recid')
                            ->map(fn($item) => [
                                'credit10102010'    => $item->sum('credit10102010'),
                                'debit10305020'     => $item->sum('debit10305020'),
                                'debit10305040'     => $item->sum('debit10305040'),
                                'debit20101010'     => $item->sum('debit20101010'),
                                'debit50203090'     => $item->sum('debit50203090'),
                                'debit50213060'     => $item->sum('debit50213060'),
                                'debit10305030'     => $item->sum('debit10305030'),
                                "recid"             => $item[0]->recid,
                                "FDEBIT"            => $item->sum('FDEBIT'),
                                "fchkno"            => $item[0]->fchkno,
                                "FUND_SCODE"        => $item[0]->FUND_SCODE,
                                "FALOBNO"           => $item[0]->FALOBNO,
                                "FVOUCHNO"           => $item[0]->FVOUCHNO,
                                "FCREDIT"           => $item->sum('FCREDIT'),
                                "fiscalyear"        => $item[0]->fiscalyear,
                                "FJEVNO"            => $item[0]->fjevno,
                                "FACTCODE"          => "",//$item[0]->FACTCODE,
                                "FJEVTYP"           => $item[0]->fjevtyp,
                                "FPAYEE"            => $item[0]->fpayee,
                                "FJEVDATE"          => $item[0]->fjevdate,
                                "FUNDDETAIL_NAME"   => $item[0]->FUNDDETAIL_NAME,
                                'dateFrom'          => Carbon::parse($request->from)->format('F d, Y'),
                                'dateTo'            => Carbon::parse($request->to)->format('F d, Y')
                            ])->values();
                            //   dd($this->temp);
                            $this->temp_index = 0;
                            $this->FJEVDATE   = "";
                            $this->FJEVNO     = "";
                
                        $details = $details
                            ->where('jevd.FACTCODE','!=','10102010')
                            ->where('jevd.FACTCODE','!=','10305020')
                            ->where('jevd.FACTCODE','!=','10305040')
                            ->where('jevd.FACTCODE','!=','20101010')
                            ->where('jevd.FACTCODE','!=','50203090')
                            ->where('jevd.FACTCODE','!=','50213060')
                            ->where('jevd.FACTCODE','!=','10305030')
                            ->where('jevh.fjevtyp','=',$request->FJEVTYP)
                            ->where('jevd.FUND_SCODE','=',$request->FUND_SCODE)
                            ->whereBetween('jevh.fjevdate',[$request->from,$request->to])
                            ->get()
                            ->map(function($item,$index)
                            {

                                $credit10102010 = "";  
                                $debit10305020  = "";
                                $debit10305040  = "";
                                $debit20101010  = "";
                                $debit50203090  = "";
                                $debit50213060  = "";
                                $debit10305030  = "";
                                $dateFrom       = "";
                                $dateTo         = "";
                                $finalFJEVDATE  = "";

                            foreach ($this->temp as $x)
                                { 
                                
                                    if(    $x["FJEVNO"]         == $item->fjevno
                                        && $x["FJEVTYP"]        == $item->fjevtyp 
                                        && $x["FUND_SCODE"]     == $item->FUND_SCODE)
                                    {
                                        if($index > 0)
                                        {
                                            if($item->fjevno ==  $this->FJEVNO)
                                            {
                                                $credit10102010 = 0  ;  
                                                $debit10305020  = 0  ;
                                                $debit10305040  = 0  ;
                                                $debit20101010  = 0  ;
                                                $debit50203090  = 0  ;
                                                $debit50213060  = 0  ;
                                                $debit10305030  = 0  ;
                                                $dateFrom       = $x["dateFrom"]    ;  
                                                $dateTo         = $x["dateTo"]      ;
                                                $finalFJEVDATE  = ""; 
                                            }
                                            else
                                            {
                                                $credit10102010    =   $x["credit10102010"]    ;  
                                                $debit10305020     =   $x["debit10305020"]   ;
                                                $debit10305040     =   $x["debit10305040"]   ;
                                                $debit20101010     =   $x["debit20101010"]   ;
                                                $debit50203090     =   $x["debit50203090"]  ;
                                                $debit50213060     =   $x["debit50213060"]  ;
                                                $debit10305030     =   $x["debit10305030"]   ;
                                                // $dateFrom       =   $x["dateFrom"]    ;  
                                                // $dateTo         =   $x["dateTo"]      ;
                                                $finalFJEVDATE  =   $x["FJEVDATE"]    ;
                                            }
                                        
                                        }
                                        else
                                        {
                                            $credit10102010 =   $x["credit10102010"]  ;  
                                            $debit10305020  =   $x["debit10305020"]   ;
                                            $debit10305040  =   $x["debit10305040"]   ;
                                            $debit20101010  =   $x["debit20101010"]   ;
                                            $debit50203090  =   $x["debit50203090"]   ;
                                            $debit50213060  =   $x["debit50213060"]   ;
                                            $debit10305030  =   $x["debit10305030"]   ;
                                            $dateFrom       =   $x["dateFrom"]    ;  
                                            $dateTo         =   $x["dateTo"]      ;
                                            $finalFJEVDATE  =   $x["FJEVDATE"]    ;  
                                        }
                                    
                                    }
                                }

                                $this->FJEVNO = $item->fjevno;

                            return [
                                'credit10102010'       => $credit10102010  ,//GIKAN KA TEMP
                                'debit10305020'        => $debit10305020   ,//GIKAN KA TEMP
                                'debit10305040'        => $debit10305040   ,//GIKAN KA TEMP
                                'debit20101010'        => $debit20101010   ,//GIKAN KA TEMP
                                'debit50203090'        => $debit50203090   ,//GIKAN KA TEMP
                                'debit50213060'        => $debit50213060   ,//GIKAN KA TEMP
                                'debit10305030'        => $debit10305030   ,//GIKAN KA TEMP

                                "recid"             => $item->recid,
                                "FDEBIT"            => $item->FDEBIT,
                                "FUND_SCODE"        => $item->FUND_SCODE,
                                "FALOBNO"           => $item->FALOBNO,
                                "FCREDIT"           => $item->FCREDIT,
                                "fiscalyear"        => $item->fiscalyear,
                                "FJEVNO"            => $item->fjevno,
                                "fchkno"            => $item->fchkno,
                                "FVOUCHNO"          => $item->FVOUCHNO,
                                "FACTCODE"          => $item->FACTCODE,
                                "FJEVTYP"           => $item->fjevtyp,
                                "FPAYEE"            => $item->fpayee,
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
    public function cashDisbursementJournal(Request $request)
    {
        $details = DB::table('jevd')
                        ->select(
                            'jevh.recid',
                            'jevh.frefno',
                            'jevd.FUND_SCODE',
                            'jevd.FALOBNO',
                            'jevd.FVOUCHNO',
                            'jevd.FPRNO',
                            'jevd.FDEBIT',
                            'jevd.FCREDIT',
                            // DB::raw('SUM(CASE WHEN jevd.FACTCODE NOT IN (
                            //     10305040,
                            //     10305030,
                            //     50201010,
                            //     50212990,
                            //     50299080,
                            //     50203070,
                            //     50213030
                            // ) THEN jevd.FDEBIT else null END) as FDEBIT'),
                            // DB::raw('SUM(CASE WHEN jevd.FACTCODE NOT IN (
                            //     10305040,
                            //     10305030,
                            //     50201010,
                            //     50212990,
                            //     50299080,
                            //     50203070,
                            //     50213030
                            // ) THEN jevd.FCREDIT else null END) as FCREDIT'),
                            'jevd.fiscalyear',
                            'jevh.fjevno',
                            'jevd.FACTCODE',
                            'jevh.fjevtyp',
                            'jevh.fpayee',
                            'jevh.fjevdate',
                            'funds_details.FUNDDETAIL_NAME',
                            DB::raw('SUM(CASE WHEN jevd.FACTCODE=10305040 THEN jevd.FCREDIT else null END) as credit10305040'),
                            DB::raw('SUM(CASE WHEN jevd.FACTCODE=10305030 THEN jevd.FCREDIT else null END) as credit10305030'),
                            DB::raw('SUM(CASE WHEN jevd.FACTCODE=50201010 THEN jevd.FDEBIT else null END) as debit50201010'),
                            DB::raw('SUM(CASE WHEN jevd.FACTCODE=50212990 THEN jevd.FDEBIT else null END) as debit50212990'),
                            DB::raw('SUM(CASE WHEN jevd.FACTCODE=50299080 THEN jevd.FDEBIT else null END) as debit50299080'),
                            DB::raw('SUM(CASE WHEN jevd.FACTCODE=50203070 THEN jevd.FDEBIT else null END) as debit50203070'),
                            DB::raw('SUM(CASE WHEN jevd.FACTCODE=50213030 THEN jevd.FDEBIT else null END) as debit50213030'),
                        )

                        ->leftJoin('jevh', function($query){
                            $query->on('jevh.fund_scode', '=', 'jevd.FUND_SCODE')
                            ->on('jevh.fjevno', '=', 'jevd.FJEVNO')
                            ->on('jevh.fiscalyear', '=', 'jevd.fiscalyear');                     
                        })

                        ->leftJoin('funds_details', 'jevd.FUND_SCODE','=', 'funds_details.FUND_SCODE')
                        ->where('jevh.fjevtyp','=',$request->FJEVTYP)
                        ->where('jevd.FUND_SCODE','=',$request->FUND_SCODE)
                        ->whereBetween('jevh.fjevdate',[$request->from,$request->to])
                        ->groupBy('jevd.FJEVNO','jevd.FACTCODE')
                        ->orderBy('jevh.fjevno')
                        ->orderBy('jevd.FACTCODE');

                        $this->temp = $details
                            ->get()
                            ->groupBy('recid')
                            ->map(fn($item) => [
                                'credit10305040'    => $item->sum('credit10305040'),
                                'credit10305030'    => $item->sum('credit10305030'),
                                'debit50201010'     => $item->sum('debit50201010'),
                                'debit50212990'     => $item->sum('debit50212990'),
                                'debit50299080'     => $item->sum('debit50299080'),
                                'debit50203070'     => $item->sum('debit50203070'),
                                'debit50213030'     => $item->sum('debit50213030'),
                                "recid"             => $item[0]->recid,
                                "FDEBIT"            => $item->sum('FDEBIT'),
                                "frefno"            => $item[0]->frefno,
                                "FPRNO"             => $item[0]->FPRNO,
                                "FUND_SCODE"        => $item[0]->FUND_SCODE,
                                "FALOBNO"           => $item[0]->FALOBNO,
                                "FVOUCHNO"           => $item[0]->FVOUCHNO,
                                "FCREDIT"           => $item->sum('FCREDIT'),
                                "fiscalyear"        => $item[0]->fiscalyear,
                                "FJEVNO"            => $item[0]->fjevno,
                                "FACTCODE"          => "",//$item[0]->FACTCODE,
                                "FJEVTYP"           => $item[0]->fjevtyp,
                                "FPAYEE"            => $item[0]->fpayee,
                                "FJEVDATE"          => $item[0]->fjevdate,
                                "FUNDDETAIL_NAME"   => $item[0]->FUNDDETAIL_NAME,
                                'dateFrom'          => Carbon::parse($request->from)->format('F d, Y'),
                                'dateTo'            => Carbon::parse($request->to)->format('F d, Y')
                            ])->values();
                            //   dd($this->temp);
                            $this->temp_index = 0;
                            $this->FJEVDATE   = "";
                            $this->FJEVNO     = "";
                
                        $details = $details
                            ->where('jevd.FACTCODE','!=','10305040')
                            ->where('jevd.FACTCODE','!=','10305030')
                            ->where('jevd.FACTCODE','!=','50201010')
                            ->where('jevd.FACTCODE','!=','50212990')
                            ->where('jevd.FACTCODE','!=','50299080')
                            ->where('jevd.FACTCODE','!=','50203070')
                            ->where('jevd.FACTCODE','!=','50213030')
                            ->where('jevh.fjevtyp','=',$request->FJEVTYP)
                            ->where('jevd.FUND_SCODE','=',$request->FUND_SCODE)
                            ->whereBetween('jevh.fjevdate',[$request->from,$request->to])
                            ->get()
                            ->map(function($item,$index)
                            {

                                $credit10305040 = "";  
                                $credit10305030  = "";
                                $debit50201010  = "";
                                $debit50212990  = "";
                                $debit50299080  = "";
                                $debit50203070  = "";
                                $debit50213030  = "";
                                $dateFrom       = "";
                                $dateTo         = "";
                                $finalFJEVDATE  = "";

                            foreach ($this->temp as $x)
                                { 
                                
                                    if(    $x["FJEVNO"]         == $item->fjevno
                                        && $x["FJEVTYP"]        == $item->fjevtyp 
                                        && $x["FUND_SCODE"]     == $item->FUND_SCODE)
                                    {
                                        if($index > 0)
                                        {
                                            if($item->fjevno ==  $this->FJEVNO)
                                            {
                                                $credit10305040  = 0  ;  
                                                $credit10305030  = 0  ;
                                                $debit50201010   = 0  ;
                                                $debit50212990   = 0  ;
                                                $debit50299080   = 0  ;
                                                $debit50203070   = 0  ;
                                                $debit50213030   = 0  ;
                                                $dateFrom       = $x["dateFrom"]    ;  
                                                $dateTo         = $x["dateTo"]      ;
                                                $finalFJEVDATE  = ""; 
                                            }
                                            else
                                            {
                                                $credit10305040    =   $x["credit10305040"]    ;  
                                                $credit10305030    =   $x["credit10305030"]   ;
                                                $debit50201010     =   $x["debit50201010"]   ;
                                                $debit50212990     =   $x["debit50212990"]   ;
                                                $debit50299080     =   $x["debit50299080"]  ;
                                                $debit50203070     =   $x["debit50203070"]  ;
                                                $debit50213030     =   $x["debit50213030"]   ;
                                                // $dateFrom       =   $x["dateFrom"]    ;  
                                                // $dateTo         =   $x["dateTo"]      ;
                                                $finalFJEVDATE  =   $x["FJEVDATE"]    ;
                                            }
                                        
                                        }
                                        else
                                        {
                                            $credit10305040 =   $x["credit10305040"]  ;  
                                            $credit10305030 =   $x["credit10305030"]  ;
                                            $debit50201010  =   $x["debit50201010"]  ;
                                            $debit50212990  =   $x["debit50212990"]  ;
                                            $debit50299080  =   $x["debit50299080"]  ;
                                            $debit50203070  =   $x["debit50203070"]  ;
                                            $debit50213030  =   $x["debit50213030"]  ;
                                            $dateFrom       =   $x["dateFrom"]    ;  
                                            $dateTo         =   $x["dateTo"]      ;
                                            $finalFJEVDATE  =   $x["FJEVDATE"]    ;  
                                        }
                                    
                                    }
                                }

                                $this->FJEVNO = $item->fjevno;

                            return [
                                'credit10305040'       => $credit10305040  ,//GIKAN KA TEMP
                                'credit10305030'       => $credit10305030  ,//GIKAN KA TEMP
                                'debit50201010 '       => $debit50201010   ,//GIKAN KA TEMP
                                'debit50212990 '       => $debit50212990   ,//GIKAN KA TEMP
                                'debit50299080 '       => $debit50299080   ,//GIKAN KA TEMP
                                'debit50203070 '       => $debit50203070   ,//GIKAN KA TEMP
                                'debit50213030 '       => $debit50213030   ,//GIKAN KA TEMP

                                "recid"             => $item->recid,
                                "FDEBIT"            => $item->FDEBIT,
                                "FUND_SCODE"        => $item->FUND_SCODE,
                                "FALOBNO"           => $item->FALOBNO,
                                "FCREDIT"           => $item->FCREDIT,
                                "fiscalyear"        => $item->fiscalyear,
                                "FJEVNO"            => $item->fjevno,
                                "frefno"            => $item->frefno,
                                "FPRNO"             => $item->FPRNO,
                                "FVOUCHNO"          => $item->FVOUCHNO,
                                "FACTCODE"          => $item->FACTCODE,
                                "FJEVTYP"           => $item->fjevtyp,
                                "FPAYEE"            => $item->fpayee,
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

    public function procurementJournal(Request $request) 
    {
        $details = DB::table('jevd')
                        ->select(
                            'jevd.FACTCODE',
                            'funds_details.FUNDDETAIL_NAME',
                            'jevh.fjevtyp',
                            'chartofaccounts.FTITLE',
                            'jevh.fremk',
                            'jevd.FPRNO',
                            'jevh.fjevdate',
                            'jevh.fjevno',
                            'jevd.FDEBIT',
                            'jevd.FCREDIT',
                            // DB::raw('SUM(jevd.FDEBIT) as FDEBIT'),
                            // DB::raw('SUM(jevd.FCREDIT) as FCREDIT'),
                            DB::raw("DATE_FORMAT('$request->from', '%M %e, %Y') as date_from"),
                            DB::raw("DATE_FORMAT('$request->to', '%M %e, %Y') as date_to")
                            )
                            ->leftJoin('jevh', function($query){
                                $query->on('jevh.fund_scode', '=', 'jevd.FUND_SCODE')
                                ->on('jevh.fjevno', '=', 'jevd.FJEVNO')
                                ->on('jevh.fiscalyear', '=', 'jevd.fiscalyear');                  
                            })
                            ->leftJoin('chartofaccounts', function ($query) {
                                $query->on('chartofaccounts.FACTCODE', '=', 'jevd.FACTCODE')
                                    ->on('jevd.fiscalyear', '>=', 'chartofaccounts.fiscalyear')
                                    ->on('jevd.fiscalyear', '<=', 'chartofaccounts.fiscalyear_to');
                            })
                            ->leftJoin('funds_details', 'jevd.FUND_SCODE', 'funds_details.FUND_SCODE')
                            ->where('jevh.fjevtyp','=',$request->FJEVTYP)
                            ->where('jevd.FUND_SCODE','=',$request->FUND_SCODE)
                            ->whereBetween('jevh.fjevdate',[$request->from,$request->to])
                            ->where('jevd.fiscalyear','=','2022')
                            ->groupBy('jevh.fjevno')
                            ->groupBy('jevd.FACTCODE')
                            ->orderBy('jevh.fjevno')
                            ->get();

        return $details;
    }
    public function generalJournal(Request $request)
    {
        // return generalJournalReport($request);
        $details = DB::table('jevd')
                        ->select(
                            'jevd.FACTCODE',
                            'funds_details.FUNDDETAIL_NAME',
                            'jevh.fjevtyp',
                            'chartofaccounts.FTITLE',
                            'jevh.fremk',
                            'jevd.FPRNO',
                            'jevh.fjevdate',
                            'jevh.fjevno',
                            'jevd.FDEBIT',
                            'jevd.FCREDIT',
                            DB::raw("DATE_FORMAT('$request->from', '%M %e, %Y') as date_from"),
                            DB::raw("DATE_FORMAT('$request->to', '%M %e, %Y') as date_to")
                            )
                            ->leftJoin('jevh', function($query){
                                $query->on('jevh.fund_scode', '=', 'jevd.FUND_SCODE')
                                ->on('jevh.fjevno', '=', 'jevd.FJEVNO')
                                ->on('jevh.fiscalyear', '=', 'jevd.fiscalyear');                  
                            })
                            ->leftJoin('chartofaccounts', function ($query) {
                                $query->on('chartofaccounts.FACTCODE', '=', 'jevd.FACTCODE')
                                    ->on('jevd.fiscalyear', '>=', 'chartofaccounts.fiscalyear')
                                    ->on('jevd.fiscalyear', '<=', 'chartofaccounts.fiscalyear_to');
                            })
                            ->leftJoin('funds_details', 'jevd.FUND_SCODE', 'funds_details.FUND_SCODE')
                            ->where('jevh.fjevtyp','=',$request->FJEVTYP)
                            ->where('jevd.FUND_SCODE','=',$request->FUND_SCODE)
                            ->whereBetween('jevh.fjevdate',[$request->from,$request->to])
                            ->where('jevd.fiscalyear','=','2022')
                            ->groupBy('jevh.fjevno')
                            ->orderBy('jevh.fjevno')
                            ->get();

        return $details;
    }
}
