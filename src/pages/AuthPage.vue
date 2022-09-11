<template>
  <div class="pa-4 text-center">
    <v-btn @click="getData">Retry</v-btn>
  </div>
</template>

<script>
import qs from "qs";
import axios from "axios";
export default {
  methods: {
    async getData() {
      const search = window.location.search;
      const { code, error, state } = qs.parse(search, {
        ignoreQueryPrefix: true,
      });
      if ((code || error) && state) {
        if (error) {
          this.$error(error);
          return;
        }
        try {
          this.$showLoading();
          const {
            data: { access_token },
          } = await axios.post(`/api/v1/oauth/access_token`, null, {
            params: {
              code,
            },
          });
          sessionStorage.setItem("access_token", access_token);
          window.history.replaceState({}, "", "/");
          this.$router.push("/");
        } catch (error) {
          this.$error(error);
        } finally {
          this.$hideLoading();
        }
      }
    },
  },
  created() {
    this.getData();
  },
};
</script>
