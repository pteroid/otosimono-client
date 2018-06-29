<template lang="html">
<div id="detail">
  <div class="columns">
    <div class="column">
      <figure class="image">
        <img :src="item.image">
      </figure>
    </div>
    <div class="column">
      <div class="content">
        <ul>
          <li>落とし物番号: {{item.id}}</li>
          <li>拾得日: {{item.date}}</li>
          <li>拾得場所: {{item.place}}</li>
          <li>種類: {{item.kind}}</li>
          <li>詳細情報: {{item.details}}</li>
          <li>特徴: {{item.features}}</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="has-text-centered">
    <router-link to="/dashboard" tag="button" class="button is-link is-large">戻る</router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'detail',
  beforeRouteUpdate (to, from, next) {
    console.log(this.id)
    next()
  },
  props: {
    id: Number
  },
  computed: {
    item () {
      return this.$store.getters.getItemById(this.id)
    }
  }
}
</script>
