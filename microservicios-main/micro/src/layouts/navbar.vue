<template>
    <nav class="navbar">
      <div class="navbar-container">
        <div class="logo">
          <router-link to="/">
            <img src="@/assets/logo.png" alt="Logo Peluquería" class="logo-img" />
            <span>Peluquería Serghi</span>
          </router-link>
        </div>
        <ul class="nav-links">
          <li><router-link to="/">Inicio</router-link></li>
          <li><router-link to="/citas">Citas</router-link></li>
          <li><router-link to="/servicios">Servicios</router-link></li>
          <li><router-link to="/contactos">Contacto</router-link></li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "AppNavbar",
  };
  </script>
  
  <style>
  .navbar {
    background: linear-gradient(90deg, #0e35a9, #164ca3);
    color: white;
    padding: 15px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  
  .logo {
    display: flex;
    align-items: center;
  }
  
  .logo a {
    color: #fff;
    text-decoration: none;
    font-size: 26px;
    font-weight: 700;
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
  }
  
  .logo-img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  .nav-links {
    list-style: none;
    display: flex;
    gap: 25px;
    margin: 0;
    padding: 0;
  }
  
  .nav-links li a {
    color: white;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    transition: color 0.3s ease, transform 0.3s ease;
  }
  
  .nav-links li a:hover {
    color: #ffe4e1;
    text-decoration: underline;
    transform: scale(1.1);
  }
  
  .nav-links li a:active {
    color: #ffebe8;
  }
  </style>
  