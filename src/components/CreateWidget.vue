<template>
  <div v-bind:class="{create_trans : contentParams.menuAction}"
       class="create">

    <note-widget @closeWidget="closeWidget"
                 @createWidget="createWidget"
                 v-bind:style="contentParams.style"
                 v-model:base-note="note"
                 v-bind:is-new-note="true"
                 v-bind:menu-action="contentParams.menuAction"></note-widget>



  </div>
</template>

<script>
import NoteWidget from "@/components/NoteWidget";

export default {
  name: "CreateWidget",
  components: {NoteWidget},
  data() {
    return {
      note: {
        name: "Новая заметка",
        description: "",
        todoList: [],
      }
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
    createWidget: function () {
      this.$emit('closeWidget')
    }
  }
}
</script>

<style scoped>
.create{
  padding-top: 10px;
  position: relative;
  background-color: rgba(158, 139, 176, 0.99);
  width: inherit;
  height: inherit;
}

.create_trans{
  transition: 0.5s;
}

</style>