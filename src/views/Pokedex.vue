<!-- src/views/Pokedex.vue -->

<template>
	<div>
		<div class="search-bar">
			<input
				v-model="pokemonNumber"
				type="text"
				placeholder="Enter Pokemon Number"
			/>
			<button @click="searchPokemon">Search</button>
		</div>

		<div v-if="pokemon" class="pokemon-result">
			<pokemon-card :pokemon="pokemon" />
		</div>
	</div>
</template>

<script>
import axios from "axios";
import PokemonCard from "@/components/PokemonCard.vue";

export default {
	data() {
		return {
			pokemonNumber: "",
			pokemon: null,
		};
	},
	methods: {
		async searchPokemon() {
			try {
				const response = await axios.get(
					`https://pokeapi.co/api/v2/pokemon/${this.pokemonNumber}`,
				);
				this.pokemon = response.data;
			} catch (error) {
				console.error("Error fetching Pokemon:", error);
			}
		},
	},
	components: {
		PokemonCard,
	},
};
</script>

<style>
.search-bar {
	margin: 20px 0;
}

.pokemon-result {
	display: flex;
	justify-content: center;
}
</style>
