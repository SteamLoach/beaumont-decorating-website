<template>

  <article class="content-panel image-gallery-panel">
  
    <h2 class="content-panel-title"><span> {{content.title}} </span></h2>
    
    <div class="content-panel-inner">
      
      <div class="slide-gallery">  
        <div class="previous-image"
              @click="previousSlide">&#10094;</div>
          <div class="gallery-aperture">
            <div class="image-strip"
                 :style="currentPosition">
              <div v-for="image in images"
                   class="image-wrapper">
                <img :src="image.image[0].url"/>
                <p v-if="image.caption"
                     class="caption"> {{image.caption}} </p>
              </div>
            </div>
          </div>
        <div class="next-image"
              @click="nextSlide">&#10095;</div>
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
      if (this.stripPosition >= this.images.length) {
        this.stripPosition = 0;
      }
    },
    previousSlide: function() {
      this.stripPosition -= 1;
      if (this.stripPosition < 0) {
        this.stripPosition = this.images.length - 1 ;
      }
    },
  }
  
}
  
</script>


<style lang="scss">
    
  .slide-gallery {
    @include container(center, center);
    @include column-scale(22, 22, 20, 24, 20);
    @include y-pad($space-medium);
    @include under-shadow();
    border-radius: $border-radius;
  }
  
  .gallery-aperture {
    @include column-scale(20);
    overflow: hidden;
    background-color: $shade-lightest;
  }
  
  .image-strip {
    position: relative;
    @include container(start, center);
    flex-wrap: nowrap;
    width: 100%;
    @include standard-transition(left);
    transition-duration: 0.6s;
  }
  
  .image-wrapper {
    @include wrapper(center, center);
    @include height-scale(250px, 275px, 375px, 500px, 575px, 650px);
    min-width: 100%;
    max-width: 100%;
    
    .caption {
      position: absolute;
        bottom: 0;
      width: 100%;
      padding: $space-lighter;
      text-align: center;
      font-size: 0.8rem;
      color: $offset-font-color;
      @include opaque-black();
    }
  }
  
  .next-image,
  .previous-image {
    position: absolute;
    z-index: 1;
    padding: $space-lightest;
      @include xy-pad-from($tablet, $space-light);
    @include font-size-from($fablet, 1.2rem);
      @include font-size-from($tablet, 1.6rem);
    &:hover {cursor: pointer;}
  }
  
  .next-image {right: 0;}
  .previous-image {left: 0;}
  
  
  
</style>