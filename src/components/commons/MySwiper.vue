<<template>
  

            <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(img,index) in imgs" :key="index">
                <a :href="img.url"><img :src="img.img">
                </a>
            </mt-swipe-item>
        </mt-swipe>

</template>

<script>

export default{
    data(){
        return{
         imgs:[],
        }
    },
    props:['url']
    , created() {
        this.$ajax.get(this.url)

            .then(res => {
                this.imgs = res.data.message;

            })
            .catch(err => {
                console.log('加载失败', err);
            })

    }
}








</script>    
<style scoped>





.mint-swipe {
    height: 200px;
}

.mint-swipe img {
    height: 200px;
    width: 100%;
}


</style>