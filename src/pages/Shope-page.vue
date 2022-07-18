<template>
  <div class="listaProdutos">
    <h2>Lista de Produtos</h2>

    <div v-for="item in info" :key="item.info" class="itemLoope">
      
      <div class="imgLoope">
        <img src="{{item.imagem}}" />
      </div>

      <div class="infoProdutos">
        <h3> {{item.nome}} </h3>
        <p> {{item.marca}} </p>
        <h4> {{item.valor}}  </h4>
        <p> {{item.cor.nome}}  </p>
      </div>


      <div class="botaoCompras">
        <button>
          <img src="../assets/imagens/icone-editar.svg" />
          
        </button>
        <button>
          <img src="../assets/imagens/icone-carrinho.svg" />
        </button>
        <button>
          <img src="../assets/imagens/icone-deletar.svg" />
        </button>
      </div>


    </div> 
    <!-- fim da div laço de repetição -->


     
  </div>
</template>

<script>
  
import api from "../api.js"


export default {
  name: "Shope-page",
  data(){
    return {
      info: null,
      
    }
  },
  mounted(){
      api
      .get("/produtos")
      .then(response => (this.info = response.data) )
      .catch(error => console.log(error))
  },
  methods:{
    conv(numero) {
      return numero.parseFloat("pt-br", {
              style: "currency",
              currency: "BRL",
            });
    }
  },



}
  



 
</script>

<style>
.botaoCompras button {
  background: transparent;
  border: 0;
}
.botaoCompras button img {
  background: transparent;
  width: 50px;
  border: 30px;
}
.botaoCompras {
  display: flex;
  flex-direction: row;
  justify-content: right;
  float: right;
  width: 100%;
}


</style>
