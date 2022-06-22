<template>
    <div class="bgg">
        <div class="container">
        <div class="bottom-footer d-flex justify-content-between py-3">
            <div class="bottom-footer-left">
                <div class="my-btn"><button class="text-uppercase text-white">sing up now!</button></div>
            </div>
            <div class="bottom-footer right d-flex align-items-center">
                <div class="follow">
                    <h5 class="text-primary text-uppercase fw-bold">follow us</h5>
                </div>
                <div class="social">
                    <img class="p-2" src="../../public/img/footer-twitter.png" alt="">
                    <img class="p-2" src="../../public/img/footer-facebook.png" alt="">
                    <img class="p-2" src="../../public/img/footer-youtube.png" alt="">
                    <img class="p-2" src="../../public/img/footer-periscope.png" alt="">
                    <img class="p-2" src="../../public/img/footer-pinterest.png" alt="">
                </div>
            </div>
        </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'TheBottomFooter',
    }
</script>

<style lang="scss">
    .bgg {
    background-color: #303030;

    button {
        background-color: #303030;
        border: 2px solid #0282f9;
        padding: 5px;
    }
}
</style>