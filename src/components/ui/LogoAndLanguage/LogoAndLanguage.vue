<template>
	<div :class="$style.left__content">
		<a href="#">
			<img src="/images/logo/logo-vertical.svg" alt="logo" />
		</a>
		<a href="#" :class="$style.languages">
			<img src="/images/logo/languages-circle.svg" alt="languages" />
			<span>RU</span>
		</a>
	</div>
</template>

<script setup></script>

<style lang="scss" module>
@import '../../../scss/variables.scss';

.left__content {
	position: absolute;
	top: 31px;
	left: 40px;
	display: flex;
	flex-direction: column;
	gap: 41px;
}

.languages {
	display: flex;
	text-align: center;
	font-weight: 600;
	gap: 2.8px;

	> span {
		color: black;
	}
}
</style>
