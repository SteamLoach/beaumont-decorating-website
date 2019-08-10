<template>

  <div class="page-wrapper">
    
    <h1>Home</h1>
    
  </div>

</template>




<script>

export default {
  
  //this can probably be a mixin
  head() {
    return {
      title: this.Page.metaTitle
    }
  },
  
  async fetch ({ store }) {
    
    await store.dispatch('cms/getContentByCodename', {
      codename: "home_page",
      mutation: 'cms/setContentByCodename',
      module: 'cms',
      name: "homePage"
    }) ; 
  },
  
 
  computed: {
    
    Page: function() {
      return this.$store.state.cms.homePage ; 
    },
        
  },
    
}
  
</script>


<style lang="scss">

  .page-wrapper {
    width: 100%;
    min-height: 100vh;
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
  }
  
</style>


