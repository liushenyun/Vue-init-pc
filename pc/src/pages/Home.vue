<template>
  <div id="home">
    <div class="content">
      <dt-file-upload @filechange="onfileChange"></dt-file-upload>
      <input class="input-text" type="text" placeholder="用户名" v-model="formData.username">
      <input class="input-text" type="text" placeholder="密码" v-model="formData.password">
      <label class="middle mt-10">
        <input type="checkbox" v-model="formData.remember">
        <span>记住密码</span>
      </label>
      <a class="btn_primary-md mt-10" @click="submit('submitUserInfo')">submit</a>
    </div>
  </div>
</template>

<script>
  import {
    mixinSubmit
  } from '../global/mixins'
  import socket from '../fetch/mqtt'
  import DtFileUpload from '../components/FileUpload'
  export default {
    mixins: [mixinSubmit],
    data: () => ({
      formData: {
        username: '18118453056',
        password: '123456',
        remember: ''
      }
    }),
    mounted() {
      // console.log(this.$funs.getUserInfo())
      // setTimeout(() => {
      //   console.log(this.$funs.getUserInfo())
      // }, 2000)
      socket('123', this.getFromSocket)
      this.getAdminList()
    },
    methods: {
      getFromSocket(data) {
        console.log(data)
      },
      getAdminList() {
        this.showLoading()
        this.$http.getAdminList({
          page: 1,
          search: '12'
        }).then(data => {
          console.log(data)
        })
      },
      onfileChange(files) {
        console.log(files)
      }
    },
    components: {
      DtFileUpload
    }
  }

</script>

<style lang="scss">
  @import '../style/home';

</style>
