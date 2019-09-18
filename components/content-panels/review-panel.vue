<template>

  <article class="review-panel">
    <div class="review-panel-inner">
      <h2 class="review-panel-title"><span> {{content.title}}</span></h2>
      <div v-for="item in content.reviewItems"
           class="review-item">
        <p class="review-body"> {{item.review}} </p>
        <div class="review-footer">
          <img :src="item.image[0].url"/>
          <div>
            <span class="customer-name"> {{item.name}} </span>
            <span class="customer-location"> {{item.location}} </span>
          </div>
        </div>
  
      </div>
      
      
    </div>
  </article>

</template>


<script>

export default {
  
  props: ['content'],

}

</script>


<style lang="scss">

  .review-panel {
    @include row(center, center);
    background-color: $shade-lightest;
  }
  
  .review-panel-inner {
    @include container(around, start);
    max-width: $project-max-content-width;
    @include y-pad($outer-space-heavy);
  }
  
  .review-panel-title {
    width: 100%;
    text-align: center;
    padding-bottom: $space-heavier;
    
    span {
      @include underline-span(100%, 5px, $brand-accent);
      padding-bottom: $space-medium;
    }
  }
  
  .review-item {
    @include column(22);
      @include column-break($tablet, 11);
    @include margin-until($tablet, bottom, $outer-space-light);
    
    .review-body {
      padding: $space-heavier;
      background-color: $page-background;
      border-radius: $project-border-radius;
      @include under-shadow();
    }
    
    .review-footer {
      @include wrapper(start, center);
      @include y-pad($space-light);
      
      img {
        width: 50px;
        height: auto;
        border-radius: 50px;
        @include x-margin($space-light);
      }
      
      span {
        display: block;
      }
      
      .customer-name {
        font-weight: 600;
      }
      .customer-location {
        color: $shade-dark;
      }
      
    }
  }
  
  

</style>