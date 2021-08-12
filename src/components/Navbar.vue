<template lang='pug'>
  header.navbar
    img.navbar__logo(src='@/assets/star-wars-logo.svg' alt='Star Wars logo')
    ThemeToggler(
      @toggle-theme='toggleTheme'
    )
</template>

<script>
import ThemeToggler from '@/components/atoms/ThemeToggler.vue';

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
