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

// if (!function_exists('generalJournal')) {
//     function generalJournalReport($request) {
//         $details = DB::table('jevd')
//                         ->select(
//                             'jevd.FACTCODE',
//                             'funds_details.FUNDDETAIL_NAME',
//                             'jevh.fjevtyp',
//                             'chartofaccounts.FTITLE',
//                             'jevh.fremk',
//                             'jevd.FPRNO',
//                             'jevh.fjevdate',
//                             'jevh.fjevno',
//                             'jevd.FDEBIT',
//                             'jevd.FCREDIT',
//                             // DB::raw('SUM(jevd.FDEBIT) as FDEBIT'),
//                             // DB::raw('SUM(jevd.FCREDIT) as FCREDIT'),
//                             DB::raw("DATE_FORMAT('$request->from', '%M %e, %Y') as date_from"),
//                             DB::raw("DATE_FORMAT('$request->to', '%M %e, %Y') as date_to")
//                             )
//                             ->leftJoin('jevh', function($query){
//                                 $query->on('jevh.fund_scode', '=', 'jevd.FUND_SCODE')
//                                 ->on('jevh.fjevno', '=', 'jevd.FJEVNO')
//                                 ->on('jevh.fiscalyear', '=', 'jevd.fiscalyear');                  
//                             })
//                             ->leftJoin('chartofaccounts', function ($query) {
//                                 $query->on('chartofaccounts.FACTCODE', '=', 'jevd.FACTCODE')
//                                     ->on('jevd.fiscalyear', '>=', 'chartofaccounts.fiscalyear')
//                                     ->on('jevd.fiscalyear', '<=', 'chartofaccounts.fiscalyear_to');
//                             })
//                             ->leftJoin('funds_details', 'jevd.FUND_SCODE', 'funds_details.FUND_SCODE')
//                             ->where('jevh.fjevtyp','=',$request->FJEVTYP)
//                             ->where('jevd.FUND_SCODE','=',$request->FUND_SCODE)
//                             ->whereBetween('jevh.fjevdate',[$request->from,$request->to])
//                             ->where('jevd.fiscalyear','=','2022')
//                             ->get();

//         return $details;
//     }
// }