<template>
    <div class="row gap-10 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3> Jev Reports</h3>
            <back-button :href="'/jevh/index'"></back-button>
        </div>

        <div class="row justify-content-center">
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <div class="col-md-12">
                            <div class="row g-2">
                                <div class="col-md">
                                    <label for="">From</label>
                                    <input type="date" class="form-control mt-1 pt-1 mb-1">
                                </div>
                                <div class="col-md">
                                    <label for="">To</label>
                                    <input type="date" class="form-control mt-1 pt-1 mb-1">
                                </div>
                            </div>
                            <div class="row g-2">
                                <div class="col-md">
                                    <label for="colFormLabelSm" class="col-sm-2 col-form-label">Fund</label>
                                    <select class="form-select mt-1 pt-1 mb-1">
                                        <!-- <option v-for="item in funds" :value="item.FUND_SCODE" :key="item.recid"> {{ item.FUNDDETAIL_NAME}}</option> -->
                                    </select>
                                </div>
                            </div>
                            <div class="col-md">
                                <label for="colFormLabelSm" class="col-sm-2 col-form-label">Jev Type</label>
                                <select class="form-select mt-1 pt-1 mb-1">
                                    <!-- <option v-for="(item,index) in jevtype" :value="item.value" :key="index"> {{ item.name}}</option> -->
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer p-1">
                        <button type="button" class="btn btn-primary mt-3" @click="submit()">Print</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BackButton from "../../Shared/BackButton.vue"

export default({
    components: {
        BackButton
    }
})

</script>

  components: { BackButton },