<template>
  <div class="index" @click="click1"></div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Index",
  data() {
    return {
      test: 1,
    };
  },
  methods: {
    click1() {
      console.log(
        this.$route.matched.filter((item) => item.name && item.meta.title)
      );
      console.log(this.$route.matched);
      axios.get('http://127.0.0.1:8000/api/test').then(res=>{
        console.log(res);
      })
    },
  },
};
</script>

<style>
.index {
  width: 100%;
  height: 100vh;
}
</style>