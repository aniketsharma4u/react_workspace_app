<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Tenant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

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
        $unique_tenant_id = $this->generateUniqueIds();

        $validatedData = $request->validate([
            'license_no' => 'required|string|max:255',
            'license_expiry' => 'required|date|after:today',
            'tenant_name' => 'required|string|max:255',
            'tenant_company_name' => 'required|string|max:255',
            'license_issuer' => 'required|string|max:255',
            'tel_no' => 'required|string|max:20',
            'fax_no' => 'nullable|string|max:20',
            'email' => 'required|email|max:255',
            'po_box' => 'nullable|string|max:20',
            'address' => 'required|string|max:255',
            'mobile_no' => 'required|string|max:20',
            'tenant_emirates_id_no' => 'required|string|max:50',
            'tenant_emirates_id_expiry_date' => 'required|date|after:today',
            'tenant_passport_no' => 'required|string|max:50',
            'tenant_passport_expiry_date' => 'required|date|after:today',
            'tenant_emirates_id_file' => 'required|file|mimes:pdf|max:2048',
            'tenant_passport_file' => 'required|file|mimes:pdf|max:2048',
            'tenant_trade_license_file' => 'required|file|mimes:pdf|max:2048',
        ]);

        $folderPath = 'uploads/' . $unique_tenant_id;
        Storage::disk('public')->makeDirectory($folderPath);

        // Get the file instances
        $emiratesIdFile = $request->file('tenant_emirates_id_file');
        $passportFile = $request->file('tenant_passport_file');
        $tradeLicenseFile = $request->file('tenant_trade_license_file');

        // Get the original file names
        $emiratesIdFileName = $emiratesIdFile->getClientOriginalName();
        $passportFileName = $passportFile->getClientOriginalName();
        $tradeLicenseFileName = $tradeLicenseFile->getClientOriginalName();

        // Move the files to the created folder
        $emiratesIdFile->storeAs($folderPath, $emiratesIdFileName, 'public');
        $passportFile->storeAs($folderPath, $passportFileName, 'public');
        $tradeLicenseFile->storeAs($folderPath, $tradeLicenseFileName, 'public');

        // Prepare the data to be saved, ensuring the correct file names are used
        $tenantData = $request->all();
        $tenantData['unique_tenant_id'] = $unique_tenant_id;
        $tenantData['tenant_emirates_id_file'] = $emiratesIdFileName;
        $tenantData['tenant_passport_file'] = $passportFileName;
        $tenantData['tenant_trade_license_file'] = $tradeLicenseFileName;
        $tenantData['created_by'] = Auth::id();
        // Create the tenant record
        $saveTenant = Tenant::create($tenantData);

        if ($saveTenant) {
            return redirect()->route('tenants.index')->with('success', 'Tenant Created Successfully');
        } else {
            return redirect()->back()->with('error', 'Something went wrong');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($unique_tenant_id)
    {
        $getTenantData = Tenant::with('created_user')
            ->where(['unique_tenant_id' => $unique_tenant_id])
            ->first();
        dd($getTenantData);
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
