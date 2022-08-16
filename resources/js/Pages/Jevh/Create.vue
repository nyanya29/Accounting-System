<template>
    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle}}</h3>
            <back-button :href="'/jevh'"></back-button> 
        </div>

        <div class="row justify-content-center">
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <form @submit.prevent="">
                            <div class="col-md-12">
                                <div class="row">
                                    <div class="col">
                                        <div class="col-mb-3 col-form-label">
                                            <label>Title/ActCode</label>
                                            <select  class="form-select mt-2">
                                                <option disabled value="">Select title</option>
                                                <option v-for="item in factcode" :value="item.recid" :key="item.recid">{{item.FACTCODE}}</option>
                                            </select>
                                        </div>
                                        <div class="col-mb-3 col-form-label">
                                            <label>Title/Subcode</label>
                                            <select  class="form-select mt-2">
                                            <option class="form-control" autocomplete="chrome-off"></option>

                                            </select>
                                        </div>
                                        <div class="col-mb-3 col-form-label">
                                            <label>Title/Subcode2</label>
                                            <select  class="form-select mt-2 ">
                                            <option class="form-control" autocomplete="chrome-off"></option>

                                            </select>
                                        </div>
                                        <div class="col-mb-3 col-form-label">
                                            <label>Resptcr</label>
                                            <input type="text" class="form-control" autocomplete="chrome-off">
                                        </div>
                                        <div class="col-mb-3 col-form-label">
                                            <label>Voucher</label>
                                            <input type="text" class="form-control" autocomplete="chrome-off">
                                        </div>
                                        <div class="col-mb-3 col-form-label">
                                            <label>OBR #</label>
                                            <input type="text" class="form-control" autocomplete="chrome-off">
                                        </div>
                                        <div class="col-mb-3 col-form-label">
                                            <label>PR #</label>
                                            <input type="text" class="form-control" autocomplete="chrome-off">
                                        </div>
                                        <div class="col-mb-3 col-form-label">
                                            <label>Debit</label>
                                            <input type="text" class="form-control" autocomplete="chrome-off">
                                        </div>
                                        <div class="col-mb-3 col-form-label">
                                            <label>Credit</label>
                                            <input type="text" class="form-control" autocomplete="chrome-off">
                                        </div>
                                        <div class="col-mb-3 col-form-label">
                                            <label>Remarks</label>
                                            <input type="text" class="form-control" autocomplete="chrome-off">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useForm } from "@inertiajs/inertia-vue3"

export default ({
    data() {
        return {
            factcode:{},
            form: useForm({
                FACTCODE:"",
                FRESPCTR:"",
                FVOUCHNO:"",
                FALOBNO:"",
                FPRNO:"",
                FDEBIT:"",
                FCREDIT:"",
                FREMARKS:"",
            }),
            pageTitle: ""
        }
    },

    mounted() {
        this.getFactCode()
    },
    methods: {
        getFactCode () {
            axios.post('/jevh/getFactCode').then(response => {
                this.factcode = response.data
            })
        }
    },
})
</script>
