<template>
    <el-card class="card-width p-4" shadow="always">
        <el-form :model="form" status-icon :rules="rules" ref="loginForm" label-position="top">
            <el-form-item label="E-mail" prop="email">
                <el-input v-model="form.email" placeholder="Enter your email" />
            </el-form-item>

            <el-form-item label="Mot de passe" prop="password">
                <el-input v-model="form.password" placeholder="Enter your password" show-password />
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('loginForm')">Se connecter</el-button>
                <el-button @click="resetForm('loginForm')">Réinitialiser</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

// Form data
const form = ref({
    email: '',
    password: '',
});

// Form validation rules
const rules = ref({
    email: [
        { required: true, message: "L'email est requis", trigger: 'blur' },
        { type: 'email', message: "Veuillez entrer un e-mail valide", trigger: ['blur', 'change'] },
    ],
    password: [
        { required: true, message: 'Le mot de passe est requis', trigger: 'blur' },
        { min: 6, message: 'Le mot de passe doit comporter au moins 6 caractères', trigger: 'blur' },
    ],
});

// Form submit function
const submitForm = (formName: string) => {
    const formRef = ref(null);
    formRef.value?.validate((valid: boolean) => {
        if (valid) {
            ElMessage({
                message: 'Connexion réussie !',
                type: 'success',
            });
        } else {
            ElMessage({
                message: 'Veuillez vérifier les champs du formulaire.',
                type: 'error',
            });
            return false;
        }
    });
};

// Reset form function
const resetForm = (formName: string) => {
    const formRef = ref(null);
    formRef.value?.resetFields();
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