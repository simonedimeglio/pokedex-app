<!-- src/components/PokemonCard.vue -->

<template>
  <div class="pokemon-card">
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name" class="pokemon-image" />
    <h3>{{ pokemon.name }}</h3>
    <p>ID: {{ pokemon.id }}</p>
    <p>Height: {{ pokemon.height }}</p>
    <p>Weight: {{ pokemon.weight }}</p>
  </div>
</template>

<script>
export default {
  props: {
    pokemon: Object, // Proprietà per ricevere i dettagli del Pokémon
  },
};
</script>

<style scoped>
.pokemon-card {
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  text-align: center;
}

.pokemon-image {
  width: 150px;
  height: 150px;
}
</style>
