---
title: vuex-class 使用指南
date: 2019-05-27 13:35:03
tags: 总结
---

`vuex-class` 是 `vue-class-component` 对vuex提供的装饰器，没有原本的vuex好写（没有mapState, mapActions 这些辅助函数），勉强算简洁

```js
import Vue from "vue";
import Component from "vue-class-component";
import { State, Action, Getter } from "vuex-class";

@Component
export default class App extends Vue {
  name:string = ''
  @State login: boolean;
  @Action initAjax: () => void;
  @Getter load: boolean;

  get isLogin(): boolean {
    return this.login;
  }

  mounted() {
    this.initAjax();
  }
}
```
等同于：
```js
export default {
  data() {
    return {
      name: ''
    }
  },

  mounted() {
    this.initAjax()
  },

  computed: {
    login() {
      return this.$store.state.login
    },
    load() {
      return this.$store.getters.load
    }
  },

  methods: {
    initAjax() {
      this.$store.dispatch('initAjax')
    }
  }
}
```