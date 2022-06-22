<template>
    <footer>
        <div class="container">
            <div class="top-footer d-flex justify-content-between position-relative overflow-hidden p-3">
                <div class="top-footer-left d-flex">
                    <div class="first">
                        <ul  class="list-unstyled">
                            <ul class="list-unstyled">
                                <li><h6 class="text-white text-uppercase">Dc Comics</h6></li>
                                <li class="text-light" v-for="(link, i) in linksFooter.dcComics" :key="i"> {{link.name}} </li>
                            </ul>
                            <ul class="list-unstyled pt-4">
                                <li><h6 class="text-white text-uppercase">Shop</h6></li>
                                <li class="text-light" v-for="(link, i) in linksFooter.shop" :key="i"> {{link.name}} </li>
                            </ul>
                        </ul>
                    </div>
                    <div class="second px-4">
                            <ul class="list-unstyled">
                                <li><h6 class="text-white text-uppercase">Dc</h6></li>
                                <li class="text-light" v-for="(link, i) in linksFooter.dc" :key="i"> {{link.name}} </li>
                            </ul>
                    </div>
                    <div class="third">
                            <ul class="list-unstyled">
                                <li><h6 class="text-white text-uppercase">sites</h6></li>
                                <li class="text-light" v-for="(link, i) in linksFooter.sites" :key="i"> {{link.name}} </li>
                            </ul>
                    </div>
                </div>
                <div class="top-footer-right">
                    <img class="position-absolute" src="../../public/img/dc-logo-bg.png" alt="">
                </div>
            </div>
        </div>
    </footer>
</template>


<script>
    export default {
        name: 'TheFooter',
        data () {
            return {
                linksFooter: {
                dcComics: [
                    {
                        name: 'Characters',
                        href: '#'
                    },
                    {
                        name: 'Comics',
                        href: '#'
                    },
                    {
                        name: 'Movies',
                        href: '#'
                    },
                    {
                        name: 'Tv',
                        href: '#'
                    },
                    {
                        name: 'Games',
                        href: '#'
                    },
                    {
                        name: 'Videos',
                        href: '#'
                    },
                    {
                        name: 'News',
                        href: '#'
                    },
                ],
                shop: [
                    {
                        name: 'Shop Dc',
                        href: '#'
                    },
                    {
                        name: 'Shop Dc Collectibles'
                    },
                ],
                dc: [
                    {
                        name: 'Terms of Use',
                        href : '#'
                    },
                    {
                        name: 'Ad Choices',
                        href: '#'
                    },
                    {
                        name: 'Privacy policy (New)',
                        href: '#'
                    },
                    {
                        name: 'Advertising',
                        href: '#'
                    },
                    {
                        name: 'Jobs',
                        href: '#'
                    },
                    {
                        name: 'Subscriptions',
                        href: '#'
                    },
                    {
                        name: 'Talent WorkShop',
                        href: '#'
                    },
                    {
                        name: 'CPSC Certificates',
                        href: '#'
                    },
                    {
                        name: 'Ratings',
                        href: '#'
                    },
                    {
                        name: 'Shop Help',
                        href: '#'
                    },
                    {
                        name: 'Contact Us',
                        href: '#'
                    },
                ],
                sites: [
                    {
                        name: 'DC',
                        href: '#'
                    },
                    {
                        name: 'MAD Megazine',
                        href: '#'
                    },
                    {
                        name: 'DC Kinds',
                        href: '#'
                    },
                    {
                        name: 'DC Universe',
                        href: '#'
                    },
                    {
                        name: 'DC Power Visa',
                        href: '#'
                    },
                ]
            }
            }
        }
    }
</script>


<style lang="scss">
    footer {
        background-image: url(../../public/img/footer-bg.jpg);

        li {
            font-size: .8rem;
        }

        .position-absolute {
            top: -20%;
            bottom: 0;
            right: 0;
            width: 50%;
            height: 150%;
            overflow: hidden;      

            img {
            overflow: hidden;
            height: 100%;
            }
        }

    }
</style>