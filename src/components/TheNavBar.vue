<template>
    <div>
        <div class="container">
            <header class="bg-white">
                <div class="nav-container d-flex justify-content-between py-3">
                    <div class="let-nav">
                        <div class="logo">
                            <img class="w-75" src="../../public/img/dc-logo.png" alt="">
                        </div>
                    </div>
                    <div class="right-nav d-flex align-items-center">
                        <ul class="nav">
                            <li class="nav-item " v-for="(links, i) in navLink" :key='i' >
                                <a class="text-uppercase p-2" href="#"> {{links}}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'TheNavBar',
        data () {
            return {
                navLink: [
                'caracter',
                'comics',
                'movie',
                'tv',
                'games',
                'collectibles',
                'video',
                'fans',
                'news',
                'shop',
            ]
            }
        }
    };
</script>


<style lang="scss">
    
    li a {
        text-decoration: unset;
    }
</style>