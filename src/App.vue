<template>
	<div>
		<form @submit.prevent>
			<h1>Создание поста</h1>
			<button @click="createPost" class="btn">Создать пост</button>
			<input
				v-bind:value="title"
				@input="title = $event.target.value"
				class="input"
				type="text"
				placeholder="Тут Название поста"
			/>
			<input
				v-bind:value="body"
				@input="body = $event.target.value"
				class="input"
				type="text"
				placeholder="Тут Описание поста"
			/>
		</form>
		<div class="post" v-for="post in posts">
			<div class="first"><strong>Название:</strong> {{ post.title }}</div>
			<div><strong>Описание:</strong> {{ post.body }}</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			posts: [
				{ id: 1, title: 'Тут заголовок поста 1', body: 'Тут описание поста 1' },
				{ id: 2, title: 'Тут заголовок поста 2', body: 'Тут описание поста 2' },
				{ id: 3, title: 'Тут заголовок поста 3', body: 'Тут описание поста 3' },
				{ id: 4, title: 'Тут заголовок поста 4', body: 'Тут описание поста 4' },
				{ id: 5, title: 'Тут заголовок поста 5', body: 'Тут описание поста 5' },
			],

			title: '',
			body: '',
		}
	},
	methods: {
		createPost() {
			const newPost = {
				id: Date.now(),
				title: this.title,
				body: this.body,
			}

			this.posts.push(newPost)
		},
	},
}
</script>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
}

.post {
	margin-top: 15px;
	padding: 15px;
	border: 2px solid red;

	.first {
		background: yellow;
	}
}
</style>
