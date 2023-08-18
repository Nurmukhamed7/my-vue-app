<template>
	<div :class="$style.content">
		<div :class="$style.left__content">
			<a href="#">
				<img src="/images/logo/logo-vertical.svg" alt="logo" />
			</a>
			<a href="#" :class="$style.languages">
				<img src="/images/logo/languages-circle.svg" alt="logo" />
				<span>RU</span>
			</a>
		</div>
		<div :class="$style.container">
			<div :class="$style.text">
				<h2>Добро пожаловать</h2>
				<h2>В Систему Администрирования Жилых Комплексов</h2>
				<h2>EASY LIFE HOMES</h2>
			</div>
			<div :class="$style.buttons">
				<button>Войти как администратор EasyLife</button>
				<button>Войти как менеджер комплекса</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'EnterPage',
}
</script>

<style module lang="scss">
@import './EnterPage.module.scss';
</style>
