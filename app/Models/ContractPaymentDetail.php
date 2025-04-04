<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ContractPaymentDetail extends Model
{
    use HasFactory;

    protected $table = 'contract_payment_details';

    protected $primaryKey = 'contract_payment_details_id';

    protected $fillable = [
        'payment_made_by',
        'payment_date',
        'payment_reference_no',
        'contract_amount',
        'amount_received',
        'accounts_remarks',
        'created_by',
        'unique_contract_no',
        'unique_unit_id',
        'unique_tenant_id',
        'payment_status',
        'unique_payment_id'
    ];


    public $timestamps = true;

    public function created_by_user_data()
    {
        return $this->hasOne(User::class, 'id', 'created_by');
    }
}
