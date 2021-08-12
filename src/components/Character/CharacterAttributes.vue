<template lang='pug'>
  Card.character-attributes
    template(#body)
      div
        CharacterAttribute(title='Gender' :attribute='character.gender')
        CharacterAttribute(title='Eye color' :attribute='character.eye_color')
        CharacterAttribute(title='Hair color' :attribute='character.hair_color')
      div
        CharacterAttribute(title='Birth year' :attribute='character.birth_year')
        CharacterAttribute(title='Height' :attribute='character.height')
        CharacterAttribute(title='Mass' :attribute='character.mass')
</template>

<script>
import Card from '@/components/atoms/Card.vue';
import CharacterAttribute from '@/components/Character/CharacterAttribute.vue';

export default {
  props: {
    character: {
      type: Object,
    },
  },

  components: {
    Card,
    CharacterAttribute,
  },
};
</script>
