<template>
  <v-app>
    <router-view></router-view>
    <v-overlay
      attach="body"
      z-index="2500"
      :model-value="loader.loading"
      persistent
      contained
      class="align-center justify-center"
    >
      <v-card>
        <v-card-text
          class="d-flex flex-column align-center justify-center pa-6 pb-4"
        >
          <v-progress-circular indeterminate size="36"></v-progress-circular>
          <span class="mt-2">{{ loader.message }}</span>
        </v-card-text>
      </v-card>
    </v-overlay>
    <v-snackbar v-model="error.snackbar">
      {{ error.message }}
    </v-snackbar>
  </v-app>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  inject: ["loader", "error"],
  data() {
    return {};
  },
});
</script>
