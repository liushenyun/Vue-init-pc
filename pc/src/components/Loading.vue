<template>
  <transition name="loading-fade">
    <div id="loading" v-if="isLoading">
      <div class="box">
        <img src="./loaders/oval.svg">
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'loading',
  computed: {
    ...mapGetters(['isLoading'])
  }
}
</script>

<style lang="scss">
@import "../scss/mixin";
#loading{
  @include over;
  @include flex(center, center);
  background-color: rgba(255, 255, 255, .9);
  .box{
    @include wh(32, 32)
  }
}
</style>