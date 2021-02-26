import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    product1:{
      name:"ข้าวสวย",
      price:10,
      amount:0
    },
    product2:{
      name:"ข้าวเหนียว",
      price:10,
      amount:0
    },
    product3:{
      name:"ต้มยำกุ้ง",
      price:50,
      amount:0
    },
    product4:{
      name:"ผัดผักรวมมมิตร",
      price:45,
      amount:0
    },
    product5:{
      name:"กุ้งผัดพริกเผา",
      price:80,
      amount:0
    },
    product6:{
      name:"ผัดคะน้าปลาเค็ม",
      price:55,
      amount:0
    },
    product7:{
      name:"หมูผัดพริกหยวก",
      price:40,
      amount:0
    },
    product8:{
      name:"ต้มจืดเต้าหู้หมูสับ",
      price:40,
      amount:0
    },
    product9:{
      name:"ผัดผักบุ้ง",
      price:45,
      amount:0
    },
    
    
    sum: 0,count:0,say: function (message) {
    alert(message)
  }
  
},

  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
