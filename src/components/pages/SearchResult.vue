<template>
<div>
  <div class="search-section mb-5">
    <h3>Search</h3>
    <hr>
    <div class="input-group input-group-lg">
      <input v-model="searchingValue" type="text" class="search-input form-control" placeholder="Search" @keypress.enter="handleSearch">
      <div class="input-group-append"> <span class="input-group-text search-icon"><font-awesome-icon @click="handleSearch" class="fontawesome-search-icon" icon="search"/></span></div>
    </div>
  </div>


  <h3>Searching {{getSearchedKeyword()}}</h3>

</div>
</template>

<script>
export default {
  name: "SearchResult",
  data(){
    return{
      searchingValue:this.getSearchedKeyword(),
    }
  },
  methods:{

    getSearchedKeyword(){
      return this.$route.params.keyword;
    },
    handleSearch(){
      if(this.searchingValue===''){
        //
      }else{
        if(this.searchingValue.includes(' ')){
          let newSearchingValue='';
          newSearchingValue = this.searchingValue.replaceAll(" ", "-")
          this.$router.push('/searchResult/'+`${newSearchingValue}`);
        }else{
          this.$router.push('/searchResult/'+`${this.searchingValue}`);
        }

      }
    },

  }

}
</script>

<style scoped>
.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #ced4da;
  outline: 0;
  box-shadow: 0 0 0 0 !important;
}

.form-control {
  border-right: 0 !important;
  border-left: 0 !important;
  border-top-left-radius: 32px;
  border-bottom-left-radius: 32px;

}
.input-group-append {
  margin-left: -2px !important
}
.search-icon{
  border-top-right-radius: 32px !important;
  border-bottom-right-radius: 32px !important;
  background-color: #fff;
  padding: 15px;
}
.fontawesome-search-icon{
  cursor: pointer;
  opacity: 0.7;
}
.fontawesome-search-icon:hover{
  opacity: 1;
}
</style>