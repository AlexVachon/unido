<template>
    <el-menu :default-active="activeIndex" class="my-2" mode="horizontal" :ellipsis="false" router>
        <el-menu-item index="0" :to="{ name: 'login' }">
            <el-container class="container-logo">
                <div>
                    <img src="@/assets/logo_small.svg" alt="test" />
                </div>
                <div>
                    <img src="@/assets/logo.svg" alt="" />
                </div>
            </el-container>
        </el-menu-item>

        <div class="my-auto me-3">
            <el-switch v-model="isEnglish" inline-prompt active-text="EN" inactive-text="FR"
                @change="handleLocaleChange"></el-switch>
        </div>
    </el-menu>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter, useRoute } from 'vue-router';
import { ElMenu, ElContainer } from 'element-plus';

const activeIndex = ref('1');
const isEnglish = ref(true);

const { locale } = useI18n();
const router = useRouter();
const route = useRoute();

const storedLocale = localStorage.getItem('locale');
if (storedLocale) {
    locale.value = storedLocale;
    isEnglish.value = storedLocale === 'en';
}

const handleLocaleChange = () => {
    const newLocale = isEnglish.value ? 'en' : 'fr';
    changeLocale(newLocale);
};

const changeLocale = (newLocale: string) => {
    locale.value = newLocale;
    localStorage.setItem('locale', newLocale);

    const newPath = `/${newLocale}${route.fullPath.substring(3)}`;
    router.push({ path: newPath });
};

watch(
    () => route.params.locale,
    (newLocale) => {
        isEnglish.value = newLocale === 'en';
    }
);
</script>

<style lang="css" scoped>
.el-menu--horizontal>.el-menu-item:nth-child(1) {
    margin-right: auto;
}
</style>