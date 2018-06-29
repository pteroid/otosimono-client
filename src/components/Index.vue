<template>
  <div id="index">
    <div class="content is-large">
      <h1>落し物検索システムについて</h1>
      <ul>
        <li>このシステムでは，AV講義室・AV演習室・端末講義室・端末演習室1・情報科学センター1階および2階ロビーで拾得され、情報科学センターが管理している落し物を検索することができます。これらの場所以外での落し物につきましては、学生係へお問い合わせください。</li>
        <li>情報科学センターでは拾得した落し物の保管期間を３ヶ月としています。保管期間内に持ち主が現れなかった場合は、申し訳ありませんがこちらで処分させて頂きます。</li>
        <li>システムの不具合、質問、その他何かありましたら利用者窓口内のスタッフにお尋ねください。</li>
      </ul>
      <h1>利用ガイド</h1>
      <ul>
        <li>"検索開始"ボタンをタッチすることで、落し物のリストを表示します。</li>
      </ul>
    </div>
    <div class="has-text-centered">
      <router-link to="/dashboard" tag="button" class="button is-primary is-large">検索開始</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
