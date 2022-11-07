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
                                    <tr v-for="item in jevd" :key="item.index">
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
                                    <!-- <tr>
                                       
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
                    <form @submit.prevent="submit()">
                        <div class="card-body">
    
                            <label class="col-form-label"><b>RespCenter</b></label>
                            <input type="text" v-model="form.FRESPCTR" class="form-control" autocomplete="chrome-off">
    
                            <label class="col-form-label"><b>Voucher #</b></label>
                            <input type="text" v-model="form.FVOUCHNO" class="form-control" autocomplete="chrome-off">
    
                            <label class="col-mb-3 col-form-label"><b>OBR #</b></label>
                            <input type="text" v-model="form.FALOBNO" class="form-control" autocomplete="chrome-off">
    
                            <div class="row">
                                <div class="col-md-6 ">
                                    <label class="col-form-label"><b>PR #</b></label>
                                    <input type="text" v-model="form.FPRNO" class="form-control" autocomplete="chrome-off"> 
                                </div>
                                <div class="col-md-6">
                                    <label class="col-form-label"><b>Act Code</b></label>
                                    <select  class="form-select" v-model="form.FACTCODE" @change="getSubCode1(), getSubCode2()">
                                        <option v-for="item in factcodes" :value="item.FACTCODE" :key="item.recid">{{ item.FTITLE}}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 ">
                                    <label class="col-form-label"><b>Sub Code</b></label>
                                    <select class="form-select" v-model="form.FSUBCDE">
                                    <option v-for="item in subcode1" :value="item.FSUBCDE" :key="item.recid"> {{ item.FSTITLE}} </option></select>
                                </div>
                                <div class="col-md-6">
                                    <label class="col-form-label"><b>Sub Code2</b></label>
                                    <select class="form-select" v-model="form.FSUBCDE2">
                                    <option v-for="item in subcode2" :value="item.FSUBCDE2" :key="item.recid">{{item.FSTITLE2}}</option></select>
                                </div>
                            </div>
    
                            <label class="col-mb-3 col-form-label"><b>Debit</b></label>
                            <input type="text" v-model="form.FDEBIT" class="form-control" autocomplete="chrome-off">
    
                            <label class="col-mb-3 col-form-label"><b>Credit</b></label>
                            <input type="text" v-model="form.FCREDIT" class="form-control" autocomplete="chrome-off">
    
                            <label class="col-mb-3 col-form-label"><b>Description</b></label>
                                <textarea class="form-control" v-model="form.FREMARKS" id="floatingTextarea2" style="height:105px;"></textarea> 
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-primary"> Add{{form.processing ? 'ing...':''}}</button>
                        </div>
                    </form>
                </div>
            </div>
    </div>    
</template>

<script>
import { useForm } from '@inertiajs/inertia-vue3';
export default {
    props:{
        data:Object,
        jevhdata: Object
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
            total:{},
            jevd:{},
            factcodes:{},
            subcode1: {},
            subcode2: {},
            form: useForm ({
                fiscalyear: this.data.fiscalyear,
                FUND_SCODE: this.data.FUND_SCODE,
                FJEVNO: this.data.FJEVNO,
                FRESPCTR: "",
                FACTCODE: "",
                FSUBCDE: "",
                FSUBCDE2: "",
                FALOBNO: "",
                FVOUCHNO: "",
                FPRNO: "",
                FDEBIT: "",
                FCREDIT: "",
                FREMARKS: ""
            })
        }
    },

    mounted() {
        this.getChartAccount(),
        this.getSubCode1(),
        this.getSubCode2(),
        this.getjevdData()
        // this.getTotal()
    },

    methods: {
        getChartAccount() {
        axios.post('/jevd/getChartAccount').then(response => {
            this.factcodes = response.data
        })
    },
    getSubCode1() {
        axios.post('/jevd/getSubCode1', {FACTCODE: this.form.FACTCODE}).then( response => {
            this.subcode1 = response.data
        })
    },
    getSubCode2() {
        axios.post('/jevd/getSubCode2', {FACTCODE: this.form.FACTCODE}).then( response => {
            this.subcode2 = response.data
        })
    },
    submit () {
        this.form.post("/jevd/", {
                onFinish: visit => {
                    this.$inertia.visit('/jevh/jevd-create/'+this.data.recid)
                }
            }
        );
        // this.$inertia.visit("/jevd/", {
        //     onFinish: visit => {
        //         this.getjevdData()
        //     } 
        // })
    },
    getjevdData(url = "/jevd/get-jevdData"){
            let payload = {
                FJEVNO: this.data.FJEVNO,
                FUND_SCODE: this.data.FUND_SCODE,
                fiscalyear: this.data.fiscalyear
                }
                axios.post(url, payload).then((response) => {
                    let data = response.data;

                    this.jevd = data;
                })
        },

    // getTotal()
    //     {
    //         var self = this;
    //             this.post('/jevd/credit-debit-total', {FJEVNO: this.jevdDetails.FJEVNO , FUND_SCODE:  this.jevdDetails.FUND_SCODE, fiscalyear: this.jevdDetails.fiscalyear}).then(response => {
    //                 this.total = response.data;
    //                 self.isFullyLoaded = true;
    //             })
    //     }
    },

    // watch: {
    //     refreshTable: function() {
    //         this.getjevdData()
    //     },
    // },
}
</script>

<style>

</style>