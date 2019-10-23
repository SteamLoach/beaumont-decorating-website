<template>

  <section class="rich-content-panel">
  
    <div class="content-panel-inner">
    
      <article v-html="content.richTextContent"></article>
    
    </div>
  
  </section>

</template>

<script>

export default {
  
  props: ['content']
  
}

</script>

<style lang="scss">

  .rich-content-panel {
    @include content-panel($justify-items: start, $format-children: true);
    margin-top: $outer-space-heavy;
  
    .content-panel-inner {
      @include column-scale(
        $default: 22,
      );
    }
  }
  
</style>