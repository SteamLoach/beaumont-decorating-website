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
      @include column-scale(
        $default: 22,
        $on-lrg-mobile: 20,
        $on-tablet: 10
      );
      
      text-align: center;
        @include text-align-from($tablet, left);
        @include pad-until($tablet, bottom, $space-medium)
      
      h2 {padding-bottom: $space-medium;}
      
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
      @include column-scale(
        $default: 22,
        $on-tablet: 12
      );
    }
    
    .page-intro-icon {
    width: 100%;
    height: 250px;
    fill: $brand-1;
    
    .icon-highlight {fill: $brand-accent};
  }
  }
  
</style>