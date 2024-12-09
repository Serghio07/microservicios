<template>
    <footer class="footer">
      <div class="footer-container">
        <p>© 2024 Peluquería. Todos los derechos reservados.</p>
        <ul class="footer-links">
          <li><router-link to="/">Inicio</router-link></li>
          <li><router-link to="/politicas">Políticas</router-link></li>
          <li><router-link to="/contacto">Contacto</router-link></li>
        </ul>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "AppFooter",
  };
  </script>
  
  <style>
  .footer {
    background-color: #222;
    color: white;
    text-align: center;
    padding: 20px;
    position: relative;
    bottom: 0;
    width: 100%;
  }
  
  .footer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .footer-links {
    list-style: none;
    display: flex;
    gap: 20px;
    margin: 10px 0 0;
    padding: 0;
  }
  
  .footer-links li a {
    color: white;
    text-decoration: none;
    font-size: 14px;
  }
  
  .footer-links li a:hover {
    text-decoration: underline;
  }
  </style>
  