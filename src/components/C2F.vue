<template>
    <div class="container">
        <h1>Temprature Conversion </h1>
        <input id="tempratureConversion" type="checkbox" v-model="isCelsius">
        <lable for="tempratureConversion" >切換成 {{toggleTemperature}}</lable>
        <br/>
        <br/>
        <div class="calculate">
            <span v-show="!isCelsius">攝氏：</span>
            <span v-show="isCelsius">華氏：</span>
            <input type='number' v-model="input" /> 
        </div>
        <br/>
        <h2 v-if="isCelsius">攝氏:{{formularCelsius}} °C</h2>
        <h2 v-if="!isCelsius">華氏:{{formularNotCelsius}} °F</h2>
        <button @click="alertResult()"> Show Result</button>
    </div>
</template>


<script>
export default {
    data : function(){
        return{
            input : 0,
            isCelsius:false
        }
    },
    computed:{
         //ES6
        formularNotCelsius (){
            return Math.round( this.input * 9/5 +32 ,2);
        },
        //ES5
        formularCelsius:function(){
            return Math.round( (this.input -32) *5/9,2);
        },
        
        toggleTemperature (){
            return this.isCelsius?"攝氏 => 華氏" : "華氏 => 攝氏";
        }
    },
    methods: {
        alertResult(){
            if(this.isCelsius) {
                alert("攝氏 = " + this.formularCelsius);
            }
            else {
                alert("華氏 = " + this.formularNotCelsius)
            }
        }
    }    
}
</script>
