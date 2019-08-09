<template>

  <div class="page-wrapper">
    

    
    <button :class="button"
            @click="toggle">Clicko</button>
    
  </div>

</template>

<script>

export default {
  
  data() {
    
    return {
      button: {blue: false}
    }
    
  },
  
  
  methods: {
    toggle: function() {
      
      this.button['blue'] = !this.button['blue'] ; 
      
    }
  }
  
}

</script>

<style>

  .blue {
    background-color: navy;
  }
</style>