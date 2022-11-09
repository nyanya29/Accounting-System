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
            'FRESPCTR.required' => 'FRESPCTR is required',
            'FACTCODE.required' => 'FACTCODE is required',
            'FALOBNO.required' => 'FRESPCTR is required',
            'FVOUCHNO.required' => 'FALOBNO is required',
            'FPRNO.required' => 'FPRNO is required',
            'FDEBIT.regex' => 'Invalid Format',
            'FCREDIT.regex' => 'Invalid format',
        ];
    }
}
