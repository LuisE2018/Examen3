<template>
  <div class="navbar">
    <header id="header">
      <nav
        class="navbar navbar-expand-lg navbar-dark colorMenuPrincipal fixed-top"
      >
        <div class="container">
          <a class="navbar-brand" href="#">
            <img
              src="../assets/img/logo.svg"
              alt="La Cucina Italina"
              width="132"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="index.html">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="productos.html">Productos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contacto.html">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name:'NavBar'
}
</script>