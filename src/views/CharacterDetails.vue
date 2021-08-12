<template lang='pug'>
  main.view
    Loader(v-show='loading')
    .character-details(v-if='!loading && character')
      section.character-details__introduction
        h1.character-details__name {{ character.name }}
        span \#{{ paddedCharacterID(character.url) }}
      img.character-details__avatar(src='' alt='imagem avatar')
      CharacterAttributes(:character='character')
      h2 Films
      ul.films
        li(v-for='film in films')
          Card.films__film
            template(#body)
              div
                h5.films__title {{ film.title }}
                p.films__director {{ film.director }}
                p.films__release-date {{ film.release_date }}
              img.films__cover(src='' alt='film cover')
</template>

<script>
import Card from '@/components/atoms/Card.vue';
import Loader from '@/components/atoms/Loader.vue';
import CharacterAttributes from '@/components/Character/CharacterAttributes.vue';
import CharacterDataHandlers from '@/mixins/CharacterDataHandlers';

export default {
  name: 'CharacterDetails',

  props: {
    id: {
      required: true,
    },
  },

  components: {
    Loader,
    Card,
    CharacterAttributes,
  },

  mixins: [
    CharacterDataHandlers,
  ],

  created() {
    this.loadCharacterData();
  },

  data() {
    return {
      loading: true,
      character: {},
      films: [],
    };
  },

  methods: {
    async loadCharacterData() {
      try {
        const url = `https://swapi.dev/api/people/${this.id}`;

        const response = await fetch(url, {
          method: 'GET',
        });

        this.character = (await response.json());
        this.loadCharacterFilmsData();
      } catch (error) {
        // eslint-disable-next-line
        alert(`Erro na requisicao para STRAPI: ${error}`);
        this.loading = false;
      }
    },

    loadCharacterFilmsData() {
      try {
        this.loading = true;
        const filmsPromises = this.character.films.map((film) => fetch(film, { method: 'GET' }));

        Promise.all(filmsPromises).then((values) => {
          this.processFilmsData(values);
        });
      } catch (error) {
        // eslint-disable-next-line
        alert(`Erro na requisicao para STRAPI: ${error}`);
        this.loading = false;
      }
    },

    processFilmsData(films) {
      films.forEach(async (film) => {
        this.films.push(await film.json());
      });
      this.loading = false;
    },
  },
};
</script>
