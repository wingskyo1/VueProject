<template>
    <div class="container">
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="collapsed navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-5" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a href="#" class="navbar-brand">Shopping Cart</a>
                </div>
                <div class="collapse navbar-collapse navbar-right">
                    <router-link :to="{name: 'Cart'}" class="btn navbar-btn">
                        <span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>
                        <span class="badge">{{ cartTotal }}</span>
                    </router-link>
                </div>
            </div>
        </nav>
        <!-- Recommended Products -->
        <div class="recommend">
            <div class="row">
                <div class="col-md-3">
                    <img :src="recommend.image" style="width: 100%;">
                </div>
                <div class="col-md-9">
                    <div class="recommend-info">
                        <h2>{{ recommend.title }}</h2>
                        <hr>
                        <h3>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum. Just some random text, Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.
                        </h3>
                        <h2>${{ recommend.price }}</h2>
                        <button class="btn btn-danger" @click="addCart( recommend.title )">
                            <span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>
                            加購
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading panel-price">總計： <span>${{ total }}</span> 元</div>
            <table class="table">
                <thead>
                    <tr>
                        <th>項目</th>
                        <th>價錢</th>
                        <th>餐點</th>
                        <th>取消預訂</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(cart, index) in cartList">
                        <td>{{ index + 1 }}</td>
                        <td>{{ cart.price }}</td>
                        <td>{{ cart.title }}</td>
                        <td>
                            <button class="btn btn-default btn-xs glyphicon glyphicon-remove" @click="cancelCart(cart.title)">
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="row">
            <div class="col-md-6 center-block">
                <router-link :to="{name: 'Shop'}" class="btn btn-warning btn-lg btn-block">
                    <span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>
                    back to Shop
                </router-link>
            </div>
            <div class="col-md-6 center-block">
                <button class="btn btn-success btn-lg btn-block center-block">
                    <span class="glyphicon glyphicon-usd" aria-hidden="true"></span>
                    buy now
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    computed: {
        ...mapGetters({
            cartTotal: 'getShoppingCartTotal',
            cartList: 'getShoppingCart',
            total: 'getCartPriceTotal',
            recommend: 'getRecommendedProducts'
        })
    },
    methods: {
        ...mapActions([
            'cancelCart',
            'addCart'
        ])
    },


}
</script>
