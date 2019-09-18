<!----

Needs to be the contact form alone, with a couple of class modifiers depending on where it's located (homepage/contact page etc)

---->


<template>
    
    <form class="contact-form"
    action="https://docs.google.com/forms/d/e/1FAIpQLSd5QZzYFj22MJcl3ge0yaYGgBp7h6LD2I-Grfz4rMm0sh8etA/formResponse"
          method="post" 
          target="hidden_iframe"
          onsubmit="formIsSubmitted=true;">

      <script type="text/javascript">var formIsSubmitted=false;</script>
      <iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(formIsSubmitted) {window.location='/beaumont-decorating-website/form-confirmation';}"></iframe>  
      
      <h4>Get in touch for a free quotation</h4>
      
      <label for="clientname">What's your name?</label>
      <input v-model="formValidation.name"
             type="text"
             id="clientname"
             name="entry.1089229558"
             placeholder="Your name..." required>

      <label for="clientnumber">What's your number?</label>
      <input v-model="formValidation.number"
             type="number"
             id="clientnumber"
             name="entry.1088802542"
             placeholder="Your contact number..." required>

      <label for="clientemail">What's your email?</label>
      <input type="email"
             id="clientemail"
             name="entry.1481036572"
             placeholder="Your email address..."
             >
      
      <label class="honeypot" for="paranoidandroid" style="display: none;">I see you</label>
      <input v-model="formValidation.honeypot"
             class="honeypot"
             type="text"
             id="paranoidandroid"
             name="paranoidandroid"
             placeholder="sneaky sneaky"
             style="display: none;"/>
      
      <label for="clientneeds">How can we help?</label>
      <textarea id="clientneeds"
                name="entry.1867573213"
                placeholder="How can we help?"></textarea>

      <input type="submit"
             value="Send"
             class="form-submit"
             :class="{ 'can-submit': canSubmit }"
             :disabled="!canSubmit"/>

    </form>
    
    <!---
    <article class="secondary-contacts">
    
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
    --->

</template>


<script>

export default {
  
  data() {
    return {
      formValidation: {
        name: '',
        number: '',
        honeypot: '',
      }
    }
  },
  
  computed: {
    canSubmit: function() {
      if (this.formValidation.name !== '' && this.formValidation.number !== '' && this.formValidation.honeypot === '') {
        return true ; 
      } else {
        return false ;
      }
    }
  }
  
}

</script>

<style lang="scss">
  
  .honeypot {
    display: none !important;
  }
  
  .contact-form {
    @include wrapper(center, center);
    @include column(24);
    padding: $space-heavy;
    max-width: 720px;
    background-color: $page-background;
    border-radius: $project-border-radius;
    @include under-shadow();
    
    h4 {
      width: 100%;
      text-align: center;
      padding-bottom: $space-medium;
    }
    
    label {
      @include column(22);
      padding-bottom: $space-lighter;
      font-weight: 600;
    }
    
    input:not([type="submit"]), textarea {
      @include column(23);
        @include column-break($tablet, 22);
      padding: $space-lighter;
      margin-bottom: $space-light;
      background-color: $shade-light;
      border-color: $brand-1;
      border-radius: $project-border-radius;
    }
  }

  .form-submit {
    @extend %cta;
    @include column(20);
    max-width: 250px;
    @include y-margin($space-light);
    color: $shade-base;
    border-color: $shade-base;
    
    &:hover {
      color: $shade-base;
      background-color: transparent;
      cursor: not-allowed;
    }
    
    &.can-submit {
      @extend %cta;
      
      &:hover {
        cursor: pointer;
        color: $offset-font-color;
        background-color: $brand-1;
      }
    }
  }
  
  

</style>