<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeColumnInJevhTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('jevh', function (Blueprint $table) {
            $table->string('fiscalyear')->change()->nullable();
            $table->string('fjevno')->change()->nullable();
            $table->string('fchkno')->change()->nullable();
            $table->string('fnature')->change()->nullable();
            $table->string('fjevdate')->change()->nullable();
            $table->string('frefno')->change()->nullable();
            $table->string('fund_scode')->change()->nullable();
            $table->string('fjevtyp')->change()->nullable();
            $table->string('idpayee')->change()->nullable();
            $table->string('fpayee')->change()->nullable();
            $table->string('fremk')->change()->nullable();
            $table->string('fprepby')->change()->nullable();
            $table->string('fprepd')->change()->nullable();
            $table->string('fappvby')->change()->nullable();
            $table->string('fappvd')->change()->nullable();
            $table->integer('fdatepost')->change()->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('jevh', function (Blueprint $table) {
            $table->string('fiscalyear');
            $table->string('fjevno');
            $table->string('fchkno');
            $table->string('fnature');
            $table->string('fjevdate');
            $table->string('frefno');
            $table->string('fund_scode');
            $table->string('fjevtyp');
            $table->string('idpayee');
            $table->string('fpayee');
            $table->string('fremk');
            $table->string('fprepby');
            $table->string('fprepd');
            $table->string('fappvby');
            $table->string('fappvd');
            $table->integer('fdatepost');
        });
    }
}
