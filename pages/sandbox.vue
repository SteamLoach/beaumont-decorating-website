<template>

  <main class=sandbox>
  
  </main>

</template>



<script>
  
export default {
  
  computed: {
    Page: function() {
      return this.$store.state.cms.exteriorDecorating ; 
    }
  }
}

</script>


<style lang="scss">

  .top-nav {
    display: none;
  }
  
  .sandbox {
    @include row(center, center);
    min-height: 100vh;
  }
  
  

</style>