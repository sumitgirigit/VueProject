<template>
  <div>
    <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Vuetify</v-toolbar-title>
    </v-app-bar>
cd
    <v-main>
      <!--  -->
    </v-main>
  </v-app>
    <HelloWorld />
    <StudentsRecord class="studentrecord"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import StudentsRecord from './components/StudentsRecord';
//import { projectFireStore } from './firebase/config'

export default {
  name: 'App',
  components: {
    HelloWorld,
    StudentsRecord
  },

  data: function () {
    return {
      count: 0,
      drawer: false,
    }
  },

  mounted() {
    console.log("App Mounted");

  },
};
</script>

<style>
.header{
  text-align: center;
  top: 10px;
}

.studentrecord {
  width: 50%;
  margin: 0 auto;
  border: 1px solid rgb(145, 142, 142);
}

.theme--light.v-toolbar.v-sheet {
    background-color: #21c4da;
}
</style>
