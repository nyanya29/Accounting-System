<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class JevdValidation extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $isRequired = !$this->FDEBIT && !$this->FCREDIT;

        return [
            'FACTCODE' => 'required',
            'FSUBCDE' => [Rule::requiredIf($this->isSubcode1)],
            'FSUBCDE2' => [Rule::requiredIf($this->isSubcode2)],
            'FDEBIT' => [Rule::when($isRequired,['required', 'numeric'])],
            'FCREDIT' => [Rule::when($isRequired,['required', 'numeric'])],
        ];
    }
    public function messages()
    {
        return [
            'FACTCODE.required' => 'Account Code is required !!',
            'FSUBCDE.required' => 'Sub Code is required !!',
            'FSUBCDE2.required' => 'Sub Code 2 is required !!',
            'FDEBIT.required' => 'Debit is required !!',
            'FCREDIT.required' => 'Credit is required  !!',
        ];
    }
}
