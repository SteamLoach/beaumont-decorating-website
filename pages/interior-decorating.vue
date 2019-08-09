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
      button: {red: false}
    }
    
  },

  methods: {
    toggle: function() {
      
      this.button['red'] = !this.button['red'] ; 
      
    }
  }
  
}

</script>

<style>

  .red {
    background-color: darkred;
  }
</style>