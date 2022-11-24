<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jevd extends Model
{
    use HasFactory;

    protected $table = "jevd";
    protected $primaryKey = 'recid';
    protected $fillable = [
        'fiscalyear',
        'FUND_SCODE',
        'FJEVNO',
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
    ];
    public $timestamps = false;

    // public function __construct(Jevh $jevh)
    // {
    //     $this->model = $jevh;
    // }
    public function fundDetails()
    {
        return $this->hasMany(FundDetails::class, 'FUND_SCODE', 'FUND_SCODE');
    }
    // public function jevh(){
    //     return $this->hasMany(Jevd::class, 'FUND_SCODE','FUND_SCODE');
    // }
    // public function actcode()
    // {
    //     return $this->hasMany(ChartofAccounts::class, 'factcode','factcode');
    // }
    // public function test($jevh){
    //     $jev = Jevd::whereBelongsTo($jevh)->get();
    //     return $jev;
    // }
}
