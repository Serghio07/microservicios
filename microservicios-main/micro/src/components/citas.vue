<template>
  <div class="citas">
    <h1 class="title">Gestión de Citas</h1>

    <!-- Formulario para agendar una nueva cita -->
    <section class="nueva-cita">
      <h2>Agendar Nueva Cita</h2>
      <form @submit.prevent="agendarCita">
        <div class="form-group">
          <label for="cliente_nombre">Nombre:</label>
          <input type="text" id="cliente_nombre" v-model="nuevaCita.cliente_nombre" required />
        </div>
        <div class="form-group">
          <label for="servicio">Servicio:</label>
          <select id="servicio" v-model="nuevaCita.servicio" required>
            <option value="" disabled>Selecciona un servicio</option>
            <option v-for="servicio in servicios" :key="servicio" :value="servicio">{{ servicio }}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="fecha">Fecha:</label>
          <input type="date" id="fecha" v-model="nuevaCita.fecha" required />
        </div>
        <div class="form-group">
          <label for="hora">Hora:</label>
          <input type="time" id="hora" v-model="nuevaCita.hora" required />
        </div>
        <div class="form-group">
          <label for="notas">Notas:</label>
          <textarea id="notas" v-model="nuevaCita.notas"></textarea>
        </div>
        <button type="submit" class="btn-agendar">Agendar Cita</button>
      </form>
    </section>

    <!-- Lista de citas existentes -->
    <section class="lista-citas">
      <h2>Tus Citas</h2>
      <div v-if="citas.length > 0" class="citas-lista">
        <div v-for="(cita, index) in citas" :key="cita.id" class="cita">
          <h3>{{ cita.cliente_nombre }}</h3>
          <p><strong>Servicio:</strong> {{ cita.servicio }}</p>
          <p><strong>Fecha:</strong> {{ cita.fecha }} a las {{ cita.hora }}</p>
          <p v-if="cita.notas"><strong>Notas:</strong> {{ cita.notas }}</p>
          <button class="btn-cancelar" @click="cancelarCita(cita.id)">Cancelar</button>
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
        cliente_nombre: '',
        cliente_telefono: '',
        servicio: '',
        fecha: '',
        hora: '',
        notas: '',
      },
      citas: [], // Aquí se almacenarán las citas traídas desde el backend
    };
  },
  methods: {
    async obtenerCitas() {
      try {
        const response = await fetch('http://localhost:3000/api/citas'); // Ajusta la URL según tu configuración
        const data = await response.json();
        this.citas = data;
      } catch (error) {
        console.error('Error al obtener citas:', error);
      }
    },
    async agendarCita() {
      try {
        const response = await fetch('http://localhost:3000/api/citas', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.nuevaCita),
        });
        if (!response.ok) throw new Error('Error al agendar la cita.');
        const nuevaCita = await response.json();
        this.citas.push(nuevaCita); // Agregar la nueva cita a la lista
        this.nuevaCita = {
          cliente_nombre: '',
          cliente_telefono: '',
          servicio: '',
          fecha: '',
          hora: '',
          notas: '',
        }; // Resetear formulario
        alert('Cita agendada exitosamente.');
      } catch (error) {
        console.error('Error al agendar la cita:', error);
        alert('Hubo un error al agendar la cita.');
      }
    },
    async cancelarCita(id) {
      if (!confirm('¿Estás seguro de que deseas cancelar esta cita?')) return;

      try {
        const response = await fetch(`http://localhost:3000/api/citas/${id}`, {
          method: 'DELETE',
        });
        if (!response.ok) throw new Error('Error al cancelar la cita.');
        this.citas = this.citas.filter((cita) => cita.id !== id); // Eliminar la cita de la lista
        alert('Cita cancelada exitosamente.');
      } catch (error) {
        console.error('Error al cancelar la cita:', error);
        alert('Hubo un error al cancelar la cita.');
      }
    },
  },
  mounted() {
    this.obtenerCitas(); // Cargar las citas al montar el componente
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
