<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UnitController;

Route::get('/', function () {
    return redirect()->route('login');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    // Unit routes
    Route::group(['prefix' => 'units'], function () {
        Route::get('/units-list', [UnitController::class, 'index'])->name('units.index');
        Route::get('/create-unit', [UnitController::class, 'create'])->name('unit.create');
        Route::post('/store-unit', [UnitController::class, 'store'])->name('unit.store');
    });
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
