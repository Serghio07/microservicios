<template>
  <div class="servicios">
    <h1 class="title">Nuestros Servicios</h1>
    <p class="description">
      Descubre los servicios exclusivos que ofrecemos para cuidar tu cabello y estilo.
    </p>

    <div class="servicios-lista">
      <div v-for="(servicio, index) in servicios" :key="index" class="servicio-card">
        <img :src="require(`@/assets/img/${servicio.img}`)" :alt="servicio.nombre" />
        <h2>{{ servicio.nombre }}</h2>
        <p class="servicio-precio">Precio: {{ servicio.precio }}</p>
        <p class="servicio-descripcion">{{ servicio.descripcion }}</p>
        <router-link :to="`/citas`" class="btn-agendar">Agendar</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiciosComponent",
  data() {
    return {
      servicios: [
        {
          nombre: "Corte de Cabello",
          precio: "$15",
          descripcion: "Estilos modernos y clásicos para lucir siempre a la moda.",
          img: "servi1.jpg",
        },
        {
          nombre: "Coloración",
          precio: "$30",
          descripcion: "Personaliza tu look con colores vibrantes y duraderos.",
          img: "servi2.jpg",
        },
        {
          nombre: "Peinados",
          precio: "$25",
          descripcion: "Peinados para eventos especiales que te harán destacar.",
          img: "servi3.jpg",
        },
        {
          nombre: "Tratamientos Capilares",
          precio: "$40",
          descripcion: "Cuidado profesional para un cabello sano y radiante.",
          img: "servi4.jpg",
        },
        {
          nombre: "Barbería",
          precio: "$20",
          descripcion: "Servicios exclusivos para caballeros: cortes, afeitados y más.",
          img: "servi5.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.servicios {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  text-align: center;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
}

.description {
  text-align: center;
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 30px;
}

.servicios-lista {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.servicio-card {
  width: 300px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.servicio-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 2px solid #f4f4f4;
}

.servicio-card h2 {
  font-size: 1.5rem;
  color: #333;
  margin: 15px 0;
}

.servicio-precio {
  font-size: 1.2rem;
  color: #28a745;
  font-weight: bold;
  margin-bottom: 10px;
}

.servicio-descripcion {
  font-size: 1rem;
  color: #666;
  margin-bottom: 20px;
}

.btn-agendar {
  display: inline-block;
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s;
}

.btn-agendar:hover {
  background-color: #0056b3;
}

.servicio-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}
</style>
