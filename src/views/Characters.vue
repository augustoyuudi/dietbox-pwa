<template lang="pug">
  .characters-view
    ul
      li(
        v-for="character in characters"
        :key="character.name"
      ) {{ character.name }}
    p {{ characters[0] }}
</template>

<script>
export default {
  name: 'CharactersView',
  created() {
    this.fetchCharacters();
  },
  data() {
    return {
      characters: [],
    };
  },
  methods: {
    async fetchCharacters() {
      const url = 'https://swapi.dev/api/people/?page=2';
      const response = await fetch(url, {
        method: 'GET',
      });
      this.characters = (await response.json()).results;
    },
  },
};
</script>
