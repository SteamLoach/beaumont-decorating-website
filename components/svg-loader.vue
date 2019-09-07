<template>

  <i>
    <component :is="iconComponent"></component>
  </i>

</template>


<script>

//Homepage
import fencePosts from '~/components/svg-icons/fence-posts.vue';
import livingRoom from '~/components/svg-icons/living-room.vue' ; 
  
//Interior
import paintBrush from '~/components/svg-icons/paint-brush.vue';
import paintBucket from '~/components/svg-icons/paint-bucket.vue';
import paintRoller from '~/components/svg-icons/paint-roller.vue';
import plasterRepair from '~/components/svg-icons/plaster-repair.vue';
import wallpaper from '~/components/svg-icons/wallpaper.vue';

//Exterior
import faciaSofits from '~/components/svg-icons/facia-sofits.vue';
import garageDoor from '~/components/svg-icons/garage-door.vue';
import exteriorRender from '~/components/svg-icons/exterior-render.vue';
import woodenWindows from '~/components/svg-icons/wooden-windows.vue';
  
export default {
  
  props: ['icon'],
  
  computed: {
    iconComponent: function() {
      return this.$toCamel(this.icon) ; 
    }
  },
  
  components: {
    fencePosts,
    livingRoom,
    paintBrush,
    paintBucket,
    paintRoller,
    plasterRepair,
    wallpaper,
    faciaSofits,
    garageDoor,
    exteriorRender,
    woodenWindows
  }
  
}

</script>

<style lang="scss">



</style>