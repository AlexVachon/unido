<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ElContainer, ElHeader, ElMain } from 'element-plus'

import menuComp from '@/components/menu/menu.vue';

</script>

<template>
  <el-container>
    <el-header>
      <menuComp />
    </el-header>
    <el-container class="flex flex-col">
      <el-main class="flex justify-center">
        <div>
          <RouterView />
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
