<template>
  <div class="menu_container">
    <input class="menu_btn"
           type="button"
            v-on:click="input++"
            :value="input">

  </div>
</template>

<script>

export default {
  name: "LeftMenu",

  data() {
    return {
      input: 4
    }
  },

  methods: {
    click: function () {
      console.log("asd")
    }
  }

}
</script>

<style scoped>
.menu_container {
  width: 100%;
  height: 100%;
  background-color: black;

}

.menu_btn {
  width: 100px;
  height: 100px;
  background-color: white;
}

</style>