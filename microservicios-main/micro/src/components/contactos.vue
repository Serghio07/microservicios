<template>
  <div class="contacto">
    <h1 class="title">Contáctanos</h1>
    <p class="description">
      ¿Tienes alguna consulta? Estamos aquí para ayudarte. Contáctanos a través de cualquiera de los siguientes medios.
    </p>

    <!-- Información de Contacto -->
    <section class="info-contacto">
      <div class="info-item">
        <h2>Teléfono</h2>
        <p><a href="tel:+123456789">+1 (234) 567-89</a></p>
      </div>
      <div class="info-item">
        <h2>Correo Electrónico</h2>
        <p><a href="mailto:contacto@pelucas.com">contacto@pelucas.com</a></p>
      </div>
      <div class="info-item">
        <h2>Dirección</h2>
        <p>Calle Peluquería 123, Ciudad de Estilo, País</p>
      </div>
    </section>

    <!-- Formulario de Contacto -->
    <section class="formulario-contacto">
      <h2>Envíanos un Mensaje</h2>
      <form @submit.prevent="enviarMensaje">
        <div class="form-group">
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" v-model="form.nombre" required />
        </div>
        <div class="form-group">
          <label for="email">Correo Electrónico:</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>
        <div class="form-group">
          <label for="mensaje">Mensaje:</label>
          <textarea id="mensaje" v-model="form.mensaje" rows="5" required></textarea>
        </div>
        <button type="submit" class="btn-enviar">Enviar Mensaje</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: "ContactosComponent",
  data() {
    return {
      form: {
        nombre: "",
        email: "",
        mensaje: "",
      },
    };
  },
  methods: {
  enviarMensaje() {
    if (!this.form.nombre.trim()) {
      alert("Por favor ingresa tu nombre.");
      return;
    }
    if (!this.form.email.trim() || !this.form.email.includes("@")) {
      alert("Por favor ingresa un correo electrónico válido.");
      return;
    }
    if (!this.form.mensaje.trim()) {
      alert("Por favor escribe un mensaje.");
      return;
    }
    alert(`Gracias ${this.form.nombre}, tu mensaje ha sido enviado.`);
    this.form = { nombre: "", email: "", mensaje: "" }; // Resetear el formulario
  },
},

};
</script>

<style scoped>
.contacto {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  text-align: center;
  font-size: 2.8rem;
  color: #333;
  margin-bottom: 20px;
  font-family: 'Arial', sans-serif;
}

.description {
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 40px;
  line-height: 1.5;
}

.info-contacto {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  margin-bottom: 40px;
}

.info-item {
  flex: 1 1 calc(33% - 20px);
  background: linear-gradient(to bottom right, #ffffff, #f1f1f1);
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.info-item h2 {
  font-size: 1.6rem;
  color: #333;
  margin-bottom: 10px;
}

.info-item p {
  font-size: 1rem;
  color: #555;
  margin: 0;
}

.info-item a {
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
}

.info-item a:hover {
  text-decoration: underline;
}

.formulario-contacto {
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.formulario-contacto h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 1rem;
  color: #555;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #f9f9f9;
  transition: border-color 0.3s ease;
}

input:focus,
textarea:focus {
  border-color: #007bff;
  outline: none;
}

textarea {
  resize: none;
}

.btn-enviar {
  display: block;
  width: 100%;
  background-color: #007bff;
  color: white;
  padding: 12px 20px;
  text-align: center;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.2s ease;
}

.btn-enviar:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

</style>
