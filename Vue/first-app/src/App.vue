<template>
  <div>
    <v-card
    flat
    height="200px"
    tile
  >
    <v-toolbar 
      color= #21c4da
      dense
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Vuetify</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>

    <h1 class="header"> Vue App </h1>
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
