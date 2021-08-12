<template lang='pug'>
  .pagination
    button.pagination__page(
      v-if='canShowFirstPage'
      @click='goToPage(firstPage)'
    ) {{ firstPage }}

    button.pagination__page(
      v-if='previousPage'
      @click='goToPage(previousPage)'
    ) {{ previousPage }}

    button.pagination__page.current-page(
      v-if='!isCurrentPageLastPage'
    ) {{ currentPage }}

    button.pagination__page(
      v-if='nextPage'
      @click='goToPage(nextPage)'
    ) {{ nextPage }}

    p.ellipsis(
      v-if='canShowNextPage'
    ) ...

    button.pagination__page(
      :class='{ "current-page": isCurrentPageLastPage }'
      @click='goToPage(lastPage)'
    ) {{ lastPage }}
</template>

<script>
export default {
  props: {
    totalItems: {
      type: Number,
      required: true,
    },

    perPage: {
      type: Number,
      required: true,
    },

    currentPage: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      firstPage: 1,
    };
  },

  computed: {
    previousPage() {
      const previousPage = this.currentPage - 1;

      if (previousPage === 1) {
        return null;
      }

      return previousPage;
    },

    nextPage() {
      const nextPage = this.currentPage + 1;

      if (nextPage >= this.lastPage) {
        return null;
      }

      return nextPage;
    },

    lastPage() {
      return Math.ceil(this.totalItems / this.perPage);
    },

    canShowFirstPage() {
      return this.currentPage !== 1;
    },

    canShowNextPage() {
      return this.nextPage !== this.lastPage;
    },

    isCurrentPageLastPage() {
      return this.currentPage === this.lastPage;
    },
  },

  methods: {
    goToPage(page) {
      this.$emit('go-to-page', page);
    },
  },
};
</script>
