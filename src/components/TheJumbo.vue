<template>
    <div class="position-relative">
        <img class="Jumbo" src="../../public/img/jumbotron.jpg" alt="">
    </div>
</template>


<script>
    export default {
        name: 'TheJumbo',
    }
</script>

<style lang="scss">

.position-relative {
    height: 300px;
    overflow: hidden;


    img {
        position: absolute;
        right: 0;
        left: 0;
        width: 1960px;
        overflow: hidden;
    }
}
</style>