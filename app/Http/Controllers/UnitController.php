<?php

namespace App\Http\Controllers;

use App\Models\Unit;
use App\Models\UnitType;
use Illuminate\Http\Request;

class UnitController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $unitsData = Unit::with('unitType')->orderByDesc('unit_id')->paginate(10);
        // dd($unitsData);
        return inertia('units/unit-list', [
            'unitsData' => $unitsData,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $getUnitTypes = UnitType::where('status', 1)->get();
        // dd($getUnitTypes);
        return inertia('units/create-unit', [
            'unitTypes' => $getUnitTypes,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $validataData = $request->validate([
            'unit_type' => 'required|numeric|min:1',
            'unit_no' => 'required|unique:units,unit_no',
            'floor_no' => 'required|numeric',
            'unit_size_sqm' => 'required|numeric',
            'unit_min_amount' => 'required|numeric',
            'unit_max_amount' => 'required|numeric',
        ]);
        $validataData['unique_unit_id'] = $this->generateUniqueIds();

        $createUnit = Unit::create($validataData);

        if ($createUnit) {
            return redirect()->route('units.index')->with('success', 'Unit Created Successfully');
        } else {
            return redirect()->back()->with('error', 'Something went wrong');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Unit $unit)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Unit $unit)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Unit $unit)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Unit $unit)
    {
        //
    }
    public function checkUnitNumber(Request $request)
    {
        $unit_no = $request->unit_no;
        $exists = Unit::where('unit_no', $unit_no)->exists();
        return response()->json(!$exists);
    }

    public function getUnitsByType(Request $request)
    {
        $unitTypeId = $request->unitTypeId;
        $units = Unit::where(['unit_type' => $unitTypeId, 'status' => 1])->get();
        return response()->json($units);
    }
}
