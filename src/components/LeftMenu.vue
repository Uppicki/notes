<template>
  <div v-bind:style="menuStyle"
       v-bind:class="{visibleMenu:visible}"
       class="menu_container">
    <input v-bind:class="{visibleMenuIcon:visible}"
           class="menu_btn"
           type="button"
            v-on:click="show">

  </div>
</template>

<script>

export default {
  name: "LeftMenu",

  data() {
    return {
      visible: this.$store.getters.getMenuVisible,

      menuStyle: {
        width : this.$store.getters.getMenuWidth+'px',
      }
    }
  },

  methods: {
    show: function () {
      this.$store.dispatch('changeMenuVisible')
      this.visible = this.$store.getters.getMenuVisible
      this.menuStyle.width = this.$store.getters.getMenuWidth+'px'
    }
  }

}
</script>

<style scoped>
.menu_container {
  height: 100%;
  background-color: black;
  transition: 0.5s;
}

.menu_btn {
  margin: 5px;
  float: right;
  width: 50px;
  height: 50px;
  background-image: url('@/assets/menu-icon.png');
  border-radius: 25px;
  transition: 0.5s;
}

.visibleMenu {
  background-color: rebeccapurple;
}

.visibleMenuIcon {
  background-image: url('@/assets/menu-icon.png');
  transform: rotate(-180deg);
}


</style>