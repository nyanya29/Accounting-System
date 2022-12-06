<template>
<div class="row gap-10 masonry pos-r">
    <div class="peers fxw-nw jc-sb ai-c">
        <h3>{{ pageTitle}}</h3>
    </div>
    <div class="row justify-content-center">
        <div class="col-5">
            <div class="card">
                <div class="card-body">
                    <form @submit.prevent="submit()">
                        <div class="d-flex justify-content-center ">
                            <div class="col-md-12">
                                <div class="row">
                                    <div class="col-4">
                                        <label class="col-form-label mt-3 text-right"><b>From:</b></label>
                                    </div>
                                    <div class="col-8">
                                        <input type="date" class="form-control mt-3" autocomplete="chrome-off" v-model="form.from">
                                        <div class="text-danger" v-if="form.errors.from"> {{form.errors.from}}</div>
                                    </div>                             
                                </div>
                                <div class="row">
                                    <div class="col-4">
                                        <label class="col-form-label mt-3" style="text-align:right"><b>To:</b></label>
                                    </div>
                                    <div class="col-8">
                                        <input type="date" class="form-control mt-3" autocomplete="chrome-off" v-model="form.to">
                                        <div class="text-danger" v-if="form.errors.from"> {{form.errors.to}}</div> 
                                    </div>                             
                                </div>
                                <div class="row">
                                    <div class="col-4">
                                        <label class="col-form-label mt-3" style="text-align:right"><b>Date Posted:</b></label>
                                    </div>
                                    <div class="col-8">
                                        <input type="text" class="form-control mt-3" autocomplete="chrome-off" readonly v-model="form.fdatepost"> 
                                    </div>                             
                                </div>
                                <div class="modal-footer mt-3">
                                    <button type="submit" class="btn btn-primary mt-1">Post</button>
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

export default {
    data () {
        return {
            pageTitle: "JEV Posting",
            form: useForm({
                fdatepost: new Date().toLocaleDateString('sv-SE'),
                from:"",
                to:"",
            }),
        }
    },
    methods: {
        submit(){
            this.form.post("/jevh/jev-posting");
        }
    }
}
</script>