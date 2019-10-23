<template>

  <content-panels :panels="Page.contentPanels"></content-panels>

</template>


<script>

export default {
  
  computed: {
    Page: function() {
      return this.$store.state.cms.privacyPage ;
    }
  }
  
}

</script>

<style lang="scss">


</style>