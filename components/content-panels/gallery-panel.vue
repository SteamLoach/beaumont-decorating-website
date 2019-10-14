<template>

  <article class="content-panel image-gallery-panel">
  
    <h2 class="content-panel-title"><span> {{content.title}} </span></h2>
    
    <div class="content-panel-inner">
      
      <div class="slide-gallery">  
        <span class="previous-image"
              @click="previousSlide">&#10094;</span>
          <div class="gallery-aperture">
            <div class="image-strip"
                 :style="currentPosition">
              <div v-for="image in images"
                   class="image-wrapper">
                <img :src="image.image[0].url"/>
              </div>
            </div>
          </div>
        <span class="next-image"
              @click="nextSlide">&#10095;</span>
      </div>
      
    </div>
    
  </article>

</template>


<script>

export default {

  props: ['content'],
    
  data() {
    return {
      stripPosition: 0
    }
  },
  
  computed: {
    images: function() {
      return this.content.galleryImages
    },
    currentPosition: function() {
      return `left: -${this.stripPosition * 100}%`
    }
  },
  
  methods: {
    nextSlide: function() {
      this.stripPosition += 1;
    },
    previousSlide: function() {
      this.stripPosition -= 1;
    },
  }
  
}
  
</script>


<style lang="scss">
    
  .slide-gallery {
    @include container(center, center);
    @include column-scale(23, 22, 20, 24, 20);
  }
  
  .gallery-aperture {
    @include column-scale(22);
    overflow: hidden;
  }
  
  .image-strip {
    position: relative;
    @include container(start, center);
    flex-wrap: nowrap;
    width: 100%;
    @include standard-transition(left);
    transition-duration: 1s;
  }
  
  .image-wrapper {
    @include wrapper(center, center);
    @include height-scale(250px, 275px, 375px, 500px, 575px, 650px);
    min-width: 100%;
    max-width: 100%;
  }
  
  .next-image,
  .previous-image {
    z-index: 1;
    position: absolute;
      @include y-center-absolute();
    @include y-pad($space-lighter);
    @include font-size-from($tablet, 2rem)
    &:hover {cursor: pointer;}
  }
  
  .next-image {right: 0;}
  .previous-image {left: 0;}
  
  
</style>