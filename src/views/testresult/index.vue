<template>
  <div class="result">
    <!-- 导航栏 -->
    <!-- <van-nav-bar
      title="MBTI职业性格测试"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    /> -->
       <van-nav-bar
      title="MBTI职业性格测试"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #right>
        <img src="../../assets/WXicon.png" alt="" />
      </template>
    </van-nav-bar>
    <div class="main">
      <div class="bgc1">
        <div class="bgc2">
          <div class="title">
            性格标签——ISTJ
          </div>
          <div class="text">
            <p>2：喜欢独立工作</p>
            <p>2：喜欢独立工作</p>
            <p>2：喜欢独立工作</p>
          </div>

          <div class="bgc3">
            <span>测试结果</span>
          </div>
        </div>
      </div>
      <div class="easy">
        <button @click="enterNext">下一步</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.push("/suggestion");
    },
    onClickRight() {
      //   Toast('按钮');
    },
    enterNext() {}
  }
};
</script>

<style lang="less" scoped>
.main {
  height: 100vh;
  background-color: #ffeee4;
  padding-top: 180px;
  .bgc1 {
    position: relative;
    margin: 0 auto;
    // background-color: #edc7c0;
    background-color: #fbd0bb;
    width: 96%;
    height: 50%;
    text-align: center;
    border-radius: 0px 0px 28px 28px;
    .bgc2 {
      position: absolute;
      top: -60px;
      left: 20px;
      background-color: #fff;
      width: 94%;
      height: 105%;
      border-radius: 28px;
      .title {
        margin-top: 60px;
        text-align: left;
        margin-left: 30px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        font-size: 36px;
      }
      .text {
        margin-top: 26px;
        margin-left: 30px;
        text-align: left;
        p {
          margin: 0;
          padding: 0;
          height: 50px;
          font-size: 28px;
          color: #46ce9e;
        }
      }
      .bgc3 {
        position: absolute;
        z-index: 99;
        background: url("../../assets/title.png");

        width: 310px;
        height: 66px;
        left: 30%;
        top: -20px;
        span {
          font-size: 32px;
          line-height: 64px;
          font-family: PingFangSC-Regular, PingFang SC;
          color: #fff;
        }
      }
    }
  }
  .easy {
    text-align: center;
    margin-top: 60px;
    button {
      width: 402px;
      height: 88px;
      color: #fff;
      background-color: #fc8b48;
      border: none;
      font-size: 32px;
      margin-bottom: 100px;
      box-shadow: 2px 2px 6px 2px rgba(253, 226, 211, 1);
      border-radius: 50px;
    }
  }
}
</style>
