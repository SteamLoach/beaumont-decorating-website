<template>

  <div class="lightbox-overlay"
       :class="{'is-active': overlayState}"></div>

</template>


<script>

export default {
  
    computed: {
    overlayState: function() {
      return this.$store.state.menus.topNav.state['is-active'] ;
    }
  }
  
}

</script>

<style lang="scss">

  .lightbox-overlay {
    z-index: 5;
    position: absolute;
    width: 0;
    height: 0;
    background-color: rgba(0,0,0,0.0);
    @include standard-transition(background-color);
    
    &.is-active {
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.6);
    }
  }

</style>