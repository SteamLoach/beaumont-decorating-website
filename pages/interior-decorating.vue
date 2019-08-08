<template>

  <div class="page-wrapper">
    
    <nav>
      <nuxt-link v-for="item in navItems"
                 :to="item.route.value"> {{item.title.value}} </nuxt-link>
  
    </nav>
    
        
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
  
   computed: { 
    navItems: function() {
      return this.$store.state.mainNavMenu['menu_items'] ; 
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