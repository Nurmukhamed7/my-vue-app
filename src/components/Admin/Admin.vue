<template>
	<div :class="$style.container">
		<div :class="$style.menu">
			<input type="text" placeholder="Название Комплекса" />
			<span>Список Комплексов</span>
			<div :class="$style.user">
				<span
					>Вы вошли как Администратор EasyLife <br />
					VLADIMIR SIKHVART</span
				>
				<img src="/images/logo/logo-EL.svg" alt="logo" />
			</div>
		</div>
	</div>
</template>

<script></script>

<style module lang="scss">
@import './Admin.module.scss';
</style>
