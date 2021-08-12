<template lang='pug'>
  .theme-toggler
    button(
      @click='toggleTheme'
    ) {{ currentTheme === 'dark' ? '☀️' : '🌙' }}
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import localforage from 'localforage';

export default {
  name: 'App',

  created() {
    this.initializeTheme();
  },

  computed: {
    ...mapGetters('User', ['currentTheme']),
  },

  methods: {
    ...mapActions('User', ['setTheme']),

    async initializeTheme() {
      const theme = await localforage.getItem('theme');

      if (theme) {
        this.setTheme(theme);

        return;
      }

      if (this.matchMedia('(prefers-color-scheme: dark)')) {
        this.setTheme('dark');
        localforage.setItem('theme', 'dark');

        return;
      }

      this.setTheme('light');
      localforage.setItem('theme', 'light');
    },

    matchMedia(media) {
      return window.matchMedia && window.matchMedia(media).matches;
    },

    toggleTheme() {
      const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
      this.setTheme(newTheme);
      localforage.setItem('theme', newTheme);
    },
  },
};
</script>
