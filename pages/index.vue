<template>

  <div class="page-wrapper">
    
    
  </div>

</template>




<script>


  
export default {
  
  layout: 'homepage',
  
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


  
</style>


