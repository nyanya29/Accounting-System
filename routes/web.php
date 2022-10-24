<?php

use App\Http\Controllers\FileHandleController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\MunicipalityController;
use App\Http\Controllers\BarangayController;
use App\Http\Controllers\JevdController;
use App\Http\Controllers\JevdReportsController;
use App\Http\Controllers\JevhController;
use App\Http\Controllers\PermissionController;

Auth::routes();


Route::middleware('auth')->group(function() {
    Route::get('/', [HomeController::class, 'index']);

    // Route::get('/home', [HomeController::class, 'index'])->name('home');

    Route::prefix('/users')->group(function() {
        Route::get('/', [UserController::class, 'index']);
        Route::post('/', [UserController::class, 'store']);
        Route::get('/create', [UserController::class, 'create'])->can('create', 'App\Model\User');
        Route::get('/{id}/edit', [UserController::class, 'edit']);
        Route::delete('/{id}', [UserController::class, 'destroy']);
        Route::patch('/{id}', [UserController::class, 'update']);
        Route::get('/change-password', [UserController::class, 'changePassword']);
        Route::post('/update-password', [UserController::class, 'updatePassword']);
        Route::get('/settings', [UserController::class, 'settings']);
        Route::post('/change-name', [UserController::class, 'changeName']);
        Route::post('/change-photo', [UserController::class, 'changePhoto']);
    });
    
    
    //Avatar file upload
    Route::post('/files/upload', [FileHandleController::class, 'uploadAvatar']);
    Route::delete('/files/upload/delete', [FileHandleController::class, 'destroyAvatar']);
    
    
    //Municipalities
    Route::prefix('municipalities')->group(function() {
        Route::post('/',[MunicipalityController::class, 'index']);
    });

    //Barangays
    Route::prefix('barangays')->group(function() {
        Route::post('/',[BarangayController::class, 'index']);
    });

    Route::post('get-all-permissions', [PermissionController::class, 'getAllPermissions']);
    Route::post('update-user-permissions', [PermissionController::class, 'updateUserPermissions']);
    
    //jevh
    Route::prefix('/jevh')->group(function(){
        Route::get('/index', [JevhController::class, 'index']);
        Route::get('/create', [JevhController::class, 'create']);
        Route::post('getFundDetail', [JevhController::class, 'getFundDetail']);
        Route::post('/store', [JevhController::class, 'store']);

        Route::post('/get-fund-details', [JevhController::class, 'getFundDetails']);

        //garcia
        Route::get('/jevh-create', [JevhController::class, 'jevhCreate']);
        Route::get('/jevd-create/{id}', [JevhController::class, 'jevdCreate']);

    });
    //jevd
    Route::prefix('/jevd')->group(function(){
        Route::post('/index', [JevdController::class, 'jevDetails']);
        Route::get('/jevdcreate', [JevdController::class, 'jevdcreate']);
        Route::post('getChartAccount', [JevdController::class, 'getChartAccount']);
        Route::post('getSubCode1', [JevdController::class, 'getSubcode1']);
        Route::post('getSubCode2', [JevdController::class, 'getSubCode2']);
        Route::post('/credit-debit-total', [JevdController::class, 'jevdTotal']);
    });
    //reports
});
Route::get('print-jevd', [JevdReportsController::class, 'jevdReport']);
Route::get('print-jevtype', [JevdReportsController::class, 'jevdTypeReport']);