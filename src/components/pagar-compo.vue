<template>
  <div class="pagarDiv">
    <h3>Pagamento Realizado com Sucesso!</h3>
    <p>Este pagamento foi realizado com:</p>
    <p>{{ calculo }}</p>

 
  </div>
</template>

<script>

import {computed} from "vue"

export default {
  
  props: ["somaFinal"],

  setup(props) {

    const calculo = computed(() => {
      let resultado = props.somaFinal
      console.log(props.somaFinal)
      let quant100 = 0

      if (resultado / 100 > 1) {
      let sobra = resultado - Math.floor(resultado / 100) * 100;

      console.log("sobra:" + sobra);
      quant100 = Math.floor(resultado / 100) + "  cédulas de R$100,00";
      console.log(" quant 100 " + quant100);
      }
      return quant100
    })
    
    console.log("retorno calculo"+ calculo.value)
    

    return { calculo:calculo.value };
  },
};
</script>

<style>

  .pagarDiv{
    border: 1px solid green;
    width:350px;
    border-radius: 10px;
    float: right;
    margin-right: 70px;
    color:green;
    padding: 20px;
    margin-bottom: 20px;
  }
</style>
