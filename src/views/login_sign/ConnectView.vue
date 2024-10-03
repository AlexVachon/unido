<script setup lang="ts">
import { RouterView } from 'vue-router'


import menuComp from '@/components/views/menu.vue';

</script>

<template>
  <header>
    <menuComp />
  </header>
  <main>
    <RouterView />
  </main>
</template>
