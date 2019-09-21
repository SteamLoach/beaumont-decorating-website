<template>

  <main>
    
    <!-- Maybe look at creating a distinct page header content model -->
    <page-header :featureImage="Page.featureImage[0].url"
                 :title="Page.pageTitle"
                 :strapline="Page.pageStrapline"> 
    </page-header>
    
    <!-- Does this need it's own component? (no) -->
    <section class="homepage-intro">
      <div class="homepage-intro-inner">
        <div class="content-left">
          <h2><span>If you have a project in mind, get a quotation</span></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim maiores mollitia qui quam labore hic asperiores provident maxime earum eum.</p>
        </div>
        <div class="content-right">
          <contact-form></contact-form>
        </div>
      </div>
    </section>
    
    <content-panels :panels="Page.contentPanels"></content-panels>
    
    <div class="test"></div>
    
  </main>

</template>




<script>

import {metaData} from '~/mixins/metaData.js'; 
import {scrollPage} from '~/mixins/scrollPage.js';
  

  
export default {
  
  mixins: [metaData, scrollPage],
     
  computed: {
    Page: function() {
      return this.$store.state.cms.homePage ; 
    }
  }
    
}
  
</script>


<style lang="scss">
  
  .test {
    width: 100%;
    height: 1000px;
  }
  
  .homepage-intro {
    @include row(center, center);
    
    .contact-form {
      @include absolute-from($laptop);
        top: -75%;
      
      label {display: none;}
    }
  }
  
  .homepage-intro-inner {
    z-index: 1;
    @include container(center, center);
    @include column(24);
      @include column-break(550px, 20);
        @include column-break($tablet, 24);
        @include x-from($tablet, around);
          @include y-pad-from($laptop, $space-heaviest);
          @include y-from($laptop, stretch);
            @include x-from($desktop, between);
    max-width: $project-max-content-width;
    @include y-pad($space-medium);
    
    .content-left, .content-right {
      @include column(22);  
    }
    
    .content-left {
      @include column-break($tablet, 10);
      text-align: center;
        @include text-align-from($tablet, left);
      
      h2, p {
        padding-bottom: $space-light;
      }
      h2 span {
        @include underline-span(25%, 5px, $brand-accent);
        padding-bottom: $space-medium;
        
        &:after {
          @include x-center-absolute-until($tablet);
        }
      }
    }
    
    .content-right {
      @include column-break($tablet, 12);
      position: relative;
    }
  }
  
  
  
</style>


