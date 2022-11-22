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
    // public function jevdOne(){
    //     return $this->hasMany(Jevd::class, 'FUND_SCODE','FUND_SCODE');
    // }
    // public function jevdAll(){
    //     return $this->friends->merge($this->jevdOne);
    // }
    // public function jevdTest(){
    //     return Jevd::where(function ($q){
    //         $q->where()
    //     });
    // }

    public function jevddetails(){
        return $this->belongsTo(Jevd::class, 'FUND_SCODE','FUND_SCODE');
    }

}
