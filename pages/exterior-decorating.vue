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
      button: {blue: false}
    }
    
  },
  
   computed: { 
    navItems: function() {
      return this.$store.state.mainNavMenu['menu_items'] ; 
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