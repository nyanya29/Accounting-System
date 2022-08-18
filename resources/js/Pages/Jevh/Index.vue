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
                    <button class="btn btn-primary btn-sm mL-2 text-white" @click="showFilter()">Filter</button>
                </div>
            </div>
        </div>

        <filtering v-if="filter" @closeFilter="filter=false">
            <label>Fund</label>
            <Select2 v-model="fundscode" :options="fund" id="fund"/>
            <h4>{{ fund.FUNDDETAIL_NAME }}</h4>
            <label>JEV Type</label>
            <Select2/>
            <h4></h4>
            <label>JEV No.</label>
            <input type="text" class="form-control">
            <label>Check No.</label>
            <input type="text" class="form-control">
            <label>Ref No.</label>
            <input type="text" class="form-control">
            <label>Payee No.</label>
            <input type="text" class="form-control">
            <label>From.</label>
            <input type="date" class="form-control">
            <label>To.</label>
            <input type="date" class="form-control">
            <div class="div"></div>
            <button class="btn btn-sm btn-primary mT-5 text-white">Filter</button>
            <button class="btn btn-sm btn-primary mT-5 text-white">Filter</button>
        </filtering>
 
        <div class="col-12">
            <div class="bgc-white p-20 bd">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Fiscal Year</th>
                            <th scope="col">Fund Detail Code</th>
                            <th scope="col">JEV Number</th>
                            <th scope="col">JEV Date</th>
                            <th scope="col">Check No.</th>
                            <th scope="col">Payee</th>
                            <th scope="col">Particulars</th>
                            <!-- <th scope="col" style="width: 30%"></th> -->
                            <th scope="col" style="text-align: right">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(jevhdata, index) in jevh.data" :key="index">
                            <td>{{ jevhdata.fiscalyear }}</td>
                            <td>{{ jevhdata.FUND_SCODE }}</td>
                            <td>{{ jevhdata.FJEVNO }}</td>
                            <td>{{ jevhdata.FJEVDATE }}</td>
                            <td>{{ jevhdata.FCHKNO }}</td>
                            <td>{{ jevhdata.FPAYEE }}</td>
                            <td>{{ jevhdata.FREMK }}</td>
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
                        <pagination :next="jevh.next_page_url" :prev="jevh.prev_page_url" />
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

export default {
    components: { 
        Pagination,
        Filtering,
        jevdModal: JevdModal 
        },
    props: {
        jevh: Object,
        filters: Object,
    },
    data() {
        return {
            search: this.$props.filters.search,
            confirm: false,
            filter: false,
            showModal: false,
            jData: {},
            fund:[],
            fundscode:""
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
        }
    },
};
</script>
