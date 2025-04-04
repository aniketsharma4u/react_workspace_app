<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MoreideasHubDetail extends Model
{
    use HasFactory;

    // The table associated with the model
    protected $table = 'moreideas_hub_details';

    // The primary key associated with the table
    protected $primaryKey = 'mi_hub_id';

    // Indicates if the model should be timestamped
    public $timestamps = true;

    // The attributes that are mass assignable
    protected $fillable = [
        'company_name',
        'owner_number',
        'trade_license_no',
        'license_expiry',
        'license_issuer',
        'tel_no',
        'fax_no',
        'email',
        'po_box',
        'address',
        'owner_name',
        'status'
    ];
}
