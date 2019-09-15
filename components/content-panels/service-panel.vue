<template>

  <section class="service-panel"
           :class="content.classExtensions">
    <div class="service-panel-inner">
    
      <div v-for="item in content.serviceItems"
           class="service-item">
        <svg-loader :icon="item.icon"></svg-loader>
        <h3><span>{{item.title}}</span></h3>
        <p> {{item.text}} </p>
      </div>
    
    </div>
  </section>

</template>




<script>
  
export default {
  
  props: ['content'],
  
}

</script>




<style lang="scss">
  
  .service-panel {
    @include row(center, center);
    background-color: $brand-shade;
    
    .service-icon {
      width: 100px;
      height: 100px;
      fill: $brand-1;
      .icon-highlight {
        fill: $brand-accent;
      }
    }    
  }
  
  .service-panel-inner {
    @include container(around, start);
      @include align-c(stretch);
    max-width: $project-max-content-width;
    @include y-pad($outer-space-heavy);
      @include x-pad-from($tablet, $space-heavy);
  }
  
  .service-item {
    @include column(22);
      @include column-break($tablet, 11);
        @include column-break($laptop, 7);
    margin-bottom: $outer-space-light;
      @include margin-from($tablet, bottom, $outer-space-heavy);
    padding: $space-heavy;
    background-color: $page-background;
    font-size: 0.8rem;
    transition-property: all;
    transition-duration: $project-transition-duration;
    transition-timing-function: ease-in-out;
    
    ///Pull this out to the project partial as 'under-shadow' or something
    box-shadow: 0 5px 20px -5px $shade-darker; 
    
    border-radius: $project-border-radius;
    
    
    h3, p {
      padding-bottom: $space-light;
    }
    
    h3 {
      padding-top: $space-light;
      
      span {
        display: inline-block;
        position: relative;
        padding-bottom: $space-lighter;
      
        &:after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          background-color: $shade-light;
          height: 5px;
        }
      }
    }
    
    &:hover {
      background-color: $brand-1;
      h3 {
        color: $offset-font-color;
        span:after {
          background-color: $brand-accent;
        }
      }
      p {color: $shade-dark;}
      .service-icon {fill: $offset-font-color;}
    }
    
    
  }

</style>