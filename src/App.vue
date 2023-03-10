<template>

  <left-menu></left-menu>


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
  width: 300px;
  height: 300px;
  background-color: midnightblue;
}
div .right_container{
  left: 310px;
  width: 100%;
  background-color: rebeccapurple;
}
</style>
