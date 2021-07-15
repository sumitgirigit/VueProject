<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App Sumit"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import getStudents from './composables/getStudents'

export default {
  name: 'App',
  components: {
    HelloWorld
  },

  mounted() {
    console.log("Mounted");
    const { load } = getStudents();
    load();
  },

  methods: {
    
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
