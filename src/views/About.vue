<template>
  <div class="about">
    <button class="btn btn-secondary" @click.prevent="goHome()">Home</button>
    <!-- <div>
      Name:{{this.particularCountry.name}}<br />
      Country Code:{{this.particularCountry.code}}<br />
      Population:{{this.particularCountry.population}}<br />
      Today Confirmed Cases: {{this.particularCountry.today.confirmed}}<br />
      Today Confirmed Deaths:{{this.particularCountry.today.deaths}}<br />
      Last Updated at:{{this.particularCountry.updated_at}}
    </div> -->
    <table class="table">
        <tr>
          <th>Country Code</th>
          <th>Country Name</th>
          <th>Total Population</th>
          <th>Today Confirmed Cases</th>
          <th>Today Confirmed Deaths</th>
          <th>Last Updated at</th>
        </tr>
        <tr>
          <td>{{this.particularCountry.code}}</td>
          <td>{{this.particularCountry.name}}</td>
          <td>{{this.particularCountry.population}}</td>
          <td>{{this.particularCountry.today.confirmed}}</td>
          <td>{{this.particularCountry.today.deaths}}</td>
          <td>{{this.particularCountry.updated_at}}</td>
        </tr>
      </table>
      <GoogleChart :particularCountries=particularCountry />
  </div>
</template>
<script>
import {getDataByCode} from '../api.service.js'
import GoogleChart from '../components/GoogleChart.vue'
export default {
  name:"About",
  components: {
    GoogleChart
  },
  data(){
    return{
      particularCountry:[],
      countryCode:this.$route.params.name
    }
  },
  created(){
    getDataByCode(this.countryCode).then(res=>{
      this.particularCountry=res.data.data;
      console.log('particular',this.particularCountry)
    })
  },
  methods:{
    goHome(){
      this.$router.push("/");
    }
  }
}
</script>
