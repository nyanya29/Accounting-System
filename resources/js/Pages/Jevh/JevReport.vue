<template>
    <div class="row gap-10 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3> Jev Reports</h3>
            <back-button :href="'/jevh/index'"></back-button>
        </div>

        <div class="row justify-content-center">
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <div class="col-md-12">
                            <div class="row g-2">
                                <div class="col-md">
                                    <label for="">From</label>
                                    <input type="date" class="form-control mt-1 pt-1 mb-1" v-model="form.date_from">
                                </div>
                                <div class="col-md">
                                    <label for="">To</label>
                                    <input type="date" class="form-control mt-1 pt-1 mb-1" v-model="form.date_to">
                                </div>
                            </div>
                            <div class="row g-2">
                                <div class="col-md">
                                    <label for="colFormLabelSm" class="col-sm-2 col-form-label">Fund</label>
                                    <select class="form-select mt-1 pt-1 mb-1" v-model="form.FUND_SCODE">
                                        <option disabled value=""> Select Fund</option>
                                        <option v-for="item in funds" :value="item.FUND_SCODE" :key="item.recid"> {{ item.FUNDDETAIL_NAME}}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md">
                                <label for="colFormLabelSm" class="col-sm-2 col-form-label">Jev Type</label>
                                    <select class="form-select mt-1 pt-1 mb-1" v-model="form.FJEVTYP">
                                        <option disabled value=""> Select Jev type</option>
                                        <option v-for="(item,index) in jevtype" :value="item.value" :key="index"> {{ item.name}}</option>
                                    </select>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer p-1">
                        <button type="button" class="btn btn-primary mt-3" @click="print()">Print</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useForm } from "@inertiajs/inertia-vue3"
import BackButton from "../../Shared/BackButton.vue"

export default({
    components: {
        BackButton
    },
    data() {    
        return {
            myReportsModal: null,
            funds: {},
            jevtype:[
                {value:1, name:"Collection"},
                {value:2, name:"Check Disbursement"},
                {value:3, name:"Cash Disbursement"},
                {value:4, name:"General"},
                {value:5, name:"ADA"},
                {value:6, name:"Procurement"},
            ],
            form: useForm({
                FUND_SCODE: "",
                FJEVTYP:"",
                date_from:"",
                date_to:"",
            }),
        }
    },
    
    mounted() {
        this.getAllFunds()
    },
    methods: {
        getAllFunds() {
            axios.post('get-fund-details').then( response => {
                this.funds = response.data
            })
        },
    },
})

</script>