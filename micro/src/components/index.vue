<template>
  <section class="banner">
    <div class="banner-img">
      <img :src="require('@/assets/img/banner.jpg')" alt="Banner Peluquería">
      <h1>Bienvenido a El Pelucas</h1>
    </div>
  </section>

  <section class="entra">
    <div class="block-entrada">
      <h1>El Pelucas</h1>
      <p>
        Bienvenidos a nuestra peluquería, donde el estilo y la elegancia se combinan para ofrecerte lo mejor en cuidado personal.
      </p>
    </div>
    <div class="block-entrada-img">
      <img :src="require('@/assets/img/entrada.jpg')" alt="Entrada a la Peluquería">
    </div>
  </section>

  <section class="servi-carousel" id="servicios">
    <div class="carousel">
      <div v-for="(service, index) in services" :key="index" class="card">
        <img :src="require(`@/assets/img/${service.img}`)" :alt="service.alt">
        <h2>{{ service.title }}</h2>
        <p>{{ service.description }}</p>
      </div>
    </div>
  </section>

  <div class="boton">
    <router-link to="/servicios" class="btn-ver-mas">Ver más...</router-link>
  </div>
</template>

<script>
export default {
  name: 'IndexComponent',
  data() {
    return {
      services: [
        { img: 'servi1.jpg', alt: 'Corte de cabello', title: 'Corte de Cabello', description: 'Estilos modernos y clásicos para lucir siempre a la moda.' },
        { img: 'servi2.jpg', alt: 'Coloración', title: 'Coloración', description: 'Personaliza tu look con colores vibrantes y duraderos.' },
        { img: 'servi3.jpg', alt: 'Peinados', title: 'Peinados', description: 'Peinados para eventos especiales que te harán destacar.' },
        { img: 'servi4.jpg', alt: 'Tratamientos', title: 'Tratamientos', description: 'Cuidado profesional para un cabello sano y radiante.' },
        { img: 'servi5.jpg', alt: 'Barbería', title: 'Barbería', description: 'Servicios exclusivos para caballeros: cortes, afeitados y más.' },
      ],
    };
  },
  mounted() {
    const carousel = document.querySelector(".carousel");
    const cards = document.querySelectorAll(".card");

    // Clonación de las tarjetas para un carrusel continuo
    cards.forEach((card) => {
      const clone = card.cloneNode(true);
      carousel.appendChild(clone);
    });
  },
};
</script>

<style scoped>

/* Banner */
.banner {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
}

.banner-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(70%);
}

.banner-img h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 3rem;
  text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.8);
  font-family: 'Arial', sans-serif;
  text-align: center;
}

/* Sección Entrada */
.entra {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 40px;
  background-color: #f9f9f9;
}

.block-entrada {
  flex: 1;
  text-align: left;
}

.block-entrada h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 15px;
}

.block-entrada p {
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
}

.block-entrada-img {
  flex: 1;
}

.block-entrada-img img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Carrusel */
.servi-carousel {
  perspective: 1000px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  overflow: hidden;
  background-color: #f4f4f4;
}

.carousel {
  width: 300px;
  height: 300px;
  position: relative;
  transform-style: preserve-3d;
  animation: rotate 25s linear infinite;
}

.card {
  position: absolute;
  width: 200px;
  height: 250px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10px;
}

.card img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 5px;
}

.card h2 {
  font-size: 1.2rem;
  margin: 10px 0;
  color: #333;
}

.card p {
  font-size: 0.9rem;
  color: #555;
}

.carousel .card:nth-child(1) { transform: rotateY(0deg) translateZ(300px); }
.carousel .card:nth-child(2) { transform: rotateY(72deg) translateZ(300px); }
.carousel .card:nth-child(3) { transform: rotateY(144deg) translateZ(300px); }
.carousel .card:nth-child(4) { transform: rotateY(216deg) translateZ(300px); }
.carousel .card:nth-child(5) { transform: rotateY(288deg) translateZ(300px); }

@keyframes rotate {
  from { transform: rotateY(0deg); }
  to { transform: rotateY(360deg); }
}

/* Botón */
.boton {
  text-align: center;
  margin-top: 20px;
}

.btn-ver-mas {
  background-color: #ff6f61;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn-ver-mas:hover {
  background-color: #ff8a75;
  transform: scale(1.05);
}

/* Responsividad */
@media (max-width: 768px) {
  .entra {
    flex-direction: column;
  }
  .servi-carousel {
    height: auto;
  }
  .card {
    width: 90%;
    margin: 10px auto;
  }
}
</style>
