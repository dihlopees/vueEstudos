<template>
  <div class="listaProdutos">
    <h2>Lista de Produtos</h2>

    <div v-for="item in lista" :key="item.lista" class="itemLoope">
      
      <div class="imgLoope">
        <p> {{item.img}} </p>
      </div>

      <div class="infoProdutos">
        <h3> {{item.nome}} </h3>
        <p> {{item.marca}} </p>
        <h4> {{item.valor}}  </h4>
        <p> {{item.cor}}  </p>
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

export default {
  name: "Shope-page",
  data(){
    return {
      lista:[
        {
          nome: "Camera 1",
          marca: "Marca 1",
          valor:100,
          cor:"cor 1",
          img:"imagem 1"
        },
        {
          nome: "Camera 2",
          marca: "Marca 2",
          valor:200,
          cor:"cor 2",
          img:"imagem 2"
        }
      ]
    }
  }
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
