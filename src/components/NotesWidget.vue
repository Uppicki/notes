<template>
  <div v-bind:class="{content_trans : contentParams.menuAction}"
       class="content">

    <div class="note"
         v-for="note in notes"
         :key="note.id">
      <p>{{note.name}}</p>


    </div>



  </div>
</template>

<script>
export default {
  name: "NotesWidget",

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
    },
    notes: {
      required: true
    }
  },
  methods: {
    open: function (id) {
      console.log(id)
    }
  }
}
</script>

<style scoped>
.content{
  padding-top: 10px;
  position: relative;
  width: inherit;
  height: inherit;
}

.content_trans{
  transition: 0.5s;
}


.note {
  display: block;
  height: 50px;
  width: inherit;
  border: 2px solid silver;
  border-radius: 10px;
  transition: 0.5s;
}
.note:hover {
  background-color: silver;
}
</style>