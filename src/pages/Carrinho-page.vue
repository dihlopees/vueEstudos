<template>
  <div class="todos">
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

        <hr id="hr"/>
        <div class="quantidadeEvalor">

          <h4>Quantidade:</h4>

          <button>
            <img src="../assets/icones/mais.svg">
          </button>
          <p> {{count }} </p>
          <button>
            <img src="../assets/icones/menos.svg">
          </button>

          <h3>{{valor}}</h3>

        </div>
      </div>
    </div>

    <div class="tituloPedido">
      <h1>Resumo do Pedido</h1>

        <div class="subtotal">

          <div class="numeros"> 
            <h4> Subtotal {{count}} itens  </h4>
            <hr/>
            <h4> Frete </h4>
            <hr/>
            <h4> Valor Total </h4>
         </div>

         <div class="botaoPagar">
          <button>
            Pagar
          </button>
         </div>

        </div>
    </div>
  </div>
</template>

<script>
import api from "../api.js"



export default {
  name: "Carrinho-page",
  data() {
    return {
      nome: "",
      marca: "",
      valor: 0,
      cor: "",
      imagem: "",
      id: this.$route.params.id,
      count: 1,
      
      
    };
  },
  mounted() {
    api
      .get("/produtos/" + this.id)
      .then((response) => {
        this.nome = response.data.nome;
        this.marca = response.data.marca;
        this.valor = response.data.valor;
        this.cor = response.data.cor.nome;
        this.imagem = response.data.imagem;
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style>
  .todos{
    display: grid;
    grid-template-columns: repeat(2, 60% 40%);
  }

  .quadradoGrande{
    border: 2px solid #ccc;
    border-radius: 10px;
    margin: 50px;
  }
  .itemQuadrado {
    display: grid;
    grid-template-columns: repeat(2, 30% 70%);
    padding: 20px;
  }
  .infoQuadrado{
    text-align: left;
    
  }
  #hr{
    margin: 10px;
    border: solid 1px #ccc;
  }
  .quantidadeEvalor{
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    padding: 20px;
    margin: 10px;
  }
  .quantidadeEvalor h3{
    color: #0F4C81;
  }
  .quantidadeEvalor button{
    background: transparent;
    border: 0;
  }
  .quantidadeEvalor p{
    border: 1px solid black;
    padding: 10px;
    border-radius: 10px;
    width: 50px;
  }
  .subtotal {
    background-color: #F5F5F5;
    margin: 50px;
    border-radius: 10px;
    height: 330px;
  }
  .tituloCarrinho h1 {
    text-align: left;
    margin-left: 80px;
  }
  .numeros{
    padding: 20px;
  }
  .botaoPagar button{
    border-radius: 10px;
    color: white;
    background-color: crimson;
    border: 0;
    padding: 10px;
    width: 300px;
    margin-top:20px;
    font-size: 18px;
   
  }
  .botaoPagar{
    display: contents;
    width: 300px;
   
  }
</style>
