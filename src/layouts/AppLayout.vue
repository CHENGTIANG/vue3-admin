<template>
  <v-app-bar color="rgba(255, 255, 255, 0.8)" class="app-bar">
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>
    <v-app-bar-title>Vue3 Admin</v-app-bar-title>
    <template v-slot:append>
      <v-avatar>
        <v-img src="https://picsum.photos/300/300" alt="Avatar"></v-img>
      </v-avatar>
    </template>
  </v-app-bar>
  <v-navigation-drawer color="grey-darken-2" v-model="drawer">
    <v-list height="100%">
      <v-list-item to="/home">
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
  data() {
    return {
      drawer: true,
    };
  },
  methods: {
    onSignOut() {
      sessionStorage.removeItem("access_token");
      this.$router.replace("/signin");
    },
  },
};
</script>

<style scoped>
.app-bar {
  backdrop-filter: blur(8px);
}
</style>
