

<template>
  <div class="vue-tempalte"> 
    <!-- Main -->
    <navbar />
      <div class="App">
        <div class="vertical-center">
          <div class="inner-block">
            <RouterView />
          </div>
        </div>
      </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import navbar from "./components/navbar.vue"

</script>

<style>
</style>
