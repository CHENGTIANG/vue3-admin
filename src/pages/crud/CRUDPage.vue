<template>
  <div class="pa-4">
    <div class="mb-4">
      <v-btn @click="onAddClick"> 新增 </v-btn>
    </div>
    <v-table fixed-header height="calc(100vh - 146px)">
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Calories</th>
          <th class="text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in desserts" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
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
import AddOrEditDialog from "./AddOrEditDailog.vue"
export default {
  components: {
    AddOrEditDialog
  },
  data() {
    return {
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
        },
        {
          name: "Eclair",
          calories: 262,
        },
        {
          name: "Cupcake",
          calories: 305,
        },
        {
          name: "Gingerbread",
          calories: 356,
        },
        {
          name: "Jelly bean",
          calories: 375,
        },
        {
          name: "Lollipop",
          calories: 392,
        },
        {
          name: "Honeycomb",
          calories: 408,
        },
        {
          name: "Donut",
          calories: 452,
        },
        {
          name: "KitKat",
          calories: 518,
        },
      ],
    };
  },
  methods: {
    onAddClick() {
      this.$refs.dialog.show();
    },
    onEditClick(item){
      this.$refs.dialog.show(item)
    }
  },
};
</script>
