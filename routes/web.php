<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UnitController;
use App\Http\Controllers\TenantController;
use App\Http\Controllers\TenancyContractController;

Route::get('/', function () {
    return redirect()->route('login');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    // Unit routes
    Route::get('units/units-list', [UnitController::class, 'index'])->name('units.index');
    Route::get('units/create-unit', [UnitController::class, 'create'])->name('unit.create');
    Route::post('units/store-unit', [UnitController::class, 'store'])->name('unit.store');

    // Tenant routes
    Route::prefix('tenants')->group(function () {
        Route::get('/tenants-list', [TenantController::class, 'index'])->name('tenants.index');
        Route::get('/create-tenant', [TenantController::class, 'create'])->name('tenant.create');
        Route::post('/store-Tenant', [TenantController::class, 'store'])->name('tenant.store');
        Route::get('/show-tenant/{unique_tenant_id}', [TenantController::class, 'show'])->name('tenant.show');
    });

    // Tenancy Contract routes
    Route::prefix('tenancy-contract')->group(function () {
        Route::get('/list', [TenancyContractController::class, 'index'])->name('tenancyContract.index');
        Route::get('/create', [TenancyContractController::class, 'create'])->name('tenancyContract.create');
        Route::post('/store', [TenancyContractController::class, 'store'])->name('tenancyContract.store');
        Route::get('/view/{unique_contract_no}', [TenancyContractController::class, 'show'])->name('tenancyContract.show');
    });
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
require __DIR__ . '/api.php';
