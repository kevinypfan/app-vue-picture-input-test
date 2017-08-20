<template>
  <div id="app">

    <VueImgInputer v-model="picValue" theme="light" size="large" accept="image/*" icon="img" placeholder="點擊或拖曳選擇圖片" bottomText="點擊或拖曳以修改"></VueImgInputer>
    <button type="button" name="button" @click="send">send</button>
  </div>
</template>

<script>
import VueImgInputer from 'vue-img-inputer'
export default {
  data() {
    return {
      picValue: ""
    }
  },
  components: {
    VueImgInputer
  },
  watch: {
    picValue (val) {
      if (val !== ""){
        console.log(val);
      }
    }
  },
  methods: {
    send () {
      console.log(formData);
      var hello = "asd123";
      var world = "zxc123";
      var formData = new FormData();
      formData.append('logo',this.picValue)
      formData.append('hello',hello)
      formData.append('world',world)
      this.$http.post('/profile',formData).then(() => {
        console.log("success");
      },()=> {
        console.log("none");
      })
    }
  }
}
</script>

<style>

</style>
