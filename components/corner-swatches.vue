<template>

  <div>
    <img class="page-highlight top"
         :src="content.url"/>
    
    <img class="page-highlight bottom"
         :src="content.url"/>
  </div>

</template>

<script>

export default {
  
  props: ['content'],
  
}


</script>

<style lang="scss">

  .page-highlight {
    
    z-index: -1;
    position: absolute;
    max-height: 100%;
          
    
    &.top {
      top: 0;
      left: 0;
    }
    
    &.bottom {
      transform: rotate(180deg);
      bottom: 0;
      right: 0;
    }
  }

</style>