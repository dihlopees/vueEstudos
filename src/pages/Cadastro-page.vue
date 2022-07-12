<template>
  <div class="cadastroProdutos">
    <div class="tituloCadastro">
      <h2>Cadastro de Produtos</h2>
    </div>

    <div class="formulario">
      <form action="" method="post">
        <label for="POST-name">Nome do Produto:</label>
        <input id="POST-name" type="text" name="name" required>

        <label for="POST-name">Marca:</label>
        <input id="POST-name" type="text" name="marca" required >

        <label for="POST-name">Valor:</label>
        <input id="POST-name" type="number" name="valor" required>

        <label for="POST-name">Cor:</label>
        <select name="select" required>
            <option value="branco">Branco</option>
            <option value="preto">Preto</option>
            <option value="azul">Azul</option>
        </select>

 

        <label for="POST-name">Data:</label>
        <input id="POST-name" type="date" name="data" required>
        
        <div class="addimg">
        <input  type="file" >
          <img src="../assets/imagens/icone-adicionar-foto.svg" alt="adicionar foto" >
        </div>

        <button type="submit">Adicionar Produto</button>
      </form>
    </div>
  </div>
</template>

<style>
.tituloCadastro {
  display: grid;
  text-align: left;
  margin-left: 250px;
}

.formulario form {
  display: flex;
  flex-direction: column;
  width: 600px;
  position: relative;
 
  left:17%;
  top:29%;
}

.formulario input {
  margin: 10px;
  height: 30px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.formulario select {
  margin: 10px;
  height: 30px;
}

.formulario button {
  color:white;
  border: 1px solid crimson;
  border-radius: 10px;
  padding: 10px;
  background-color: crimson;
  width: 200px;
  margin-top: 20px;
}

.formulario label{
 text-align: left;
 margin-left: 15px;
}

.addimg input{
    cursor: pointer;
    opacity: 0;
    z-index: 1;
    width: 90px;
    height: 90px;
    position: absolute;
    
    
   
}

.addimg img {
    width: 120px;
    height: 120px;
    
 
}

.addimg{
    display: flex;
    flex-direction: column;
    min-height: 15vh;
    margin-left: 0px;
    padding-top: 30px;
}
</style>
