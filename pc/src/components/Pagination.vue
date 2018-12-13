<template>
  <div id="pagination">
    <ul class="pagination">
      <li class="msg">共{{ page }}页， {{ total }}条</li>
      <li class="start" :class="{'disabled': current == 1}">
        <a @click="setCurrent(1)">首页</a>
      </li>
      <li class="pre" :class="{'disabled': current == 1}">
        <a @click="setCurrent(current - 1)">上一页</a>
      </li>
      <li class="num" v-for="p in groupList" :class="{'active': current == p.val}">
        <a @click="setCurrent(p.val)"> {{ p.text }} </a>
      </li>
      <li class="next" :class="{'disabled': current == page}">
        <a @click="setCurrent(current + 1)">下一页</a>
      </li>
      <li :class="{'disabled': current == page}">
        <a @click="setCurrent(page)"> 尾页 </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        current: this.currentPage
      }
    },
    props: {
      total: {
        type: Number,
        default: 0
      },
      display: {
        type: Number,
        default: 10
      },
      currentPage: {
        type: Number,
        default: 1
      },
      pageGroup: {
        type: Number,
        default: 5,
        coerce: function (v) {
            v = v > 0 ? v : 5;
            return v % 2 === 1 ? v : v + 1;
        }
      }
    },
    computed: {
      // 总页数
      page: function () {
        return Math.ceil(this.total / this.display);
      },
      // 获取分页页码
      groupList: function () {
        let len = this.page, temp = [], list = [], count = Math.floor(this.pageGroup / 2), center = this.current;
        if (len <= this.pageGroup) {
            while (len--) {
                temp.push({text: this.page - len, val: this.page - len});
            }
            return temp;
        }
        while (len--) {
            temp.push(this.page - len);
        }
        let idx = temp.indexOf(center);
        (idx < count) && ( center = center + count - idx);
        (this.current > this.page - count) && ( center = this.page - count);
        temp = temp.splice(center - count - 1, this.pageGroup);
        do {
            let t = temp.shift();
            list.push({
                text: t,
                val: t
            });
        } while (temp.length);
        if (this.page > this.pageGroup) {
            (this.current > count + 1) && list.unshift({text: '...', val: list[0].val - 1});
            (this.current < this.page - count) && list.push({text: '...', val: list[list.length - 1].val + 1});
        }
        return list;
      }
    },
    methods: {
      setCurrent: function (idx) {
        if (this.current != idx && idx > 0 && idx < this.page + 1) {
            this.current = idx;
            this.$emit('pagechange', this.current);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../scss/color";
.pagination {
  margin-top:64px;
  display: table;
  color:#666;
  font-size:14px;
  overflow: hidden;
  margin-left:auto;
  margin-right:auto;
  .msg{
    border:none;
    background: transparent;
  }
  .num{
    margin-right:10px;
  }
  .start{
    margin:0 20px;
  }
  .pre{
    margin-right:20px;
  }
  .next{
    margin:0 20px 0 10px;
  }
  li{
    float: left;
    line-height: 40px;
    text-align: center;
    border:1px solid $color-gray;
    border-radius: 4px;
    overflow: hidden;
    background-color: #fff;
    transition:all .3s;
    a{
      display: block;
      height: 40px;
      padding:0 16px;
    }
    &:hover {
      border-color:$color-theme;
      background: $color;
      a{
        color: #fff;
      }
    }
    &.msg:hover{
      background-color: transparent;
    }
  }
  .active {
    border:none;
    background: $color-theme;
    a{
      color: #fff;
    }
  }
}
</style>