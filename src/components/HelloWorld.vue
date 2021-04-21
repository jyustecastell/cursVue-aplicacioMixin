<template>
  <div class="hello">
    <h1>{{ foo }}</h1>
    <h2>{{ methodExample() }}</h2>
    <h3>{{ msg }}</h3>
    <h3>{{ testProp }}</h3>
  </div>
</template>

<script>
import varis from "@/mixins/varis.js";

export default {
  name: "HelloWorld",
  mixins: [varis],
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
