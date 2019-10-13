<template>

  <article class="content-panel image-gallery-panel">
  
    <h2 class="content-panel-title"><span> {{content.title}} </span></h2>
    
    <div class="content-item-wrapper">
      
      <div class="image-gallery">
      
        <transition-group name="fade"
                          tag="div">
          
          <div v-for="i in [currentImage]" 
               :key="i.id"
               class="image-wrapper">
            <img :src="currentImage.image[0].url"/>
          </div> 
  
        </transition-group>
        
        <span class="previous-image" @click="previousImage">&#10094;</span>
        <span class="next-image" @click="nextImage">&#10095;</span>
        
      </div>
      
    </div>
    
  </article>

</template>


<script>

export default {

  props: ['content'],
  
  data() {
    return {
      images: this.content.untitledLinkedItems,
      timer: null,
      currentIndex: 0
    }
  },
  
  methods: {
    nextImage: function() {
      this.currentIndex += 1;
    },
    previousImage: function() {
      this.currentIndex -= 1;
    }
  },
  
  computed: {
    currentImage: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
  
}
  
</script>


<style lang="scss">
    
  .image-gallery {
    @include container(center, center);
    @include column-scale(22);
    @include x-pad($space-heavy);
    
      .image-wrapper {
        @include wrapper(center, center);
        @include height-scale(275px, 300px, 350px, 520px); 
    }
  }
  
  .next-image,
  .previous-image {
    position: absolute;
      top: 45%;
    padding: $space-lighter;
    &:hover {cursor: pointer;}
  }
  
  .next-image {right: 0;}
  .previous-image {left: 0;}
  
  
  //Transition
  .fade-enter-active,
  .fade-enter-leave {
    transition: all, 1s ease;
    overflow: hidden;
    visibility: visible;
    opacity: 1;
  }
  
  .fade-enter,
  fade-leave-to {
    visibility: hidden;
    opacity: 0;
  }
  
</style>