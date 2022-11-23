<template>
    <div class="row gap-10 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle}}</h3>
            <back-button :backToURL="'/jevh/index'"></back-button>
        </div>
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
                                                        <p class="col-form-label">{{ jevtype[data.fjevtyp] }}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-12">
                                                <div class="row">
                                                    <div class="col-sm-4">
                                                        <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>FUND:</b></label>
                                                    </div>
                                                    <div class="col-sm-8">
                                                        <p class="col-form-label">{{ data.fund_scode }}</p>
                                                    </div>
                                                </div> 
                                            </div>
                                            <div class="col-sm-12">
                                                <div class="row">
                                                    <div class="col-sm-4">
                                                        <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>JEV No.:</b></label>
                                                    </div>
                                                    <div class="col-sm-8">
                                                        <p class="col-form-label">{{ data.fjevno }}</p>
                                                    </div>
                                                </div> 
                                            </div>
                                            <div class="col-sm-12">
                                                <div class="row">
                                                    <div class="col-sm-4">
                                                        <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>JEV Date:</b></label>
                                                    </div>
                                                    <div class="col-sm-8">
                                                        <p class="col-form-label">{{ data.fjevdate }}</p>
                                                    </div>
                                                </div> 
                                            </div>
                                            <div class="col-sm-12">
                                                <div class="row">
                                                    <div class="col-sm-4">
                                                        <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>Check:</b></label>
                                                    </div>
                                                    <div class="col-sm-8">
                                                        <p class="col-form-label">{{ data.fchkno }}</p>
                                                    </div>
                                                </div> 
                                            </div>
                                            <div class="col-sm-12">
                                                <div class="row">
                                                    <div class="col-sm-4">
                                                        <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>Ref#:</b></label>
                                                    </div>
                                                    <div class="col-sm-8">
                                                        <p class="col-form-label">{{ data.frefno }}</p>
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
                                                        <p class="col-form-label">{{ data.fpayee }}</p>
                                                    </div>
                                                </div> 
                                            </div>
                                            <div class="col-sm-12">
                                                <div class="row">
                                                    <div class="col-sm-4">
                                                        <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>Prepared By:</b></label>
                                                    </div>
                                                    <div class="col-sm-8">
                                                        <p class="col-form-label">{{ data.fprepby }}</p>
                                                    </div>
                                                </div> 
                                            </div>
                                            <div class="col-sm-12">
                                                <div class="row">
                                                    <div class="col-sm-4">
                                                        <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>Position:</b></label>
                                                    </div>
                                                    <div class="col-sm-8">
                                                        <p class="col-form-label">{{ data.fprepd }}</p>
                                                    </div>
                                                </div> 
                                            </div>
                                            <div class="col-sm-12">
                                                <div class="row">
                                                    <div class="col-sm-4">
                                                        <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>Aprroved By:</b></label>
                                                    </div>
                                                    <div class="col-sm-8">
                                                        <p class="col-form-label">{{ data.fappvby }}</p>
                                                    </div>
                                                </div> 
                                            </div>
                                            <div class="col-sm-12">
                                                <div class="row">
                                                    <div class="col-sm-4">
                                                        <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>Position:</b></label>
                                                    </div>
                                                    <div class="col-sm-8">
                                                        <p class="col-form-label">{{ data.fappvd }}</p>
                                                    </div>
                                                </div> 
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="col-sm-12 form-floating">                               
                                                <textarea class="col-form-label form-control" style="height: 200px" readonly v-model="data.fremk"></textarea>
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
                            <table class="table table-hover">
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
                                        <!-- <th scope="col" style="width: 30%"></th> -->
                                        <th scope="col" style="text-align: right">Action</th>
                                    </tr>
                                    
                                </thead>
                                <tbody>
                                    <tr v-for="item in jevd1" :key="item.index">
                                        <td>{{ item.FRESPCTR }}</td>
                                        <td>{{ item.FACTCODE }}</td>
                                        <td>{{ item.FTITLE }}</td>
                                        <td>{{ item.FSUBCDE }}</td>
                                        <td>{{ item.FSTITLE }}</td>
                                        <td>{{ item.FSUBCDE2 }}</td>
                                        <td>{{ item.FSTITLE2 }}</td>
                                        <td>{{ item.FVOUCHNO }}</td>
                                        <td>{{ item.FALOBNO }}</td>
                                        <td>{{ item.FPRNO }}</td>
                                        <td>{{ item.jevdDebit }}</td>
                                        <td>{{ item.jevdCredit }}</td>
                                        <td>{{ item.FREMARKS }}</td>
                                        <td style="text-align: right">
                                            <div class="dropdown dropstart">
                                                <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                                    </svg>
                                                </button>

                                                <ul class="dropdown-menu action-dropdown" aria-labelledby="dropdownMenuButton1">
                                                    <li><button class="dropdown-item" @click="editJevD(item.recid)">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                                        </svg> Edit</button></li>

                                                    <li> <hr class="dropdown-divider action-divider"></li>
                                                        <li><Link class="text-danger dropdown-item" @click="deleteJevd(item.recid)">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                                        </svg> Delete </Link></li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                <tr>
                                    <td colspan="6"></td>
                                    <td colspan="2" class="text-end"><b>Total Debit</b></td>
                                    <td colspan="2"><b>{{ totalDebit }}</b></td>
                                    <td colspan="2" class="text-end"><b>Total Credit</b></td>
                                    <td colspan="2"><b>{{ totalCredit }}</b></td>
                                </tr>
                                    <tr v-if="totalCredit != totalDebit">
                                       <td colspan="9"></td>
                                       <td colspan="5"><div class="fs-6 c-red text-danger">Debit is not equal to credit!!!</div></td>
                                   </tr>
                            </tfoot>
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
 
                                    <div class="fs-6 c-red text-danger" v-if="form.errors.FACTCODE"> {{form.errors.FACTCODE}}</div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 ">
                                    <label class="col-form-label"><b>Sub Code</b></label>
                                    <select class="form-select" v-model="form.FSUBCDE">
                                    <option v-for="item in subcode1" :value="item.FSUBCDE" :key="item.recid"> {{ item.FSTITLE}} </option></select>
                                    <div class="text-danger" v-if="form.errors.FSUBCDE"> {{form.errors.FSUBCDE}}</div>
                                </div>

                                <div class="col-md-6">
                                    <label class="col-form-label"><b>Sub Code2</b></label>
                                    <select class="form-select" v-model="form.FSUBCDE2">
                                    <option v-for="item in subcode2" :value="item.FSUBCDE2" :key="item.recid">{{item.FSTITLE2}}</option></select>
                                    <div class="text-danger" v-if="form.errors.FSUBCDE2"> {{form.errors.FSUBCDE2}}</div>
                                </div>
                            </div>
    
                            <label class="col-mb-3 col-form-label"><b>Debit</b></label>
                            <input type="text" v-model="form.FDEBIT" class="form-control" autocomplete="chrome-off">
                            <div class="fs-6 c-red text-danger" v-if="form.errors.FDEBIT"> {{form.errors.FDEBIT}}</div>
    
                            <label class="col-mb-3 col-form-label"><b>Credit</b></label>
                            <input type="text" v-model="form.FCREDIT" class="form-control" autocomplete="chrome-off">
                            <div class="fs-6 c-red text-danger" v-if="form.errors.FCREDIT"> {{form.errors.FCREDIT}}</div>
    
                            <label class="col-mb-3 col-form-label"><b>Description</b></label>
                                <textarea class="form-control" v-model="form.FREMARKS" id="floatingTextarea2" style="height:105px;"></textarea> 
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-primary" v-if="pageTitle === 'Create'" :disabled="isDisabled"> Add{{form.processing ? 'ing...':''}}</button>
                            <button type="submit" class="btn btn-primary" v-if="pageTitle === 'Edit'" :disabled="isDisabled">Update</button>
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
        jevd1:Array,
        totalCredit: Number,
        totalDebit: Number
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
            jevd:{},
            factcodes:{},
            subcode1: {},
            subcode2: {},
            form: useForm ({
                fiscalyear: this.data.fiscalyear,
                FUND_SCODE: this.data.fund_scode,
                FJEVNO: this.data.fjevno,
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
            }),
            jevdData:{},
            total:{},
            pageTitle: "",
            isDisabled: false,
            recid_to_update:null
        }
    },

    async mounted() {
        this.getChartAccount(),
        this.getSubCode1()
        this.getSubCode2(),
        // this.getjevdData(),
        
        await this.getTotal()

        if( !!this.editData ){
            this.form.FRESPCTR = this.jevdData.FRESPCTR
            this.form.FACTCODE = this.jevdData.FACTCODE
            this.form.FSUBCDE = this.jevdData.FSUBCDE
            this.form.FSUBCDE2 = this.jevdData.FSUBCDE2
            this.form.FALOBNO = this.jevdData.FALOBNO
            this.form.FVOUCHNO = this.jevdData.FVOUCHNO
            this.form.FPRNO = this.jevdData.FPRNO
            this.form.FDEBIT = this.jevdData.FDEBIT
            this.form.FCREDIT = this.jevdData.FCREDIT
            this.form.FREMARKS = this.jevdData.FCREDIT
            this.form.recid = this.jevdData.recid
        } else {
            this.pageTitle = 'Create'
        }
    },

    watch: {
        'jevdData': function(value) {
            this.getSubCode1()
            this.getSubCode2()
        },
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
        if( this.pageTitle == 'Create')
        {
            this.form.post("/jevd/", {

                    onSuccess: () => {

                        this.form.reset();
                        
                    }
                }
            );
        } else {
            this.form.patch('/jevh/jevd-update/'+this.recid_to_update, {
                onFinish: visit => {
                    this.$inertia.visit('/jevh/jevd-create/'+this.data.recid)
                } 
            });
        }

    },
    editJevD(id) {
            axios.get('/jevd/'+id+'/edit').then(response => {
                this.recid_to_update = id;
                this.jevdData = response.data
                this.form.FRESPCTR = response.data.FRESPCTR 
                this.form.FACTCODE = response.data.FACTCODE
                this.form.FSUBCDE = response.data.FSUBCDE
                this.form.FSUBCDE2 = response.data.FSUBCDE2
                this.form.FALOBNO = response.data.FALOBNO
                this.form.FVOUCHNO = response.data.FVOUCHNO
                this.form.FPRNO = response.data.FPRNO
                this.form.FDEBIT = response.data.FDEBIT
                this.form.FCREDIT = response.data.FCREDIT
                this.form.FREMARKS = response.data.FREMARKS

                this.pageTitle = 'Edit'
                });
           
    },
    getjevdData(url = "/jevd/get-jevdData"){
            let payload = {
                fjevno: this.data.fjevno,
                fund_scode: this.data.fund_scode,
                fiscalyear: this.data.fiscalyear
                }
                axios.post(url, payload).then((response) => {
                    let data = response.data;

                    this.jevd = data;
                })
        },

    deleteJevd (id)
    {
        let text = "Warning!\Are you sure you want to Delete this Record?";
            if(confirm(text) == true) {
                this.$inertia.delete("/jevd/" + id, {
                    onFinish: visit => {
                        this.$inertia.visit('/jevh/jevd-create/'+this.data.recid)
                    }});
            }
            
    },

    getTotal()
        {
            var self = this;
                axios.post('/jevd/credit-debit-total', 
                {FJEVNO: this.data.FJEVNO , FUND_SCODE:  
                    this.data.FUND_SCODE, fiscalyear: 
                    this.data.fiscalyear}).then(response => {
                    this.total = response.data;
                    self.isFullyLoaded = true;
                })
        },

    // closeJev(){
    //     if(this.total.totalCredit != this.total.totalDebit){
    //         this.form.errors("Credit is not equal to credit", 'error')
    //     }else{
    //         this.$inertia.get('/jevh/index');
    //     }
    // }
    },
}
</script>

<style>

</style>