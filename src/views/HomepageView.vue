<template>
    <div>
        <h1>{{title}}</h1>
        <homepage></homepage>
    </div>
</template>

<script>
import Homepage from '../components/Homepage.vue'
export default {
    name: 'homepageView',
    components:{
        Homepage,
    },
    data() {
        return {
            title:this.$route.meta.title,
        }
    },
}
</script>