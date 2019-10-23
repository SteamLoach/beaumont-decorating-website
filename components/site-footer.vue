<template>

  <footer class="site-footer">
    <div class="site-footer-inner">
      <div class="footer-left">

        <!-- Icon beside text component? -->
        <div class="footer-contact">
          <svg-loader class="icon" :icon="'phone-icon'"></svg-loader>
          <p class="text" :tel="siteSettings.phoneNumber"> {{ siteSettings.phoneNumber }} </p>
        </div>

        <div class="footer-contact">
          <svg-loader class="icon" :icon="'facebook-icon'"></svg-loader>
          <a class="text" :href="siteSettings.facebookLink"> Find us on Facebook </a>
        </div>
        <div class="footer-contact">
          <svg-loader class="icon" :icon="'paper-plane'"></svg-loader>
          <a class="text" href="/contact">Send a Message</a>
        </div>
      </div>

      <div class="footer-center">
        <div v-for="link in Footer.footerLinks"
             :key="link.id">
          <nuxt-link :to="link.route"> {{link.title}} </nuxt-link>
        </div>
      </div>

      <div class="footer-right">
        <p> {{ Footer.copyright }} </p>
        <div v-for="credit in Footer.credits">
          <nuxt-link :to="credit.route"> {{ credit.title }} </nuxt-link>
        </div>
      </div>
    </div>
  </footer>

</template>

<script>

export default {
  
  computed: {
    
    Footer: function() {
      return this.$store.state.cms.footer ;
    },
    
    siteSettings: function() {
      return this.$store.state.cms.siteSettings ;
    }
    
  }
  
}

</script>

<style lang="scss">

  .site-footer {
    
    @include row(center, center);
    @include pad-scale(
      x,
        $default: $space-light,
    );
    @include pad-scale(
      y,
        $default: $space-medium
    );
    font-size: 0.8rem;
    line-height: 1.2;
    color: $offset-font-color;
    background-color: $brand-1;
    
    p, a {padding-bottom: $space-lighter;}
    
    a:hover {text-decoration: underline;}
  }
  
  .site-footer-inner {
    @include row(between, center);
    max-width: $max-content-width
  }
  
  .footer-left,
  .footer-center,
  .footer-right {
    @include column-scale(
      $default: 22,
      $on-tablet: 8,
      //$on-laptop: 7,
      //$on-desktop: 5,
    );
    @include pad-scale(
      bottom,
      $default: $space-medium,
      $on-tablet: 0
    );
  }
  
  .footer-center {
    @include text-align-from($tablet, center);
  }
  
  .footer-right {
    padding-bottom: 0;
    @include text-align-from($tablet, right);
  }
  
  .footer-contact {
    @include wrapper(start, center);
    
    .contact-icon {
      height: 30px;
      width: 30px;
      fill: $offset-font-color;
      padding-right: $space-lighter;
    }
    
    .text {@include column(18);}
    
  }


</style>