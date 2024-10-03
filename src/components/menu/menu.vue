<template>
<el-menu
    :default-active="activeIndex"
    class=""
    mode="horizontal"
    :ellipsis="false"
    router
>
    <el-menu-item index="0":to="{ name: 'login' }">
        <el-container class="container-logo">
            <div>
                <img src="@/assets/logo_small.svg" alt="test"/>
            </div>
            <div>
                <img src="@/assets/logo.svg" alt=""/>
            </div>
        </el-container>
    </el-menu-item>
</el-menu>

</template>
<script lang="ts" setup>
import {ref} from 'vue';
import {ElMenu, ElContainer} from 'element-plus';

const activeIndex = ref('1')

</script>
<style lang="css" scoped>
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}
</style>