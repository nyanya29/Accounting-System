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

    public function jevd(){
        return $this->hasMany(Jevd::class, 'FJEVNO','FJEVNO');
    }

    public function jevddetails(){
        return $this->belongsTo(Jevd::class, 'FUND_SCODE','FUND_SCODE');
    }


}
