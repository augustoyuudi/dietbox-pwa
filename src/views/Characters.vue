<template lang='pug'>
  main.view.character
    Loader(v-show='loading')
    template(v-if='!loading')
      LiveSearch(
        @filter-data='filterCharactersByName'
        placeholder='Buscar personagem'
      )
      ul.characters-list
        li.characters-list__item(
          v-for='character in characters'
          :key='character.name'
        )
          router-link(:to='createCharacterDetailsRoute(character)')
            Card
              template(#body)
                img(src='' alt='avatar image')
                .character-resume
                  p.character-resume__id \#{{ paddedCharacterID(character.url) }}
                  h5.character-resume__name {{ character.name }}
                  Pill.character-resume__age
                    p {{ character.gender }}
                  Pill.character-resume__gender
                    p {{ character.mass }}kg
      Pagination(
        :totalItems='totalCharacters'
        :perPage='perPage'
        :currentPage='currentPage'
        @go-to-page='fetchCharacters'
      )
</template>

<script>
import Loader from '@/components/atoms/Loader.vue';
import Card from '@/components/atoms/Card.vue';
import Pill from '@/components/atoms/Pill.vue';
import Pagination from '@/components/atoms/Pagination.vue';
import LiveSearch from '@/components/atoms/LiveSearch.vue';
import CharacterDataHandlers from '@/mixins/CharacterDataHandlers';

export default {
  name: 'CharactersView',

  components: {
    Loader,
    Card,
    Pill,
    Pagination,
    LiveSearch,
  },

  mixins: [
    CharacterDataHandlers,
  ],

  created() {
    this.fetchCharacters(this.currentPage);
  },

  data() {
    return {
      loading: true,
      allCharacters: [],
      characters: [],
      totalCharacters: 0,
      currentPage: 1,
      perPage: 10,
    };
  },

  methods: {
    async fetchCharacters(page) {
      const { count, results } = await this.fetchCharactersListByPage(page);
      this.allCharacters = results;
      this.characters = results;
      this.totalCharacters = count;
      this.currentPage = page;
    },

    createCharacterDetailsRoute(character) {
      return {
        name: 'CharacterDetails',
        params: {
          id: this.getIDFromURL(character.url),
        },
      };
    },

    filterCharactersByName(query) {
      if (!query) {
        this.characters = this.allCharacters;

        return;
      }

      this.characters = this.characters.filter((character) => {
        const treatedName = character.name.toLowerCase();
        const treatedQuery = query.toLowerCase();

        return treatedName.includes(treatedQuery);
      });
    },
  },
};
</script>
