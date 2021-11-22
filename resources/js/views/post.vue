<template>
    <div>
        <div class="card">
            <img src="" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title" v-text="post.title"></h5>
                <p class="card-text" v-text="post.body"></p>
                
            </div>
        </div>
        <hr>
        <h3>Otros Posts</h3>
        <posts></posts>
    </div>
</template>
<script>
	export default {
		props: [
                    'slug'
                ],
        data() {
            return {
                post: {}
            }
        },
        created () {
        	let url = 'http://localhost:8000/api/post/'+this.slug
        	axios.get(url)
        	.then(res => {
                console.log(res.data)
        		this.post = res.data
        	})
        }
    }
</script>