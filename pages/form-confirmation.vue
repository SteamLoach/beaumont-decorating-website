<template>

  <section class="form-confirmation">
  
    <div class="message-wrapper">
      <svg-loader :icon="'paper-plane'"></svg-loader>
      <p>Thanks for your message, we'll be in touch ASAP</p>
    </div>
  
  </section>

</template>


<script>

export default {
  
}

</script>

<style lang="scss">

  .form-confirmation {
    @include row(center, center);
    min-height: 100vh;
    
    .message-wrapper {
      @include wrapper(center, center);
      @include column(22);
    }
    
    p {
      @include column(22);
      text-align: center;
      font-weight: 600;
      color: $brand-1;
    }
    
    .contact-icon {
      @include column(22);
      margin-bottom: $space-medium;
      fill: $brand-1;
      
      .icon-highlight {fill: $brand-accent;}
    }
  }
  
</style>