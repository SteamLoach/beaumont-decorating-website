<template>

  <nav>
  
    <nuxt-link v-for="link in Nav.menuItems"
               :id="link.id"
               :to="link.route"> {{link.title}} </nuxt-link>
  
  </nav>

</template>


<script>

export default {
  
  computed: {
    Nav: function() {
      return this.$store.state.cms.Nav ;
    }
  }
  
}


</script>