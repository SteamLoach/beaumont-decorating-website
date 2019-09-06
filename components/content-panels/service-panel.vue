<template>

  <article class="service-panel"
           :class="classExtensions">
    
    <div class="service-panel-header">
      <h2 class="service-panel-title"> {{content.title}} </h2>
      <p class="service-panel-intro"> {{content.intro}} </p>
    </div>
      
    <div v-for="item in content.serviceItems"
         :key="item.id"
         class="service-item">
      
      <svg-loader class="service-icon" :icon="item.icon"></svg-loader>
      
      <div class="service-content">
        <h3> {{item.title}} </h3>
        <p> {{item.text}} </p>
        <nuxt-link class="service-cta" to="#"> Need a Quote? </nuxt-link>
      </div>
  
    </div>
  
  </article>

</template>




<script>

import {backgroundImage} from '~/mixins/backgroundImage.js';
  
export default {
  
  props: ['content'],
  
  mixins: [backgroundImage],
  
  computed: {
    classExtensions: function() {
      let classObject = {} ; 
      this.content.classExtensions.forEach(option => {
        classObject[option] = true ; 
      }) ; 
      return classObject ; 
    }
  }
}

</script>




<style lang="scss">
  
  .service-panel {
    @include row(center, start);
    padding-top: $outer-space-medium;
      @include x-from($tablet, around);
      //@include x-pad-from($tablet, 5%);
    
    &.interior-services {
      .service-svg {
        fill: $brand-2;
      }
      .service-item {
        background-image: linear-gradient(to bottom right, #eee, 40%, rgba(25, 118, 149, 0.2)) ;
      }
      .service-cta {
        color: $brand-2;
        border-color: $brand-2;
        &:hover {
          color: $offset-font-color;
          background-color: $brand-2;
        }
      }
    }
    
    &.exterior-services {
      .service-svg {
        fill: $brand-3;
      }
      .service-item {
        background-image: linear-gradient(to bottom right, #eee, 40%, rgba(146, 20, 12, 0.2)) ;
      }
      .service-cta {
        color: $brand-3;
        border-color: $brand-3;
        &:hover {
          color: $offset-font-color;
          background-color: $brand-3;
        }
      }
    }
  }
  
  .service-panel-header {
    @include wrapper(center, center);
    @include column(22);
    text-align: center;
    padding-bottom: $space-light;
      @include pad-from($tablet, bottom, $space-medium);
        @include pad-from($laptop, bottom, $space-heavier);
    border-bottom: 1px solid $brand-1;
    margin-bottom: $space-light;
      @include margin-from ($tablet, bottom, $space-medium);
        @include margin-from ($tablet, bottom, $space-heavier);
  }
  
  .service-panel-title {
    padding-bottom: $space-light;
  }
  
  .service-panel-intro {
    @include custom-break($tablet, 760px);
  }
  
  .service-item {
    @include wrapper(center, center);
    @include column(22);
      @include custom-break(500px, 475px);
    @include y-pad($space-medium);
    margin-bottom: $outer-space-medium;
      @include margin-from($laptop, bottom, $outer-space-heavy);
    border-radius: $project-border-radius;
  }
  
  .service-icon {
    width: 125px;
    height: 125px;
    margin-bottom: $space-lighter;
  }
  
  .service-content {
    
    @include column(24);
    text-align: center;
    
    h3 {padding-bottom: $space-lighter;}
    
    p {
      padding-bottom: $space-light;
      @include x-pad ($space-lighter);
      @include x-pad-from($tablet, $space-light);
    }
    
    .service-cta {
      @extend %cta;      
    }
  
  }

</style>