<template>
    <div class="main-contain">
        <div class="top-main">
            <div class="container">
                <div class="py-4">
                    <h2 class="text-white">--- content goes here --- </h2>
                </div>
            </div>
        </div>
        <div class="bottom-main">
            <div class="card-contain p-3">
                <div class="row">
                    <div class="col" v-for="(card, i) in bottomCard" :key="i">

                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- bottom  -->

</template>


<script>
    export default {
        name: 'TheMain',
        data () {
            return {
                bottomCard: [
                    {name: 'digital comics',},
                    {name: 'dc merchandise',},
                    {name: 'comics shop locator',},
                    {name: 'dc power visa',},
                ]
            }
        }
    }
</script>


<style lang="scss">
    .main-contain {
        background-color: #1c1c1c;
    }
</style>