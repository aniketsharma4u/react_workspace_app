<?php

namespace App\Models;

use App\Models\Unit;
use App\Models\Tenant;
use App\Models\ContractPaymentDetail;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class GenerateContractPdf extends Model
{
    use HasFactory;

    protected $table = 'generate_contract_pdf';

    protected $primaryKey = 'generate_contract_pdf_id';

    protected $fillable = [
        'unique_contract_pdf_no',
        'custom_terms_conditions',
        'created_by',
        'verified',
        'unique_contract_no',
        'unique_unit_id',
        'unique_tenant_id',
        'pdf_file_name',
        'pdf_file_path',
        'status'
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
}
