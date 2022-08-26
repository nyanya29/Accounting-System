<template>
<div class="modal fade" id="jevdModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title text-light" id="staticBackdropLabel">{{pageTitle}}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="close_modal()"></button>
            </div>

            <div class="modal-body gap-10">
                <!-- <div class="card">
                    <div class="card-body"> -->
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col">
                                    <label for="colFormLabelSm">Title/ActCode</label>
                                    <div class="col-sm">
                                    <select class="form-select mt-2 pt-2 mb-2" v-model="form.FACTCODE" @change="getSubCode1(), getSubCode2()">
                                            <option v-for="item in factcodes" :value="item.FACTCODE" :key="item.recid">{{ item.FTITLE}}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col">
                                    <label for="colFormLabelSm">Title/Subcode</label>
                                    <div class="col-sm">
                                    <select class="form-select mt-2 pt-2 mb-2" v-model="form.FSUBCDE">
                                            <option v-for="item in subcode1" :value="item.FSUBCDE" :key="item.recid">{{ item.FSTITLE}}</option>
                                    </select>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col">
                                    <label for="colFormLabelSm"> Title/Subcode2</label>
                                    <div class="col-sm">
                                    <select class="form-select mt-2 pt-2 mb-2" v-model="form.FSUBCDE2">
                                            <option v-for="item in subcode2" :value="item.FSUBCDE2" :key="item.recid">{{ item.FSTITLE2}}</option>
                                    </select>
                                    </div>
                                </div>

                                <div class="col">
                                    <label for="colFormLabelSm">Resptcr</label>
                                    <div class="col-sm">
                                        <input type="text" v-model="form.FRESPCTR" class="form-control form-control-md" autocomplete="chrome-off">
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col">
                                    <label for="colFormLabelSm">Voucher</label>
                                    <div class="col-sm">
                                        <input type="text" v-model="form.FVOUCHNO" class="form-control form-control-md" autocomplete="chrome-off">
                                    </div>
                                </div>

                                <div class="col">
                                    <label for="colFormLabelSm">OBR #</label>
                                    <div class="col-sm">
                                        <input type="text" v-model="form.FALOBNO" class="form-control form-control-md" autocomplete="chrome-off">
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col">
                                    <label for="colFormLabelSm">PR #</label>
                                    <div class="col-sm">
                                        <input type="text" v-model="form.FPRNO" class="form-control form-control-md" autocomplete="chrome-off">
                                    </div>
                                </div>

                                <div class="col">
                                    <label for="colFormLabelSm">Debit</label>
                                    <div class="col-sm">
                                        <input type="text" v-model="form.FDEBIT" class="form-control form-control-md" autocomplete="chrome-off">
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col">
                                    <label for="colFormLabelSm">Credit</label>
                                    <div class="col-sm">
                                        <input type="text" v-model="form.FCREDIT" class="form-control form-control-md" autocomplete="chrome-off">
                                    </div>
                                </div>

                                <div class="col">
                                    <label for="colFormLabelSm">Remarks</label>
                                    <div class="col-sm">
                                        <input type="text" v-model="form.FREMARKS" class="form-control form-control-md" autocomplete="chrome-off">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="close_modal()">Close</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="submit()">Save</button>
                        </div>
                    <!-- </div>
                </div> -->
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { Modal } from 'bootstrap';
import { useForm} from "@inertiajs/inertia-vue3"
export default {
    props: {
        jev: Object
    },

   data() {
    return {
        factcodes:[] ,
        subcode1: [],
        subcode2: [],
        form: useForm ({
            FACTCODE:"",
            FRESPCTR:"",
            FVOUCHNO:"",
            FALOBNO:"",
            FPRNO:"",
            FDEBIT:"",
            FCREDIT:"",
            FREMARKS:"",
        }),

        pageTitle: "Create",
        myModal: null
    }
   },

   mounted() {
        this.myModal = new Modal (document.getElementById('jevdModal'))
        this.myModal.show()

        this.getChartAccount(),
        this.getSubCode1(),
        this.getSubCode2()
   },

   methods: {
    getChartAccount() {
        axios.post('/jevd/getChartAccount').then(response => {
            this.factcodes = response.data
        })
    },

    getSubCode1() {
        axios.post('/jevd/getSubCode1', {FACTCODE: this.form.FACTCODE}).then( response => {
            this.subcode1 = response.data
        })
    },

    getSubCode2() {
        axios.post('/jevd/getSubCode2', {FACTCODE: this.form.FACTCODE}).then( response => {
            this.subcode2 = response.data
        })
    },

    close_modal() {
        this.myModal.hide()
        this.showModal = false
        this.$emit('close')
    },

    submit() {
    }
   }
}
</script>
