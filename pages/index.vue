<template>

  <div class="page-wrapper">
    
    <h1 class="site-title">Beaumont Decorating</h1>
    
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

  .site-title {
    @include column(24);
      @include column-break($touch, 18);
    margin: 0 auto;
    @include margin-from(500px, top, $outer-space-light);
    line-height: 1.2;
    font-size: 2.2rem;
      @include font-size-from(360px, 2.4rem);
        @include font-size-from(400px, 2.6rem);
          @include font-size-from($touch, 3rem);
            @include font-size-from(600px, 4rem);
              @include font-size-from($tablet, 5rem);
    text-align: center;
  }
  
</style>


