<template>

  <div class="scroll-to-chevron"
       @click="scrollToTarget(scrollTarget)"></div>

</template>

<script>

export default {
  
  props: ['scrollTarget'],
  
  methods: {
    
    //target the bottom of the preceding element
    scrollToTarget: function(target) {
      
      let targetBottom = document.querySelector(target).getBoundingClientRect().bottom ; 
      
      let navOffset = document.querySelector('.top-nav').clientHeight ; 
      
      window.scrollTo({
        left: 0,
        top: (targetBottom + pageYOffset) - navOffset,
        behavior: 'smooth'  
      });
      
    }
  }
  
}

</script>


<style lang="scss">

  .scroll-to-chevron{
    position:relative;
    top: 0;
    display:block;
    height:50px;
    width: 50px;/*height should be double border*/
    transition: top $project-transition-duration ease;
    
    &:hover {
      cursor: pointer;
      top: 5px;
    }
  }
  .scroll-to-chevron:before,
  .scroll-to-chevron:after{
    position:absolute;
    display:block;
    content:"";
    border:25px solid transparent;/*adjust size*/
  }
/* Replace all text `top` below with left/right/bottom to rotate the chevron */
  .scroll-to-chevron:before{
    top:0;
    border-top-color:$offset-font-color;/*Chevron Color*/
  }
  .scroll-to-chevron:after{
    top:-10px;/*adjust thickness*/
    background-color: transparent;
  } 
  
  
</style>