import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import GenerateKeyPage from '../components/Generate.vue';
import EncryptPage from '../components/Encrypt.vue';
import DecryptPage from '../components/Decrypt.vue';

const routes = [
{ path: '/pgp', component: Home },
{ path: '/pgp/generate', component: GenerateKeyPage },
{ path: '/pgp/encrypt', component: EncryptPage },
{ path: '/pgp/decrypt', component: DecryptPage }
];

const router = createRouter({
history: createWebHistory(),
routes
});

export default router;