<?php

namespace App\Http\Controllers;

use App\Models\Jevd;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
                    ->where('jevd.FJEVNO','=',$request->FJEVNO)
                    ->where('jevd.FUND_SCODE','=',$request->FUND_SCODE)
                    ->where('jevd.fiscalyear','=',$request->fiscalyear)
                    ->get();

            return $details;
    }
}
