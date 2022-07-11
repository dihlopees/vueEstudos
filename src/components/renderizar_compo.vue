<template>
  <div class="backdroop">
    <div class="modal" :class="{ dark }">
      <h1>{{ title }}</h1>
      <p>{{ text }}</p>

      <h3>Nomes da Mesa:</h3>
      <div v-for="item in items" :key="item.items">
        <p>{{ item }}</p>
      </div>

      <div class="iconeRedondos" :class="{ dark }">
        <button @click="comprar">
          <img src="../assets/imagens/batom.png" />
        </button>
        <button>
          <img src="../assets/imagens/boca.png" />
        </button>
        <button>
          <img src="../assets/imagens/flor.png" />
        </button>
      </div>

      <div>
        <button @click="mudarTheme">Mood Dark</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["text", "items"],
  data() {
    return {
      title: "aqui dentro fica meu componente",
      dark: false,
    };
  },
  methods: {
    mudarTheme() {
      this.dark = !this.dark;
    },
  },
};
</script>

<style scope>
.modal {
  background-color: bisque;
  color: rgb(41, 37, 37);
}

.modal h1 {
  margin: 20px;
  padding-top: 50px;
}
.iconeRedondos button {
  width: 50px;
  margin: 10px;
  border-radius: 100px;
  background-color: crimson;
}

.dark {
  background-color: black;
  color: white;
}

.dark button {
  background-color: #ccc;
}
</style>
