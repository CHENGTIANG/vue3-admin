<template>
  <v-layout>
    <v-row>
      <v-col class="bg-purple-darken-2 d-flex align-center justify-center">
        <v-avatar size="x-large">Logo</v-avatar>
      </v-col>
      <v-col class="d-flex align-center justify-center">
        <v-container class="text-center">
          <v-avatar>Logo</v-avatar>
          <div class="text-h5 mb-6">登入</div>
          <v-text-field variant="outlined" label="用戶名" />
          <v-text-field variant="outlined" label="密碼" />
          <v-btn block color="primary" to="/">登入</v-btn>
        </v-container>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
export default {};
</script>

<style></style>
