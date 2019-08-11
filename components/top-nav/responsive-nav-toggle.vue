<template>
  
    <div class="nav-toggle-wrapper">
      <div class="nav-toggle"
           @click="mobileNavToggle"
           :class="state"></div>
    </div>

</template>



<script>
  
import {mapMutations} from 'vuex';
  
export default {
  
  props:['state'],
  
  methods: {
    ...mapMutations({
      mobileNavToggle: 'menus/mobileNavToggle',
    })
  }
  
}

</script>



<style lang="scss" scoped>
  
  %burger-bar {
    background-color: $brand-3;
    height: 5px;
    width: 50px;
    border-radius: 15px;
    transition-property: transform;
    transition-duration: 0.4s;
    transition-timing-function: ease;
  }

  .nav-toggle-wrapper {
    z-index: 15;
    overflow: visible;
    @include container(center, center);
    height: 50px;
    width: 60px;
    margin-left: auto;
  }
  
  .nav-toggle {
    @extend %burger-bar;
    position: relative;
    
    &:before, &:after {
      @extend %burger-bar;
      display: inline-block;
      content: "";
      position: absolute;
 
    }
    &:before {
      top: -12px
    }
    &:after {
      top: 12px
    }
    &:hover {
      cursor: pointer;
    }
  }
  .nav-toggle.is-active { 
    
    background-color: transparent;

    
    &:before {
      transform: translate(0px, 12px) rotate(-135deg);
    }
    &:after {
      transform: translate(0px, -12px) rotate(135deg);
    }
  }


</style>