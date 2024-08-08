import { createRouter, createWebHistory } from 'vue-router';
import GenerateKeyPage from '../components/Generate.vue';
import EncryptPage from '../components/Encrypt.vue';
import DecryptPage from '../components/Decrypt.vue';

const routes = [
{ path: '/', component: GenerateKeyPage },
{ path: '/encrypt', component: EncryptPage },
{ path: '/decrypt', component: DecryptPage }
];

const router = createRouter({
history: createWebHistory(),
routes
});

export default router;