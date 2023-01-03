<template>
    <div class="container">
        <h1 class="text-center"> Animals List</h1>
        <table class="table table-striped">
            <thead>
                <th>Animal Id</th>
                <th>Name</th>
                <th>Category</th>
                <th>Sex</th>
                <th>Age</th>
                <th>Color</th>
                <th>Size</th>
                <th>Action</th>
            </thead>
            <tbody>
                <tr v-for = "animal in animals" v-bind:key="animal.id">
                    <td> {{animal.id}}  </td>
                    <td> {{animal.name}}  </td>
                    <td> {{animal.category}}</td>
                    <td> {{animal.sex}} </td>
                    <td> {{animal.age}} </td>
                    <td> {{animal.color}}  </td>
                    <td> {{animal.size}} </td>
                    <td><button v-on:click="deleteAnimal(animal.id)">Delete </button></td>
                </tr>
            </tbody>
        </table>
      
    </div>
    
</template>

<script>
/* eslint-disable */ 
/*jshint esversion: 6 */
import AnimalService from '@/services/AnimalService';


export default {
        name:'Animals',
        data(){
            return{
                animals : []
            };

        },
        methods: {
            getAnimals(){
                AnimalService.getAnimals().then((response) =>{
                    this.animals=response.data;
                })
            },
            deleteAnimal(id) {
                AnimalService.deleteAnimal(id).then(()=>{
                    this.getAnimals();
                })
            },
            /*dodalem komentarz do testu gita */
            
        },
        created(){
            this.getAnimals();
        }
    };
</script>

