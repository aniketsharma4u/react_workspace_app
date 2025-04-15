<?php

namespace App\Models;

use App\Models\Unit;
use App\Models\User;
use App\Models\Tenant;
use App\Models\ContractPaymentDetail;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class TenancyContract extends Model
{
    use HasFactory;

    protected $table = 'contracts';

    protected $primaryKey = 'contract_id';

    protected $fillable = [
        'unique_contract_no',
        'unique_tenant_id',
        'unique_unit_id',
        'total_months',
        'start_date',
        'end_date',
        'grace_start_date',
        'grace_end_date',
        'discount',
        'security_deposit',
        'contract_amount',
        'annual_amount',
        'shell_and_core',
        'payment_count',
        'actual_annual_amount',
        'actual_contract_amount',
        'contract_status',
        'created_by'
    ];

    public $timestamps = true;

    public function tenant()
    {
        return $this->belongsTo(Tenant::class, 'unique_tenant_id', 'unique_tenant_id');
    }

    public function unit()
    {
        return $this->belongsTo(Unit::class, 'unique_unit_id', 'unique_unit_id');
    }

    public function payment_data()
    {
        return $this->hasMany(ContractPaymentDetail::class, 'unique_contract_no', 'unique_contract_no');
    }

    public function contract_pdf()
    {
        return $this->hasMany(GenerateContractPdf::class, 'unique_contract_no', 'unique_contract_no');
    }

    public function created_by_user()
    {
        return $this->hasOne(User::class, 'id', 'created_by');
    }

    public function casts(): array
    {
        return [
            'start_date' => 'date:d-M-Y',
            'end_date' => 'date:d-M-Y',
            'created_at' => 'date:d-M-Y H:i:s',
        ];
    }
}
