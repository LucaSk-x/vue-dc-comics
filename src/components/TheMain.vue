<template>
    <div class="main-contain">
        <div class="main">
            <div class="bottom-main">
                <div class="card-contain p-3">
                    <div class="row">
                        <div class="col" v-for="(card, i) in bottomCard" :key="i">

                        </div>
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
        background-color: #0282f9;
    }
</style>