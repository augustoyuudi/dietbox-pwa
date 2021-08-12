<template lang='pug'>
  article.card
    slot(name='body')
</template>

<script>
export default {
  name: 'Card',

};
</script>
