<template lang="pug">
  #app(:class="[currentTheme]")
    theme-toggler(
      @toggle-theme="toggleTheme"
    )
    router-view
</template>

<script>
import ThemeToggler from '@/components/ThemeToggler.vue';

export default {
  components: {
    ThemeToggler,
  },

  data() {
    return {
      currentTheme: null,
    };
  },

  methods: {
    toggleTheme(theme) {
      this.currentTheme = theme;
    },
  },
};
</script>

<style lang="stylus">
@import '~@/styles/app'
</style>
