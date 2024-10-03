<template>
<el-menu
    :default-active="activeIndex"
    class=""
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
>
    <el-menu-item index="0">
        <img src="@/assets/logo.svg" alt="test"/>
    </el-menu-item>
</el-menu>

</template>
<script lang="ts" setup>
import {ref} from 'vue';
import {ElMenu} from 'element-plus';

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}

</script>
<style lang="css" scoped>
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}
</style>