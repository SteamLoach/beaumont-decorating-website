<template>

  <nav>
  
    <nuxt-link v-for="link in Nav.menuItems"
               :key="link.id"
               :to="link.route"> {{link.title}} </nuxt-link>
  
  </nav>

</template>


<script>

export default {
  
  computed: {
    Nav: function() {
      return this.$store.state.menus.primaryNav ;
    }
  }
  
}


</script>