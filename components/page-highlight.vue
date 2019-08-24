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
    @include column(22);
      @include custom-break(460px, 380px);
          
    
    &.top {
      top: 0;
    }
    
    &.bottom {
      transform: rotate(180deg);
      bottom: 0;
      right: 0;
    }
  }

</style>