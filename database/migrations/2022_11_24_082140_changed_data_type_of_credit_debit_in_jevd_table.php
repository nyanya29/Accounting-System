<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangedDataTypeOfCreditDebitInJevdTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('jevd', function (Blueprint $table) {
            $table->string('FCREDIT')->change()->nullable();
            $table->string('FDEBIT')->change()->nullable();
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
            //
        });
    }
}
