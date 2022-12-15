<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jevh extends Model
{
    use HasFactory;

    protected $table = "jevh";
    protected $guarded = [];
    protected $primaryKey = "recid";
    public $timestamps = false;

    public function jevd(){
        return $this->hasMany(Jevd::class, 'FJEVNO','fjevno');
        // return $this->hasMany(Jevd::class, ['FJEVNO','fjevno'],['FUND_SCODE','fund_scode']);
    }
    public function jevddetails(){
        return $this->belongsTo(Jevd::class, 'FUND_SCODE','FUND_SCODE');
    }
}
