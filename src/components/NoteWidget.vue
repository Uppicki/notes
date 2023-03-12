<template>
  <div v-bind:class="{icreate_trans : menuAction}"
       class="icreate">

    <input class="input_field"
           v-model="note.name">

    <div class="description">
      <p>Описание:</p>
      <textarea v-model="note.description"></textarea>
    </div>



    <div class="buttons">
      <input v-on:click="closeThis" type="button"
             style="float: left"
             class="back_btn"
             value="Назад">
      <input v-if="!isNewNote"
             type="button"
             class="delete_btn"
             value="Удалить">
      <input type="button"
             class="save_btn"
             value="Сохранить"
             v-on:click="create">

    </div>



  </div>
</template>

<script>

export default {
  name: "NoteWidget",
  data() {
    return {
      note: this.baseNote
    }
  },

  props: {
    menuAction: {
      type: Boolean,
      default: false
    },
    baseNote: {
      type:Object,
      required:true,

    },
    isNewNote: {
      default: false
    }
  },


  methods: {
    closeThis: function () {
      this.$emit('closeWidget')
    },
    create: function () {
      this.$emit('createWidget', this.note)
      this.note.name = 'новая заметка'
      this.note.description = ''
    }
  }
}
</script>

<style scoped>
.icreate{
  position: relative;
  background-color: rgba(158, 139, 176, 0.99);
  width: inherit;
  height: inherit;
}

.icreate_trans {
  transition: 0.5s;
}

.icreate * {
  position: relative;
  display: block;
  margin: 10px;
  width: calc(100% - 20px);
}


.input_field {
  font-family: sans-serif;
  font-size: 25px;
  height: 20px;
  background: transparent;
  border-radius: 4px;
  border: none;
}

p {
  font-size: 20px;
  cursor: default;
}

.description {
  height: calc(50% - 50px);
}

.description textarea {
  height: calc(100% - 40px);
  resize: none;
}

.todoList{
  height: calc(50% - 75px);
}

.buttons {
  margin-top: 15px;
  height: 30px;
}

.buttons * {
  font-size: 20px;
  width: 120px;
  display: inline-block;
  float:right;
  border-radius: 10px;
  height: 30px;
  border: none;
  cursor: pointer;
  transition: 0.5s;
}

.back_btn {
  background-color: darkgray;
}
.back_btn:hover {
  background-color: lightgrey;
}

.save_btn {
  background-color: forestgreen;
}
.save_btn:hover {
  background-color: darkgreen;
}

.delete_btn {
  background-color: orangered;
}
.delete_btn:hover {
  background-color: red;
}

</style>