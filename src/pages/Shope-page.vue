<template>
    <div class="botaoCompras">
        <button>
          <img src="../assets/imagens/icone-editar.svg"  />
        </button>
        <button>
          <img src="../assets/imagens/icone-carrinho.svg" />
        </button>
        <button>
          <img src="../assets/imagens/icone-deletar.svg" />
        </button>
      </div>
</template>

<script>

</script>

<style>
.botaoCompras button{
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