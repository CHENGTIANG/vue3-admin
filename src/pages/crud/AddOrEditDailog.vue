<template>
  <v-dialog v-model="dialog">
    <v-card min-width="500px">
      <v-card-title> 新增/修改 </v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-text-field
            v-model="form.name"
            :counter="10"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>

          <v-text-field v-model="form.calories" label="Calories"></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="primary" @click="dialog = false">取消</v-btn>
        <v-btn color="primary" @click="onSubmit">提交</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      form: {},
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
    };
  },
  methods: {
    show(item) {
      this.dialog = true;
      if (item) {
        this.form = { ...item };
      } else {
        this.form = {};
      }
    },
    async onSubmit() {
      const { valid } = await this.$refs.form.validate();
      if (!valid) return;
      this.dialog = false;
    },
  },
};
</script>
