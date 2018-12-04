<template>
  <div>
    <h1>{{message}}</h1>
    <figure>
      <img src="../assets/nodejs_logo.svg">
    </figure>
    <NodeLogo/>
  </div>
</template>
<script>
import NodeLogo from "./NodeLogo.vue";
import { setTimeout, setInterval } from "timers";
const genColor = () => {
  const colors = ["#233cccaa", "#cc239daa", "#b5971faa", "#b11515aa"];
  return colors[Math.floor(Math.random() * 3 + 0)];
};

export default {
  props: ["message"],
  components: {
    NodeLogo
  },
  mounted() {
    setInterval(() => {
      if (process.env.NODE_ENV != "test") {
        document.querySelector("#svg-js-logo").style.fill = genColor();
      }
    }, 1000);
  }
};
</script>
