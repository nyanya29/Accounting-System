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
}
