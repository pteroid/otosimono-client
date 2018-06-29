<template>
  <!--  ナビゲーションバー  -->
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link tag="a" to="/" class="navbar-item">
            ISC落し物検索システム
        </router-link>
      </div>
    </nav>

    <!--   メイン   -->
    <section class="section">
      <div class="container">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'App'
}

</script>

<style lang='sass'>
  @import 'bulma'
</style>
