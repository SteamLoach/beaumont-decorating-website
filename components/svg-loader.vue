<template>

  <i>
    <component :is="iconComponent"></component>
  </i>

</template>


<script>

import paintBrush from '~/components/svg-icons/paint-brush.vue';
import paintBucket from '~/components/svg-icons/paint-bucket.vue';
import paintRoller from '~/components/svg-icons/paint-roller.vue';
import plasterRepair from '~/components/svg-icons/plaster-repair.vue';
import wallpaper from '~/components/svg-icons/wallpaper.vue';
  
export default {
  
  props: ['icon'],
  
  computed: {
    iconComponent: function() {
      return this.$toCamel(this.icon) ; 
    }
  },
  
  components: {
    paintBrush,
    paintBucket,
    paintRoller,
    plasterRepair,
    wallpaper
  }
  
}

</script>