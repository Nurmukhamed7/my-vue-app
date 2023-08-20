<template>
	<div :class="$style.container">
		<div :class="$style.menu">
			<form :class="$style.form">
				<label type="text" :class="$style.form__label">
					<input type="text" placeholder="Название Комплекса" />
				</label>
			</form>
			<span>Список Комплексов</span>
			<div :class="$style.user">
				<span
					>Вы вошли как Администратор EasyLife <br />
					VLADIMIR SIKHVART
				</span>
				<img src="/images/logo/logo-EL.svg" alt="logo" />
			</div>
		</div>
	</div>
</template>

<script></script>

<style module lang="scss">
.container {
	display: flex;
}

.menu {
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 290px;
	font-size: 14px;
	font-weight: 600;
}

.form {
	width: 250px;
	background: white;
	border-radius: 10px;
	height: 43px;
}

.form__label {
	display: flex;
	justify-content: start;
	gap: 10px;
	align-items: center;

	padding-left: 12px;
	height: 100%;
	width: 500px;

	&::before {
		content: '';
		display: block;
		width: 17px;
		height: 17px;
		background-image: url('/images/search-icon.svg');
	}
}

.user {
	display: flex;
	align-items: center;
	text-align: right;
}
</style>
