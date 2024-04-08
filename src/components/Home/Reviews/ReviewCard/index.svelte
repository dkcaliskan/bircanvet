<script lang="ts">
	import Comment from './Comment.svelte'
	import User from './User.svelte'

	export let review = {
		rating: 0,
		comment: '',
		user: {
			name: '',
			avatar: ''
		},
		date: new Date(),
		link: ''
	}
</script>

<div class="space-y-4 rounded-lg border-[1px] border-second-500 bg-white px-3 py-4 shadow-sm">
	<User user={review.user} rating={review.rating} date={review.date} link={review.link} />
	<Comment comment={review.comment} />
</div>
