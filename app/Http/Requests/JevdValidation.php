<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

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
        return [
            'FRESPCTR' => 'required',
            'FACTCODE' => 'required',
            'FALOBNO' => 'required',
            'FVOUCHNO' => 'required',
            'FPRNO' => 'required',
            'FDEBIT' => 'nullable|regex:/^\d{1,13}(\.\d{1,4})?$/',
            'FCREDIT' => 'nullable|regex:/^\d{1,13}(\.\d{1,4})?$/',
        ];

    }
    public function messages()
    {
        return [
            'FRESPCTR.required' => 'Resp Center is required !!',
            'FACTCODE.required' => 'Account Code is required !!',
            'FALOBNO.required' => 'OBR is required !!',
            'FVOUCHNO.required' => 'Voucher No is required !!',
            'FPRNO.required' => 'PR No is required !!',
            'FDEBIT.regex' => 'Invalid Format !!',
            'FCREDIT.regex' => 'Invalid format !!',
        ];
    }
}
