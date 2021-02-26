<template>
  <div class="container">
  <h2></h2> <br /> <br />
  <b-row cols-lg = "3" cols-md="3" cols-sm="3">
  
   <tt
   v-for="(item,index) in tiktokData" :key="index" 
   :image="item.image"
   :title="item.title"
   :tag="item.tag"
   
   @callbackcount="count1"
   @callbackcount1="count2"
   @callbacksugar="sugar1"/>
 </b-row>
  <!-- Using value -->
  <b-button v-b-modal="'my-modal'" variant = "success">Submid</b-button>

 
 
  
  
    
  </div>

  
</template>


<script>
export default {
  props: {
    image: String,
    title: String,
    tag: String,
    h1:String,
  },
  data() {
      return {

      count: 0,  
      }
  },
  
  methods: {
    addclick() {
      this.count++;
      this.$emit("callbackcount");
      this.$emit("callbacksugar");
    },
   
    reduceclick() {
      this.count--;
      this.$emit("callbackcount1");
    },
  },
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
