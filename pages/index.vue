<template>

  <div class="page-wrapper">
    
    <img class="title-image" src="~/assets/Beaumont Decorating Logo.png"/>
    <button class="cta title-cta">Book a Quote</button>
    <content-panels :panels="Page.contentPanels"></content-panels>
    
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

  .title-image {
    @include column(24);
    @include x-pad(.2rem);
    margin-top: $outer-space-light;
    margin-bottom: $outer-space-medium;
  }
  
  .title-cta {
    display: block;
    margin: 0 auto;
    margin-bottom: $outer-space-medium;
    font-size: 1.2rem;
  }
  
</style>


