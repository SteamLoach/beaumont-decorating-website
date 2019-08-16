<template>

  <div class="page-wrapper">
    
    <img class="title-image" src="~/assets/Beaumont Decorating Logo.png"/>
    
    <button class="title-cta">Book a Quote</button>
    
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
    margin-top: $outer-space-base;
    margin-bottom: $outer-space-medium;
  }
  
  .title-cta {
    display: block;
    margin: 0 auto;
    @include x-pad($space-medium);
    @include y-pad($space-light);
    font-size: 1.2rem;
    font-weight: 600;
    color: $brand-1;
    border: solid 2px $brand-1;
    border-radius: 25px;
    
    &:hover {
      color: $offset-font-color;
      background-color: $brand-1;
    }
  }
  
</style>


