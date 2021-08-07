<template lang="pug">
  .theme-toggler
    input(type="checkbox" id="toggle-theme" @change="toggleTheme")
    label(for="toggle-theme") Toggle theme
</template>

<script>
export default {
  name: 'App',

  created() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.currentTheme = 'dark';
    }

    this.$emit('toggle-theme', this.currentTheme);
  },

  data() {
    return {
      currentTheme: 'dark',
    };
  },

  methods: {
    toggleTheme() {
      this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
      this.$emit('toggle-theme', this.currentTheme);
    },
  },
};
</script>
