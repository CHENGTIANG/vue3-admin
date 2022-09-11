<template>
  <div class="pa-4">
    <div ref="editor" class="editor"></div>
    <div class="pt-4">
      <v-btn @click="onPreview">Preview</v-btn>
    </div>
    <PreviewDialog ref="dialog" />
  </div>
</template>

<script>
import Quill from "quill";
import "quill/dist/quill.snow.css";
const BackgroundStyle = Quill.import("attributors/style/background");
const ColorStyle = Quill.import("attributors/style/color");
Quill.register(BackgroundStyle, true);
Quill.register(ColorStyle, true);
import PreviewDialog from "./components/PreviewDialog.vue";
export default {
  components: {
    PreviewDialog,
  },
  methods: {
    onPreview() {
      if (!this.quill) return;
      this.$refs.dialog.show(this.quill.root.innerHTML);
    },
  },
  mounted() {
    const quill = new Quill(this.$refs.editor, {
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline"],
          [{ color: [] }, { background: [] }],
          ["image"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ align: [] }],
          ["clean"],
        ],
      },
      placeholder: "Compose an epic...",
      theme: "snow",
    });
    this.quill = quill;
  },
};
</script>

<style scoped>
.editor {
  height: calc(100vh - 192px);
}
</style>
