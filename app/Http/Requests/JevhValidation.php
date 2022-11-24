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
           'fjevno' => 'required',
           'fchkno' => 'required',
           'fjevtyp' => 'required',
           'fund_scode' => 'required',
           'fjevdate' => 'required',
           'frefno' => 'required',
           'fpayee' => 'required',
           'fremk' => 'required',
           'fprepby' => 'required',
           'fprepd' => 'required',
           'fappvby' => 'required',
           'fappvd' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'fjevno.required' => 'Jev Number is required',
            'fchkno.required' => 'Check Number is required',
            'fjevtyp.required' => 'Jev Type is required',
            'fund_scode.required' => 'Fund_Scode is required',
            'fjevdate.required' => 'Date is required',
            'frefno.required' => 'Reference Number is required',
            'fpayee.required' => 'Payee is required',
            'fremk.required' => 'Remarks is required',
            'fprepby.required' => 'Prepare by is required',
            'fprepd.required' => 'Position is required',
            'fappvby.required' => 'Approved by is required',
            'fappvd.required' => 'Approver position is required',
        ];
    }
    
}
