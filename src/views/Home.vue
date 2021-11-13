<template>
  <div>
    <Search :countries=allCountries />
    <br />
      <table class="table" v-for="t in topCountries" :key="t">
        <tr>
          <th>Country Code</th>
          <th>Country Name</th>
          <th>Total Population</th>
          <th>Today Confirmed Cases</th>
          <th>Today Confirmed Deaths</th>
          <th>Last Updated at</th>
        </tr>
        <tr>
          <td>{{t.code}}</td>
          <td>{{t.name}}</td>
          <td>{{t.population}}</td>
          <td>{{t.today.confirmed}}</td>
          <td>{{t.today.deaths}}</td>
          <td>{{t.updated_at}}</td>
        </tr>
      </table>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import {getData} from '../api.service.js'
import Search from "@/components/Search.vue"
// import About from "@/views/About.vue"
export default {
  name: "Home",
  components:{
    Search
    // About
  },
  data(){
    return{
      allCountries:[],
      topCountries:[]
    }
  },
  created(){
    getData().then(res=>{
      this.allCountries=res.data.data;
      this.topCountries = this.allCountries
        .filter(country => country.today.confirmed)
        .sort((a, b) => (a.today.confirmed < b.today.confirmed ? 1 : -1));
    })
  }
  
};
</script>
