<template lang='pug'>
  .character-attribute
    h5 {{ title }}
    p {{ attribute }}
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    attribute: {
      type: String,
    },
  },
};
</script>
