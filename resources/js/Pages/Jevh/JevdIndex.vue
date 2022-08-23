<template>
<div class="row gap-10 masonry pos-r">
        <div class="col" style="max-width: 100rem;">
            <div class="bgc-white p-20 bd shadow-sm">
                <div class="peer" align="right">
                        <Link class="btn btn-success btn-sm mL-2 text-white" href="/jevh/jevdindex"> Add new record</Link>
                </div>
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
        </div>    
    </div>
</div>
</template>

<script>

export default {
    props: {
        jevd: Object
    }
}
</script>
