<template>
  <div class="tituloCarrinho">
    <h1>Carrinho</h1>
    
  

  <div class="quadradoGrande">
    <div class="itemQuadrado">
      <div class="imgQuadadro">
        <img :src="imagem" />
      </div>

      <div class="infoQuadrado">
        <h4>{{ nome }}</h4>
        <p>{{ marca }}</p>
        <p>Cor: {{ cor }}</p>
      </div>
    </div>
  </div>
</div>

<div class="tituloPedido">
  <h1>Resumo do Pedido</h1>
</div>





</template>

<script>
import api from "../api.js";

export default {
  name: "Carrinho-page",
  data() {
    return {
      nome:"",
      marca:"",
      valor:0,
      cor:"",
      imagem:"",
      id: this.$route.params.id,
    }
  },
  mounted() {
    api
      .get("/produtos/"+ this.id)
      .then((response) => {
        this.nome = response.data.nome
        this.marca = response.data.marca 
        this.valor = response.data.valor
        this.cor = response.data.cor.nome
        this.imagem = response.data.imagem
        
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>
