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
            'FACTCODE' => 'required',
            'FSUBCDE' => 'required',
            'FSUBCDE2' => 'required',
            'FDEBIT' => 'required|nullable|regex:/^\d{1,13}(\.\d{1,4})?$/',
            'FCREDIT' => 'required|nullable|regex:/^\d{1,13}(\.\d{1,4})?$/',
        ];

    }
    public function messages()
    {
        return [
            'FACTCODE.required' => 'Account Code is required !!',
            'FSUBCDE.required' => 'Sub Code is required',
            'FSUBCDE2.required' => 'Sub Code 2 is required',
            'FDEBIT.regex' => 'Invalid Format !!',
            'FCREDIT.regex' => 'Invalid format !!',
        ];
    }
}
