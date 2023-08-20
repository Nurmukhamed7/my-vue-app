<template>
	<div :class="$style.content">
		<LogoAndLanguage />
		<div :class="$style.container">
			<div :class="$style.text">
				<h2>Добро пожаловать</h2>
				<h2>В Систему Администрирования Жилых Комплексов</h2>
				<h2>EASY LIFE HOMES</h2>
			</div>
			<div :class="$style.buttons">
				<button @click="$router.push({ name: 'Admin' })">
					Войти как администратор EasyLife
				</button>
				<button @click="$router.push({ name: 'Manager' })">
					Войти как менеджер комплекса
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import LogoAndLanguage from '../ui/LogoAndLanguage/LogoAndLanguage.vue'
</script>

<style module lang="scss">
@import './EnterPage.module.scss';
</style>
