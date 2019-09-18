<template>

  <section class="service-panel"
           :class="content.classExtensions">
    <div class="service-panel-inner">
      <h2 class="service-panel-title"><span> {{content.title}} </span></h2>
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
      @include x-pad-between($tablet, $desktop, $outer-space-heavy);
  }
  
  .service-panel-title {
    width: 100%;
    text-align: center;
    padding-bottom: $space-heavier;
    
    span {
      @include underline-span(100%, 5px, $brand-accent);
      padding-bottom: $space-medium;
    }
  }
  
  .service-item {
    @include column(22);
      @include column-break($tablet, 11);
        @include column-break($laptop, 9);
          @include column-break($desktop, 7);
    margin-bottom: $outer-space-light;
      @include margin-from($tablet, bottom, $outer-space-heavy);
    padding: $space-heavy;
      
    background-color: $page-background;
    font-size: 0.8rem;

    @include project-transition(all);
    @include under-shadow(); 
    
    border-radius: $project-border-radius;
    
    
    h3, p {
      padding-bottom: $space-light;
    }
    
    h3 {
      padding-top: $space-light;
      
      span {
        @include underline-span(100%, 5px, $shade-light);
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