<template>
	<div :class="$style.content">
		<div :class="$style.header">
			<div>Название</div>
			<div>
				Кол-во <br />
				квартир
			</div>
			<div>Город</div>
			<div>Район</div>
			<div>
				Период <br />
				обслуживания
			</div>
			<div>Менеджер</div>
			<div>Номер Телефона</div>
			<div><v-icon name="vi-file-type-excel2" /></div>
			<div><v-icon name="vi-file-type-pdf2" /></div>
		</div>
		<div :class="$style.item" v-for="(item, index) in items" :key="index">
			<div>{{ item.name }}</div>
			<div>
				{{ item.quantity }}
			</div>
			<div>{{ item.city }}</div>
			<div>{{ item.district }}</div>
			<div>
				{{ item.period }}
			</div>
			<div>{{ item.manager }}</div>
			<div>{{ item.number }}</div>
			<div>{{ '' }}</div>
			<div>{{ '' }}</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			items: [
				{
					name: 'SEA PEARL GARDEN',
					quantity: 52,
					city: 'Alanya',
					district: 'Oba',
					period: '01/01/2022',
					manager: 'Robert Bocsh',
					number: '+7 916 555 44 33',
				},
				{
					name: 'GOLDCITY AURA 3',
					quantity: 64,
					city: 'Alanya',
					district: 'Mahmutlar',
					period: '12/02/2023',
					manager: 'Selena Dion',
					number: '+90 535 111 22 33',
				},
			],
		}
	},
}
</script>

<style module lang="scss">
@import '../../../scss/variables.scss';

.content {
	// background: red;
	margin: 15px;
	font-size: 12px;
	text-align: center;
}
.header {
	display: grid;
	grid-template-columns: repeat(9, 1fr);
	align-items: center;
	justify-content: center;

	font-weight: 700;
	background: #f0f0f0;
	padding: 12px 20px;
	border-radius: 20px;
}

.item {
	display: grid;
	grid-template-columns: repeat(9, 1fr);
	align-items: center;
	justify-content: center;

	font-weight: 600;
	padding: 0 20px;

	margin: 12px 0;
}
</style>
