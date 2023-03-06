<script setup>
import { reactive } from 'vue';
import Formulario from './components/Formulario.vue';
</script>

<template>
  <div class="container">
    <Formulario />
  </div>
</template>

<style scoped>
  .container {
    margin-top: 15vw;
    max-width: 500px;
  }
</style>