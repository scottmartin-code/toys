<script>
	import { onMount } from 'svelte'
	import { bandName } from '../BandName.js'

	export let band

	function updateBand () { band = bandName() }

	onMount( () => { updateBand() })
</script>

<main>
	<h1>Vintage Band Name Generator</h1>

	<div class="advice">Click label for another</div>

	<div class="label" on:click={updateBand}>
		<div class="result">{band}</div>
	</div>
</main>
