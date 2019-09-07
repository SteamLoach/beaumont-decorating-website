<template>
    
  <form class="contact-form"
  action="https://docs.google.com/forms/d/e/1FAIpQLSd5QZzYFj22MJcl3ge0yaYGgBp7h6LD2I-Grfz4rMm0sh8etA/formResponse"
        method="post" 
        target="hidden_iframe"
        v-on:submit="submitForm">
    
    <iframe name="hidden_iframe" id="hidden_iframe" style="display:none;"></iframe>  
      
    <h2>Get in Touch</h2>
    
    <label for="clientname">What's your name?</label>
    <input v-model="formFields.clientName" type="text" id="clientname" name="entry.1089229558" placeholder="Your name..." required>

    <label for="clientnumber">What's your number?</label>
    <input v-model="formFields.clientNumber" type="number" id="clientnumber" name="entry.1088802542" placeholder="Your contact number..." required>

    <label for="clientemail">What's your email?</label>
    <input v-model="formFields.clientEmail" type="email" id="clientemail" name="entry.1481036572" placeholder="Your email address..." required>

    <label for="clientneeds">How can we help?</label>
    <textarea v-model="formFields.clientNeeds" id="clientneeds" name="entry.1867573213"></textarea>
    
    <p class="form-feedback"
        :class="{'is-submitted': formSubmitted}"> Thanks for your message! We'll be in touch ASAP </p>

    <button @click="submitForm"
            class="form-submit"
            :class="{ 'is-submitted': formSubmitted }">Send</button>

  </form>

</template>


<script>

export default {
  
  data() {
    return {
      
      formFields: {
        clientName: "",
        clientNumber: "",
        clientEmail: "",
        clientNeeds: "",
      },
      formSubmitted: false,
    }
  },
  
  methods: {
    submitForm: function() {
      
      this.formSubmitted = true ;
      document.querySelector('.contact-form').submit() ; 
      setTimeout(function() {document.querySelector('.contact-form').reset();}, 1000) ; 
      
    }
  }
  
}

</script>

<style lang="scss">
  
  .contact-form {
    @include wrapper(center, center);
    max-width: $project-max-content-width;
    @include y-pad($outer-space-light);
    background-image: linear-gradient(to bottom right, #eee, 75%, rgba(6, 9, 96, 0.2)) ;
    
    
    h2 {
      @include column(22);
      padding-bottom: $space-light;
    }
    
    label {
      @include column(22);
      padding-bottom: $space-lighter;
      font-weight: 600;
    }
    
    input:not([type="submit"]), textarea {
      @include column(22);
      padding: $space-lighter;
      margin-bottom: $space-light;
      border-color: $brand-1;
      border-radius: $project-border-radius;
    }
    
    input:not([type="submit"]):valid {
      border-width: 2px;
      border-color: green;
    }
    
  }
  
  .form-submit {
    @extend %cta;
    @include column(20);
    @include y-margin($space-light);
  }
  
  .form-feedback {
    overflow: hidden;
    @include column(22);
    height: 0px;
    color: green;
    text-align: center;
    
    &.is-submitted {
      height: auto;
    }
  }
  

</style>