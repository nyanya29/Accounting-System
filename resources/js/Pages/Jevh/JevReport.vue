<template>
    <div class="row gap-10 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3> Journal Entry Voucher Reports</h3>
            <back-button :href="'/jevh/index'"></back-button>
        </div>

        <div class="row justify-content-center">
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <div class="col-md-12">
                            <div class="row g-2">
                                <div class="col-md">
                                    <label for="">Report Type</label>
                                    <select class="form-select mt-1 pt-1 mb-1" v-model="type">
                                        <option disabled value="0"> Select here</option>
                                        <option value="1">Detailed Journal</option>
                                        <option value="2">Summary Journal</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row g-2">
                                <div class="col-md">
                                    <label for="">From</label>
                                    <input type="date" class="form-control mt-1 pt-1 mb-1" v-model="date_from">
                                </div>
                                <div class="col-md">
                                    <label for="">To</label>
                                    <input type="date" class="form-control mt-1 pt-1 mb-1" v-model="date_to">
                                </div>
                            </div>
                            <div class="row g-2">
                                <div class="col-md">
                                    <label for="colFormLabelSm" class="col-sm-2 col-form-label">Fund</label>
                                    <select class="form-select mt-1 pt-1 mb-1" v-model="FUND_SCODE">
                                        <option disabled value=""> Select Fund</option>
                                        <option v-for="item in funds" :value="item.FUND_SCODE" :key="item.recid"> {{ item.FUNDDETAIL_NAME}}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md">
                                <label for="colFormLabelSm" class="col-sm-2 col-form-label">Jev Type</label>
                                <select class="form-select mt-1 pt-1 mb-1" v-model="FJEVTYP">
                                    <option disabled value=""> Select Jev type</option>
                                    <option v-for="(item,index) in jevtype" :value="item.value" :key="index"> {{ item.name}}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer p-1">
                        <button type="button" name="print0" class="btn btn-primary mt-3" v-if="type === '0'">Print</button>
                        <button type="button" name="print" class="btn btn-primary mt-3" v-else-if="type === '1' && FJEVTYP === 1" @click="print(FUND_SCODE,FJEVTYP,date_from,date_to)">Print</button>
                        <button type="button" name="printSecondSummary" class="btn btn-primary mt-3" v-else-if="type === '2'" @click="printSecond(FUND_SCODE,FJEVTYP,date_from,date_to)">Print</button>
                        <button type="button" name="DetailedCheck" class="btn btn-primary mt-3" v-else-if="type === '1' && FJEVTYP === 2" @click="printJevDetailedCheck(FUND_SCODE,FJEVTYP,date_from,date_to)">Print</button>
                        <button type="button" name="DetailedCash" class="btn btn-primary mt-3" v-else-if="type === '1' && FJEVTYP === 3" @click="printJevDetailedCash(FUND_SCODE,FJEVTYP,date_from,date_to)">Print</button>
                        <button type="button" name="DetailedGeneral" class="btn btn-primary mt-3" v-else-if="type === '1' && FJEVTYP === 4" @click="printJevDetailedGeneral(FUND_SCODE,FJEVTYP,date_from,date_to)">Print</button>
                        <button type="button" name="DetailedProcurement" class="btn btn-primary mt-3" v-else-if="type === '1' && FJEVTYP === 6" @click="printJevDetailedProcurement(FUND_SCODE,FJEVTYP,date_from,date_to)">Print</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BackButton from "../../Shared/BackButton.vue"

export default({
    components: {
        BackButton
    },
    data() {    
        return {
            myReportsModal: null,
            type:'0',
            funds: {},
            jevtype:[
                {value:1, name:"Collection"},
                {value:2, name:"Check Disbursement"},
                {value:3, name:"Cash Disbursement"},
                {value:4, name:"General"},
                {value:5, name:"ADA"},
                {value:6, name:"Procurement"},
            ],
                FUND_SCODE: "",
                FJEVTYP:"",
                date_from:"",
                date_to:"",
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
        print(FUND_SCODE,FJEVTYP,date_from,date_to){
            console.log(FUND_SCODE,FJEVTYP,date_from,date_to);

            window.open('http://122.54.19.171:8080/jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Faccounting_system&reportUnit=%2Freports%2Faccounting_system%2Fcash_reciept_journal&standAlone=true&decorate=no&FJEVTYP='+FJEVTYP+'&FUND_SCODE='+FUND_SCODE+'&from='+date_from+'&to='+date_to);
        },
        printSecond(FUND_SCODE,FJEVTYP,date_from,date_to){
            window.open('http://122.54.19.171:8080/jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Faccounting_system&reportUnit=%2Freports%2Faccounting_system%2Fcash_reciept_journal_one&standAlone=true&decorate=no&FJEVTYP='+FJEVTYP+'&FUND_SCODE='+FUND_SCODE+'&from='+date_from+'&to='+date_to);
        },
        printJevDetailedCheck(FUND_SCODE,FJEVTYP,date_from,date_to) {
            window.open('http://122.54.19.171:8080/jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Faccounting_system&reportUnit=%2Freports%2Faccounting_system%2Fdetailed_check_report&standAlone=true&decorate=no&FJEVTYP='+FJEVTYP+'&FUND_SCODE='+FUND_SCODE+'&from='+date_from+'&to='+date_to);
        },
        printJevDetailedCash(FUND_SCODE,FJEVTYP,date_from,date_to){
            window.open('http://122.54.19.171:8080/jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Faccounting_system&reportUnit=%2Freports%2Faccounting_system%2Fdetailed_cash_report&standAlone=true&decorate=no&FJEVTYP='+FJEVTYP+'&FUND_SCODE='+FUND_SCODE+'&from='+date_from+'&to='+date_to);
        },
        printJevDetailedGeneral(FUND_SCODE,FJEVTYP,date_from,date_to){
            window.open('http://122.54.19.171:8080/jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Faccounting_system&reportUnit=%2Freports%2Faccounting_system%2Fdetailed_gen_report&standAlone=true&decorate=no&FJEVTYP='+FJEVTYP+'&FUND_SCODE='+FUND_SCODE+'&from='+date_from+'&to='+date_to);
        },
        printJevDetailedProcurement(FUND_SCODE,FJEVTYP,date_from,date_to){
            window.open('http://122.54.19.171:8080/jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Faccounting_system&reportUnit=%2Freports%2Faccounting_system%2Fdetailed_proc_report&standAlone=true&decorate=no&FJEVTYP='+FJEVTYP+'&FUND_SCODE='+FUND_SCODE+'&from='+date_from+'&to='+date_to);
        }
    },
})

</script>