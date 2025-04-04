<?php

namespace App\Models;

use App\Models\UnitType;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Unit extends Model
{
    use HasFactory;

    protected $table = 'units';

    protected $primaryKey = 'unit_id';

    protected $fillable = [
        'unique_unit_id',
        'unit_no',
        'building_name',
        'area',
        'land_no',
        'dm_no',
        'dewa_premise_no',
        'unit_subtype',
        'floor_no',
        'unit_size_sqm',
        'unit_usage',
        'makani_no',
        'unit_type',
        'address',
        'status',
        'unit_min_amount',
        'unit_max_amount'
    ];

    public $timestamps = true;

    public function unitType()
    {
        return $this->belongsTo(UnitType::class, 'unit_type', 'unit_type_id');
    }
}
