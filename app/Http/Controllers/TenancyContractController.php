<?php

namespace App\Http\Controllers;

use App\Models\Tenant;
use App\Models\UnitType;
use Illuminate\Http\Request;
use App\Models\TenancyContract;

class TenancyContractController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tenancyContractData = TenancyContract::with(['tenant', 'unit.unitType'])
            ->orderByDesc('contract_id')
            ->paginate(10);
        return inertia('tenancy-contract/contract-list', [
            'tenancyContractData' => $tenancyContractData,
        ]);            
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $unitTypes = UnitType::where('status', 1)->get();
        $tenantsData = Tenant::where(['status' => 1, 'verify_status' => 1])->get();
        return inertia('tenancy-contract/create-contract', [
            'tenantsData' => $tenantsData,
            'unitTypes' => $unitTypes,
        ]);
        
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
