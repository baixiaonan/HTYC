<template>
  <div class="info">
    <!-- 导航栏 -->
    <!-- <van-nav-bar
      title="辅助信息汇总"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    /> -->
       <van-nav-bar
      title="辅助信息汇总"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #right>
        <img src="../../assets/WXicon.png" alt="" />
      </template>
    </van-nav-bar>
    <div class="content">
      <div class="text">
        <a
          href="https://gkcx.eol.cn/specials/school?argspecialtyname=%E5%93%B2%E5%AD%A6&fromcoop=bdkp&argschtype=&province=&recomschprop="
          >点此获取各专业院校排名</a
        >
        <a
          class="link"
          href="https://gkcx.eol.cn/specials/school?argspecialtyname=%E5%93%B2%E5%AD%A6&fromcoop=bdkp&argschtype=&province=&recomschprop="
          >https://gkcx.eol.cn/specials/school?argspecialtyname=%E5%93%B2%E5%AD%A6&fromcoop=bdkp&argschtype=&province=&recomschprop=</a
        >
      </div>
      <div class="text">
        <a href="https://gaokao.chsi.com.cn/zyk/zybk/ ">点此获取高校专业库</a>
        <a class="link" href="https://gaokao.chsi.com.cn/zyk/zybk/ "
          >https://gaokao.chsi.com.cn/zyk/zybk/
        </a>
      </div>
      <div class="text">
        <a href="https://www.dxsbb.com/news/48257.html"
          >点此获取薪酬较高的专业20强榜单</a
        >
        <a class="link" href="https://www.dxsbb.com/news/48257.html"
          >https://www.dxsbb.com/news/48257.html</a
        >
      </div>
      <div class="text">
        <a href="https://v.youku.com/v_show/id_XMzY3MzA5NTM3Mg=="
          >点此观看张雪峰衡水中学“高考后如何选专业”讲座视频者</a
        >
        <a class="link" href="https://v.youku.com/v_show/id_XMzY3MzA5NTM3Mg=="
          >https://v.youku.com/v_show/id_XMzY3MzA5NTM3Mg==</a
        >
      </div>
      <div class="bottom">
        <div class="top">
          识别二维码，获取各大高校网址
        </div>
        <div class="middle">
          <img src="../../assets/QRcode.png" alt="" />
          <img class="two" src="../../assets/WXcode.png" alt="" />
        </div>
        <div class="bottoms">
          识别小程序码，了解更多真实岗位信息
        </div>
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
    }
  }
};
</script>

<style lang="less" scoped>
.info {
  background-color: #f5f5f9;
  height: 100vh;
  // padding: 30px;
  .content {
    margin: 0 auto;
    margin-top: 24px;
    width: 94%;
    height: 88%;
    background: rgba(255, 254, 254, 1);
    box-shadow: 6px 4px 12px 6px rgba(255, 243, 237, 1);
    border-radius: 9px;
  }
  .title {
    // margin:0 auto;
    font-size: 38px;
    text-align: center;
    font-weight: 700;
  }
  .text {
    // margin: 30px 0 0 30px;
    padding: 30px;
    padding-bottom: 0px;
    a {
      font-size: 32px;
      color: #333;
    }
    .link {
      display: inline-block;
      margin-top: 18px;
      font-size: 28px;
      width: 98%;
      color: #fc8b48;
      word-wrap: break-word;
      word-break: normal;
    }
    a:visited {
      font-size: 32px;
      color: #333;
    } /* 已访问的链接 */
    .link:visited {
      display: inline-block;
      margin-top: 18px;
      font-size: 28px;
      width: 98%;
      color: #fc8b48;
      word-wrap: break-word;
      word-break: normal;
    } /* 已访问的链接 */
  }
  .bottom {
    margin-top: 40px;
    text-align: center;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    .top {
      font-size: 36px;
    }
    .middle {
      display: flex;
      margin: 30px 0;
      justify-content: space-around;
      img {
        // flex: 1;
        // width:60px;
        height: 120px;
      }
      .two {
        margin-left: -100px;
      }
    }
    .bottoms {
      font-size: 36px;
    }
  }
}
</style>
