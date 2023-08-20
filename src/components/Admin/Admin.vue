<template>
	<div :class="$style.container">
		<div :class="$style.items">
			<div :class="[$style.item, $style['item-1']]">
				<LogoAndLanguage />
			</div>
			<div :class="[$style.item, $style['item-2']]">
				<Header />
			</div>
			<div :class="[$style.item, $style['item-3']]">
				<Table />
			</div>
		</div>
	</div>
</template>

<script setup>
import Header from '../ui/Header/Header.vue'
import LogoAndLanguage from '../ui/LogoAndLanguage/LogoAndLanguage.vue'
import Table from '../ui/Table/Table.vue'
</script>

<style module lang="scss">
.container {
	min-width: 1200px;
	margin: 0 auto;
	// background: yellow;
}

.items {
	padding: 20px;
	// background: green;
	height: 100vh;
	display: grid;
	grid-template-rows: repeat(10, 1fr);
	grid-template-columns: repeat(9, 1fr);
	gap: 20px;
}

.item-1 {
	// background: red;
	grid-row: 1/11;
	grid-column: 1/1;
}

.item-2 {
	// background: pink;
	grid-row: 1/1;
	grid-column: 2/10;
}

.item-3 {
	// background: goldenrod;
	grid-row: 2/11;
	grid-column: 2/10;
}
</style>
