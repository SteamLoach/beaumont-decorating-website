<template>

  <nav class="top-nav">
    
    <responsive-nav-toggle :state="topNav.state"></responsive-nav-toggle>
   
    <div class="nav-link-wrapper"
         :class="topNav.state">
      
      <div v-for="link in topNav.navLinks"
           :key="link.id"
           :style="delay(link)"
           class="nav-link">
        <nuxt-link :to="link.route"> {{link.title}} </nuxt-link>
      </div>  
    </div>

  </nav>

</template>


<script>

import responsiveNavToggle from './responsive-nav-toggle.vue';
  
export default {
  
  components: {
    responsiveNavToggle,
  },
  
  computed: {
    topNav: function() {
      return this.$store.state.menus.topNav ;
    },
  },
  
  methods: {
    delay: function(ref) {
      return {transitionDelay: `${ref.id / 10}s`}
    }
  }
  
}


</script>

<style lang="scss" scoped>

  .top-nav {
    @include row(start, center);
    flex-wrap: wrap;
    font-family: $secondary-font;
  }
  
  .nav-link-wrapper {
    @include column(24);
    position: absolute;
    left: -100%;
    top: 100%;
    margin-top: 1rem;
  }
  
  .nav-link {
    font-size: 1.2rem;
    padding-left: $space-light;
    @include y-pad($space-light);
    margin-bottom: $space-lighter;
    background-color: rgba(236, 234, 235, 1);
    @include centered-shadow(light);
    
    //Effect
    position: relative;
    top: 2rem;
    left: 0;
    opacity: 0;
    
    transition: left, top, opacity;
    transition-duration: 0.2s;
    transition-timing-function: cubic-bezier(0.88, 1.81, 1, 0.71);
  }
  
  .nav-link-wrapper.is-active {
    
    .nav-link {

      left: 100%;
      top: 0;
      opacity: 1;
    
    }
  }

</style>