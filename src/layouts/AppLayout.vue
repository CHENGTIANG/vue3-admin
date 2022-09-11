<template>
  <v-app-bar>
    <v-app-bar-title>Vue3 Admin</v-app-bar-title>
    <template v-slot:append>
      <v-avatar>
        <v-img src="https://picsum.photos/300/300" alt="Avatar"></v-img>
      </v-avatar>
    </template>
  </v-app-bar>
  <v-navigation-drawer color="grey-darken-2" permanent>
    <v-list height="100%">
      <v-list-item to="/">
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>
      <v-list-item to="/user">
        <v-list-item-title>User</v-list-item-title>
      </v-list-item>
      <v-list-item to="/chart">
        <v-list-item-title>Chart</v-list-item-title>
      </v-list-item>
      <v-list-item to="/rich-text-editor">
        <v-list-item-title>Rich Text Editor</v-list-item-title>
      </v-list-item>
      <v-list-item to="/video-player">
        <v-list-item-title>Video Player</v-list-item-title>
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <div class="pa-2">
        <v-btn block @click="onSignOut"> Sign out </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
  <v-main>
    <router-view></router-view>
  </v-main>
</template>

<script>
export default {
  methods: {
    onSignOut() {
      this.$router.replace("/signin");
    },
  },
};
</script>
