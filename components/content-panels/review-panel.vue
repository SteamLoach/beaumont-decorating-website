<template>

  <article class="review-panel">
    <div class="content-panel-inner">
      <h2 class="content-panel-title"><span> {{content.title}}</span></h2>
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
    @include row(center, center);
    background-color: $shade-lightest;
    
    .review-item {
      @include column(22);
        @include column-break($tablet, 11);
      @include margin-until($tablet, bottom, $outer-space-light);
       font-size: 0.8rem;


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