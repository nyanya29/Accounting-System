<template>
<div class="card">
        <div class="col-auto" align="right">
            <button class="btn btn-success btn-sm mL-2 text-white" @click="createjev()"> Add new record</button>
        </div> &nbsp;
        <div class="bgc-white p-20 bd table-responsive">
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
        jevd: Object
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
