<template>
    <div>
        <div class="my-card ">
            <img :src="imgurl.thumnb" alt="">
            <h5 class="text-center text-white">{{ series }}</h5>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'TheTopMainCard',

        props: {
            imgurl: String,
            series: String,
        }
    }
</script>