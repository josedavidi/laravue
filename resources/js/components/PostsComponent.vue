<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card mb-3 mt-3" v-for="item of list">
                    <router-link class="card-header" :to="{name:'post', params:{slug:item.slug}}" v-text="item.title"></router-link>
                    <div class="card-body">
                        <h3>ID:{{item.id}}</h3>
                        <p v-text="item.body"></p>   
                    </div>
                </div>
                <infinite-loading @infinite="InfiniteHandler">
                    <div slot="no-more">
                        <h3>No hay mas datos</h3>
                        <img src="images/dog.jpg" width="100" alt="">
                    </div>
                </infinite-loading>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                list:[],
                page:0
            }
        },
        methods:{
            InfiniteHandler($state){
                this.page ++
                let url = "http://localhost:8000/api/posts?page="+this.page

                axios.get(url)
                        .then(res=>{
                            let posts = res.data.data
                            if(posts.length)
                            {
                                this.list = this.list.concat(posts)
                                $state.loaded()
                            }else{
                                $state.complete()
                            }
                        })
            }
        }
    }
</script>
