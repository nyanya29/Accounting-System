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
        // $this['is_balance'] = true;
        // $jevd = collect($this->jevd);
        // if ($jevd->sum('FCREDIT') != $jevd->sum('FDEBIT')) {
        //    $this['is_balance'] = false; 
        // }
        // dd($this->is_balance);
        // dd($this->all());
        
        return [
           'jevh.fjevno' => 'required',
           'jevh.fchkno' => 'required',
           'jevh.fjevtyp' => 'required',
           'jevh.fund_scode' => 'required',
           'jevh.fjevdate' => 'required',
           'jevh.frefno' => 'required',
           'jevh.fpayee' => 'required',
           'jevh.fremk' => 'required',
           'jevh.fprepby' => 'required',
           'jevh.fprepd' => 'required',
           'jevh.fappvby' => 'required',
           'jevh.fappvd' => 'required',
           'jevh.is_balance' => [
                function ($attribute, $value, $fail) {
                    $jevd = collect($this->jevd);
                    if ($jevd->sum('FCREDIT') != $jevd->sum('FDEBIT')) {
                        $fail('Churvaley is not balance!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
                    }
                },
            ]
        ];
    }

    public function messages()
    {
        return [
            'jevh.fjevno.required' => 'Jev Number is required',
            'jevh.fchkno.required' => 'Check Number is required',
            'jevh.fjevtyp.required' => 'Jev Type is required',
            'jevh.fund_scode.required' => 'Fund_Scode is required',
            'jevh.fjevdate.required' => 'Date is required',
            'jevh.frefno.required' => 'Reference Number is required',
            'jevh.fpayee.required' => 'Payee is required',
            'jevh.fremk.required' => 'Remarks is required',
            'jevh.fprepby.required' => 'Prepare by is required',
            'jevh.fprepd.required' => 'Position is required',
            'jevh.fappvby.required' => 'Approved by is required',
            'jevh.fappvd.required' => 'Approver position is required',
        ];
    }
    
}
