<template>
  <div>
    <GChart
      type="PieChart"
      :options="options"
      :data="data"
    />    
    <GChart
      type="ColumnChart"
      :options="options"
      :data="data"
    />    
  </div>
</template>
 
<script>
import { GChart } from "vue-google-charts";

export default {
  name: "GoogleChart",
  components: {
    GChart
  },
  data() {
    return {
      data: [
          ['Cases', 'Today'],
          ['Confirmed',     this.particularCountries.today.confirmed],
          ['deaths',      this.particularCountries.today.deaths]
      ],
      options: {
        width: 1100,
        height: 400
      }
    };
  },
  props:{
      particularCountries:{
          type:Array
      }
  },
};
</script>