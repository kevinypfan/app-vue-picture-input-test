<template>
  <div id="app">
    <div class="hello">
    <picture-input
      ref="pictureInput"
      @change="onChange"
      width="600"
      height="600"
      margin="16"
      accept="image/jpeg,image/png"
      size="10"
      buttonClass="btn"
      :customStrings="{
        upload: '<h1>Bummer!</h1>',
        drag: 'Drag a 😺 GIF or GTFO'
      }">
    </picture-input>
  </div>

  <img src="/upload/4d9a5804916e8bb9c3938ad60750b26d" alt="">
  </div>
</template>

<script>
import PictureInput from 'vue-picture-input'
export default {
  data () {
    return {
    }
  },
  components: {
    PictureInput
  },
  methods: {
    onChange () {
      console.log('New picture selected!')
      if (this.$refs.pictureInput.image) {
        console.log(this.$refs.pictureInput.image)
      } else {
        console.log('FileReader API not supported: use the <form>, Luke!')
      }
      // this.$http.post('/upload', formData).then((res) => {
      //   console.log("yes")
      // },(err) => {
      //   console.log("no")
      // })
    }
  }
}
</script>

<style>

</style>
