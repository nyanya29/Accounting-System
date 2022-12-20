<template>
<div class="row gap-10 masonry pos-r">
    <div class="peers fxw-nw jc-sb ai-c">
        <h3>{{ pageTitle}}</h3>
        <back-button :backToURL="'/jevh/index'"></back-button>
    </div>
    <div class="col-md-3">
            <div class="card card shadow">
                <form>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6 ">
                                    <label class="col-form-label"><b>Fiscal Year</b></label>
                                    <input type="text" v-model="form.jevh.fiscalyear" class="form-control" autocomplete="chrome-off"> 
                                </div>
                            <div class="col-md-6">
                                <label class="col-form-label"><b>Jev Type</b></label>
                                <select  class="form-select" v-model="form.jevh.fjevtyp">
                                    <option v-for="(items,index) in jevtype" :value="items.value" :key="index"> {{ items.name }}</option>
                                </select>
                                <div class="fs-6 c-red-500" v-if="form.errors.fjevtyp">{{ form.errors.fjevtyp }}</div>
                            </div>
                        </div>
                        <label class="col-form-label"><b>Fund Details Code</b></label>
                            <select class="form-select" v-model="form.jevh.fund_scode">
                                <option v-for="items in funds" :value="items.FUND_SCODE" :key="items.recid">{{ items.FUNDDETAIL_NAME }}</option>
                            </select>
                            <div class="fs-6 c-red-500" v-if="form.errors.fund_scode">{{ form.errors.fund_scode }}</div>
                        <div class="row">
                            <div class="col-md-6">
                                <label class="col-form-label"><b>JEV Number</b></label>
                                <input type="text" v-model="form.jevh.fjevno" class="form-control" autocomplete="chrome-off">
                                <div class="text-danger" v-if="form.errors.fjevno">{{ form.errors.fjevno }}</div>
                            </div>
                            <div class="col-md-6">
                                <label class="col-form-label"><b>JEV Date</b></label>
                                <input type="date" v-model="form.jevh.fjevdate" class="form-control" autocomplete="chrome-off">
                                <div class="text-danger" v-if="form.errors.fjevdate">{{ form.errors.fjevdate }}</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label class="col-form-label"><b>Check No</b></label>
                                <input type="text" v-model="form.jevh.fchkno" class="form-control" autocomplete="chrome-off">
                                <div class="fs-6 c-red-500" v-if="form.errors.fchkno">{{ form.errors.fchkno }}</div>
                            </div>
                            <div class="col-md">
                                <label class="col-form-label"><b>Ref #</b></label>
                                <input type="text" v-model="form.jevh.frefno" class="form-control" autocomplete="chrome-off">
                                <div class="fs-6 c-red-500" v-if="form.errors.frefno">{{ form.errors.frefno }}</div>
                            </div>
                        </div>
                        <label class="col-mb-3 col-form-label"><b>Payee</b></label>
                        <input type="text" v-model="form.jevh.fpayee" class="form-control" autocomplete="chrome-off">
                        <div class="fs-6 c-red-500" v-if="form.errors.fpayee">{{ form.errors.fpayee }}</div>

                        <label class="col-mb-3 col-form-label"><b>Description</b></label>
                        <textarea 
                            class="form-control" 
                            v-model="form.jevh.fremk" 
                            placeholder="Write here" 
                            id="floatingTextarea2" 
                            style="height:105px;">
                        </textarea>
                        <div class="fs-6 c-red-500" v-if="form.errors.fremk">{{ form.errors.fremk }}</div>
                        <label class="col-mb-3 col-form-label"><b>Prepared by:</b></label>

                        <input type="text" v-model="form.jevh.fprepby" class="form-control" autocomplete="chrome-off"/>
                        <div class="fs-6 c-red-500" v-if="form.errors.fprepby">{{ form.errors.fprepby }}</div>

                        <label class="col-mb-3 col-form-label"><b>Position</b></label>
                        <input type="text" v-model="form.jevh.fprepd" class="form-control" autocomplete="chrome-off"/>
                        <div class="fs-6 c-red-500" v-if="form.errors.fprepd">{{ form.errors.fprepd }}</div>

                        <label class="col-mb-3 col-form-label"><b>Approved by:</b></label>
                        <input type="text" v-model="form.jevh.fappvby" class="form-control" autocomplete="chrome-off"/>
                        <div class="fs-6 c-red-500" v-if="form.errors.fappvby">{{ form.errors.fappvby }}</div>

                        <label class="col-mb-3 col-form-label"><b>Position</b></label>
                        <input type="text" v-model="form.jevh.fappvd" class="form-control" autocomplete="chrome-off"/>
                        <div class="fs-6 c-red-500" v-if="form.errors.fappvd">{{ form.errors.fappvd }}</div>
                    </div>
                </form>
            </div>
        </div>
        <div class="col-md-9">
            <div class="form-group row p-3">
                <div class="col-12">
                    <div class="bgc-white p-20 bd table-responsive shadow">
                        <table class="table table-hover" style="height: 360px">
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
                                <tr v-for="(item, index ) in form.jevd" :key="item.index">
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
                                    <td>{{ item.FDEBIT }}</td>
                                    <td>{{ item.FCREDIT }}</td>
                                    <td>{{ item.FREMARKS }}</td>
                                    <td style="text-align: right">
                                        <div class="dropdown dropstart">
                                            <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                                </svg>
                                            </button>

                                            <ul class="dropdown-menu action-dropdown" aria-labelledby="dropdownMenuButton1">
                                                <li><button class="dropdown-item" @click="editJevD(index)">
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
                                <td colspan="2">
                                    <b>
                                        <to-currency :money="totalDebit"></to-currency>
                                    </b>
                                </td>
                                <td colspan="2" class="text-end"><b>Total Credit</b></td>
                                <td colspan="2">
                                    <b>
                                        <to-currency :money="totalCredit"></to-currency>
                                    </b>
                                </td>
                            </tr>
                            <tr v-if="totalCredit != totalDebit">
                                <td colspan="9"></td>
                                <td colspan="5"><div class="fs-6 c-red text-danger">Debit is not equal to credit!!!</div></td>
                            </tr>
                        </tfoot>
                        </table>
                    </div>
                </div>
                <div class="col-12 mb-1">
                    <div class="card card shadow">
                        <div class="card-body">
                            <form @submit.prevent="submit()">
                                <div class="row">
                                    <div class="col-md-2">
                                        <label class="col-form-label"><b>RespCenter</b></label>
                                        <input type="text" v-model="jevdForm.FRESPCTR" class="form-control" autocomplete="chrome-off">

                                        <label class="col-form-label"><b>Voucher #</b></label>
                                        <input type="text" v-model="jevdForm.FVOUCHNO" class="form-control" autocomplete="chrome-off">

                                        <label class="col-mb-3 col-form-label"><b>OBR #</b></label>
                                        <input type="text" v-model="jevdForm.FALOBNO" class="form-control" autocomplete="chrome-off">

                                    </div>
                                    <div class="col-md-5">
                                        <label class="col-form-label"><b>Act Code/Title</b></label>
                                        <select2 id="FACTCODE" v-model="jevdForm.FACTCODE" :options="factcodes" placeholder="Select Account Code" @select="getSubCode1($event), getSubCode2()"></select2>

                                        <div class="fs-6 c-red text-danger" v-if="jevdForm.errors.FACTCODE"> {{jevdForm.errors.FACTCODE}}</div>

                                        <label class="col-form-label"><b>Sub Code/Title</b></label>
                                        <select2 v-model="jevdForm.FSUBCDE" :options="subcode1" placeholder="Select Account Code First"></select2>

                                        <div class="text-danger" v-if="jevdForm.errors.FSUBCDE"> {{jevdForm.errors.FSUBCDE}}</div>

                                        <label class="col-form-label"><b>Sub Code2/Title</b></label>
                                        <select2 v-model="jevdForm.FSUBCDE2" :options="subcode2" placeholder="Select Account Code First"></select2>

                                        <div class="text-danger" v-if="jevdForm.errors.FSUBCDE2"> {{jevdForm.errors.FSUBCDE2}}</div>
                                    </div>
                                    
                                    <div class="col-md-5">
                                        <label class="col-form-label"><b>Remarks</b></label>
                                        <textarea class="form-control" v-model="jevdForm.FREMARKS" rows="7"></textarea>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-2">
                                        <label class="col-form-label"><b>PR #</b></label>
                                        <input type="text" v-model="jevdForm.FPRNO" class="form-control" autocomplete="chrome-off"> 
                                    </div>
                                    <div class="col-md-4">
                                        <label class="col-mb-6 col-form-label"><b>Debit</b></label>
                                        <input 
                                            type="number" 
                                            v-model="jevdForm.FDEBIT" 
                                            class="form-control" 
                                            autocomplete="chrome-off" 
                                            :disabled="jevdForm.FCREDIT != ''"
                                            :placeholder="jevdForm.FCREDIT != '' ? `Unable to input Debit` : ``"
                                        >
                                        <div class="fs-6 c-red text-danger" v-if="jevdForm.errors.FDEBIT"> {{jevdForm.errors.FDEBIT}}</div>
                                    </div>
                                    <div class="col-md-4">
                                        <label class="col-mb-6 col-form-label"><b>Credit</b></label>
                                        <input 
                                            type="number" 
                                            v-model="jevdForm.FCREDIT" 
                                            class="form-control"
                                            autocomplete="chrome-off"
                                            :disabled="jevdForm.FDEBIT != ''"
                                            :placeholder="jevdForm.FDEBIT != '' ? `Unable to input Credit` : ``"
                                        >
                                        <div class="fs-6 c-red text-danger" v-if="jevdForm.errors.FCREDIT"> {{jevdForm.errors.FCREDIT}}</div>
                                    </div>
                                    <div class="col-2">
                                        <button type="button" class="btn btn-primary" v-if="pageTitle === 'Create'" :disabled="isDisabled" @click="addJevD()"> Add{{form.jevd.processing ? 'ing...':''}}</button>
                                        <button type="button" class="btn btn-primary" v-if="pageTitle === 'Edit'" :disabled="isDisabled" @click="saveAll()">Update</button>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="submit" class="btn btn-primary">Save All</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>
<script>
import { useForm } from '@inertiajs/inertia-vue3';
import ToCurrency from '../../Shared/ToCurrency.vue';

export default {
  components: { ToCurrency },
    props:{
        data:Object,
        jevd1:Array,
        totalCredit: Number,
        totalDebit: Number,
        data1:Object
    },
    data () {
        return {
            jevtype:[
                {value:1, name:"Collection"},
                {value:2, name:"Check Disbursement"},
                {value:3, name:"Cash Disbursement"},
                {value:4, name:"General"},
                {value:5, name:"ADA"},
                {value:6, name:"Procurement"},
            ],
            funds: "",
            // jevd:{},
            jevd_temp: [],
            jevdForm: useForm({
                FRESPCTR:   "",
                FACTCODE:   "",
                FSUBCDE:    "",
                FSUBCDE2:   "",
                FALOBNO:    "",
                FVOUCHNO:   "",
                FPRNO:      "",
                FDEBIT:     "",
                FCREDIT:    "",
                FREMARKS:   "",
                isSubcode1: '',
                isSubcode2: '',
            }),
            rowIndex_jevD: "",
            factcodes:[],
            subcode1: [],
            subcode2: [],
            addMode :true,
            temp_account_title:"",
            form: useForm({
               jevh: {
                    fiscalyear: new Date().getFullYear(),
                    fund_scode: "",
                    fjevno:     "",
                    fjevtyp:    "",
                    fjevdate:   "",
                    fpayee:     "",
                    fchkno:     "",
                    fremk:      "",
                    frefno:     "",
                    fprepby:    "",
                    fprepd:     "",
                    fappvby:    "",
                    fappvd:     "",
                    // recid:"",
               },
               jevd: "",
            }),
            
            // jevdData:{},
            // total:{},
            pageTitle: 'Create',
            isDisabled: false,
            recid_to_update:null,
        }
    },

    mounted() {
        this.getFundDetail(),
        
        this.getChartAccount()

        if( !!this.editData ){
            this.form.jevd.FRESPCTR = this.jevdData.FRESPCTR
            this.form.jevd.FACTCODE = this.jevdData.FACTCODE
            this.form.jevd.FSUBCDE = this.jevdData.FSUBCDE
            this.form.jevd.FSUBCDE2 = this.jevdData.FSUBCDE2
            this.form.jevd.FALOBNO = this.jevdData.FALOBNO
            this.form.jevd.FVOUCHNO = this.jevdData.FVOUCHNO
            this.form.jevd.FPRNO = this.jevdData.FPRNO
            this.form.jevd.FDEBIT = this.jevdData.FDEBIT
            this.form.jevd.FCREDIT = this.jevdData.FCREDIT
            this.form.jevd.FREMARKS = this.jevdData.FCREDIT
            this.form.jevd.recid = this.jevdData.recid
            
            this.getSubCode1()
            this.getSubCode2()
        } else {
            this.pageTitle = 'Create'
        }
    },

    watch: {
        // 'jevdData': function(value) {
        //     this.getSubCode1()
        //     this.getSubCode2()
        // },
        'jevdForm.FACTCODE': function(value) {
            this.jevdForm.FSUBCDE = ''
            this.jevdForm.FSUBCDE2 = ''
        },
    },
    methods: {
        getFundDetail () {
            axios.post('/jevh/getFundDetail').then(response => {
                this.funds = response.data
            })
        },
        getChartAccount() {
            axios.post('/jevd/getChartAccount').then(response => {
                this.factcodes = response.data
            })
        },
        getSubCode1(e) {
            this.temp_account_title = e.jtitle;
            // console.log(e.jtitle)
                axios.post('/jevd/getSubCode1', {FACTCODE: this.jevdForm.FACTCODE}).then( response => {
                this.subcode1 = response.data
                this.jevdForm.isSubcode1 = response.data.length != 0;
            })
        },
        getSubCode2() {
            axios.post('/jevd/getSubCode2', {FACTCODE: this.jevdForm.FACTCODE}).then( response => {
                this.subcode2 = response.data
                this.jevdForm.isSubcode2 = response.data.length != 0;
            })
        },
        submit () {
            this.form.jevd = this.jevd_temp;
            if( this.pageTitle == 'Create')
            {
                this.form.post("/jevh/store-jev", {
                        
                        // onSuccess: () => {

                        //     this.form.reset();
                            
                        // }
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
        addJevD(){
            if(this.addMode){

                this.jevdForm.post('/jevd/validate', {
                    onSuccess: () => {
                        this.form.jevd.push({
                            FRESPCTR: this.jevdForm.FRESPCTR,
                            FACTCODE: this.jevdForm.FACTCODE,
                            FTITLE: this.temp_account_title,
                            FSUBCDE: this.jevdForm.FSUBCDE,
                            FSUBCDE2: this.jevdForm.FSUBCDE2,
                            FALOBNO: this.jevdForm.FALOBNO,
                            FVOUCHNO: this.jevdForm.FVOUCHNO,
                            FPRNO: this.jevdForm.FPRNO,
                            FDEBIT: this.jevdForm.FDEBIT,
                            FCREDIT: this.jevdForm.FCREDIT,
                            FREMARKS: this.jevdForm.FREMARKS,
                            isSubcode1: this.jevdForm.isSubcode1,
                            isSubcode2: this.jevdForm.isSubcode2,
                       });
                       this.jevdForm.reset()
                    },

                })
            }
            if(!this.addMode){
                this.jevd_temp[this.rowIndex_jevD].FRESPCTR = this.form.jevd.FRESPCTR
                this.jevd_temp[this.rowIndex_jevD].FACTCODE = this.form.jevd.FACTCODE
                this.jevd_temp[this.rowIndex_jevD].FALOBNO = this.form.jevd.FALOBNO
                this.jevd_temp[this.rowIndex_jevD].FVOUCHNO = this.form.jevd.FVOUCHNO
                this.jevd_temp[this.rowIndex_jevD].FPRNO = this.form.jevd.FPRNO
            }
                this.addMode = true;
        },
        editJevD(id) {
            this.addMode = false;
            this.rowIndex_jevD = id;

            this.form.jevd.FRESPCTR = this.jevd_temp[id].FRESPCTR;
            this.form.jevd.FACTCODE = this.jevd_temp[id].FACTCODE;
            this.form.jevd.FALOBNO = this.jevd_temp[id].FALOBNO;
            this.form.jevd.FVOUCHNO = this.jevd_temp[id].FVOUCHNO;
            this.form.jevd.FPRNO = this.jevd_temp[id].FPRNO;
            // axios.get('/jevd/'+id+'/edit').then(response => {
            //     this.recid_to_update = id;
            //     this.jevdData = response.data
            //     this.form.FRESPCTR = response.data.FRESPCTR 
            //     this.form.FACTCODE = response.data.FACTCODE
            //     this.form.FSUBCDE = response.data.FSUBCDE
            //     this.form.FSUBCDE2 = response.data.FSUBCDE2
            //     this.form.FALOBNO = response.data.FALOBNO
            //     this.form.FVOUCHNO = response.data.FVOUCHNO
            //     this.form.FPRNO = response.data.FPRNO
            //     this.form.FDEBIT = response.data.FDEBIT
            //     this.form.FCREDIT = response.data.FCREDIT
            //     this.form.FREMARKS = response.data.FREMARKS

            //     this.pageTitle = 'Edit'
            //     });
            
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
    },
}
</script>