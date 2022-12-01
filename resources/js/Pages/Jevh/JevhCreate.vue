<template>
    <div class="row gap-10 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle}}</h3>
            <back-button :backToURL="'/jevh/index'"></back-button> 
        </div>

        <div class="row justify-content-center">
            <div class="col-9">
                <div class="card">
                    <div class="card-body">
                        <form @submit.prevent="submit()">
                            <div class="row">
                                <div class="col-md-6 m-auto">
                                    <div class="row d-flex justify-content-center ">
                                        <div class="col-md-10">
                                            <div class="row">
                                                <div class="col-md-6 ">
                                                        <label class="col-form-label"><b>Fiscal Year</b></label>
                                                        <input type="text" v-model="form.fiscalyear" class="form-control" autocomplete="chrome-off"> 
                                                    </div>
                                                <div class="col-md-6">
                                                    <label class="col-form-label"><b>Jev Type</b></label>
                                                    <select  class="form-select" v-model="form.fjevtyp">
                                                        <option v-for="(items,index) in jevtype" :value="items.value" :key="index"> {{ items.name }}</option>
                                                    </select>
                                                    <div class="fs-6 c-red-500" v-if="form.errors.fjevtyp">{{ form.errors.fjevtyp }}</div>
                                                </div>
                                            </div>
                                                <label class="col-form-label"><b>Fund Details Code</b></label>
                                                <select class="form-select" v-model="form.fund_scode">
                                                    <option v-for="items in funds" :value="items.FUND_SCODE" :key="items.recid">{{ items.FUNDDETAIL_NAME }}</option>
                                                </select>
                                                <div class="fs-6 c-red-500" v-if="form.errors.fund_scode">{{ form.errors.fund_scode }}</div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label class="col-form-label"><b>JEV Number</b></label>
                                                    <input type="text" v-model="form.fjevno" class="form-control" autocomplete="chrome-off">
                                                    <div class="text-danger" v-if="form.errors.fjevno">{{ form.errors.fjevno }}</div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="col-form-label"><b>JEV Date</b></label>
                                                    <input type="date" v-model="form.fjevdate" class="form-control" autocomplete="chrome-off">
                                                    <div class="text-danger" v-if="form.errors.fjevdate">{{ form.errors.fjevdate }}</div>
                                                </div>
                                            </div>
                                                <label class="col-form-label"><b>Check No</b></label>
                                                <input type="text" v-model="form.fchkno" class="form-control" autocomplete="chrome-off">
                                                <div class="fs-6 c-red-500" v-if="form.errors.fchkno">{{ form.errors.fchkno }}</div>

                                                <label class="col-form-label"><b>Ref #</b></label>
                                                <input type="text" v-model="form.frefno" class="form-control" autocomplete="chrome-off">
                                                <div class="fs-6 c-red-500" v-if="form.errors.frefno">{{ form.errors.frefno }}</div>

                                                <label class="col-mb-3 col-form-label"><b>Payee</b></label>
                                                <input type="text" v-model="form.fpayee" class="form-control" autocomplete="chrome-off">
                                                <div class="fs-6 c-red-500" v-if="form.errors.fpayee">{{ form.errors.fpayee }}</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 d-flex justify-content-center">
                                    <div class="col-md-10">
                                        <label class="col-mb-3 col-form-label"><b>Description</b></label>
                                            <textarea 
                                                class="form-control" 
                                                v-model="form.fremk" 
                                                placeholder="Write here" 
                                                id="floatingTextarea2" 
                                                style="height:105px;">
                                            </textarea>
                                            <div class="fs-6 c-red-500" v-if="form.errors.fremk">{{ form.errors.fremk }}</div>

                                        <label class="col-mb-3 col-form-label"><b>Prepared by:</b></label>
                                        <input type="text" v-model="form.fprepby" class="form-control" autocomplete="chrome-off"/>
                                        <div class="fs-6 c-red-500" v-if="form.errors.fprepby">{{ form.errors.fprepby }}</div>

                                        <label class="col-mb-3 col-form-label"><b>Position</b></label>
                                        <input type="text" v-model="form.fprepd" class="form-control" autocomplete="chrome-off"/>
                                        <div class="fs-6 c-red-500" v-if="form.errors.fprepd">{{ form.errors.fprepd }}</div>

                                        <label class="col-mb-3 col-form-label"><b>Approved by:</b></label>
                                        <input type="text" v-model="form.fappvby" class="form-control" autocomplete="chrome-off"/>
                                        <div class="fs-6 c-red-500" v-if="form.errors.fappvby">{{ form.errors.fappvby }}</div>

                                        <label class="col-mb-3 col-form-label"><b>Position</b></label>
                                        <input type="text" v-model="form.fappvd" class="form-control" autocomplete="chrome-off"/>
                                        <div class="fs-6 c-red-500" v-if="form.errors.fappvd">{{ form.errors.fappvd }}</div>

                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer p-1">
                                <button type="submit" v-if="pageTitle === 'Create'" class="btn btn-primary mt-3">Save</button>
                                <button type="submit" v-if="pageTitle === 'Edit'" class="btn btn-primary mt-3">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useForm } from "@inertiajs/inertia-vue3"
import BackButton from "../../Shared/BackButton.vue"

export default ({
    components: {
        BackButton,
    },
    props:{
        editData:Object
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
                fund_scode:"",
                fjevno:"",
                fjevtyp:"",
                fjevdate:"",
                fpayee:"",
                fchkno:"",
                fremk:"",
                frefno: "",
                fprepby:"",
                fprepd:"",
                fappvby:"",
                fappvd:"",
                // recid:"",
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
            this.form.fund_scode = this.editData.fund_scode
            this.form.fjevno = this.editData.fjevno
            this.form.fjevtyp = this.editData.fjevtyp
            this.form.fjevdate = this.editData.fjevdate
            this.form.fpayee = this.editData.fpayee
            this.form.fchkno = this.editData.fchkno
            this.form.fremk = this.editData.fremk
            this.form.frefno = this.editData.frefno
            this.form.fprepby = this.editData.fprepby
            this.form.fprepd = this.editData.fprepd
            this.form.fappvby = this.editData.fappvby
            this.form.fappvd = this.editData.fappvd
            this.form.recid = this.editData.recid
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
            if(this.editData !== undefined){
                this.form.patch("/jevh/update-jevh/"+this.form.recid);

                //dre ko last sa edit
            } else {
                this.form.post("/jevh/store");
            }
        },

    },
})
</script>


