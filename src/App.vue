<template>
  <div class="nav">
  <router-link to="/">Home</router-link>
  <router-link to="/shope">Shope</router-link>
  <router-link to="/cadastro">Cadastro de Produto</router-link>
 
  
  </div>  
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style scope>
.nav a{
  text-decoration: none;
  border-radius: 10px;
  color:white;
  border: 1px solid crimson;
  padding: 10px;
  background-color: crimson;
  width: 150px;
  margin: 20px;
  
}
.nav{
  
  padding: 50px;
  
  
  
}

</style>
