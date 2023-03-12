<template>

  <left-menu @openCreateWidget="openCreate"
             @redraw="draw"
             v-bind:menu-params="menuParams"></left-menu>

  <content-widget @closeWidget="closeWidget"
                  v-bind:content-params="contentParams"></content-widget>


</template>

<script>
import LeftMenu from "@/components/LeftMenu";
import ContentWidget from "@/components/ContentWidget";
export default {
  name: 'App',
  components: {
    ContentWidget,
    LeftMenu

  },
  data() {
    return {
      menuParams : {
        visible: this.$store.getters.getMenuVisible,
        style : {
          width : this.$store.getters.getMenuWidth+'px'
        }
      },
      contentParams : {
        menuAction: false,
        style : {
          width : (window.innerWidth -(this.$store.getters.getMenuWidth + 10))+'px'
        },
      },
      prevW : window.innerWidth
    }
  },
  methods: {
    draw: function () {
      this.$store.dispatch('changeMenuVisible')
      this.menuParams.visible = this.$store.getters.getMenuVisible
      this.menuParams.style.width = this.$store.getters.getMenuWidth+'px'
      this.contentParams.menuAction = true
      this.contentParams.style.width = (window.innerWidth -(this.$store.getters.getMenuWidth + 10))+'px'
    },
    onResize: function () {
      if ((this.prevW - window.innerWidth) !== 0) {
        this.contentParams.menuAction = false
        this.contentParams.style.width = (window.innerWidth -(this.$store.getters.getMenuWidth + 10))+'px'
      }
      },
    openCreate: function () {
      if (!this.$store.getters.getCreateIsOpen) {
        this.$store.dispatch('changeCreateVisible')
        this.contentParams.createWidget = this.$store.getters.getCreateIsOpen
      }
    },
    closeWidget: function () {
      if (this.$store.getters.getCreateIsOpen) {
        this.$store.dispatch('changeCreateVisible')
        this.contentParams.createWidget = this.$store.getters.getCreateIsOpen
      }
    },

  },
  beforeCreate() {
    if (this.$store.getters.getUsername === "") {
      let result = ""
      while (result === "") {
        result = prompt("Введите username")
      }
      this.$store.dispatch('authUser', result)
    }
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.onResize);
  },

}
</script>

<style>
body{
  font-family: sans-serif;
  margin: 0;
  height: 100%;
}
div {
  position: fixed;
  height: 100%;
}

</style>
