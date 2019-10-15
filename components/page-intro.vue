<template>    
  
  <article class="content-panel intro-panel">
    
    <div class="content-panel-inner">
      
      <div class="content-left">
        <h2><span> {{title}} </span></h2>
        <p> {{intro}} </p>
      </div>
        
      <div class="content-right">
    
          <slot></slot>
          
      </div>
      
    </div>
    
  </article>

</template>




<script>

export default {
  
  props: ['title', 'intro']
  
}

</script>


<style lang="scss">

  .intro-panel {
        
    .content-left {
      @include column-scale(22, null, null, 10);
      text-align: center;
        @include text-align-from($tablet, left);
      
      h2 {@include y-pad($space-medium);}
      
      h2 span {
        @include underline-span(25%, 5px, $brand-accent);
        padding-bottom: $space-medium;
          &:after {
            @include x-center-absolute-until($tablet);
          }    
      }
      
    }
    
    .content-right {
      position: relative;
      @include column-scale(22, null, null, 12);
    }
  }
  
</style>