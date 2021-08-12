<template lang='pug'>
  .live-search
    input(
      type='text'
      v-model='query'
      ref='live-search'
      :placeholder='placeholder'
    )
</template>

<script>
import debounce from '@/helpers/debounce';

export default {
  props: {
    debounceDelay: {
      default: 500,
    },

    placeholder: {
      default: '',
    },
  },

  mounted() {
    this.bindLiveSearchDebounce();
  },

  data() {
    return {
      query: '',
    };
  },

  methods: {
    bindLiveSearchDebounce() {
      this.$refs['live-search'].addEventListener(
        'keyup',
        debounce(this.filterData, this.debounceDelay),
      );
    },

    filterData() {
      this.$emit('filter-data', this.query);
    },
  },
};
</script>
