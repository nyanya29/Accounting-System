<template>
<div class="modal fade" id="jevdModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" >
    <div class="modal-dialog modal-xl" style="max-width: 1300px !important">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Journal Entry Voucher</h5>
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
                                            <p class="col-form-label"><u><b>test</b></u></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>FUND:</b></label>
                                        </div>
                                        <div class="col-sm-8">
                                            <p class="col-form-label"><u><b>test</b></u></p>
                                        </div>
                                    </div> 
                                </div>
                                <div class="col-sm-3">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>JEV No.:</b></label>
                                        </div>
                                        <div class="col-sm-8">
                                            <p class="col-form-label"><u><b>test</b></u></p>
                                        </div>
                                    </div> 
                                </div>
                                <div class="col-sm-3">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>JEV Date:</b></label>
                                        </div>
                                        <div class="col-sm-8">
                                            <p class="col-form-label"><u><b>test</b></u></p>
                                        </div>
                                    </div> 
                                </div>
                            </div>

                            <div class="col-9">
                                <div class="row">
                                    <div class="col-sm-3">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>Check#:</b></label>
                                            </div>
                                            <div class="col-sm-8">
                                                <p class="col-form-label"><u><b>test</b></u></p>
                                            </div>
                                        </div> 
                                    </div>
                                    <div class="col-sm-3">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>Ref No.:</b></label>
                                            </div>
                                            <div class="col-sm-8">
                                                <p class="col-form-label"><u><b>test</b></u></p>
                                            </div>
                                        </div> 
                                    </div>
                                    <div class="col-sm-3">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>Payee:</b></label>
                                            </div>
                                            <div class="col-sm-8">
                                                <p class="col-form-label"><u><b>test</b></u></p>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="col-3">
                                <div class="col-sm-3">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>Description:</b></label>
                                        </div>
                                        <div class="col-sm-8">
                                            <p class="col-form-label"><u><b>test</b></u></p>
                                        </div>
                                    </div> 
                                </div>
                            </div> -->

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
            jevDdata: []
        }
    },
    async mounted() {
        this.myModal = new Modal(document.getElementById('jevdModal'))
        this.myModal.show()

        this.getData();
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
        }
    },
}
</script>