<template>
  <div id="app">

    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">jérémie Herzog</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav text-uppercase ml-auto">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#projets">projets</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#portfolio">About</a>
            </li>
            <li class="nav-item">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Header -->
    <header class="masthead">
      <div class="container">
        <div class="intro-text">
          <div class="intro-lead-in">Bienvenue sur mon Portfolio</div>
          <br>
          <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#projets">En Savoir plus</a>
        </div>
      </div>
    </header>

    <!-- projets -->
    <section id="projets">
      <div class="container">
        
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Projets</h2>
          </div>
          <div class="card">
            
     <div class="container">
      <h4><b>Hiking</b></h4>
    <p>Projet Wordpress</p>
      </div>
    </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Contact</h2>
            <h3 class="section-subheading text-muted a-propos">Bonjour, Je m'appelle Jérémie Herzog. Je suis étudiant à l'université de Belfort-Montbéliard en 2ème année de MMI. Je suis passioné par le developpement web</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <a href="mailto:jeremie.herzog1@gmail.com" class="a-propos">Contactez-moi</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <span class="copyright">Copyright &copy; Jérémie Herzog 2021</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'


export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background: black;
}
.a-propos{
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  color: Black;
  text-decoration: none;
}
</style>
