<template>
  <div class="home">
    <template>
  <div>

  

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
          <div class="card1">
    <a href="http://hiking.jeremieherzog.fr/">
     <div class="container card-projet">
      <h4><b>Hiking</b></h4>
    <p>Projet Wordpress</p>
      </div></a>
    </div>

    <div class="card2">
    <router-link to="/about"><p>hello</p></router-link>
     <div class="container card-projet2">
      <h4><b>BOSS</b></h4>
    <p>Dev Spécifique, VueJS</p>
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

   
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {

  }
}
</script>
