<template>
    <div class="container">
        <!-- 標題 -->
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">open1999</a>
                </div>
                <ul class="nav navbar-nav navbar-right">
                    <li class="nav-item">
                        <a class="nav-link hidden-xs-down" target="_blank" href="https://data.kcg.gov.tw/dataset/open1999">資料出處：data.kcg.gov.tw</a>
                    </li>
                </ul>
            </div>
        </nav>
        <hr>
        <!-- 卡片 -->
          <div class="row">
            <div class="col-md-4 col-sm-6" v-for="item in getOpen1999">
                <!-- thumbnail  四方向的padding + 灰色邊框 -->
                <div class="thumbnail">
                    <span class="label label-warning">{{ item.ZipName_ }}</span>
                    <span class="label label-coral">{{ item.InformDesc_ }}</span>
                    <span class="label label-info">{{ item.UnitName_ }}</span>
                    <div class="caption">
                        <h3>
                            <a :href="getGoogleMap( item.address_ )" target="_blank">{{ item.address_ }}</a>
                        </h3>
                        <p>{{ item.BeforeDesc_ }}</p>
                        <small class="text-muted">反應日期：{{ item.Cre_Date_ }}</small>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>


<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    created () {
        this.$store.dispatch('open1999');
    },
    computed: {
        ...mapGetters([
            'getOpen1999'
        ]),
    },
    methods: {
        ...mapActions([
        ]),
        getGoogleMap (address) {
            // Template literals
            // ${裡面可以放變數}
            // ES5: "https://www.google.com/maps/place/" + address;
            return `https://www.google.com/maps/place/${address}`;
        }
    }
}
</script>
<style>
.thumbnail {
  height: 180px;
}
.thumbnail h3 {
  margin-top: 7px;
}
.label-coral {
  background-color:coral;
}
</style>

