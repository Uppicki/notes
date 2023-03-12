<template>
  <div v-bind:style="menuParams.style"
       v-bind:class="{visibleMenu:menuParams.visible}"
       class="menu_container">
    <input v-bind:class="[menuParams.visible ? 'visibleMenuIconOpen' : 'visibleMenuIconClosed' ]"
           class="menu_btn"
           type="button"
            v-on:click="show">

    <ul v-show="menuParams.visible">
      <li>
        <input v-on:click="openCreate" type="button" value="Создать">
      </li>
    </ul>

  </div>
</template>

<script>

export default {
  name: "LeftMenu",

  props: {
    menuParams: {
      visible: {
        type: Boolean,
        default: false
      },
      style: {
        width: {
          type: String,
          required: true
        }
      }
    }

  },


  methods: {
    show: function () {
      //this.menuStyle.width = this.$store.getters.getMenuWidth+'px'
      this.$emit('redraw')
    },
    openCreate: function () {
      this.$emit('openCreateWidget')
    }
  }

}
</script>

<style scoped>
.menu_container {
  background-color: rebeccapurple;
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
  background-color: #a682cb;
}

.visibleMenuIconOpen {
  background-image: url('@/assets/menu-icon.png');
  transform: rotate(0deg);
}
.visibleMenuIconClosed {
  background-image: url('@/assets/menu-icon.png');
  transform: rotate(-180deg);
}

ul{
  margin-left: -10px;
  margin-right: 10px;
  padding-top: 60px;
  display: block;
}

li{
  list-style-type: none;
}

input {
  margin-bottom: 4px;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 100%;
  display: inline;
  font-size: 30px;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 10px;
  border: 0;
  cursor: pointer;
}





</style>