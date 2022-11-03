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
                                                    <select  class="form-select" v-model="form.FJEVTYP">
                                                        <option v-for="(items,index) in jevtype" :value="items.value" :key="index"> {{ items.name }}</option>
                                                    </select>
                                                    <!-- <div class="fs-6 c-red-500" v-if="form.errors.FJEVTYPE">{{ form.errors.FJEVTYPE }}</div> -->
                                                </div>
                                            </div>
                                                <label class="col-form-label"><b>Fund Details Code</b></label>
                                                <select class="form-select" v-model="form.FUND_SCODE">
                                                    <option v-for="items in funds" :value="items.FUND_SCODE" :key="items.recid">{{ items.FUNDDETAIL_NAME }}</option>
                                                </select>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label class="col-form-label"><b>JEV Number</b></label>
                                                    <input type="text" v-model="form.FJEVNO" class="form-control" autocomplete="chrome-off">
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="col-form-label"><b>JEV Date</b></label>
                                                    <input type="date" v-model="form.FJEVDATE" class="form-control" autocomplete="chrome-off">
                                                </div>
                                            </div>
                                                <label class="col-form-label"><b>Check No</b></label>
                                                <input type="text" v-model="form.FCHKNO" class="form-control" autocomplete="chrome-off">

                                                <label class="col-form-label"><b>Ref #</b></label>
                                                <input type="text" v-model="form.FREFNO" class="form-control" autocomplete="chrome-off">

                                                <label class="col-mb-3 col-form-label"><b>Payee</b></label>
                                                <input type="text" v-model="form.FPAYEE" class="form-control" autocomplete="chrome-off">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 d-flex justify-content-center">
                                    <div class="col-md-10">
                                        <label class="col-mb-3 col-form-label"><b>Description</b></label>
                                            <textarea 
                                                class="form-control" 
                                                v-model="form.FREMK" 
                                                placeholder="Write here" 
                                                id="floatingTextarea2" 
                                                style="height:105px;">
                                            </textarea>  
                                        <label class="col-mb-3 col-form-label"><b>Prepared by:</b></label>
                                        <input type="text" v-model="form.FPREPBY" class="form-control" autocomplete="chrome-off"/>
                                        <label class="col-mb-3 col-form-label"><b>Position</b></label>
                                        <input type="text" v-model="form.FPREPD" class="form-control" autocomplete="chrome-off"/>
                                        <label class="col-mb-3 col-form-label"><b>Approved by:</b></label>
                                        <input type="text" v-model="form.FAPPVBY" class="form-control" autocomplete="chrome-off"/>
                                        <label class="col-mb-3 col-form-label"><b>Position</b></label>
                                        <input type="text" v-model="form.FAPPVD" class="form-control" autocomplete="chrome-off"/>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer p-1">
                                <button type="submit" class="btn btn-primary mt-3">Save</button>
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
import JevdIndex from "../Jevh/JevdIndex.vue"

export default ({
    components: {
        BackButton,
        JevdIndex
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
    },
    methods: {
        getFundDetail () {
            axios.post('/jevh/getFundDetail').then(response => {
                this.funds = response.data
            })
        },

        submit() {
            // this.isDisabled = false;
            this.form.post("/jevh/store");

            // setTimeout ( () => {
            //     document.getElementById('jevdLink').click();
            // }, 100)
        },

    },
})
</script>


