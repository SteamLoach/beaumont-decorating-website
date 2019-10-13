<template>

  <section class="content-panel recent-project-panel">
  
    <h2 class="content-panel-title"><span> {{content.title}} </span></h2>
    <div class="content-item-wrapper">
      
      <div v-for="item in content.recentProjectItems"
           class="recent-project-item">
        <span class="hover-prompt"> + </span>
        <img :src="item.image[0].url"/>
        <div class="caption-wrapper">
          <p> {{ item.caption }} </p>
        </div>
        
      </div>
  
    </div>
  
  </section>

</template>


<script>

export default {
  
  props: ['content']
  
}

</script>


<style lang="scss">

  .recent-project-panel {
    
    .recent-project-item {
      position: relative;
      overflow: hidden;      
      @include column-scale(22, 18, 11, 7, null);
      margin-bottom: $outer-space-light;
        @include oneway-margin-from($tablet, $outer-space-medium);
      
      .hover-prompt {
        position: absolute;
          bottom: 0;
          right: 0;
        font-size: 2rem;
        line-height: 1;
        padding-right: $space-light;
        color: $brand-1;
        opacity: 1;
        @include standard-transition(opacity);
      }
      
      &:hover {
        .caption-wrapper {top: 0;}
        .hover-prompt {opacity: 0;}
      }
    
      .caption-wrapper {
        @include container(center, center);
        position: absolute;
          top: -100%;
          left: 0;
        height: 100%;
        z-index: 1;
        font-size: 0.8rem;
        color: $offset-font-color;
        background-color: $brand-1;
        @include standard-transition(top);
        
        p {
          padding: $space-heavy;
        }
      }
    
    }
    
    
    
  }

</style>