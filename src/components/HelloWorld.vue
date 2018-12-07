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
export default {
  props: ["message"]
};
</script>
