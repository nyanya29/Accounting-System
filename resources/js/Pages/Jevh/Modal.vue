<template>
<div class="modal fade" id="jevdModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" >
  <div class="modal-dialog modal-xl" style="max-width: 1300px !important">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Journal Entry Voucher</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="close_modal()"></button>
      </div>
      <div class="modal-body">
        <!-- <div class="card card text-dark bg-light">
          <div class="card-body">
            <div class="col-12">
              
            </div>
          </div>
        </div> -->
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Accordion Item #1
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
                        <tr >
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