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
                                    <option v-for="(items,index) in jevtype" :value="items.value" :key="index" aria-placeholder="Select FUND CODE"> {{ items.name }}</option>
                                </select>
                                <div class="fs-6 c-red-500">{{ form.errors['jevh.fjevtyp'] }}</div>
                            </div>
                        </div>
                        <label class="col-form-label"><b>Fund Details Code</b></label>
                            <select class="form-select" v-model="form.jevh.fund_scode">
                                <option v-for="items in funds" :value="items.FUND_SCODE" :key="items.recid">{{ items.FUNDDETAIL_NAME }}</option>
                            </select>
                            <div class="fs-6 c-red-500">{{ form.errors['jevh.fund_scode'] }}</div>
                        <div class="row">
                            <div class="col-md-6">
                                <label class="col-form-label"><b>JEV Number</b></label>
                                <input type="text" v-model="form.jevh.fjevno" class="form-control" autocomplete="chrome-off">
                                <div class="text-danger">{{ form.errors['jevh.fjevno'] }}</div>
                            </div>
                            <div class="col-md-6">
                                <label class="col-form-label"><b>JEV Date</b></label>
                                <input type="date" v-model="form.jevh.fjevdate" class="form-control" autocomplete="chrome-off">
                                <div class="text-danger">{{ form.errors['jevh.fjevdate'] }}</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label class="col-form-label"><b>Check No</b></label>
                                <input type="text" v-model="form.jevh.fchkno" class="form-control" autocomplete="chrome-off">
                                <div class="fs-6 c-red-500">{{ form.errors['jevh.fchkno'] }}</div>
                            </div>
                            <div class="col-md">
                                <label class="col-form-label"><b>Ref #</b></label>
                                <input type="text" v-model="form.jevh.frefno" class="form-control" autocomplete="chrome-off">
                                <div class="fs-6 c-red-500">{{ form.errors['jevh.frefno'] }}</div>
                            </div>
                        </div>
                        <label class="col-mb-3 col-form-label"><b>Payee</b></label>
                        <input type="text" v-model="form.jevh.fpayee" class="form-control" autocomplete="chrome-off">
                        <div class="fs-6 c-red-500">{{ form.errors['jevh.fpayee'] }}</div>

                        <label class="col-mb-3 col-form-label"><b>Particulars</b></label>
                        <textarea 
                            class="form-control" 
                            v-model="form.jevh.fremk" 
                            placeholder="Write here" 
                            id="floatingTextarea2" 
                            style="height:105px;">
                        </textarea>
                        <div class="fs-6 c-red-500">{{ form.errors['jevh.fremk'] }}</div>
                        <label class="col-mb-3 col-form-label"><b>Prepared by:</b></label>

                        <input type="text" v-model="form.jevh.fprepby" class="form-control" autocomplete="chrome-off"/>
                        <div class="fs-6 c-red-500">{{ form.errors['jevh.fprepby'] }}</div>

                        <label class="col-mb-3 col-form-label"><b>Position</b></label>
                        <input type="text" v-model="form.jevh.fprepd" class="form-control" autocomplete="chrome-off"/>
                        <div class="fs-6 c-red-500">{{ form.errors['jevh.fprepd'] }}</div>

                        <label class="col-mb-3 col-form-label"><b>Approved by:</b></label>
                        <input type="text" v-model="form.jevh.fappvby" class="form-control" autocomplete="chrome-off"/>
                        <div class="fs-6 c-red-500" >{{ form.errors['jevh.fappvby'] }}</div>

                        <label class="col-mb-3 col-form-label"><b>Position</b></label>
                        <input type="text" v-model="form.jevh.fappvd" class="form-control" autocomplete="chrome-off"/>
                        <div class="fs-6 c-red-500" >{{ form.errors['jevh.fappvd'] }}</div>
                    </div>
                </form>
            </div>
        </div>
        <div class="col-md-9">
            <div class="form-group row">
                <div class="col-12 mB-2">
                    <div class="bgc-white bd table-responsive-sm shadow my-custom-scrollbar">
                        <table class="table table-striped table-hover table-scroll">
                            <thead class="table-warning">
                                <tr>
                                    <th scope="col">RespCtr</th>
                                    <th scope="col">ActCode/Title</th>
                                    <th scope="col">SubCode/Title</th>
                                    <th scope="col">SubCode2/Title</th>
                                    <th scope="col">Voucher</th>
                                    <th scope="col">CAFOA#</th>
                                    <th scope="col">PR#</th>
                                    <th scope="col">Property#</th>
                                    <th scope="col">Debit</th>
                                    <th scope="col">Credit</th>
                                    <th scope="col">Remarks</th>
                                    <!-- <th scope="col" style="width: 10%"></th> -->
                                    <th scope="col" style="text-align: right">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index ) in form.jevd" :key="index">
                                    <td scope="col">{{ item.FRESPCTR }}</td>
                                    <td scope="col">{{ `${item.FACTCODE}: ${item.FTITLE}` }}</td>
                                    <td scope="col">{{ item.FSUBCDE ? `${item.FSUBCDE}: ${item.FSTITLE}` : "" }}</td>
                                    <td scope="col">{{ item.FSUBCDE2 ? `${item.FSUBCDE2}: ${item.FSTITLE2}` : "" }}</td>
                                    <td scope="col">{{ item.FVOUCHNO }}</td>
                                    <td scope="col">{{ item.FALOBNO }}</td>
                                    <td scope="col">{{ item.FPRNO }}</td>
                                    <td scope="col">{{ item.FPROPNO }}</td>
                                    <td scope="col">{{ item.FDEBIT }}</td>
                                    <td scope="col">{{ item.FCREDIT }}</td>
                                    <td scope="col">{{ item.FREMARKS }}</td>
                                    <td style="text-align: right" class="text-nowrap">
                                        <button class="btn btn-primary btn-sm mR-2" @click="editJevD(item,index)">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                            </svg>
                                        </button>
                                    
                                        <button class="btn btn-danger btn-sm mL-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" @click="deleteJevd(index)" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="4" class="fs-6 c-red text-danger" style="text-align: right"><span v-if="totalCredit != totalDebit"><b>Debit is not equal to credit!!!</b></span></td>
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
                                <!-- <tr v-if="totalCredit != totalDebit">
                                    <td colspan="9"></td>
                                    <td colspan="5"><div class="fs-6 c-red text-danger"><b>Debit is not equal to credit!!!</b></div></td>
                                </tr> -->
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

                                        <label class="col-mb-3 col-form-label"><b>CAFOA #</b></label>
                                        <input type="text" v-model="jevdForm.FALOBNO" class="form-control" autocomplete="chrome-off">
                                    </div>
                                    <div class="col-md-5">
                                        <label class="col-form-label"><b>Act Code/Title</b></label>
                                        <select2 id="FACTCODE" v-model="jevdForm.FACTCODE" :options="factcodes" placeholder="Select Account Code" @select="getSubCode1($event), getSubCode2()"></select2>

                                        <div class="fs-6 c-red text-danger" v-if="jevdForm.errors.FACTCODE"> {{jevdForm.errors.FACTCODE}}</div>

                                        <label class="col-form-label"><b>Sub Code/Title</b></label>
                                        <select2 v-model="jevdForm.FSUBCDE" :options="subcode1" placeholder="Select Account Code First" @select="getFstitle($event, 'FSTITLE')"></select2>

                                        <div class="text-danger" v-if="jevdForm.errors.FSUBCDE"> {{jevdForm.errors.FSUBCDE}}</div>

                                        <label class="col-form-label"><b>Sub Code2/Title</b></label>
                                        <select2 v-model="jevdForm.FSUBCDE2" :options="subcode2" placeholder="Select Account Code First" @select="getFstitle($event, 'FSTITLE2')"></select2>

                                        <div class="text-danger" v-if="jevdForm.errors.FSUBCDE2"> {{jevdForm.errors.FSUBCDE2}}</div>
                                    </div>
                                    
                                    <div class="col-md-5">
                                        <label class="col-form-label"><b>Remarks</b></label>
                                        <textarea class="form-control" v-model="jevdForm.FREMARKS" rows="7" placeholder="Write here..."></textarea>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-2">
                                        <label class="col-form-label"><b>PR #</b></label>
                                        <input type="text" v-model="jevdForm.FPRNO" class="form-control" autocomplete="chrome-off"> 
                                    </div>
                                    <div class="col-md-5">
                                        <div class="row">

                                            <div class="col-6">
                                                <label class="col-form-label"><b>Property #</b></label>
                                                <input type="text" v-model="jevdForm.FPROPNO" class="form-control" autocomplete="chrome-off"> 
                                            </div>
                                            <div class="col-6">
                                                
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
                                        </div>
                                    </div>
                                    <div class="col-md-5">
                                        <label class="col-mb-6 col-form-label"><b>Credit</b></label>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <input 
                                                    type="number" 
                                                    v-model="jevdForm.FCREDIT" 
                                                    class="form-control"
                                                    autocomplete="chrome-off"
                                                    :disabled="jevdForm.FDEBIT != ''"
                                                    :placeholder="jevdForm.FDEBIT != ''? `Unable to input Credit` : ``"
                                                >
                                                <div class="fs-6 c-red text-danger" v-if="jevdForm.errors.FCREDIT"> {{jevdForm.errors.FCREDIT}}</div>
                                            </div>
                                            <div class="col-md-4">
                                                <button type="button" class="btn btn-primary" @click="addJevD()">{{ buttonJevd }}</button>
                                            </div>
                                        </div>
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
            funds: [],
            jevdForm: useForm({
                FRESPCTR:   "",
                FACTCODE:   "",
                FTITLE:     "",
                FSUBCDE:    "",
                FSTITLE:    "",
                FSUBCDE2:   "",
                FSTITLE2:   "",
                FALOBNO:    "",
                FVOUCHNO:   "",
                FPRNO:      "",
                FDEBIT:     "",
                FCREDIT:    "",
                FREMARKS:   "",
                FPROPNO:   "",
                isSubcode1: '',
                isSubcode2: '',
            }),
            factcodes:[],
            subcode1: [],
            subcode2: [],
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
                    fprepby:    this.$page.props.auth.user.username,
                    fprepd:     "",
                    fappvby:    "Ariel D. Mandawe",
                    fappvd:     "Accounting Officer",
                    is_balance: "",
               },
               jevd: [],
            }),


            pageTitle: 'Create',
            isDisabled: false,
            isEdit: false
        }
    },

    mounted() {
        this.getFundDetail()
        this.getChartAccount()
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
    computed: {
        buttonJevd: function() {
            return !this.isEdit ? "Add" : "Update"
        },
        totalDebit () {
            return _.sumBy(this.form.jevd, 'FDEBIT');
        },
        totalCredit () {
            return _.sumBy(this.form.jevd, 'FCREDIT');
        }
    },

    methods: {
        getFstitle(e, _model) {
            // console.log(e)
            this.jevdForm[_model] = e.fs_title
        }, 

        getFundDetail() {
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
            // console.log(e.jtitle);
            this.jevdForm.FTITLE = e.jtitle;
                axios.post('/jevd/getSubCode1', {FACTCODE: this.jevdForm.FACTCODE}).then( response => {
                this.subcode1 = response.data
                this.jevdForm.isSubcode1 = response.data.length != 0;
            })
        },

        getSubCode2(e) {
            // console.log(e)
            axios.post('/jevd/getSubCode2', {FACTCODE: this.jevdForm.FACTCODE}).then( response => {
                this.subcode2 = response.data
                this.jevdForm.isSubcode2 = response.data.length != 0;
                
            })
        },
        submit () {
            if (this.totalDebit != this.totalCredit) {
                let text =`Warning! Debit and Credit not balance!`;
                alert(text);
                return false;
            }
           

            if(this.pageTitle == 'Create')
                {
                    this.form.post("/jevh/store-jev", {
                        onError: (data) => {

                                if (Object.keys(data).length == 1 && data.jevd) 
                                {
                                    alert(`Needs to add journal entry voucher details`)
                                }
                            }
                        
                        }
                    );
            }

        },
        addJevD(){
            var data = {FTITLE: this.jevdForm.FTITLE};
            _.assign(data, {
                FRESPCTR: this.jevdForm.FRESPCTR,
                FACTCODE: this.jevdForm.FACTCODE,
                FSUBCDE: this.jevdForm.FSUBCDE,
                FSTITLE: this.jevdForm.FSTITLE,
                FSUBCDE2: this.jevdForm.FSUBCDE2,
                FSTITLE2: this.jevdForm.FSTITLE2,
                FALOBNO: this.jevdForm.FALOBNO,
                FVOUCHNO: this.jevdForm.FVOUCHNO,
                FPRNO: this.jevdForm.FPRNO,
                FDEBIT: this.jevdForm.FDEBIT ? this.jevdForm.FDEBIT : 0,
                FCREDIT: this.jevdForm.FCREDIT ? this.jevdForm.FCREDIT : 0,
                FREMARKS: this.jevdForm.FREMARKS,
                FPROPNO: this.jevdForm.FPROPNO,
                isSubcode1: this.jevdForm.isSubcode1,
                isSubcode2: this.jevdForm.isSubcode2
            })
            // console.log(data)
            this.jevdForm.post('/jevd/validate', {
                onSuccess: () => {
                    if (!this.isEdit) {
                        this.form.jevd.push(data)
                    } else {
                        _.assign(this.form.jevd[this.jevdForm.index], data)
                        this.isEdit = false 
                    }
                    this.jevdForm.reset()
                    this.form.clearErrors()
                },
            })
           
        },
        async editJevD(item, index) {
            this.isEdit = true
            _.assign(this.jevdForm, {index:index, FACTCODE: item.FACTCODE})
            await this.getSubCode1({FACTCODE:this.jevdForm.FACTCODE});
            _.assign(this.jevdForm, item);
            
        },

        deleteJevd (index)
        {
            let text = "Warning!\Are you sure you want to Delete this Record?";
            if(confirm(text) == true) {

                this.form.jevd.splice(index,1);
                
            }
            this.jevdForm.reset() 
        },
    },
}
</script>
<style scoped>
    .table-scroll tfoot,
    .table-scroll tfoot th,
    .table-scroll tfoot td {
        position: -webkit-sticky;
        position: sticky;
        bottom: 0;
        background: rgb(47, 54, 95);
        color: #fff;
        z-index:4;
    }
    .table-scroll thead th {
        background: rgb(6, 13, 50);
        color: #fff;
        position: -webkit-sticky;
        position: sticky;
        top: 0;
    }
</style>