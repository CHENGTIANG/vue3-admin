<template>
  <v-dialog v-model="dialog" scrollable>
    <v-card min-width="500px">
      <v-card-title> {{ form.id ? "Edit" : "Add" }} </v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-text-field
            v-model="form.name"
            :counter="20"
            :rules="nameRules"
            label="Name"
          ></v-text-field>

          <v-text-field
            v-model="form.username"
            :counter="20"
            :rules="usernameRules"
            label="Username"
          ></v-text-field>

          <v-text-field
            v-if="!form.id"
            v-model="form.password"
            :counter="20"
            :rules="passwordRules"
            label="Password"
            type="password"
          ></v-text-field>

          <v-text-field
            v-model="form.email"
            :counter="20"
            :rules="emailRules"
            label="Email"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="primary" @click="dialog = false">取消</v-btn>
        <v-btn color="primary" variant="outlined" @click="onSubmit">提交</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
function getInitForm() {
  return {
    name: null,
    username: null,
    password: null,
    email: null,
  };
}
export default {
  data() {
    return {
      dialog: false,
      form: getInitForm(),
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 20) || "Name must be less than 20 characters",
      ],
      usernameRules: [
        (v) => !!v || "Username is required",
        (v) =>
          (v && v.length <= 20) || "Username must be less than 20 characters",
      ],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) =>
          (v && v.length <= 20) || "Password must be less than 20 characters",
      ],
      emailRules: [(v) => !!v || "Email is required"],
    };
  },
  methods: {
    show(item) {
      this.dialog = true;
      if (item) {
        this.form = { ...item };
      } else {
        this.form = getInitForm();
      }
    },
    async onSubmit() {
      const { valid } = await this.$refs.form.validate();
      if (!valid) return;

      try {
        this.$showLoading();
        await new Promise((resolve) => setTimeout(resolve, 3000));
        this.dialog = false;
      } catch (error) {
        console.error(error);
      } finally {
        this.$hideLoading();
      }
    },
  },
};
</script>
