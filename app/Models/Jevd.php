<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jevd extends Model
{
    use HasFactory;

    protected $table = "jevd";
    protected $primaryKey = 'recid';
    protected $guarded = [];

    public function fundDetails()
    {
        return $this->hasMany(FundDetails::class, 'FUND_SCODE', 'FUND_SCODE');
    }
    public function jevh(){
        return $this->hasMany(Jevd::class, 'FUND_SCODE','FUND_SCODE');
    }

}
