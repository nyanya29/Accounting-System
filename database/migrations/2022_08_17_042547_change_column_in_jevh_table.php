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
            $table->string('FJEVNO')->change()->nullable();
            $table->string('FCHKNO')->change()->nullable();
            $table->string('FNATURE')->change()->nullable();
            $table->string('FREFNO')->change()->nullable();
            $table->string('FUND_SCODE')->change()->nullable();
            $table->string('FJEVTYP')->change()->nullable();
            $table->string('FPAYEE')->change()->nullable();
            $table->string('FREMK')->change()->nullable();
            $table->string('FPREPBY')->change()->nullable();
            $table->string('FPREPD')->change()->nullable();
            $table->string('FAPPVBY')->change()->nullable();
            $table->string('FAPPVD')->change()->nullable();
            $table->string('FUSER')->change()->nullable();
            $table->string('FENTRYTIME')->change()->nullable();
            $table->string('TIMEMOD')->change()->nullable();
            $table->integer('FUPLTAG')->change()->nullable();
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
            $table->string('FJEVNO')->change();
            $table->string('FCHKNO')->change();
            $table->string('FNATURE')->change();
            $table->string('FREFNO')->change();
            $table->string('FUND_SCODE')->change();
            $table->string('FJEVTYP')->change();
            $table->string('FPAYEE')->change();
            $table->string('FREMK')->change();
            $table->string('FPREPBY')->change();
            $table->string('FPREPD')->change();
            $table->string('FAPPVBY')->change();
            $table->string('FAPPVD')->change();
            $table->string('FUSER')->change();
            $table->string('FENTRYTIME')->change();
            $table->string('TIMEMOD')->change();
            $table->integer('FUPLTAG')->change();
        });
    }
}
