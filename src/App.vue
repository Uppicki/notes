<template>

  <left-menu class="left_container"></left-menu>
  <!--<div class="right_container"></div>-->

</template>

<script>
import LeftMenu from "@/components/LeftMenu";export default {
  name: 'App',
  components: {
    LeftMenu

  }
}
</script>

<style>
body{
  min-width: 600px;
  margin: 0;
}
div {
  position: fixed;
  height: 100%;
}
.left_container{
}
div .right_container{
  left: 310px;
  width: 100%;
  background-color: rebeccapurple;
}
</style>
