<?php

use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

if (!function_exists('getSubCode1')) {
    function getSubCode1($request) {
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
                   'id'         =>  $item->FSUBCDE,
                   'text'       =>  "$item->FSUBCDE ----- $item->FSTITLE",
                   'fs_title'    =>  $item->FSTITLE
                ]);
    }
}
if (!function_exists('getChartAccount')) {
    function getChartAccount() {
        return DB::table('chartofaccounts')
                ->select(DB::raw('TRIM(FACTCODE) as FACTCODE'), 'FTITLE')
                ->get()
                ->map(fn($item) => [
                    'id'    =>  $item->FACTCODE,
                    // 'text'  =>  "$item->FTITLE",
                    'text' =>  "$item->FACTCODE ----- $item->FTITLE",
                    'jtitle' => $item->FTITLE
                ]);
    }
}
// if (!function_exists('checkDisbursementJournal')) {
//     function checkDisbursementJournal($request) {
//         $details = DB::table('jevd')
//                         ->select(
//                             // 'jevh.*',
//                             'jevh.recid',
//                             'jevh.fchkno',
//                             'jevd.FDEBIT',
//                             'jevd.FUND_SCODE',
//                             'jevd.FALOBNO',
//                             'jevd.FVOUCHNO',
//                             //'jevd.FCREDIT',
//                             DB::raw('SUM(CASE WHEN jevd.FACTCODE NOT IN (
//                                     10102010
//                                 ,10305020
//                                 ,10305040
//                                 ,20101010
//                                 ,50203090
//                                 ,50213060
//                                 ,10305030
//                             ) THEN jevd.FCREDIT else null END) as FCREDIT'),
//                             'jevd.fiscalyear',
//                             'jevh.fjevno',
//                             'jevd.FACTCODE',
//                             'jevh.fjevtyp',
//                             'jevh.fpayee',
//                             'jevh.fjevdate',
//                             'funds_details.FUNDDETAIL_NAME',
//                             // DB::raw('SUM(jevd.FDEBIT) as FDEBIT'),
//                             // DB::raw('SUM(jevd.FCREDIT) as FCREDIT'),
//                             DB::raw('SUM(CASE WHEN jevd.FACTCODE=10102010 THEN jevd.FCREDIT else null END) as credit10102010'),
//                             DB::raw('SUM(CASE WHEN jevd.FACTCODE=10305020 THEN jevd.FDEBIT else null END) as debit10305020'),
//                             DB::raw('SUM(CASE WHEN jevd.FACTCODE=10305040 THEN jevd.FDEBIT else null END) as debit10305040'),
//                             DB::raw('SUM(CASE WHEN jevd.FACTCODE=20101010 THEN jevd.FDEBIT else null END) as debit20101010'),
//                             DB::raw('SUM(CASE WHEN jevd.FACTCODE=50203090 THEN jevd.FDEBIT else null END) as debit50203090'),
//                             DB::raw('SUM(CASE WHEN jevd.FACTCODE=50213060 THEN jevd.FDEBIT else null END) as debit50213060'),
//                             DB::raw('SUM(CASE WHEN jevd.FACTCODE=10305030 THEN jevd.FDEBIT else null END) as debit10305030'),
//                         )

//                         ->leftJoin('jevh', function($query){
//                             $query->on('jevh.fund_scode', '=', 'jevd.FUND_SCODE')
//                             ->on('jevh.fjevno', '=', 'jevd.FJEVNO')
//                             ->on('jevh.fiscalyear', '=', 'jevd.fiscalyear');                     
//                         })

//                         ->leftJoin('funds_details', 'jevd.FUND_SCODE','=', 'funds_details.FUND_SCODE')
//                         ->where('jevh.fjevtyp','=',$request->FJEVTYP)
//                         ->where('jevd.FUND_SCODE','=',$request->FUND_SCODE)
//                         ->whereBetween('jevh.fjevdate',[$request->from,$request->to])
//                         ->groupBy('jevd.FJEVNO','jevd.FACTCODE')
//                         ->orderBy('jevh.fjevno')
//                         ->orderBy('jevd.FACTCODE');

//                         $this->temp = $details
//                             ->get()
//                             ->groupBy('recid')
//                             ->map(fn($item) => [
//                                 'credit10102010'    => $item->sum('credit10102010'),
//                                 'debit10305020'     => $item->sum('debit10305020'),
//                                 'debit10305040'     => $item->sum('debit10305040'),
//                                 'debit20101010'     => $item->sum('debit20101010'),
//                                 'debit50203090'     => $item->sum('debit50203090'),
//                                 'debit50213060'     => $item->sum('debit50213060'),
//                                 'debit10305030'     => $item->sum('debit10305030'),
//                                 "recid"             => $item[0]->recid,
//                                 "FDEBIT"            => $item->sum('FDEBIT'),
//                                 "fchkno"            => $item[0]->fchkno,
//                                 "FUND_SCODE"        => $item[0]->FUND_SCODE,
//                                 "FALOBNO"           => $item[0]->FALOBNO,
//                                 "FVOUCHNO"           => $item[0]->FVOUCHNO,
//                                 "FCREDIT"           => $item->sum('FCREDIT'),
//                                 "fiscalyear"        => $item[0]->fiscalyear,
//                                 "FJEVNO"            => $item[0]->fjevno,
//                                 "FACTCODE"          => "",//$item[0]->FACTCODE,
//                                 "FJEVTYP"           => $item[0]->fjevtyp,
//                                 "FPAYEE"            => $item[0]->fpayee,
//                                 "FJEVDATE"          => $item[0]->fjevdate,
//                                 "FUNDDETAIL_NAME"   => $item[0]->FUNDDETAIL_NAME,
//                                 'dateFrom'          => Carbon::parse($request->from)->format('F d, Y'),
//                                 'dateTo'            => Carbon::parse($request->to)->format('F d, Y')
//                             ])->values();
//                             //   dd($this->temp);
//                             $this->temp_index = 0;
//                             $this->FJEVDATE   = "";
//                             $this->FJEVNO     = "";
                
//                         $details = $details
//                             ->where('jevd.FACTCODE','!=','10102010')
//                             ->where('jevd.FACTCODE','!=','10305020')
//                             ->where('jevd.FACTCODE','!=','10305040')
//                             ->where('jevd.FACTCODE','!=','20101010')
//                             ->where('jevd.FACTCODE','!=','50203090')
//                             ->where('jevd.FACTCODE','!=','50213060')
//                             ->where('jevd.FACTCODE','!=','10305030')
//                             ->where('jevh.fjevtyp','=',$request->FJEVTYP)
//                             ->where('jevd.FUND_SCODE','=',$request->FUND_SCODE)
//                             ->whereBetween('jevh.fjevdate',[$request->from,$request->to])
//                             ->get()
//                             ->map(function($item,$index)
//                             {

//                                 $credit10102010 = "";  
//                                 $debit10305020  = "";
//                                 $debit10305040  = "";
//                                 $debit20101010  = "";
//                                 $debit50203090  = "";
//                                 $debit50213060  = "";
//                                 $debit10305030  = "";
//                                 $dateFrom       = "";
//                                 $dateTo         = "";
//                                 $finalFJEVDATE  = "";

//                             foreach ($this->temp as $x)
//                                 { 
                                
//                                     if(    $x["FJEVNO"]         == $item->fjevno
//                                         && $x["FJEVTYP"]        == $item->fjevtyp 
//                                         && $x["FUND_SCODE"]     == $item->FUND_SCODE)
//                                     {
//                                         if($index > 0)
//                                         {
//                                             if($item->fjevno ==  $this->FJEVNO)
//                                             {
//                                                 $credit10102010 = 0  ;  
//                                                 $debit10305020  = 0  ;
//                                                 $debit10305040  = 0  ;
//                                                 $debit20101010  = 0  ;
//                                                 $debit50203090  = 0  ;
//                                                 $debit50213060  = 0  ;
//                                                 $debit10305030  = 0  ;
//                                                 $dateFrom       = $x["dateFrom"]    ;  
//                                                 $dateTo         = $x["dateTo"]      ;
//                                                 $finalFJEVDATE  = ""; 
//                                             }
//                                             else
//                                             {
//                                                 $credit10102010    =   $x["credit10102010"]    ;  
//                                                 $debit10305020     =   $x["debit10305020"]   ;
//                                                 $debit10305040     =   $x["debit10305040"]   ;
//                                                 $debit20101010     =   $x["debit20101010"]   ;
//                                                 $debit50203090     =   $x["debit50203090"]  ;
//                                                 $debit50213060     =   $x["debit50213060"]  ;
//                                                 $debit10305030     =   $x["debit10305030"]   ;
//                                                 // $dateFrom       =   $x["dateFrom"]    ;  
//                                                 // $dateTo         =   $x["dateTo"]      ;
//                                                 $finalFJEVDATE  =   $x["FJEVDATE"]    ;
//                                             }
                                        
//                                         }
//                                         else
//                                         {
//                                             $credit10102010 =   $x["credit10102010"]  ;  
//                                             $debit10305020  =   $x["debit10305020"]   ;
//                                             $debit10305040  =   $x["debit10305040"]   ;
//                                             $debit20101010  =   $x["debit20101010"]   ;
//                                             $debit50203090  =   $x["debit50203090"]   ;
//                                             $debit50213060  =   $x["debit50213060"]   ;
//                                             $debit10305030  =   $x["debit10305030"]   ;
//                                             $dateFrom       =   $x["dateFrom"]    ;  
//                                             $dateTo         =   $x["dateTo"]      ;
//                                             $finalFJEVDATE  =   $x["FJEVDATE"]    ;  
//                                         }
                                    
//                                     }
//                                 }

//                                 $this->FJEVNO = $item->fjevno;

//                             return [
//                                 'credit10102010'       => $credit10102010  ,//GIKAN KA TEMP
//                                 'debit10305020'        => $debit10305020   ,//GIKAN KA TEMP
//                                 'debit10305040'        => $debit10305040   ,//GIKAN KA TEMP
//                                 'debit20101010'        => $debit20101010   ,//GIKAN KA TEMP
//                                 'debit50203090'        => $debit50203090   ,//GIKAN KA TEMP
//                                 'debit50213060'        => $debit50213060   ,//GIKAN KA TEMP
//                                 'debit10305030'        => $debit10305030   ,//GIKAN KA TEMP

//                                 "recid"             => $item->recid,
//                                 "FDEBIT"            => $item->FDEBIT,
//                                 "FUND_SCODE"        => $item->FUND_SCODE,
//                                 "FALOBNO"           => $item->FALOBNO,
//                                 // "FCREDIT"           => $item->sum('FCREDIT'),
//                                 "FCREDIT"           => $item->FCREDIT,
//                                 "fiscalyear"        => $item->fiscalyear,
//                                 "FJEVNO"            => $item->fjevno,
//                                 "fchkno"            => $item->fchkno,
//                                 "fchkno"            => $item->fchkno,
//                                 "FVOUCHNO"          => $item->FVOUCHNO,
//                                 "FACTCODE"          => $item->FACTCODE,
//                                 "FJEVTYP"           => $item->fjevtyp,
//                                 "FPAYEE"            => $item->fpayee,
//                                 "FJEVDATE"          => $finalFJEVDATE,//$item->FJEVDATE,//
//                                 "FUNDDETAIL_NAME"   => $item->FUNDDETAIL_NAME,
//                                 'dateFrom'          => $dateFrom,//$item->$dateFrom, //GIKAN KA TEMP
//                                 'dateTo'            => $dateTo,//$item->$dateTo, //GIKAN KA TEMP
//                             ];
//                         });

//                         foreach ($this->temp as $x)
//                         { 
//                             $found = 0;
//                             foreach($details as $y)
//                             {
//                                 if(     $x["FJEVNO"]        ==  $y["FJEVNO"]    
//                                     &&  $x["FJEVTYP"]        == $y["FJEVTYP"]   
//                                     &&  $x["FUND_SCODE"]     == $y["FUND_SCODE"])
//                                 {
//                                     $found = 1;
//                                 }
//                             }

//                             if($found == 0)
//                             {
//                                 $details->add($x);
//                             }
//                         }
//                         return $details;
//     }
// }