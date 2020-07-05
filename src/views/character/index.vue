<template>
  <div class="character">
    <!-- 导航栏 -->
    <!-- <van-nav-bar
      title="打赏海囤"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    /> -->
    <van-nav-bar
      title="打赏海囤"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #right>
        <img src="../../assets/WXicon.png" alt="" />
      </template>
    </van-nav-bar>
    <div class="main">
      <div class="content">
        <div class="test">
          来自性格的呐喊，探寻适合自己职业方向的专业。
          <p>&nbsp;&nbsp;&nbsp;&nbsp;(以下选项不影响后面结果)</p>
        </div>
        <van-radio-group v-model="radio">
          <van-cell-group>
            <van-cell title="A.9.9元" clickable @click="radio = '1'">
              <template #right-icon>
                <van-radio name="1" shape="square" />
              </template>
            </van-cell>
            <van-cell title="B.19.9元" clickable @click="radio = '2'">
              <template #right-icon>
                <van-radio name="2" shape="square" />
              </template>
            </van-cell>
            <van-cell title="C.99元" clickable @click="radio = '3'">
              <template #right-icon>
                <van-radio name="3" shape="square" />
              </template>
            </van-cell>
          </van-cell-group>
        </van-radio-group>
        <div class="share" @click="Pay">
          打赏
        </div>
      </div>
      <div class="bottom">
        <span>或一键转发朋友圈</span>
        <img @click="share" src="../../assets/share.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "1"
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/suggestion");
    },
    onClickRight() {
      //   Toast('按钮');
    },
    share() {
      // 分享朋友圈
    },
    // 支付
    Pay() {
      this.$axios({
        url: "cee/pay/order",
        method: "post",
        dataType: "json",
        headers: {
          "Content-Type": "multipart/form-data"
        },
        params: {
          notify_url: "string",
          total_fee: 0
        }
      }).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style lang="less" scoped>
/deep/.van-radio-group {
  height: 400px;
  margin-left: 20px;
  text-align: left;
}
/deep/.van-radio {
  height: 77px;
  line-height: 77px;
  border: none;
}
/deep/.van-cell__title {
  line-height: 77px;
  span {
    font-size: 30px;
    color: #fc8b48;
  }
}
/deep/.van-cell {
  span {
    line-height: 40px;
  }
}
/deep/.van-radio__icon--checked /deep/.van-icon {
  background-color: #fc8b48;
}

/deep/.van-icon {
  width: 42px;
  height: 42px;
  margin-top: -10px;
  border: 1px solid #fc8b48;
  //   background-color: #FC8B48;
}
/deep/.van-icon-success::before {
  font-size: 34px;
  // color: #FC8B48;
}
/deep/[class*="van-hairline"]::after {
  border: none;
}
.character {
  height: 100vh;
  text-align: center;
  p {
    margin: 0;
    padding: 0;
    margin-bottom: 30px;
  }
  .test {
    margin-top: 20px;
    font-size: 32px;
    text-align: left;
  }
  .main {
    height: 100vh;
    background: rgba(245, 245, 249, 1);
    padding-top: 38px;
  }

  .content {
    margin: 0 auto;
    height: 64%;
    width: 80%;
    background: rgba(255, 254, 254, 1);
    box-shadow: 6px 4px 12px 6px rgba(255, 243, 237, 1);
    border-radius: 9px;
    padding-top: 20px;
    padding: 20px 30px 0 30px;
    .share {
      text-align: center;
      margin: 0 auto;
      width: 140px;
      height: 140px;
      border-radius: 50%;
      background: linear-gradient(to bottom, #febe99, #fc8b48);
      color: #fff;
      line-height: 140px;
      font-size: 34px;
    }
  }
  .bottom {
    margin-top: 70px;
    span {
      font-size: 36px;
    }
    img {
      width: 64px;
      height: 64px;
      vertical-align: middle;
      margin-left: 40px;
    }
  }
}
</style>
