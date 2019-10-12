<template>

  <main>
  
    <section class="primary-contact-panel">
  
      <div class="panel-inner">
        <contact-form></contact-form>
        
        <article class="secondary-contacts">
          <h3>Contact Info</h3>
          <div class="contact-method">
            <svg-loader :icon="'phone-icon'"></svg-loader>
            <p>07972 797 897</p>
          </div>
      
          <div class="contact-method">
            <svg-loader :icon="'facebook-icon'"></svg-loader>
            <p>Find Us On Facebook</p>
          </div>
      
          <div class="contact-method">
            <svg-loader :icon="'location-icon'"></svg-loader>
            <p>10 Benis Drive
              <br>
              Newbold
              <br>
              Chesterfield
            </p>
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
  
  .primary-contact-panel {
    @include row(center, center);
    background-color: $shade-light;
  
    .panel-inner {
      @include container(around, start);
      max-width: $max-content-width;
      //Think about moving this to a higher variable ($panel-y-padding or something)
      @include y-pad($outer-space-heavy);
    }
    
    .contact-form {
      @include column(22);
        @include column-break($tablet, 16);
          @include column-break($laptop, 11);
            @include column-break($desktop, 12);
      justify-content: space-between;
      padding: 0;
      @include oneway-margin-until($laptop, $outer-space-medium);
      background-color: transparent;
      box-shadow: none;
      label, h4 {display: none;}
      
      #clientname, #clientnumber {
        @include column(24);
        
      }
      
      #clientemail, textarea {
        width: 100%;
      }
      
      textarea {height: 200px;}
      
    }
    
    .secondary-contacts {
      @include column(22);
        @include column-break($tablet, 16);
          @include column-break($laptop, 11);
            @include column-break($desktop, 9);
      padding: $space-heavier;
      border-radius: border-radius;
      @include under-shadow();
      
      h3 {padding-bottom: $space-medium};
      
      .contact-icon {
        height: 40px;
        width: 40px;
        fill: $brand-1;
        margin-right: $space-lighter;
      }
      
      .contact-method {
        @include wrapper(start, center);
        padding-bottom: $space-medium;
        
        p {
          @include column(24);
            @include custom-break(450px, auto);
        }
        
        &:last-child {
          @include wrapper(start, start);
          padding-bottom: 0;
        }
        
      }
      
      
    }
    
  }
  

</style>