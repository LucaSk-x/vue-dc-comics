<template>
    <div>
        <div class="my-card py-2">
            <div class="img-contain">
                <img class="card-img" :src="imgurl" alt="">
            </div>
            <h6 class="text-center text-uppercase text-white py-2">{{text}}</h6>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'TheTopMainCard',

        props: {
            imgurl: String,
            text: String,
        }
    }
</script>

<style lang="scss">
    .img-contain {
            aspect-ratio: 1;
            overflow: hidden;


        .card-img {
            overflow: hidden;

            }
    }
</style>