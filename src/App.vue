<template>
  <div>
    <h1>{{ title }}</h1>

    <div class="input" >
      <input v-model="campo" placeholder="Digite seu nome aqui:" /> {{aviso}}
      
      <button @click="pushLista">Adicionar</button>
            
    
        <h3> Nomes da Mesa:</h3>
        <div v-for="item in items" :key="item.items">
        
        <p> {{item}}</p>
        
        </div>
      
    </div>

    <div v-if="showRender">
      <renderizar :text="text" />
    </div>

    <div class="botao">
      <button @click="mostrarRender">{{ nomeBotao }}</button>
    </div>
  </div>
</template>

<script>
import renderizar from "./components/renderizar_compo.vue";

export default {
  name: "App",
  components: { renderizar },
  data() {
    return {
      title: "Meu Root App",
      text: "Informação do meu Componente",
      showRender: false,
      nomeBotao: "Mostrar Render",
      items: ["Ingrid" ," Idair", " Paulo"],
      campo:"",
      aviso:"",
      timer:null,
      
     
    }
  },
  methods: {
    mostrarRender() {
      this.showRender = !this.showRender;

      if (this.showRender == true) {
        this.nomeBotao = "Esconder Render";
      } else {
        this.nomeBotao = "Mostrar Render";
      }
    },
    pushLista() {

      if(this.campo.length > 3){
            this.items.push(this.campo)
            alert("Nome adicionado com sucesso")
      }else {
        alert("Informe um nome com mais de 3 letras")
      }
      
      
      this.campo = ""
      
      
      
    },
    setarTime(){
    this.aviso = "Aguardando..";
    }
  },
  watch:{
    campo(){
      this.aviso = "Digitando..."

      
      if(this.timer != null){
          clearTimeout(this.timer);
      }

      this.timer = setTimeout(this.setarTime, 1000)

    }
  }
};
</script>

<style scope>
#app {
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  text-align: center;
 
}

.input {
 border: solid 4px #ccc;
  margin: 50px;
  padding: 15px;
}

button {
  height: 40px;
  border-radius: 30px;
  margin: 50px;
  background-color: #ccc;
}
</style>
