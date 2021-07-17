<template>
  <v-data-table
      :headers="headers"
      :items="desserts"
      :dark="false"
      :items-per-page="5"
      class="primary"
    ></v-data-table>
</template>

<script>
import { projectFireStore } from '../firebase/config'

export default {
    data: function () {
    return {
      count: 0,
      studentsRecord: {},
      error: null,
      headers: [
          {
            text: 'Roll No.',
            align: 'left',
            value: 'roll',
            width: 'string',
          },
          { text: 'Name', align: 'left', value: 'name', width: 'string' },
          { text: 'Department', align: 'left', value: 'department', width: 'string' },
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

}
</script>

<style>

</style>