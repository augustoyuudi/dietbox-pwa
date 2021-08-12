export default {
  methods: {
    async fetchCharactersListByPage(page) {
      try {
        this.loading = true;

        const url = `https://swapi.dev/api/people/?page=${page}`;

        const response = await fetch(url, {
          method: 'GET',
        });

        return await response.json();
      } catch (error) {
        // eslint-disable-next-line
        alert(`Erro na requisicao para STRAPI: ${error}`);
      } finally {
        this.loading = false;
      }

      return [];
    },

    getIDFromURL(url) {
      if (!url) {
        return '';
      }

      const splittedURL = url.split('/');
      return splittedURL[splittedURL.length - 2];
    },

    padNumberThreeDigits(number) {
      if (!number) {
        return '';
      }

      return number.padStart(3, '0');
    },

    paddedCharacterID(url) {
      if (!url) {
        return '';
      }

      const id = this.getIDFromURL(url);
      return this.padNumberThreeDigits(id);
    },
  },
};
