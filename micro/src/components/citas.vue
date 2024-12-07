<template>
  <div class="citas">
    <h1 class="title">Gestión de Citas</h1>
    
    <!-- Formulario para agendar una nueva cita -->
    <section class="nueva-cita">
      <h2>Agendar Nueva Cita</h2>
      <form @submit.prevent="agendarCita">
        <div class="form-group">
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" v-model="nuevaCita.nombre" required />
        </div>
        <div class="form-group">
          <label for="servicio">Servicio:</label>
          <select id="servicio" v-model="nuevaCita.servicio" required>
            <option value="" disabled>Selecciona un servicio</option>
            <option v-for="servicio in servicios" :key="servicio" :value="servicio">{{ servicio }}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="fecha">Fecha y Hora:</label>
          <input type="datetime-local" id="fecha" v-model="nuevaCita.fecha" required />
        </div>
        <button type="submit" class="btn-agendar">Agendar Cita</button>
      </form>
    </section>

    <!-- Lista de citas existentes -->
    <section class="lista-citas">
      <h2>Tus Citas</h2>
      <div v-if="citas.length > 0" class="citas-lista">
        <div v-for="(cita, index) in citas" :key="index" class="cita">
          <h3>{{ cita.nombre }}</h3>
          <p><strong>Servicio:</strong> {{ cita.servicio }}</p>
          <p><strong>Fecha:</strong> {{ new Date(cita.fecha).toLocaleString() }}</p>
          <button class="btn-cancelar" @click="cancelarCita(index)">Cancelar</button>
        </div>
      </div>
      <p v-else>No tienes citas programadas.</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CitasComponent',
  data() {
    return {
      servicios: ['Corte de Cabello', 'Coloración', 'Peinados', 'Tratamientos', 'Barbería'],
      nuevaCita: {
        nombre: '',
        servicio: '',
        fecha: '',
      },
      citas: [], // Aquí se almacenarán las citas agendadas
    };
  },
  methods: {
    agendarCita() {
      if (!this.nuevaCita.nombre || !this.nuevaCita.servicio || !this.nuevaCita.fecha) {
        alert('Por favor completa todos los campos.');
        return;
      }
      this.citas.push({ ...this.nuevaCita });
      this.nuevaCita = { nombre: '', servicio: '', fecha: '' }; // Resetear formulario
      alert('Cita agendada exitosamente.');
    },
    cancelarCita(index) {
      if (confirm('¿Estás seguro de que deseas cancelar esta cita?')) {
        this.citas.splice(index, 1);
        alert('Cita cancelada.');
      }
    },
  },
};
</script>

<style scoped>
.citas {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  text-align: center;
  font-size: 2.5rem;
  color: #333;
}

.nueva-cita {
  margin-top: 20px;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.nueva-cita h2 {
  font-size: 1.8rem;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input,
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.btn-agendar {
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s;
}

.btn-agendar:hover {
  background-color: #218838;
}

.lista-citas {
  margin-top: 40px;
}

.lista-citas h2 {
  font-size: 1.8rem;
  margin-bottom: 20px;
}

.citas-lista {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.cita {
  padding: 15px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.cita h3 {
  margin: 0;
  font-size: 1.5rem;
}

.cita p {
  margin: 5px 0;
  color: #555;
}

.btn-cancelar {
  background-color: #dc3545;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: bold;
  transition: background-color 0.3s;
}

.btn-cancelar:hover {
  background-color: #c82333;
}
</style>
