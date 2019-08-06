<template>
<div>
<h1>Index</h1>
<nuxt-link to="/about">About</nuxt-link>
<button @click="toggle"
        :class="classObject">Toggle Me</button>
</div>
</template>

<script>

export default {

  data() {
    
    return {
      
      classObject: {
        blue: true
      }
      
    }
    
  },
  
  methods: {
    
    toggle: function() {
      this.classObject['blue'] = !this.classObject['blue'];  
    }
    
  }
  
}
</script>

<style>
  
  button {
    font-size: 48px;
    padding: 50px;
  }
  
  .blue {
    background-color: blue;
  }


</style>


