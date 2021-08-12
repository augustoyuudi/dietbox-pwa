<template lang='pug'>
  #app(:class='[currentTheme]')
    Navbar
    router-view
</template>

<script>
import { mapGetters } from 'vuex';
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar,
  },

  computed: {
    ...mapGetters('User', ['currentTheme']),
  },
};
</script>
