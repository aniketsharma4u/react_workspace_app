<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Amenity extends Model
{
    use HasFactory;

    // Table name
    protected $table = 'amenities';

    // Primary key
    protected $primaryKey = 'amenity_id';


    // Timestamps
    public $timestamps = true;

    // The attributes that are mass assignable
    protected $fillable = [
        'amenity_unique_id',
        'amenity_name',
        'amenity_yearly_charge',
        'status',
    ];
}