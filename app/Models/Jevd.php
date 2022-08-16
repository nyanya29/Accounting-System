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
}
