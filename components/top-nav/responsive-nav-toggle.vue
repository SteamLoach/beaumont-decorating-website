<template>
  
    <div class="nav-toggle-wrapper"
         :class="state"
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



<style lang="scss">
  
  .nav-toggle-wrapper {
    @include responsive-nav-toggle(); 
  }


</style>