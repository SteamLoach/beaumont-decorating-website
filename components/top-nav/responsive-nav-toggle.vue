<template>
  
    <div class="nav-toggle-wrapper"
         @click="responsiveNavToggle">
      <div class="nav-toggle"
           :class="state"></div>
    </div>

</template>



<script>
  
import {navMutations} from './navMutations.js';  
  
export default {
  
  mixins: [navMutations],
  
  props:['state'],
  
}

</script>



<style lang="scss" scoped>
  
  %burger-bar {
    background-color: $brand-1;
    height: 5px;
    width: 50px;
    border-radius: 15px;
    transition-property: background-color, transform;
    transition-duration: $project-transition-duration;
    transition-timing-function: ease;
  }

  .nav-toggle-wrapper {
    @include hidden-from($laptop);
    z-index: 15;
    overflow: visible;
    padding: 15px 10px 35px 10px;
    margin-left: auto;
    
    &:hover {
      cursor: pointer;
    }
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
      top: 10px
    }
    &:after {
      top: 20px
    }
  }
  .nav-toggle.is-active { 
    transform: translate(0px, 10px) rotate(-135deg);
    
    &:before {
      transform: scale(0) translate(0px, -20px) rotate(-270deg);
    }
    &:after {
      transform: translate(0px, -20px) rotate(270deg);
    }
  }


</style>