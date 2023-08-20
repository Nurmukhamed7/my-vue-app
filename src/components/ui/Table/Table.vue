<template>
	<div :class="$style.tabs">
		<div :class="$style.buttons">
			<button :class="$style.active">Список ЖК</button>

			<button>Добавить ЖК</button>
		</div>
		<div :class="$style.tab__content">
			<TableContent />
		</div>
	</div>
</template>

<script setup>
import TableContent from './TableContent.vue'
</script>

<style module lang="scss">
@import '../../../scss/variables.scss';

.tabs {
	display: flex;
	height: 100%;
	justify-content: space-between;
}
.buttons {
	display: flex;
	flex-direction: column;
	gap: 6px;

	> button {
		color: white;
		font-size: 12px;
		font-weight: 600;
		background: white;
		color: black;
		padding: 15px 0;
		width: 182px;
		border-radius: 10px;
		border: 2px solid $DarkPurple;

		display: flex;
		justify-content: start;
		gap: 15px;
		align-items: center;
		padding-left: 12px;

		&::before {
			content: '';
			display: block;
			width: 15px;
			height: 15px;
			background-image: url('/images/tabs-icon.svg');
		}

		&:hover {
			background: darken(white, 7%);
		}
	}
	.active {
		width: 200px;
		border-radius: 10px 0 0 10px;
		border-right: none;
		z-index: 2;
		margin-right: -100px;
	}
}

.tab__content {
	background: white;
	border: 2px solid $DarkPurple;
	border-radius: 0 10px 10px 10px;

	width: 85%;
}
</style>
