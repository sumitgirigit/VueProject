
//import { ref } from 'vue'
import { projectFireStore } from '../firebase/config'

const getStudents = () => {

    const students = {}
    const error = null

    const load = async () => {
        try {
            
            const res = await projectFireStore.collection('students').get()
            //console.log(res.docs[0].data())
            students.value = res.docs.map( doc => {
                console.log(doc.data())
            })

        } catch (err) {

            error.value = err.message
            console.log(error.value)

        }
    }

    return { students, error, load }

}

export default getStudents