<template>

    <div>
        <form @submit.prevent="updateAnimal">
            <div>
                <label for="id">Post Animal Id</label>
                <input type="text" id="id" v-model="formData.id">
            </div>
            <div>
                <label for="name">Post Animal Name</label>
                <input type="text" id="name" v-model="formData.name">
            </div>
            <div>
                <label for="category">Post Animal Category</label>
                <input type="text" id="category" v-model="formData.category">
            </div>
            <div>
                <label for="sex">Post Animal Sex</label>
                <input type="text" id="sex" v-model="formData.sex">
            </div>
            <div>
                <label for="age">Post Animal Age</label>
                <input type="text" id="age" v-model="formData.age">
            </div>
            <div>
                <label for="color">Post Animal Color</label>
                <input type="text" id="color" v-model="formData.color">
            </div>
            <div>
                <label for="size">Post Animal Size</label>
                <input type="text" id="size" v-model="formData.size">
            </div>
            <button>Update Animal</button>
        </form>
       
    </div>
    
</template>

<script>


import AnimalService from '@/services/AnimalService';
export default {
    name: 'UpdateAnimal',
    data() {
        return {
            formData: {
                id: '',
                name: '',
                category: '',
                sex: '',
                age: '',
                color: '',
                size: '',
            },
        }
    },
    
    methods: {
        updateAnimal() {
            AnimalService.updateAnimal( this.formData)
                .then((response) => console.log(response))
                .catch((error) => console.log(error))
                        
        },

    }
}
</script>

<style scoped>

</style>
