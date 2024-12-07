import { createRouter, createWebHistory } from 'vue-router';

// Importar componentes
import IndexComponent from '../components/index.vue';
import CitasComponent from '../components/citas.vue';
import ContactosComponent from '../components/contactos.vue';
import ServiciosComponent from '../components/servicios.vue';

// Definir rutas
const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: IndexComponent, // Componente principal para la página de inicio
  },
  {
    path: '/citas',
    name: 'Citas',
    component: CitasComponent, // Página para gestión de citas
  },
  {
    path: '/contactos',
    name: 'Contactos',
    component: ContactosComponent, // Página de contacto
  },
  {
    path: '/servicios',
    name: 'Servicios',
    component: ServiciosComponent, // Página de servicios ofrecidos
  },
];

// Crear instancia de router
const router = createRouter({
  history: createWebHistory(), // Historial HTML5
  routes,
});

export default router;
