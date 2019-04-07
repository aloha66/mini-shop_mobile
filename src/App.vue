<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <Button type="primary">默认按钮</Button>
    <div class="dd"></div>
    <!-- <router-view /> -->
  </div>
</template>

<script>
import {Button} from "vant";
export default {
  components: {
    Button,
  },
};
</script>
<style>
/* prettier-ignore */
.dd {
  display: flex;
  width: 40px;
  height: 40px;
  margin: 4vw;
  border-radius: 20px;
  border: 2PX solid #f00;
  background: pink;
}
</style>
