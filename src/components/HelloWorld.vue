<template>
  <div class="about">
    <h1>รายการอาหาร</h1>
    <b-card
    title="ข้าวสวย"
    img-src="http://www.freakwhey.com/post_files/webboard/IMG1352897513.jpg"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      ราคา 10 บาท
    </b-card-text>

     <b-button  @click="reduceclick">
        - <b-badge variant="light"></b-badge
      ></b-button>
      &nbsp; &nbsp;{{ count }}&nbsp; &nbsp;
      <b-button  @click="addclick">
        + <b-badge variant="light"></b-badge></b-button>

        
</b-card>
 
  
    
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
     
    };
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


<style scoped>

</style>
