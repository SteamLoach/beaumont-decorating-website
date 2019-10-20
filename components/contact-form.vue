<template>
    
    <form class="contact-form"
    action="https://docs.google.com/forms/d/e/1FAIpQLSd5QZzYFj22MJcl3ge0yaYGgBp7h6LD2I-Grfz4rMm0sh8etA/formResponse"
          method="post" 
          target="hidden_iframe"
          onsubmit="formIsSubmitted=true;">

      <script type="text/javascript">var formIsSubmitted=false;</script>
      <iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(formIsSubmitted) {window.location='/beaumont-decorating-website/form-confirmation';}"></iframe>  
      
      <h3>Get in touch for a free quotation</h3>
      
      
      <label for="clientname">What's your name?</label>
      <input v-model="formValidation.name"
             type="text"
             id="clientname"
             name="entry.1089229558"
             placeholder="Your name..." required>
      <!-- 
        If we're going to implement forms via Kentico then each 
        'Input' model will need:

        - Type (text, number, email) <checkbox>
        - Required <checkbox>
        - Identifier (clientname) <text field> [for, v-model, id]
        - Label ('Your name') <text field>
        - Placeholder ('Enter your name') <text field>
        - Endpoint (entry.########) <text-field>
        
        Additionally, the form model itself could have:
        
        - Comment Box (yes/no - renders a textarea) <checkbox>
      -->
      
      
      
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
  
  //Form needs a wrapper to contain it 
  
  .honeypot {
    display: none !important;
  }
  
  .contact-form {
    @include row(center, center);
    @include content-card(medium, $is-centered: true);
    @include x-pad-until($laptop, $space-light);
    background-color: $page-background;
    
    label {
      @include column(22);
      font-weight: 600;
    }
    
    input:not([type="submit"]), textarea {
      @include column(23);
        @include column-break($tablet, 22);
      background-color: $shade-light;
    }
  }

  .form-submit {
    @extend %cta;
    @include column(20);
    max-width: 250px;
    margin-bottom: $space-light;
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