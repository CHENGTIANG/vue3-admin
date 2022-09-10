<template>
  <div class="pa-4">
    <div class="mb-4">
      <v-btn @click="onAddClick"> Add </v-btn>
    </div>
    <v-table fixed-header height="calc(100vh - 196px)">
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Username</th>
          <th class="text-left">Email</th>
          <th class="text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.username }}</td>
          <td>{{ item.email }}</td>
          <td>
            <div class="d-flex">
              <v-btn icon size="small" class="mr-2" @click="onEditClick(item)">
                <v-icon icon="mdi-pencil"></v-icon>
              </v-btn>
              <v-btn icon size="small" color="error">
                <v-icon icon="mdi-delete"></v-icon>
              </v-btn>
            </div>
          </td>
        </tr>
      </tbody>
    </v-table>
    <v-pagination
      size="small"
      v-model="page"
      :length="parseInt(total / size)"
      @update:modelValue="onPageChange"
    ></v-pagination>
    <AddOrEditDialog ref="dialog"></AddOrEditDialog>
  </div>
</template>

<script>
import UserAPI from "@/api/UserAPI";
import AddOrEditDialog from "./AddOrEditDailog.vue";
export default {
  components: {
    AddOrEditDialog,
  },
  data() {
    return {
      page: 1,
      size: 10,
      total: 0,
      items: [],
    };
  },
  methods: {
    onAddClick() {
      this.$refs.dialog.show();
    },
    onEditClick(item) {
      this.$refs.dialog.show(item);
    },
    async getData() {
      try {
        this.$showLoading();
        const { items, total } = await UserAPI.find(this.page, this.size);
        this.items = items;
        this.total = total;
      } catch (error) {
        this.$error(error);
      } finally {
        this.$hideLoading();
      }
    },
    onPageChange() {
      this.getData();
    },
  },
  created() {
    this.getData();
  },
};
</script>
