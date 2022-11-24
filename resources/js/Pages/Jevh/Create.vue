<template>
    <div class="row gap-10 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle}}</h3>
            <back-button :href="'/jevh'"></back-button> 
        </div>

        <div class="row justify-content-center">
            <div class="col-8">
                <div class="card">
                    <ul class="nav nav-tabs" id="myTab">
                        <li class="nav-item"> <a href="#jevh" class="nav-link active" data-bs-toggle="tab">Journal Entry Voucher</a></li>
                        <li class="nav-item"> <a href="#jevdTab" id="jevdLink" class="nav-link" data-bs-toggle="tab" :aria-disabled="isDisabled" :class="{'disabled':isDisabled}">Journal</a></li>
                    </ul>
                    <div class="card-body">
                        <div class="tab-content">
                            <div class="tab-pane fade show active" id="jevh">
                                <form @submit.prevent="">
                                    <div class="col-md-12">
                                        <div class="row">
                                            <div class="col">
                                            <label class="col-mb-3 col-form-label">Fiscal Year</label>
                                                <input type="text" v-model="form.fiscalyear" class="form-control" autocomplete="chrome-off"> 
                                            </div>

                                            <div class="col">
                                            <label class="col-mb-3 col-form-label">Fund Details Code</label>
                                                    <select class="form-select" v-model="form.FUND_SCODE">
                                                    <option v-for="items in funds" :value="items.FUND_SCODE" :key="items.recid">{{ items.FUNDDETAIL_NAME }}</option>
                                                    </select>
                                                    <div class="fs-6 c-red-500" v-if="form.errors.FUND_SCODE">{{ form.errors.FUND_SCODE }}</div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col">
                                                <label class="col-mb-3 col-form-label">Jev Type</label>
                                                    <select  class="form-select" v-model="form.FJEVTYP">
                                                    <option v-for="(items,index) in jevtype" :value="items.value" :key="index"> {{ items.name }}</option>
                                                    </select>
                                                    <div class="fs-6 c-red-500" v-if="form.errors.FJEVTYPE">{{ form.errors.FJEVTYPE }}</div>

                                            </div>
                                            <div class="col">
                                                <label class="col-mb-3 col-form-label">JEV Number</label>
                                                <input type="text" v-model="form.FJEVNO" class="form-control" autocomplete="chrome-off">
                                                <div class="fs-6 c-red-500" v-if="form.errors.FJEVNO">{{ form.errors.FJEVNO }}</div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col">
                                                <label class="col-mb-3 col-form-label">Payee</label>
                                                    <input type="text" v-model="form.FPAYEE" class="form-control" autocomplete="chrome-off">
                                            </div>

                                            <div class="col">
                                                <label class="col-mb-3 col-form-label">JEV Date</label>
                                                    <input type="date" v-model="form.FJEVDATE" class="form-control" autocomplete="chrome-off">
                                            </div>
                                            <div class="col">
                                                <label class="col-mb-3 col-form-label">Check No</label>
                                                    <input type="text" v-model="form.FCHKNO" class="form-control" autocomplete="chrome-off">
                                                    <div class="fs-6 c-red-500" v-if="form.errors.FCHKNO">{{ form.errors.FCHKNO }}</div>

                                            </div>
                                        </div>
                                        <div class="row">

                                            <div class="col">
                                                <label class="col-mb-3 col-form-label">Particulars</label>
                                                    <input type="text" v-model="form.FREMK" class="form-control" autocomplete="chrome-off">
                                            </div>
                                            <div class="col">
                                                <label class="col-mb-3 col-form-label">Ref #</label>
                                                    <input type="text" v-model="form.FREFNO" class="form-control" autocomplete="chrome-off">
                                            </div>
                                        </div>
                                        <div class="row">

                                            <div class="col">
                                                <label class="col-mb-3 col-form-label">Prepared By</label>
                                                    <input type="text" v-model="form.FPREPBY" class="form-control" autocomplete="chrome-off">
                                            </div>
                                            <div class="col">
                                                <label class="col-mb-3 col-form-label">Position</label>
                                                    <input type="text" v-model="form.FPREPD" class="form-control" autocomplete="chrome-off">
                                            </div>
                                        </div>
                                        
                                        <div class="row">
                                            <div class="col">
                                                <label class="col-mb-3 col-form-label">Approved By</label>
                                                    <input type="text" v-model="form.FAPPVBY" class="form-control" autocomplete="chrome-off">
                                            </div>
                                            <div class="col">
                                                <label class="col-mb-3 col-form-label">Position</label>
                                                    <input type="text" v-model="form.FAPPVD" class="form-control" autocomplete="chrome-off">
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                                <div class="tab-pane fade" id="jevdTab">
                                    <jevd-index :jev="jevd" v-if="!isDisabled"></jevd-index>
                                </div>
                        </div>
                            <div class="modal-footer p-1">
                                <button type="button" class="btn btn-primary mt-3" v-if="pageTitle === 'Create'" @click="submit()">Save</button>
                                <button type="button" class="btn btn-primary mt-3" v-if="pageTitle === 'Edit Jev'" @click="submit()" > Update</button>
                            </div>   
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useForm } from "@inertiajs/inertia-vue3"
import BackButton from "../../Shared/BackButton.vue"
import JevdIndex from "../Jevh/JevdIndex.vue"

export default ({
    components: {
        BackButton,
        JevdIndex,
    },
    props: {
        editData: Object
    },

    data() {
        return {
            funds: "",
            jevtype:[
                {value:1, name:"Collection"},
                {value:2, name:"Check Disbursement"},
                {value:3, name:"Cash Disbursement"},
                {value:4, name:"General"},
                {value:5, name:"ADA"},
                {value:6, name:"Procurement"},
            ],
            form: useForm({
                fiscalyear: new Date().getFullYear(),
                FUND_SCODE:"",
                FJEVNO:"",
                FJEVTYP:"",
                FJEVDATE:"",
                FPAYEE:"",
                FCHKNO:"",
                FREMK:"",
                FREFNO: "",
                FPREPBY:"",
                FPREPD:"",
                FAPPVBY:"",
                FAPPVD:"",


            }),
            checkadd: false,
            pageTitle: "Create Journal Entry",
            addjev: false,
            showModal: false,
            isDisabled:true
            
        }
    },

    mounted() {
        this.getFundDetail()

        if (!!this.editData)
        {
            this.pageTitle = "Edit"
            this.form.fiscalyear = this.editData.fiscalyear
            this.form.FUND_SCODE = this.editData.FUND_SCODE
            this.form.FJEVNO = this.editData.FJEVNO
            this.form.FJEVTYP = this.editData.FJEVTYP
            this.form.FJEVDATE = this.editData.FJEVDATE
            this.form.FPAYEE = this.editData.FPAYEE
            this.form.FCHKNO = this.editData.FCHKNO
            this.form.FREMK = this.editData.FREMK
            this.form.FREFNO = this.editData.FREFNO
            this.form.FPREPBY = this.editData.FPREPBY
            this.form.FPREPD = this.editData.FPREPD
            this.form.FAPPVBY = this.editData.FAPPVBY
            this.form.FAPPVD = this.editData.FAPPVD
        } else {
            this.pageTitle = "Create"
        }
    },
    methods: {
        getFundDetail () {
            axios.post('/jevh/getFundDetail').then(response => {
                this.funds = response.data
            })
        },

        submit() {
                this.isDisabled = false;
                this.$inertia.post("/jevh/store", this.form);

                setTimeout ( () => { 
                    document.getElementById('jevdLink').click();
                }, 100)
        },

    },
})
</script>

