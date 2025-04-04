<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UnitType extends Model
{
    use HasFactory;

    protected $table = 'master_unit_types';  // Explicitly specify the table name

    protected $primaryKey = 'unit_type_id'; // Ensure it matches your DB schema

    protected $fillable = [
        'unit_name', // Primary key
        'unit_prefix', // Example column, adjust based on your DB structure
        'status'
    ];

    public $timestamps = true; // Change to true if timestamps exist
}
