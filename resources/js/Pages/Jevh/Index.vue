<template>
    <Head>
        <title>JEVH</title>
    </Head>

    <div class="row gap-10 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>Journal Entry Voucher</h3>
            <div class="peers">
                <div class="peer mR-10">
                    <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search...">
                </div>
                <div class="peer">
                    <!-- <Link class="btn btn-success btn-sm mL-2 text-white" href="/jevh/jevh-create"> Add new record</Link> -->
                    <Link class="btn btn-success btn-sm mL-2 text-white" href="/jevh/create"> Add new record</Link>
                    <Link class="btn btn-info btn-sm mL-2 text-white" href="/jevh/jevh-report"> Jevtype Report</Link>
                    <button class="btn btn-primary btn-sm mL-2 text-white" @click="showFilter()">Filter</button>
                </div>
            </div>
        </div>

        <filtering v-if="filter" @closeFilter="filter=false">
            <label class="mB-5">Fund</label>
            <Select2 v-model="filterData.fundscode" :options="fund" id="fund"/>
            <h4>{{ fund.FUNDDETAIL_NAME }}</h4>
            <label class="mB-5">JEV Type.</label>
                <select class="form-select" v-model="filterData.jType" >
                    <option v-for="(item,index) in filterData.jevtype" :value="item.value" :key="index"> {{ item.name}}</option>
                </select>
            <label class="mB-5">JEV No.</label>
            <input type="text" class="form-control" v-model="filterData.FJEVNO">
            <label class="mB-5">Check No.</label>
            <input type="text" class="form-control" v-model="filterData.FCHKNO">
            <label class="mB-5">Ref No.</label>
            <input type="text" class="form-control" v-model="filterData.FREFNO">
            <label class="mB-5">Payee No.</label>
            <input type="text" class="form-control" v-model="filterData.FPAYEE">
            <label class="mB-5">From.</label>
            <input type="date" class="form-control" v-model="filterData.from">
            <label class="mB-5">To.</label>
            <input type="date" class="form-control" v-model="filterData.to">
            <button class="btn btn-sm btn-primary mT-5 mR-10 text-white" @click="find()">Filter</button>
            <button class="btn btn-sm btn-primary mT-5 text-white" @click="reset()">Reset</button>
        </filtering>

        <div class="col-12">
            <div class="bgc-white p-20 bd table-responsive">
                <table class="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Fiscal Year</th>
                            <th scope="col">Fund Detail Code</th>
                            <th scope="col">JEV Number</th>
                            <th scope="col">JEV Date</th>
                            <th scope="col">Check No.</th>
                            <th scope="col">Payee</th>
                            <th scope="col">Particulars</th>
                            <!-- <th scope="col">Status</th> -->
                            <!-- <th scope="col" style="width: 30%"></th> -->
                            <th scope="col" style="text-align: right">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(jevhdata, index) in jevh.data" :key="index">
                            <td>{{ jevhdata.fiscalyear }}</td>
                            <td>{{ jevhdata.fund_scode }}</td> 
                            <td>{{ jevhdata.fjevno }}</td>
                            <td>{{ jevhdata.fjevdate }}</td>
                            <td>{{ jevhdata.fchkno }}</td>
                            <td>{{ jevhdata.fpayee }}</td>
                            <td>{{ jevhdata.fremk }}</td>
                            <!-- <td><span class="badge rounded-pill bg-success">✔</span></td> -->
                            <!-- <td><span class="badge rounded-pill bg-danger">✖</span></td> -->
                            <td style="text-align: right">
                                <div class="dropdown dropstart">
                                  <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                    </svg>
                                  </button>
                                  <ul class="dropdown-menu action-dropdown" aria-labelledby="dropdownMenuButton1">
                                    <li>
                                        <button class="dropdown-item" @click="showdetails(jevhdata)">Show Details</button>
                                    </li>

                                    <li><Link class="dropdown-item" :href="`/jevh/${jevhdata.recid}/edit`">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                            </svg> Edit
                                        </Link>
                                    </li>
                                    <li>
                                        <button class="dropdown-item" @click="print(jevhdata)">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer-fill" viewBox="0 0 16 16">
                                                <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"/>
                                                <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                                            </svg>
                                            Print
                                        </button>
                                    </li>
                                    <span v-if="jevhdata.fdatepost == '0000-00-00' || jevhdata.fdatepost == null || jevhdata.fdatepost == 0">
                                        <li><hr class="dropdown-divider action-divider"></li>
                                        <li>
                                            <button class="text-danger dropdown-item" @click="deleteJevh(jevhdata.recid)">Delete</button>
                                        </li>
                                    </span>
                                  </ul>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <!-- read the explanation in the Paginate.vue component -->
                        <!-- <pagination :links="users.links" /> -->
                        <div class="row">
                            <div class="col-6">
                                <pagination :next="jevh.next_page_url" :prev="jevh.prev_page_url" />
                            </div>
                            <div class="col-6 d-flex justify-content-end">
                                <h6>Showing {{jevh.from}} to {{jevh.to}} of {{jevh.total}} entries</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <jevd-modal v-if="showModal" :jevdDetails="jData" @close="closeModal()"></jevd-modal>
    </div>
</template>

<script>
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
import JevdModal from "../Jevh/Modal.vue";
import { useForm } from '@inertiajs/inertia-vue3';

export default {
    components: { 
        Pagination,
        Filtering,
        jevdModal: JevdModal 
        },
    props: {
        jevh: Object,
        jevd: Object,
        filters: Object,
        data:Object,
    },
    data() {
        return {
            search: this.$props.filters.search,
            confirm: false,
            filter: false,
            showModal: false,
            jData: {},
            fund:[],
            filterData: useForm({
                fundscode:"",
                jType:"",
                FJEVNO:"",
                FCHKNO:"",
                FREFNO:"",
                FPAYEE:"",
                from:"",
                to:"",
                jevtype:[
                    {value:1, name:"Collection"},
                    {value:2, name:"Check Disbursement"},
                    {value:3, name:"Cash Disbursement"},
                    {value:4, name:"General"},
                    {value:5, name:"ADA"},
                    {value:6, name:"Procurement"},
                ],  
            }),
        };
    },

    watch: {
        search: _.debounce(function (value) {
            this.$inertia.get(
                "/jevh/index",
                { search: value },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
        }, 300),
    },

    mounted() {
        this.getFunds();
    },

    methods: {
        showFilter() {
            this.filter = !this.filter
        },
        showdetails(jevhdata) {
            this.jData = jevhdata
            this.showModal = true
        },
        closeModal(){
        this.showModal = false
        },
        getFunds(){
            axios.post('/jevh/get-fund-details').then(response => {
                this.fund = _.map(response.data, (obj) => {
                    return {
                        id: obj.FUND_SCODE,
                        text: obj.FUNDDETAIL_NAME,
                    }
                })
            })
        },
        find(){
            this.$inertia.get('/jevh/index', this.filterData, {preserveState: true})
        },
        reset(){
            this.filtered = {}
            this.$inertia.get('/jevh/index')
        },
        print(jevhdata){
            window.open('http://122.54.19.170:8000/jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Faccounting_system&reportUnit=%2Freports%2Faccounting_system%2Fjevd_report&standAlone=true&decorate=no&FJEVNO='+jevhdata.fjevno+'&FUND_SCODE='+jevhdata.fund_scode+'&fiscalyear='+jevhdata.fiscalyear);
        },
        deleteJevh(recid){
            let text = "Warning!\Are you sure you want to delete this record?";

            if (confirm(text) == true) {
                // console.log('test');
                this.$inertia.delete("/jevh/jevh-delete/" + recid);
            }
        }
    },
};
</script>
