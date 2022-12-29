<?php

use Illuminate\Support\Facades\DB;

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