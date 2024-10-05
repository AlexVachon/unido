<template>
    <h1 class="text-3xl font-bold my-10 text-center">
        {{ t('login') }}
    </h1>
    <LogForm/>
</template>
<script lang="ts" setup>
import LogForm from '@/components/forms/log.vue';
import { useI18n } from 'vue-i18n';

const {t} = useI18n()

</script>
<style lang="css" scoped></style>