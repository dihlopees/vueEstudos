<template>
  <div class="tituloCarrinho">
    <h1>Carrinho</h1>
    <p>{{ id }}</p>
  </div>

  <div class="quadradoGrande">
    <div v-for="item in dados" :key="item.dados" class="itemQuadrado">
      <div class="imgQuadadro">
        <img :src="item.imagem" />
      </div>

      <div class="infoQuadrado">
        <h4>{{ item.nome }}</h4>
        <p>{{ item.marca }}</p>
        <p>Cor: {{ item.cor.nome }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../api.js";

export default {
  name: "Carrinho-page",
  data() {
    return {
      dados: null,
      id: this.$route.params.id,
    };
  },
  mounted() {
    api
      .get("/produtos/"+ this.id)
      .then((response) => (this.dados = response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>
