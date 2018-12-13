<template>
  <div id="fileUpload">
    <div class="content">
      <label>
        <div class="btn_default">add image</div>
        <input type="file" hidden @change="onFileChange" multiple>
      </label>
      <ul class="file_group">
        <li class="file_item" v-for="(x, i) in files" :key="i"><img :src="x" alt=""></li>
      </ul>
    </div>
  </div>
</template>

<script>
  // import dtImgUpload from '../fetch/upload2'
  export default {
    data: () => ({
      files: []
    }),
    methods: {
      onFileChange(e) {
        let files = e.target.files || e.dataTransfer.files
        let oFReader = null
        if (!files.length) return
        Array.from(files).forEach(v => {
          oFReader = new FileReader()
          oFReader.readAsDataURL(v)
          oFReader.onload = ev => {
            this.files.push(ev.target.result)
          }
        })
        this.$emit('filechange', files)
      }
    }
  }

</script>

<style lang="scss">
  @import '../scss/mixin';
  .file_group {
    @include flexWrap;
    margin-top: 10px;
    .file_item {
      @include wh(100, 100);
      border: 1px solid #399;
      margin-right:10px;
      margin-top:10px;
    }
  }

</style>
