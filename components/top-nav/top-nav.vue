<template>

  <nav class="top-nav"
       :class="topNav.state">
    
    <img class="nav-logo" src="~/assets/beaumont_decorating_logo.png"/>
    <responsive-nav-toggle :state="topNav.state"></responsive-nav-toggle>
   
    <div class="nav-link-wrapper"
         :class="topNav.state">
      <div v-for="link in topNav.navLinks"
           :key="link.id"
           @click="mobileNavClose"
           class="nav-link">
        <nuxt-link :to="link.route"> {{link.title}} </nuxt-link>
      </div>  
    </div>

  </nav>

</template>


<script>


import {mapMutations} from 'vuex';  
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
  
  data() {
    return {
      navBar: '',
    }
  },
  
  destroyed() {
    window.removeEventListener('scroll', this.StickyNav); 
  },
  
  methods: {
    
    stickyNav: function() {
      
      if (window.scrollY > 0) {
        this.navSticky();
      }
      else {
        this.navStatic();
      }
    },
    
    ...mapMutations({
      mobileNavClose: 'menus/mobileNavClose',
      navSticky: 'menus/navSticky',
      navStatic: 'menus/navStatic'
    })
    
  },
  
  mounted() {
    
    this.navBar = document.querySelector('.top-nav') ; 
    this.navStart = this.navBar.offsetTop ;
    window.addEventListener('scroll', this.stickyNav) ; 
    
  },
  
}


</script>

<style lang="scss" scoped>

  .top-nav {
    z-index: 10;
    position: fixed;
    top: 0;
    @include row(start, center);
    @include y-pad($space-lighter);
    padding-right: ($space-lighter);
    font-family: $secondary-font;
    color: $brand-1;
    transition-duration: $project-transition-duration;
    transition-property: box-shadow, background-color;
    transition-timing-function: linear;
    
    &.is-sticky {
      background-color: rgba(230, 230, 232, 0.8); 
      @include down-shadow(light);
      
      .nav-logo {
        transition-duration: $project-transition-duration;
        transition-property: opacity;
        transition-timing-function: ease-in;
        opacity: 1;
      }
    }
  }
  
  .nav-logo {
    opacity: 0;
    @include column(10);
      @include column-break($tablet, 6);
    padding-left: $space-lighter;
  }
  
  .nav-link-wrapper {
    position: relative;
    overflow: hidden;
    @include column(20);
    position: absolute;
    right: -100%;
    top: 100%;
    margin-top: 1rem;
    text-align: center;
    border-top-left-radius: $project-border-radius;
    border-bottom-left-radius: $project-border-radius;
    transition-property: right;
    transition-duration: $project-transition-duration;
    transition-timing-function: linear;
  }
  
  .navbar-swatch {
    opacity: 0.4;
    position: absolute;
    max-height: 100%;
    top: 0;
    left: 0;
  }
  
  .nav-link {
    position: relative;
    font-size: 1.2rem;
    background-color: $page-background;
    
    a {
      width: 100%;
      @include y-pad($space-medium);
    }
    
  }
    
  .nav-link-wrapper.is-active {
    
    right: 0;
    
  }

</style>