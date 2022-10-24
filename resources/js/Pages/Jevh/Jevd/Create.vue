<template>
    <div class="row">
            <!-- <h3>{{ pageTitle}}</h3> -->
            <!-- <back-button :backToURL="'/jevh/index'"></back-button> -->
            <div class="col-md-8">
                <div class="form-group row p-3">
                    <div class="col-12 mb-1">
                        
                        <div class="card card text-dark bg-light shadow">
                            <div class="card-body">
                                <div class="col-12 gap-5">
                                    <div class="row">
                                        <div class="col-4">
                                            <div class="col-sm-12">
                                                <div class="row">
                                                    <div class="col-sm-4">
                                                        <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>Jev Type:</b></label>
                                                    </div>
                                                    <div class="col-sm-8">
                                                        <p class="col-form-label">{{ jevtype[data.FJEVTYP] }}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-12">
                                                <div class="row">
                                                    <div class="col-sm-4">
                                                        <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>FUND:</b></label>
                                                    </div>
                                                    <div class="col-sm-8">
                                                        <p class="col-form-label">{{ data.FUND_SCODE }}</p>
                                                    </div>
                                                </div> 
                                            </div>
                                            <div class="col-sm-12">
                                                <div class="row">
                                                    <div class="col-sm-4">
                                                        <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>JEV No.:</b></label>
                                                    </div>
                                                    <div class="col-sm-8">
                                                        <p class="col-form-label">{{ data.FJEVNO }}</p>
                                                    </div>
                                                </div> 
                                            </div>
                                            <div class="col-sm-12">
                                                <div class="row">
                                                    <div class="col-sm-4">
                                                        <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>JEV Date:</b></label>
                                                    </div>
                                                    <div class="col-sm-8">
                                                        <p class="col-form-label">{{ data.FJEVDATE }}</p>
                                                    </div>
                                                </div> 
                                            </div>
                                            <div class="col-sm-12">
                                                <div class="row">
                                                    <div class="col-sm-4">
                                                        <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>Check:</b></label>
                                                    </div>
                                                    <div class="col-sm-8">
                                                        <p class="col-form-label">{{ data.FCHKNO }}</p>
                                                    </div>
                                                </div> 
                                            </div>
                                            <div class="col-sm-12">
                                                <div class="row">
                                                    <div class="col-sm-4">
                                                        <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>Ref#:</b></label>
                                                    </div>
                                                    <div class="col-sm-8">
                                                        <p class="col-form-label">{{ data.FREFNO }}</p>
                                                    </div>
                                                </div> 
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="col-sm-12">
                                                <div class="row">
                                                    <div class="col-sm-4">
                                                        <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>Payee:</b></label>
                                                    </div>
                                                    <div class="col-sm-8">
                                                        <p class="col-form-label">{{ data.FPAYEE }}</p>
                                                    </div>
                                                </div> 
                                            </div>
                                            <div class="col-sm-12">
                                                <div class="row">
                                                    <div class="col-sm-4">
                                                        <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>Prepared By:</b></label>
                                                    </div>
                                                    <div class="col-sm-8">
                                                        <p class="col-form-label">{{ data.FPREPBY }}</p>
                                                    </div>
                                                </div> 
                                            </div>
                                            <div class="col-sm-12">
                                                <div class="row">
                                                    <div class="col-sm-4">
                                                        <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>Position:</b></label>
                                                    </div>
                                                    <div class="col-sm-8">
                                                        <p class="col-form-label">{{ data.FPREPD }}</p>
                                                    </div>
                                                </div> 
                                            </div>
                                            <div class="col-sm-12">
                                                <div class="row">
                                                    <div class="col-sm-4">
                                                        <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>Aprroved By:</b></label>
                                                    </div>
                                                    <div class="col-sm-8">
                                                        <p class="col-form-label">{{ data.FAPPVBY }}</p>
                                                    </div>
                                                </div> 
                                            </div>
                                            <div class="col-sm-12">
                                                <div class="row">
                                                    <div class="col-sm-4">
                                                        <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>Position:</b></label>
                                                    </div>
                                                    <div class="col-sm-8">
                                                        <p class="col-form-label">{{ data.FAPPVD }}</p>
                                                    </div>
                                                </div> 
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="col-sm-12 form-floating">                               
                                                <textarea class="col-form-label form-control" style="height: 200px" readonly v-model="data.FREMK"></textarea>
                                                <label for="floatingInput"><b>DESCRIPTION</b></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="col-12">
                        <div class="bgc-white p-20 bd table-responsive shadow">
                            <table class="table table-hover table-striped ">
                                <thead>
                                    <tr>
                                        <th scope="col">RespCtr</th>
                                        <th scope="col">ActCode</th>
                                        <th scope="col">ActCode Title</th>
                                        <th scope="col">SubCode</th>
                                        <th scope="col">SubCode Title</th>
                                        <th scope="col">SubCode2</th>
                                        <th scope="col">SubCode2 Title</th>
                                        <th scope="col">Voucher</th>
                                        <th scope="col">OBR#</th>
                                        <th scope="col">PR#</th>
                                        <th scope="col">Debit</th>
                                        <th scope="col">Credit</th>
                                        <th scope="col">Remarks</th>
                                        <!-- <th scope="col" style="width: 30%"></th>
                                        <th scope="col" style="text-align: right">Action</th> -->
                                    </tr>
                                    
                                </thead>
                                <tbody>
                                    <!-- <tr v-for="(item, index) in data" :key="index">
                                        <td>{{ item.FACTCODE }}</td>
                                        <td>{{ item.FTITLE }}</td>
                                        <td>{{ item.FSUBCDE }}</td>
                                        <td>{{ item.FSTITLE }}</td>
                                        <td>{{ item.FSUBCDE2 }}</td>
                                        <td>{{ item.FSTITLE2 }}</td>
                                        <td>{{ item.FRESPCTR }}</td>
                                        <td>{{ item.FVOUCHNO }}</td>
                                        <td>{{ item.FALOBNO }}</td>
                                        <td>{{ item.FPRNO }}</td>
                                        <td>{{ item.jevdDebit }}</td>
                                        <td>{{ item.jevdCredit }}</td>
                                        <td>{{ item.FREMARKS }}</td>
                                    </tr>
                                    <tr>
                                       
                                        <th scope="row 9">Total</th>
                                        <td colspan="9"></td>
                                        <td><b>{{ total.totalDebit }}</b></td>
                                        <td><b>{{ total.totalCredit }}</b></td>
                                        <td></td>
                                    </tr> -->
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
            <div class="col-md-4">
                <div class="card card shadow">
                    <div class="card-header">
                        Add Jevd
                    </div>
                    <div class="card-body">
                        <label class="col-form-label"><b>RespCenter</b></label>
                        <input type="text"  class="form-control" autocomplete="chrome-off">

                        <label class="col-form-label"><b>Voucher #</b></label>
                        <input type="text"  class="form-control" autocomplete="chrome-off">

                        <label class="col-mb-3 col-form-label"><b>OBR #</b></label>
                        <input type="text"  class="form-control" autocomplete="chrome-off">

                        <div class="row">
                            <div class="col-md-6 ">
                                <label class="col-form-label"><b>PR #</b></label>
                                <input type="text" class="form-control" autocomplete="chrome-off"> 
                            </div>
                            <div class="col-md-6">
                                <label class="col-form-label"><b>Act Code</b></label>
                                <select  class="form-select">
                                    <option > </option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 ">
                                <label class="col-form-label"><b>Sub Code</b></label>
                                <input type="text" class="form-control" autocomplete="chrome-off"> 
                            </div>
                            <div class="col-md-6">
                                <label class="col-form-label"><b>Sub Code2</b></label>
                                <input type="text" class="form-control" autocomplete="chrome-off">
                            </div>
                        </div>

                        <label class="col-mb-3 col-form-label"><b>Debit</b></label>
                        <input type="text"  class="form-control" autocomplete="chrome-off">

                        <label class="col-mb-3 col-form-label"><b>Credit</b></label>
                        <input type="text"  class="form-control" autocomplete="chrome-off">

                        <label class="col-mb-3 col-form-label"><b>Description</b></label>
                            <textarea class="form-control" id="floatingTextarea2" style="height:105px;"></textarea> 
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-primary"> Add</button>
                    </div>
                </div>
            </div>
    </div>    
</template>

<script>
export default {
    props:{
        data:Object
    },
    data () {
        return {
            jevtype:{
                1:"Collection",
                2:"Check Disbursement",
                3:"Cash Disbursement",
                4:"General",
                5:"ADA",
                6:"Procurement"
            },
        }
    },
}
</script>

<style>

</style>