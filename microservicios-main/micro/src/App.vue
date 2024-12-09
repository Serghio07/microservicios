<template>
  <div id="app">
    <!-- Navbar -->
    <AppNavbar />

    <!-- Contenido dinámico de las vistas -->
    <router-view />

    <!-- Footer -->
  </div>
</template>

<script>
import AppNavbar from './layouts/navbar.vue';  // Asegúrate que la ruta esté correcta

export default {
  name: 'App',
  components: {
    AppNavbar, // Asegúrate de que el nombre del componente sea correcto aquí también
  },
};
</script>

<style scoped>
/* Eliminar márgenes y padding por defecto */
body, html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Asegurar que el header esté pegado a la parte superior */
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
