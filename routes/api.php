<?php

use App\Http\Controllers\CommonController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UnitController;


// API routes
Route::group(['middleware' => 'auth', 'prefix' => 'api'], function () {
    Route::get('/checkUnitNumber', [UnitController::class, 'checkUnitNumber'])->name('checkUnitNumber');
    Route::get('/checkAdminEmail', [CommonController::class, 'checkAdminEmail'])->name('checkAdminEmail');
    Route::get('/getUnitsByType', [UnitController::class, 'getUnitsByType'])->name('getUnitsByType');
    Route::post('/updateStatus', [CommonController::class, 'updateStatus'])->name('updateStatus');
});
