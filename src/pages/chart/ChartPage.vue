<template>
  <div class="pa-4">
    <v-row>
      <v-col cols="3">
        <v-card>
          <v-card-title> Bar </v-card-title>
          <v-card-text>
            <BarChart></BarChart>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card>
          <v-card-title> Pie </v-card-title>
          <v-card-text>
            <PieChart></PieChart>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card>
          <v-card-title> Radar </v-card-title>
          <v-card-text>
            <RadarChart></RadarChart>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card>
          <v-card-title> Bubble </v-card-title>
          <v-card-text>
            <BubbleChart></BubbleChart>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card>
          <v-card-title> Line </v-card-title>
          <v-card-text>
            <LineChart></LineChart>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card>
          <v-card-title> Polar Area </v-card-title>
          <v-card-text>
            <PolarAreaChart></PolarAreaChart>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card>
          <v-card-title> Scatter </v-card-title>
          <v-card-text>
            <ScatterChart></ScatterChart>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import BarChart from "./components/BarChart.vue";
import PieChart from "./components/PieChart.vue";
import BubbleChart from "./components/BubbleChart.vue";
import RadarChart from "./components/RadarChart.vue";
import LineChart from "./components/LineChart.vue";
import PolarAreaChart from "./components/PolarAreaChart.vue";
import ScatterChart from "./components/ScatterChart.vue";
export default {
  components: {
    BarChart,
    PieChart,
    BubbleChart,
    RadarChart,
    LineChart,
    PolarAreaChart,
    ScatterChart,
  },
  data() {
    return {};
  },
};
</script>
