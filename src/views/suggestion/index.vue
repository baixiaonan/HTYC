<template>
  <div class="suggestion">
         <!-- 导航栏 -->
    <!-- <van-nav-bar
      title="职业意向岗位"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    /> -->
       <van-nav-bar
      title="职业意向岗位"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #right>
        <img src="../../assets/WXicon.png" alt="" />
      </template>
    </van-nav-bar>
      <div class="content">
          <div class="title">ESTJ（外向感觉思维判断型）</div>
          <van-cell>01 销售／服务</van-cell>
            <van-cell>01 销售／服务</van-cell>

      </div>
         <div class="easy" >
              <button @click="enterNext">下一步</button>
          </div>

  </div>
</template>

<script>
export default {
  data(){
      return{

      }
  },
  methods:{
         onClickLeft() {
                this.$router.push('/suggestion')
    },
    onClickRight() {
    //   Toast('按钮');
    },
      enterNext(){
          this.$router.push('/character')

      }
  }

}
</script>

<style lang="less" scoped>
/deep/.van-cell{
    height: 66px;
    line-height: 66px;
    font-size: 30px;

}
/deep/.van-cell::after{
    border-bottom:none;
}
.suggestion{
    .content{
        padding: 30px ;
        .title{
            // margin: 30px 0;
            margin-left: 10px;
            font-size: 38px;
            font-weight: 700;
        }
    }

}
.easy {
  position: fixed;
  bottom: 0;
  z-index: 999;
  color: #000;
  width: 100%;
  background-color: #fff;
  text-align: center;
    button {
       width: 402px;
      height: 88px;
      border-radius: 50px;
      color: #fff;
       background-color: #FC8B48;
      border: none;
      font-size: 32px;
      margin-bottom: 100px;
     box-shadow:2px 2px 6px 2px rgba(253,226,211,1);
    
  }
}

</style>