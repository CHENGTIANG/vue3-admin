<template>
  <v-dialog v-model="dialog" scrollable>
    <v-card min-width="500px">
      <v-card-title> Preview </v-card-title>
      <v-card-text>
        <div v-html="html"></div>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="primary" variant="outlined" @click="dialog = false">
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      html: null,
    };
  },
  methods: {
    show(html) {
      this.dialog = true;
      this.html = html;
    },
  },
};
</script>
