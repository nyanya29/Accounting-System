<template>
<div class="modal fade" id="jevdModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" >
    <div class="modal-dialog modal-xl" style="max-width: 1300px !important">
        <div class="modal-content">
            <div class="modal-header" style="background-color: #EDC926">
                <h5 class="modal-title text-light" id="staticBackdropLabel">Journal Entry Voucher</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="close_modal()"></button>
            </div>
            <div class="modal-body gap-10">
                <div class="card" aria-hidden="true" v-if="!isFullyLoaded">
                  <!-- <img src="..." class="card-img-top" alt="..."> -->
                  <div class="card-body">
                    <h5 class="card-title placeholder-glow">
                      <span class="placeholder col-6"></span>
                    </h5>
                    <p class="card-text placeholder-glow">
                      <span class="placeholder col-7"></span>
                      <span class="placeholder col-4"></span>
                      <span class="placeholder col-4"></span>
                      <span class="placeholder col-6"></span>
                      <span class="placeholder col-8"></span>
                    </p>
                    <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
                  </div>
                </div>
                <div class="card card text-dark bg-light" v-if="isFullyLoaded">
                    <div class="card-body">
                        <div class="col-12 gap-5">
                            <div class="row">
                                <div class="col-4">
                                    <div class="col-sm-12">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>Jev Type:</b></label>
                                            </div>
                                            <div class="col-sm-8">
                                                <p class="col-form-label">{{ jevtype[jevdDetails.fjevtyp] }}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>FUND:</b></label>
                                            </div>
                                            <div class="col-sm-8">
                                                <p class="col-form-label">{{ jevdDetails.fund_scode }}</p>
                                            </div>
                                        </div> 
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>JEV No.:</b></label>
                                            </div>
                                            <div class="col-sm-8">
                                                <p class="col-form-label">{{ jevdDetails.fjevno }}</p>
                                            </div>
                                        </div> 
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>JEV Date:</b></label>
                                            </div>
                                            <div class="col-sm-8">
                                                <p class="col-form-label">{{ jevdDetails.fjevdate }}</p>
                                            </div>
                                        </div> 
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>Check:</b></label>
                                            </div>
                                            <div class="col-sm-8">
                                                <p class="col-form-label">{{ jevdDetails.fchkno }}</p>
                                            </div>
                                        </div> 
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>Ref#:</b></label>
                                            </div>
                                            <div class="col-sm-8">
                                                <p class="col-form-label">{{ jevdDetails.frefno }}</p>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                                <div class="col-5">
                                    <div class="col-sm-12">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>Payee:</b></label>
                                            </div>
                                            <div class="col-sm-8">
                                                <p class="col-form-label">{{ jevdDetails.fpayee }}</p>
                                            </div>
                                        </div> 
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>Prepared By:</b></label>
                                            </div>
                                            <div class="col-sm-8">
                                                <p class="col-form-label">{{ jevdDetails.fprepby }}</p>
                                            </div>
                                        </div> 
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>Position:</b></label>
                                            </div>
                                            <div class="col-sm-8">
                                                <p class="col-form-label">{{ jevdDetails.fprepd }}</p>
                                            </div>
                                        </div> 
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>Aprroved By:</b></label>
                                            </div>
                                            <div class="col-sm-8">
                                                <p class="col-form-label">{{ jevdDetails.fappvby }}</p>
                                            </div>
                                        </div> 
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>Position:</b></label>
                                            </div>
                                            <div class="col-sm-8">
                                                <p class="col-form-label">{{ jevdDetails.fappvd }}</p>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="col-sm-12 form-floating">                               
                                        <textarea class="col-form-label form-control" style="height: 200px" readonly  v-model="jevdDetails.fremk"></textarea>
                                        <label for="floatingInput"><b>DESCRIPTION</b></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-12" v-if="isFullyLoaded">
                    <div class="bgc-white p-20 bd table-responsive">
                        <table class="table table-hover table-striped ">
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
                                    <th scope="col">Property#</th>
                                    <th scope="col">Debit</th>
                                    <th scope="col">Credit</th>
                                    <th scope="col">Remarks</th>
                                    <!-- <th scope="col" style="width: 30%"></th>
                                    <th scope="col" style="text-align: right">Action</th> -->
                                </tr>
                                 
                            </thead>
                            <tbody>
                                <tr v-for="item in jevDdata" :key="item.index">
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
                                    <td>{{ item.FPROPNO }}</td>
                                    <td>{{ item.jevdDebit }}</td>
                                    <td>{{ item.jevdCredit }}</td>
                                    <td>{{ item.FREMARKS }}</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <!-- <td colspan="9"></td> -->
                                    <!-- <th scope="row">Total</th> -->
                                    <td colspan="5"></td>
                                    <td colspan="2" class="text-end"><b>Total Debit</b></td>
                                    <td colspan="2"><b>{{ total.totalDebit }}</b></td>
                                    <td colspan="2" class="text-end"><b>Total Credit</b></td>
                                    <td colspan="2"><b>{{ total.totalCredit }}</b></td>
                                    <!-- <td></td> -->
                                </tr>
                            </tfoot>
                        </table>
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
            isFullyLoaded:false,
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

        await this.getData();
        await this.getTotal();
    },
    methods: {
        close_modal(){
            this.myModal.hide()
            this.showModal = false
            this.$emit('close')
        },
        getData(url = "/jevd/index"){
            let payload = {
                fjevno: this.jevdDetails.fjevno,
                fund_scode: this.jevdDetails.fund_scode,
                fiscalyear: this.jevdDetails.fiscalyear
                }
                axios.post(url, payload).then((response) => {
                    let data = response.data;

                    this.jevDdata = data;
                })
        },
        getTotal(){
            var self = this;
            axios.post('/jevd/credit-debit-total', {
                fjevno: this.jevdDetails.fjevno , 
                fund_scode:  this.jevdDetails.fund_scode, 
                fiscalyear: this.jevdDetails.fiscalyear
            }).then(response => {
                this.total = response.data;
                self.isFullyLoaded = true;
            })
        }
    },
}
</script>