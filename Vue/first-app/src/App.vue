<template>
  <div>
    <h1> Welcome to Vue </h1>
    <v-data-table
      :headers="headers"
      :items="desserts"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld';
import { projectFireStore } from './firebase/config'

export default {
  name: 'App',

  components: {

  },

  data: function () {
    return {
      count: 0,
      studentsRecord: {},
      error: null,
      headers: [
          {
            text: 'Roll No.',
            align: 'start',
            sortable: false,
            value: 'roll',
          },
          { text: 'Name', value: 'name' },
          { text: 'Department', value: 'department' },
        ],
      desserts: [
      ],
    }
  },

  async mounted() {
     try {          

          const res = await projectFireStore.collection('students').get()
          this.studentsRecords = res.docs
          console.log(this.studentsRecords)
          this.studentsRecords.map( doc => {
              console.log(doc.data())
              this.desserts.push(doc.data());
          })
          console.log(this.desserts);
        } catch (err) {
            
          this.error = err.message
          console.log(this.error)

        }
  },
};
</script>
