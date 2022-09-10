<template>
  <v-app-bar>
    <v-app-bar-title>Vue3 Admin</v-app-bar-title>
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
    </v-list>
  </v-navigation-drawer>
  <v-main>
    <router-view></router-view>
  </v-main>
</template>
