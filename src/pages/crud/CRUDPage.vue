<template>
  <div class="pa-4">
    <div class="mb-4">
      <v-btn @click="onAddClick"> 新增 </v-btn>
    </div>
    <v-table fixed-header height="calc(100vh - 146px)">
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Description</th>
          <th class="text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.description }}</td>
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
    <AddOrEditDialog ref="dialog"></AddOrEditDialog>
  </div>
</template>

<script>
import CRUDAPI from "@/api/CRUDAPI";
import AddOrEditDialog from "./AddOrEditDailog.vue";
export default {
  components: {
    AddOrEditDialog,
  },
  data() {
    return {
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
  },
  async created() {
    try {
      this.$showLoading();
      const { items } = await CRUDAPI.find();
      this.items = items;
    } catch (error) {
      this.$error(error);
    } finally {
      this.$hideLoading();
    }
  },
};
</script>
