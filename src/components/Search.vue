<template>
  <div>
    <label class="label">Search By Country Code</label>
    <select v-model="searchData" class="dropdown">
      <option  v-for="country in countries" :key="country">{{ country.code }}</option>
    </select>
    <!-- <input type="textbox" v-model="searchData" /> -->
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchData: "",
    };
  },
  props:{
      countries:{
          type:Array
      }
  },
  watch:{
      searchData(){
          this.$router.push({name:'About',params:{name:this.searchData}})
      }
  }
};
</script>