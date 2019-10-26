<template>
  
    <section class="primary-contact-panel">
  
      <h2 class="content-panel-title"><span> {{Page.pageTitle}} </span></h2>
      
      <div class="content-panel-inner">
        
        <contact-form></contact-form>
        <article class="secondary-contacts">
          <h3>Contact Info</h3>
          <div class="contact-method">
            <svg-loader class="icon" :icon="'phone-icon'"></svg-loader>
            <p class="text">
              <a :href="`tel:${siteSettings.phoneNumber}`">{{siteSettings.phoneNumber}} 
              </a>
            </p>
          </div>
      
          <div class="contact-method">
            <svg-loader class="icon" :icon="'facebook-icon'"></svg-loader>
            <a class="text" :href="siteSettings.facebookLink">Find Us On Facebook</a>
          </div>
      
          <div class="contact-method">
            <svg-loader class="icon" :icon="'location-icon'"></svg-loader>
            <div class="text">
              <h4>Serving</h4>
              <p> {{siteSettings.serviceArea}} </p>
            </div>  
          </div>
      </article>
      </div>
  
    </section>
    
</template>


<script>

export default {
  
  computed: {
    
    siteSettings: function() {
      return this.$store.state.cms.siteSettings;
    },
    
    Page: function() {
      return this.$store.state.cms.contactPage;
    }
  }
  
}

</script>


<style lang="scss">
    
  .primary-contact-panel {
    @extend %content-panel;
    @include y-margin($outer-space-heavy);
    
    .content-panel-inner {
      align-items: flex-start;
    }
    
    .contact-form {
      @include column-scale(
        $default: 22,
        $on-tablet: 16,
        $on-laptop: 11,
        $on-desktop: 12
      );
      padding: 0;
      @include y-pad($space-lighter);
      @include oneway-margin-until($laptop, $outer-space-medium);
      background-color: transparent;
      box-shadow: none;
      
      label, h3 {display: none;}
      
      #clientname, #clientnumber {
        @include column(24);
        
      }
      
      #clientemail, textarea {
        width: 100%;
      }
      
      textarea {height: 200px;}
      
    }
    
    .secondary-contacts {
      @include column-scale(
        $default: 22,
        $on-tablet: 16,
        $on-laptop: 11,
        $on-desktop: 9
      );
      @include content-card(medium);
      font-size: 1rem;

      .contact-icon {
        height: 40px;
        width: 40px;
        fill: $brand-1;
        margin-right: $space-lighter;
      }
      
      .contact-method {
        @include wrapper(start, center);
        padding-bottom: $space-medium;
                
        .text {
          h4 {padding-bottom: $space-lightest;}
          @include column(18);
        }
        
        &:last-child {
          @include wrapper(start, start);
          padding-bottom: 0;
        }
        
      }
      
      
    }
    
  }
  

</style>