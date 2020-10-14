<template>
  <div class="hello">
    <h1>{{ count }}</h1>
    <button @click="add">+</button>
    <button @click="reduce">-</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  computed: {
    count() {
      // 每次count 的值发生变化的时候，都会进行加100的操作。
      return this.$store.getters.count;
    },
  },
  methods: {
    add() { // 执行store中的mutations里面add事件
      this.$store.commit("add"); 
    },
    reduce() {
      this.$store.commit("reduce");
    },
  },
};
</script>
<style scoped>
</style>