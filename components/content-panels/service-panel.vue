<template>

  <article class="content-panel service-panel"
           :class="content.classExtensions">
    
    <h2 class="content-panel-title"><span> {{content.title}} </span></h2>
    
    <div class="content-panel-inner">
      <div v-for="item in content.serviceItems"
           class="service-item">
        <svg-loader :icon="item.icon"></svg-loader>
        <h3 class="card-title"><span>{{item.title}}</span></h3>
        <p> {{item.text}} </p>
      </div>
    
    </div>
  </article>

</template>




<script>
  
export default {
  
  props: ['content'],
  
}

</script>




<style lang="scss">
  
  .service-panel {
    background-color: $brand-shade-1;
    
    .service-icon {
      width: 100px;
      height: 100px;
      fill: $brand-1;
      .icon-highlight {
        fill: $brand-accent;
      }
    } 
  }  
    
  .service-item {
    @include medium-card();
    @include column-scale(22, null, 20, 11, 7, null);

      h3 span {@include underline-span(100%, 5px, $shade-light);}

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