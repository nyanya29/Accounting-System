<template>

<div class="row justify-content-center">
    <div class="col-12">
        <div class="card">
            <div class="card-body">
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
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { useForm} from "@inertiajs/inertia-vue3"
export default {

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
        })
    }
   },

   mounted() {
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
    }
   }
}
</script>
