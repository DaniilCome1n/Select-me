<template>
    <div>
        <h1>{{title}}</h1>
        <combination ></combination>
    </div>
</template>

<script>
import Combination from '../components/Combination.vue'
export default {
    name: 'combinationView',
    components:{
        Combination,
    },
    data() {
        return {
            title:this.$route.meta.title,
            
        }
    },
}
</script>