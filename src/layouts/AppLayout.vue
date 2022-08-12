<template>
  <v-layout>
    <v-app-bar color="grey-lighten-2"></v-app-bar>
    <v-navigation-drawer color="grey-darken-2" permanent>
      <v-list height="100%">
        <v-list-item to="/">
          <v-list-item-title>首頁</v-list-item-title>
        </v-list-item>
        <v-list-item to="/user">
          <v-list-item-title>用戶管理</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>
