<template>

  <nav class="top-nav"
       :class="topNav.state">
    
    <nuxt-link class="nav-home"
               to="/">
      <img class="nav-logo" 
           src=""
           @click="responsiveNavClose"/>
    </nuxt-link>
    
    
    <responsive-nav-toggle :state="topNav.state"></responsive-nav-toggle>
    <responsive-nav :state="topNav.state"
                    :navLinks="topNav.navLinks"></responsive-nav>
    
   
    <div class="nav-link-wrapper">
        <div v-for="link in topNav.navLinks"
             :key="link.id"
             @click="responsiveNavClose"
             class="nav-link">
          <nuxt-link :to="link.route"> {{link.title}} </nuxt-link>
        </div>
    </div>
  
    
  </nav>

</template>


<script>


import {navMutations} from './navMutations.js';  
import responsiveNavToggle from './responsive-nav-toggle.vue';
import responsiveNav from './responsive-nav.vue';
  
export default {
  
  mixins: [navMutations],
  
  components: {
    responsiveNavToggle,
    responsiveNav
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
  },
  
  mounted() {
    
    this.navBar = document.querySelector('.top-nav') ; 
    this.navStart = this.navBar.offsetTop ;
    window.addEventListener('scroll', this.stickyNav) ; 
    
  },
  
}


</script>

<style lang="scss">  
  
  .top-nav {
    z-index: 10;
    position: fixed;
    top: 0;
    @include row(between, center);
    height: $mobile-nav-height;
      @include height-break($tablet, $tablet-nav-height);
    @include x-pad-until($laptop, $space-lighter);
    font-family: $secondary-font;
    color: $brand-1;
    transition-duration: $transition-duration;
    transition-property: box-shadow, background-color;
    transition-timing-function: linear;
    
    &.is-sticky, &.is-active, &:hover {
      background-color: rgba(230, 230, 232, 0.6); 
      @include down-shadow(light);
      
      .nav-logo {
        transition-duration: $transition-duration;
        transition-property: opacity;
        transition-timing-function: ease-in;
        opacity: 1;
      }
    }
  }
  
  .nav-home {
    z-index: 15;
    height: 90%;
    width: auto;
  }
  
  .nav-logo {
    max-height: 100%;
    width: auto;
    opacity: 0;
  }
  
  .nav-link-wrapper {
    @include hidden-until($laptop);
    @include wrapper(center, center);
    @include column(16);
    text-align: center;
  }
      
  .nav-link {
    flex: 1;
    font-size: 1.2rem;
    
    a {
      width: 100%;
      line-height: 2.2;
      
      &.nuxt-link-exact-active {
        @extend %active-nav-link;
        background-size: 95% auto;
      }
    }
    
  }
    
  .nav-link-wrapper.is-active {
    
    right: 0;
    
  }

</style>