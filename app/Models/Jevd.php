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

    public function fundDetails()
    {
        return $this->hasMany(FundDetails::class, 'FUND_SCODE', 'FUND_SCODE');
    }
}
