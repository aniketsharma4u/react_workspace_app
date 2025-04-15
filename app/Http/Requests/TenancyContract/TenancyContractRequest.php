<?php

namespace App\Http\Requests\TenancyContract;

use App\Models\Tenant;
use App\Models\Unit;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class TenancyContractRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    /** @var \Illuminate\Foundation\Http\FormRequest $this */

    public function rules(): array
    {
        return [
            'unit_type' => ['required'],
            'unique_unit_id' => [
                'required',
                Rule::exists(Unit::class, 'unique_unit_id')->where('status', 1),
            ],
            'floor_no' => ['required', 'string', 'max:10'],
            'unit_size_sqm' => ['required', 'numeric', 'min:1'],
            'unit_min_amount' => ['required', 'numeric', 'min:1'],
            'unit_max_amount' => ['required', 'numeric', 'gte:unit_min_amount'],
            'unique_tenant_id' => [
                'required',
                Rule::exists(Tenant::class, 'unique_tenant_id')->where('status', 1),
            ],
            'total_months' => ['required', 'integer', 'min:1'],
            'start_date' => ['required', 'date', 'before:end_date', 'after_or_equal:today'],
            'end_date' => ['required', 'date', 'after:start_date'],
            'annual_amount' => [
                'required',
                'numeric',
                function ($attribute, $value, $fail) {
                    $min = $this->input('unit_min_amount');
                    $max = $this->input('unit_max_amount');
                    if (!is_null($min) && !is_null($max)) {
                        if ($value < $min || $value > $max) {
                            $fail("The $attribute must be between $min and $max.");
                        }
                    }
                }
            ],
            'contract_amount' => ['required', 'numeric', 'min:1'],
        ];
    }
}
