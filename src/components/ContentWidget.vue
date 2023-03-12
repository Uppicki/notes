<template>
  <div v-bind:class="{container : contentParams.menuAction}"
       class="container_2">


    <create-widget @closeWidget="closeWidget"
                   @createWidget="create"
                   v-bind:contentParams="contentParams"
                   v-bind:style="contentParams.style"
                   v-if="contentParams.createWidget">

    </create-widget>

    <notes-widget v-bind:style="contentParams.style"
                  v-show="!contentParams.createWidget"
                  v-bind:contentParams="contentParams"
                  v-bind:notes="notes">

    </notes-widget>

  </div>
</template>

<script>
import CreateWidget from "@/components/CreateWidget";
import NotesWidget from "@/components/NotesWidget";
export default {
  name: "ContentWidget",
  components: {NotesWidget, CreateWidget},

  data() {
    return {
      notes: this.$store.getters.getNotes
    }
  },



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
    closeWidget: function () {
      this.$emit('closeWidget')
    },
    create: function () {
      this.$emit('closeWidget')
    }
  }
}
</script>

<style scoped>
.container {
  transition: 0.5s;
  right: 0;
}
.container_2 {
  right: 0;
}
</style>