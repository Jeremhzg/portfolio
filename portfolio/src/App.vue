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

          <div class="text-center">
            <h2 class="section-heading text-uppercase">Projets</h2>
          </div>
        <div class="row">

          <div class="card1">
     <div class="container card-projet1">
        <h4><b><a href="http://hiking.jeremieherzog.fr/">Hiking</a></b></h4>
          <p>Projet Wordpress</p>
      </div>
    </div>

    <div class="card2">
     <div class="container card-projet2">
      <h4><b>BOSS</b></h4>
    <p>Dev Spécifique, VueJS</p>
      </div>
    </div>
<br>
    <div class="card3">
     <div class="container card-projet2">
      <h4><b>Bureau 3D</b></h4>
    <p>3Ds Max, Logiciel</p>
      </div>
    </div>

        <div class="card4">
     <div class="container card-projet2">
      <h4><b>En cours...</b></h4>
    <p>Application Cordova</p>
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


export default {
  name: 'App',
  components: {
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
