<template lang="pug">
  .characters-view
    p ola mundo
    //- ul
    //-   li(
    //-     v-for="character in characters"
    //-     :key="character.name"
    //-   ) {{ character.name }}
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
      const url = 'https://swapi.dev/api/people/1';
      const response = await fetch(url, {
        method: 'GET',
      });
      console.log(response);
      // this.characters = (await response.json()).results;
      // this.characters.push(await response.json());
    },
  },
};
</script>
