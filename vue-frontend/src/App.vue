<template>
  <div id="app">
    <Animal />
    <CreateAnimal />
    <UpdateAnimal />
  </div>
</template>

<script>
import Animal from '@/components/Animal.vue'
import CreateAnimal from '@/components/CreateAnimal.vue'
import UpdateAnimal from '@/components/UpdateAnimal.vue'

export default {
  name: 'App',
  components: {
    Animal,
    CreateAnimal,
    UpdateAnimal
  },
    props: {
      label: {
        type: String,
        default: 'Form Label'
      },
      value: {                  // added this
        type: String            // added this
      }                         // added this
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
