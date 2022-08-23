<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class JevhValidation extends FormRequest
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
           'FJEVNO' => 'required',
           'FCHKNO' => 'required',
           'FJEVTYP' => 'required'
        ];
    }

    public function messages()
    {
        return [
            'FJEVNO.required' => 'Jev Number is Required',
            'FCHKNO.required' =>  'Check Number is Required',
            'FJEVTYP.required' =>  'Jev Type is Required',
        ];
    }
    
}
