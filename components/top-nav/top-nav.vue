<template>

  <nav class="top-nav">
    
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
  
  methods: {
    
    ...mapMutations({
      mobileNavClose: 'menus/mobileNavClose'
    })
    
  }
  
}


</script>

<style lang="scss" scoped>

  .top-nav {
    z-index: 10;
    @include row(start, center);
    @include y-pad($space-lighter);
    padding-right: ($space-lighter);
    font-family: $secondary-font;
    color: $brand-1;
  }
  
  .nav-link-wrapper {
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