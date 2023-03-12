<template>
  <div v-bind:class="{container : contentParams.menuAction}"
       class="container_2">

    <create-widget v-bind:menu-action="contentParams.menuAction"
                   v-bind:style="contentParams.style"
                   v-show="contentParams.createWidget">

    </create-widget>

  </div>
</template>

<script>
import CreateWidget from "@/components/CreateWidget";
export default {
  name: "ContentWidget",
  components: {CreateWidget},


  props: {
    contentParams: {
      menuAction: {
        type: Boolean,
        default: false
      },
      style: {
        width: {
          type: String,
          required: true
        }
      },
      createWidget: {
        type: Boolean,
        default: false
      },
    }
  },

  methods: {

  }
}
</script>

<style scoped>
.container {
  transition: 0.5s;
  right: 0;
  background-color: black;
}
.container_2 {
  right: 0;
  background-color: black;
}
</style>