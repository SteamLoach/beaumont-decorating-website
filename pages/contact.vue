<template>

  <main class="center-all">
  
    <section class="primary-contact-panel">
  
      <div class="panel-inner">
        <contact-form></contact-form>
        
        <article class="secondary-contacts">
          <h3>Contact Info</h3>
          <div class="contact-method">
            <svg-loader class="icon" :icon="'phone-icon'"></svg-loader>
            <p class="text">07972 797 897</p>
          </div>
      
          <div class="contact-method">
            <svg-loader class="icon" :icon="'facebook-icon'"></svg-loader>
            <p class="text">Find Us On Facebook</p>
          </div>
      
          <div class="contact-method">
            <svg-loader class="icon" :icon="'location-icon'"></svg-loader>
            <div class="text">
              <h4>Serving</h4>
              <p>Chesterfield, Sheffield, Alfreton, Matlock, Clay Cross</p>
            </div>  
          </div>
    </article>
      </div>
  
    </section>
    
  
  </main>

</template>


<script>

export default {
  
}

</script>


<style lang="scss">
  
  .center-all {
    @include row(center, center);
    min-height: 100vh;
  }
  
  .primary-contact-panel {
    @include row(center, center);
  
    .panel-inner {
      @include container(around, start);
      max-width: $max-content-width;
      //Think about moving this to a higher variable ($panel-y-padding or something)
      @include y-pad($outer-space-heavy);
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