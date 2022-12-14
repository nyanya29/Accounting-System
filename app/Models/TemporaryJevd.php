<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TemporaryJevd extends Model
{
    use HasFactory;
    protected $table = "temporary_jevd";
    protected $primaryKey = 'recid';
}
