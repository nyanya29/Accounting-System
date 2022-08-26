<template>
<div class="modal fade" id="jevdModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" >
    <div class="modal-dialog modal-xl" style="max-width: 1300px !important">
        <div class="modal-content">
            <div class="modal-header" style="background-color: #42A6F5">
                <h5 class="modal-title text-light" id="staticBackdropLabel">Journal Entry Voucher</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="close_modal()"></button>
            </div>
            <div class="modal-body gap-10">
                <div class="card card text-dark bg-light">
                    <div class="card-body">
                        <div class="col-12 gap-5">

                            <div class="row">
                                <div class="col-sm-3">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>Jev Type:</b></label>
                                        </div>
                                        <div class="col-sm-8">
                                            <p class="col-form-label">{{ jevtype[jevdDetails.FJEVTYP] }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>FUND:</b></label>
                                        </div>
                                        <div class="col-sm-8">
                                            <p class="col-form-label">{{ jevdDetails.FUND_SCODE }}</p>
                                        </div>
                                    </div> 
                                </div>
                                <div class="col-sm-3">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>JEV No.:</b></label>
                                        </div>
                                        <div class="col-sm-8">
                                            <p class="col-form-label">{{ jevdDetails.FJEVNO }}</p>
                                        </div>
                                    </div> 
                                </div>
                                <div class="col-sm-3">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>JEV Date:</b></label>
                                        </div>
                                        <div class="col-sm-8">
                                            <p class="col-form-label">{{ jevdDetails.FJEVDATE }}</p>
                                        </div>
                                    </div> 
                                </div>
                            </div>

                            <div class="row">

                                <div class="col-9">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="row">
                                                <div class="col-sm-4">
                                                    <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>Check#:</b></label>
                                                </div>
                                                <div class="col-sm-8">
                                                    <p class="col-form-label">{{ jevdDetails.FCHKNO }}</p>
                                                </div>
                                            </div> 
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="row">
                                                <div class="col-sm-4">
                                                    <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>Ref#:</b></label>
                                                </div>
                                                <div class="col-sm-8">
                                                    <p class="col-form-label">{{ jevdDetails.FREFNO }}</p>
                                                </div>
                                            </div> 
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="row">
                                                <div class="col-sm-4">
                                                    <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>Payee:</b></label>
                                                </div>
                                                <div class="col-sm-8">
                                                    <p class="col-form-label">{{ jevdDetails.FPAYEE }}</p>
                                                </div>
                                            </div> 
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="row">
                                                <div class="col-sm-4">
                                                    <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>Prepared By:</b></label>
                                                </div>
                                                <div class="col-sm-8">
                                                    <p class="col-form-label">{{ jevdDetails.FPREPBY }}</p>
                                                </div>
                                            </div> 
                                            <div class="row">
                                                <div class="col-sm-4">
                                                    <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>Position:</b></label>
                                                </div>
                                                <div class="col-sm-8">
                                                    <p class="col-form-label">{{ jevdDetails.FPREPD }}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="row">
                                                <div class="col-sm-4">
                                                    <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>Aprroved By:</b></label>
                                                </div>  
                                                <div class="col-sm-8">
                                                    <p class="col-form-label">{{ jevdDetails.FAPPVBY }}</p>
                                                </div>
                                            </div> 
                                            <div class="row">
                                                <div class="col-sm-4">
                                                    <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>Position:</b></label>
                                                </div>
                                                <div class="col-sm-8">
                                                    <p class="col-form-label">{{ jevdDetails.FAPPVD }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="col-3">
                                    <div class="row">
                                        <div class="col-sm-12 form-floating">
                                            <!-- <textarea class="col-form-label form-control" for="colFormLabelSm" rows="3" readonly></textarea> -->
                                            <textarea class="col-form-label form-control"  rows="3" style="height: 100px" readonly  v-model="jevdDetails.FREMK"></textarea>
                                            <label for="floatingInput"><b>DESCRIPTION</b></label>
                                        </div>
                                    </div> 
                                </div> 
                                
                            </div>

                        </div>
                    </div>
                </div>
                
                <div class="col-12">
                    <div class="bgc-white p-20 bd table-responsive">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">ActCode Title</th>
                                    <th scope="col">ActCode</th>
                                    <th scope="col">SubCode Title</th>
                                    <th scope="col">SubCode</th>
                                    <th scope="col">SubCode2 Title</th>
                                    <th scope="col">SubCode2</th>
                                    <th scope="col">RespCtr</th>
                                    <th scope="col">Voucher</th>
                                    <th scope="col">OBR#</th>
                                    <th scope="col">PR#</th>
                                    <th scope="col">Debit</th>
                                    <th scope="col">Credit</th>
                                    <th scope="col">Remarks</th>
                                    <!-- <th scope="col" style="width: 30%"></th>
                                    <th scope="col" style="text-align: right">Action</th> -->
                                </tr>
                                 
                            </thead>
                            <tbody>
                                <tr v-for="item in jevDdata" :key="item.index">
                                    <td>{{ item.fiscalyear }}</td>
                                    <td>{{ item.FACTCODE }}</td>
                                    <td>{{ item.FSTITLE }}</td>
                                    <td>{{ item.FSUBCDE }}</td>
                                    <td>{{ item.FSTITLE2 }}</td>
                                    <td>{{ item.FSUBCDE2 }}</td>
                                    <td>{{ item.FRESPCTR }}</td>
                                    <td>{{ item.FVOUCHNO }}</td>
                                    <td>{{ item.FALOBNO }}</td>
                                    <td>{{ item.FPRNO }}</td>
                                    <td>{{ item.jevdDebit }}</td>
                                    <td>{{ item.jevdCredit }}</td>
                                    <td>{{ item.FREMARKS }}</td>
                                </tr>
                                <tr>
                                    <!-- <td colspan="9"></td> -->
                                    <th scope="row 9">Total</th>
                                    <td colspan="9"></td>
                                    <td>{{ total.totalDebit }}</td>
                                    <td>{{ total.totalCredit }}</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>

                        <div class="row justify-content-center">
                            <div class="col-md-12">
                                <!-- read the explanation in the Paginate.vue component -->
                                <!-- <pagination :links="users.links" /> -->
                                <!-- <pagination :next="users.next_page_url" :prev="users.prev_page_url" /> -->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="close_modal()">Close</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { Modal } from 'bootstrap';
import axios from 'axios';

export default {
    props:{
        jevdDetails: Object,
    },
    data () {
        return {
            myModal: null,
            jevDdata: [],
            total: {},
            jevtype:{
                1:"Collection",
                2:"Check Disbursement",
                3:"Cash Disbursement",
                4:"General",
                5:"ADA",
                6:"Procurement"
            },
        }
    },
    async mounted() {
        this.myModal = new Modal(document.getElementById('jevdModal'))
        this.myModal.show()

        this.getData();
        this.getTotal();
    },
    methods: {
        close_modal(){
            this.myModal.hide()
            this.showModal = false
            this.$emit('close')
        },
        getData(url = "/jevd/index"){
          let payload = {
            FJEVNO: this.jevdDetails.FJEVNO,
            FUND_SCODE: this.jevdDetails.FUND_SCODE,
            fiscalyear: this.jevdDetails.fiscalyear
            }
            axios.post(url, payload).then((response) => {
                let data = response.data;

                this.jevDdata = data;
            })
        },
        getTotal(){
            axios.post('/jevd/credit-debit-total', {FJEVNO: this.jevdDetails.FJEVNO , FUND_SCODE:  this.jevdDetails.FUND_SCODE, fiscalyear: this.jevdDetails.fiscalyear}).then(response => {
                this.total = response.data;
            })
        }
    },
}
</script>