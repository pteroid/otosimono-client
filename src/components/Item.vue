<template lang="html">
  <a class="box media" @click="showDetail">
    <!-- 写真 -->
    <figure class="media-left">
      <div class="image is-96x96">
        <img v-bind:src="item.image" class="image">
      </div>
    </figure>
    <!-- 説明 -->
    <div class="media-content">
      <div class="content">
        <strong>{{item.title}}</strong><br>
        拾得日: {{item.date}} 拾得場所: {{item.place}} 種類: {{item.kind}}<br>
         拾得場所の詳細: {{item.details}}
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: ['item'],
  methods: {
    showDetail () {
      this.$router.push({name: 'detail', params: {id: this.item.id}})
    }
  }
}
</script>
<style type="text/css">
img.image {
    width:auto;
    height:auto;
    max-width:100%;
    max-height:100%;
}
</style>
