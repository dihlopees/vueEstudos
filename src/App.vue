<template>
  <div class="nav">
  <router-link to="/">Você esta em Home</router-link>
  
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
  
}
.nav{
  margin-top:20px;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(2,50%);
  
}

</style>
