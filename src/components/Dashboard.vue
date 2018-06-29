<template lang="html">
  <div id="dashboard">
    <div class="columns">
      <div class="column">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">日付</label>
          </div>
          <div class="field-body">
            <div class="field is-fullwidth">
              <div class="control">
                <flat-pickr class="input is-narrow" v-model="date" :config="config" @on-change="log()" placeholder="未指定"></flat-pickr>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">場所</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <div class="select is-fullwidth">
                  <select v-model="place">
                    <option value="">すべて</option>
                    <option v-for="(value, key) in places" :key="key">{{value}}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">種類</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <div class="select is-fullwidth">
                  <select v-model="kind">
                    <option value="">すべて</option>
                    <option v-for="(value, key) in kinds" :key="key">{{value}}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-2 has-text-centered">
        <a class="button is-fullwidth" @click="getItems">リロード</a>
      </div>
    </div>
    <Item v-for="item in filteredItems" :item="item" :key="item.id"/>
  </div>
</template>

<script>
import Item from '@/components/Item'
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import { Japanese } from 'flatpickr/dist/l10n/ja'
// import {mapState} from 'vuex'

export default {
  name: 'dashboard',
  data () {
    return {
      date: '',
      place: '',
      kind: '',
      config: {
        mode: 'multiple',
        maxDate: 'today',
        locale: Japanese
      },
      places: ['AV講義室', 'AV演習室', '端末講義室', '端末演習室', '1Fロビー', '2Fロビー'],
      kinds: ['かさ', '電子機器', '文房具', 'ノート・ファイル', '衣類・タオル', '鍵・アクセサリー', '教科書・本', 'その他']
    }
  },
  components: {
    Item,
    flatPickr
  },
  methods: {
    log () {
      console.log(this.date)
      console.log(typeof this.date)
      console.log(this.kind)
      console.log(this.place)
    },
    getItems () {
      this.$store.dispatch('getItems')
      this.date = ''
      this.kind = ''
      this.place = ''
    }
  },
  computed: {
    filteredItems () {
      var items = this.$store.state.items
      if (items == null) { return [] }

      if (this.date !== '') {
        items = items.filter(item =>
          this.date.split(', ').indexOf(item.date) >= 0
        )
      }

      if (this.place !== '') { items = items.filter(item => item.place === this.place) }

      if (this.kind !== '') { items = items.filter(item => item.kind === this.kind) }

      return items
    }
  },
  created: function () {
    console.log('dashboard created')
    this.getItems()
  }
}
</script>
