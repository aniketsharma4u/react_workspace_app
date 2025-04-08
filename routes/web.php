<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UnitController;
use App\Http\Controllers\TenantController;

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

    // Tenant routes
    Route::prefix('tenants')->group(function () {
        Route::get('/tenants-list', [TenantController::class, 'index'])->name('tenants.index');
        Route::get('/create-tenant', [TenantController::class, 'create'])->name('tenant.create');
        Route::post('/store-Tenant', [TenantController::class, 'store'])->name('tenant.store');
        Route::get('/show-tenant/{unique_tenant_id}', [TenantController::class, 'show'])->name('tenant.show');
    });
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
require __DIR__ . '/api.php';
