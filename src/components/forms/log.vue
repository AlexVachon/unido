<template>
    <el-card class="card-width p-4" shadow="always">
        <template #default>

            <el-form :model="form" status-icon :rules="rules" ref="loginForm" label-position="top">
                <el-form-item :label="t('email')" prop="email">
                    <el-input v-model="form.email" :placeholder="t('enterEmail')" />
                </el-form-item>

                <el-form-item :label="t('password')" prop="password">
                    <el-input v-model="form.password" :placeholder="t('enterPassword')" show-password />
                </el-form-item>

                <el-form-item>
                    <div class="mx-auto mt-2">
                        <el-button type="primary" @click="submitForm('loginForm')">{{ t('login') }}</el-button>
                        <el-button @click="resetForm(loginForm)">{{ t('reset') }}</el-button>
                    </div>
                </el-form-item>
            </el-form>
        </template>
        <template #footer>
            <div class="flex justify-around my-2">
                <el-link type="primary">{{ t('forgetEmail') }}</el-link>
                <el-link type="primary">{{ t('forgetPassword') }}</el-link>
            </div>
        </template>
    </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
import type { FormInstance } from 'element-plus';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// Form data
const form = ref({
    email: '',
    password: '',
});

const loginForm = ref<FormInstance>();

const rules = ref({
    email: [
        { required: true, message: t('requiredEmail'), trigger: 'blur' },
        { type: 'email', message: t('validationEmail'), trigger: ['blur', 'change'] },
    ],
    password: [
        { required: true, message: t('requiredPassword'), trigger: 'blur' },
        { min: 6, message: t('validationPassword'), trigger: 'blur' },
    ],
});

const submitForm = (formName: string) => {
    loginForm.value?.validate((valid: boolean) => {
        if (valid) {
            ElMessage({
                message: t('loginSuccess'),
                type: 'success',
            });
        } else {
            ElMessage({
                message: t('formError'),
                type: 'error',
            });
            return false;
        }
    });
};

// Reset form function
const resetForm = (formEl: FormInstance | undefined) => {
    if (formEl) {
        formEl.resetFields();
        form.value.email = '';
        form.value.password = '';
    }
};
</script>

<style lang="css" scoped>
.card-width {
    width: 480px;
    min-width: 360px;
    border-radius: 15px;
}

.p-4 {
    padding: 1rem;
}
</style>
