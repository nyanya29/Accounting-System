<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeDatatypeInJevdTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('jevd', function (Blueprint $table) {
            $table->string('FUND_SCODE')->change()->nullable();
            $table->string('FJEVNO')->change()->nullable();
            $table->string('FRESPCTR')->change()->nullable();
            $table->string('FACTCODE')->change()->nullable();
            $table->string('FSUBCDE')->change()->nullable();
            $table->string('FSUBCDE2')->change()->nullable();
            $table->string('FALOBNO')->change()->nullable();
            $table->string('FVOUCHNO')->change()->nullable();
            $table->string('FPRNO')->change()->nullable();
            $table->string('FREMARKS')->change()->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('jevd', function (Blueprint $table) {
            
        });
    }
}
