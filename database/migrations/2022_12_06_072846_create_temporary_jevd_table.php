<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTemporaryJevdTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('temporary_jevd', function (Blueprint $table) {
            $table->id('recid');
            $table->string('fiscalyear', 4);
            $table->string('FUND_SCODE')->nullable();
            $table->string('FJEVNO')->nullable();
            $table->string('FRESPCTR')->nullable();
            $table->string('FACTCODE')->nullable();
            $table->string('FSUBCDE')->nullable();
            $table->string('FSUBCDE2')->nullable();
            $table->string('FALOBNO')->nullable();
            $table->string('FVOUCHNO')->nullable();
            $table->string('FPRNO')->nullable();
            $table->double('FCREDIT',10,2)->default(0.00);
            $table->double('FDEBIT',10,2)->default(0.00);
            $table->string('FREMARKS')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('temporary_jevd');
    }
}
