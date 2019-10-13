<template>

  <article class="content-panel review-panel">
    
    <h2 class="content-panel-title"><span> {{content.title}}</span></h2>
    
    <div class="content-item-wrapper">  
      <div v-for="item in content.reviewItems"
           class="review-item">
        
        <p class="review-body"> {{item.review}} </p>
        
        <div class="review-footer">
          <img :src="item.image[0].url"/>
          <div class="customer-info">
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
    background-color: $shade-lightest;
    
    .review-item {
      @include column-scale(22, null, null, 11);
      font-size: 0.8rem;

      .review-body {
        @include medium-card();
        margin-bottom: 0;
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

        .customer-info {
          max-width: 75%;
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
}
    

  
  

</style>