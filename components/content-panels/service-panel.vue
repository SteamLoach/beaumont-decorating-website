<template>

  <article class="service-panel"
           :class="content.classExtensions">
    
    <div class="service-panel-header">
      <h2 class="service-panel-title"> {{content.title}} </h2>
      <p class="service-panel-intro"> {{content.intro}} </p>
    </div>
      
    <div v-for="item in content.serviceItems"
         :key="item.id"
         class="service-item">
      
      <svg-loader :icon="item.icon"></svg-loader>
      
      <div class="service-content">
        <h3> {{item.title}} </h3>
        <p> {{item.text}} </p>
        <button class="service-cta"
                @click="scrollToTarget('.service-panel')"> Need a Quote? </button>
      </div>
  
    </div>
  
  </article>

</template>




<script>

import {backgroundImage} from '~/mixins/backgroundImage.js';
import {scrollPage} from '~/mixins/scrollPage.js';
  
export default {
  
  props: ['content'],
  
  mixins: [backgroundImage, scrollPage],
  
}

</script>




<style lang="scss">
  
  .service-panel {
    
    @include container(center, center);
    @include column(24);
      @include x-from($laptop, around);
      @include y-from($laptop, start);
    max-width: $project-max-content-width;
    padding-top: $outer-space-medium;

    
    &.interior-services {
      .service-icon {
        fill: $brand-2;
      }
      .service-item {
        background-image: linear-gradient(to bottom right, #eee, 40%, rgba(25, 118, 149, 0.2)) ;
      }
      .service-cta {
        border-color: $brand-2;
        &:hover {
          color: $offset-font-color;
          background-color: $brand-2;
        }
      }
    }
    
    &.exterior-services {
      .service-icon {
        fill: $brand-3;
      }
      .service-item {
        background-image: linear-gradient(to bottom right, #eee, 40%, rgba(146, 20, 12, 0.2)) ;
      }
      .service-cta {
        border-color: $brand-3;
        &:hover {
          color: $offset-font-color;
          background-color: $brand-3;
        }
      }
    }
  }
  
  .service-panel-header {
    @include column(22);
      @include column-break($tablet, 18);
    padding-bottom: $space-light;
      @include pad-from($tablet, bottom, $space-medium);
        @include pad-from($laptop, bottom, $space-heavier);
    border-bottom: 1px solid $brand-1;
    margin-bottom: $space-light;
      @include margin-from ($tablet, bottom, $space-medium);
        @include margin-from ($tablet, bottom, $space-heavier);
    text-align: center;
  }
  
  .service-panel-title {
    padding-bottom: $space-light;
  }
  
  .service-panel-intro {
  }
  
  .service-item {
    @include column(22);
      @include custom-break(500px, 475px);
        @include custom-break($tablet, 525px);
          @include custom-break($laptop, 450px);
    @include y-pad($space-medium);
    margin-bottom: $outer-space-medium;
      @include margin-from($laptop, bottom, $outer-space-heavy);
    border-radius: $project-border-radius;
  }
  
  .service-icon {
    width: 125px;
    height: 125px;
    margin:0 auto;
    margin-bottom: $space-lighter;
    .icon-highlight {
        fill: $brand-1;
    }
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