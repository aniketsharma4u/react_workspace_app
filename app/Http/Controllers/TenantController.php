<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Tenant;
use Illuminate\Http\Request;

class TenantController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tenantsData = Tenant::orderByDesc('tenant_id')->paginate(10)->through(function ($tenant) {
            $tenant->license_expiry = Carbon::parse($tenant->license_expiry)->format('d-M-Y');
            return $tenant;
        });
        return inertia('tenants/tenant-list', [
            'tenantsData' => $tenantsData,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('tenants/create-tenant');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
