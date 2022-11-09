<template>
<div class="card card text-dark bg-light">
                    <div class="card-body">
                        <div class="row">

                        </div>
                        <div class="col-12 gap-5">
                            <div class="row">
                                <div class="col-4">
                                    <div class="col-sm-12">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>Jev Type:</b></label>
                                            </div>
                                            <div class="col-sm-8">
                                                <p class="col-form-label">{{ jevtype[jevdDetails.FJEVTYP] }}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>FUND:</b></label>
                                            </div>
                                            <div class="col-sm-8">
                                                <p class="col-form-label">{{ jevhDetails.FUND_SCODE }}</p>
                                            </div>
                                        </div> 
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>JEV No.:</b></label>
                                            </div>
                                            <div class="col-sm-8">
                                                <p class="col-form-label">{{ jevhDetails.FJEVNO }}</p>
                                            </div>
                                        </div> 
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>JEV Date:</b></label>
                                            </div>
                                            <div class="col-sm-8">
                                                <p class="col-form-label">{{ jevhDetails.FJEVDATE }}</p>
                                            </div>
                                        </div> 
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>Check:</b></label>
                                            </div>
                                            <div class="col-sm-8">
                                                <p class="col-form-label">{{ jevhDetails.FCHKNO }}</p>
                                            </div>
                                        </div> 
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>Ref#:</b></label>
                                            </div>
                                            <div class="col-sm-8">
                                                <p class="col-form-label">{{ jevhDetails.FREFNO }}</p>
                                            </div>
                                        </div> 
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>Payee:</b></label>
                                            </div>
                                            <div class="col-sm-8">
                                                <p class="col-form-label">{{ jevhDetails.FPAYEE }}</p>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                                <div class="col-5">
                                    <div class="col-sm-12">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>Prepared By:</b></label>
                                            </div>
                                            <div class="col-sm-8">
                                                <p class="col-form-label">{{ jevhDetails.FPREPBY }}</p>
                                            </div>
                                        </div> 
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>Position:</b></label>
                                            </div>
                                            <div class="col-sm-8">
                                                <p class="col-form-label">{{ jevhDetails.FPREPD }}</p>
                                            </div>
                                        </div> 
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>Aprroved By:</b></label>
                                            </div>
                                            <div class="col-sm-8">
                                                <p class="col-form-label">{{ jevhDetails.FAPPVBY }}</p>
                                            </div>
                                        </div> 
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <label class="col-form-label" for="colFormLabelSm" style="text-align:right"><b>Position:</b></label>
                                            </div>
                                            <div class="col-sm-8">
                                                <p class="col-form-label">{{ jevhDetails.FAPPVD }}</p>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                                <div class="col-4">
                                            <div class="col-sm-12 form-floating">                               
                                                <textarea class="col-form-label form-control" style="height: 200px" readonly v-model="jevhDetails.FREMK"></textarea>
                                                <label for="floatingInput"><b>DESCRIPTION</b></label>
                                            </div>
                                        </div>
                            </div>
                        </div>
                    </div>
                </div> &nbsp;
<div class="card">
        <div class="bgc-white p-20 bd table-responsive">
            <div class="col-auto" align="right">
                <button class="btn btn-success btn-sm mL-2 text-white" @click="createjev()"> Add new record</button>
            </div> &nbsp;
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ActCode Title</th>
                            <!-- <th scope="col">ActCode</th> -->
                            <th scope="col">SubCode Title</th>
                            <!-- <th scope="col">SubCode</th> -->
                            <th scope="col">SubCode2 Title</th>
                            <!-- <th scope="col">SubCode2</th> -->
                            <th scope="col">RespCtr</th>
                            <th scope="col">Voucher</th>
                            <th scope="col">OBR #</th>
                            <th scope="col">PR #</th>
                            <th scope="col">Debit</th>
                            <th scope="col">Credit</th>
                            <th scope="col">Remarks</th>
                            <th scope="col" style="text-align: right">Action</th>
                        </tr>
                    </thead>
                </table>

                <div class="row justify-content-end">
                    <div class="col-2">
                        <div class="form-floating">
                            <input type="text" class="form-control fw-bold" style="width: 150px; height:55px;">
                            <label for="floatingInputGrid">Total Debit</label>
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="form-floating">
                            <input type="text" class="form-control fw-bold" style="width: 150px; height:55px;">
                            <label for="floatingInputGrid">Total Credit</label>
                        </div>
                    </div>
                </div>
            </div>
    <div class="col-md-12">
        <jevd-create v-if="showModal" :jev="jev"></jevd-create>    
    </div>
</div>
</template>

<script>
import JevdCreate from './JevdCreate.vue'

export default {
    components: {
        JevdCreate : JevdCreate,
    },
    props: {
        jevd: Object,
        jevhDetails: Object
    },

    data() {
        return {
            showModal: false
        }
    },

    methods: {
       createjev() {
           this.showModal = !this.showModal
           this.jev = !this.jev
       },

       closeModal(){
        this.showModal = false
        },
    }
}
</script>
