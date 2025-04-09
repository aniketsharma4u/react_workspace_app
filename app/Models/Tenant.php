<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tenant extends Model
{
    use HasFactory;

    protected $table = 'tenants';

    protected $primaryKey = 'tenant_id';

    protected $fillable = [
        'unique_tenant_id',
        'license_no',
        'license_expiry',
        'tenant_name',
        'tenant_company_name',
        'license_issuer',
        'tel_no',
        'fax_no',
        'email',
        'po_box',
        'address',
        'mobile_no',
        'status',
        'tenant_emirates_id_no',
        'tenant_emirates_id_expiry_date',
        'tenant_passport_no',
        'tenant_passport_expiry_date',
        'tenant_emirates_id_file',
        'tenant_passport_file',
        'tenant_trade_license_file',
        'created_by'
    ];

    public $timestamps = true;

    public function created_user()
    {
        return $this->hasOne(User::class, 'id', 'created_by');
    }

    protected function casts(): array
    {
        return [
            'license_expiry' => 'date:d-M-Y',
            'tenant_emirates_id_expiry_date' => 'date:d-M-Y',
            'tenant_passport_expiry_date' => 'date:d-M-Y',
        ];
    }
}
