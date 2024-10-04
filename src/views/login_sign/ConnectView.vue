<script setup lang="ts">
import { RouterView } from 'vue-router'


import menuComp from '@/components/menu/menu.vue';

</script>

<template>
  <el-container>
    <el-header>
      <menuComp />
    </el-header>
    <el-container class="container">
      <el-main>
        <div>
          <RouterView />
        </div>
      </el-main>
    </el-container>

  </el-container>
</template>
