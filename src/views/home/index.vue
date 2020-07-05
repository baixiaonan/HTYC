<template>
  <div class="home">
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

    <!-- 进度条 -->
    <div class="pro">
      <span>01</span>
      <van-progress
        :percentage="50"
        stroke-width="6"
        :pivot-text="text"
        pivot-color="#FC8B48"
        color="#FC8B48"
      />
      <span>38</span>
      <!-- pivot-color文字颜色 -->
    </div>
    <!-- 测试题 -->
    <div class="content">
      <div class="top">
        当你尝试了解某些事情时，一般你会
      </div>
      <!-- <div class="line"></div> -->
      <div class="bottom">
        <!-- <van-radio-group v-model="radio">
                <van-radio name="1">A、喜欢在一段时间里专心于一件事情直到完成</van-radio>
                <van-radio name="2">单选框 2</van-radio>
            </van-radio-group> -->
        <van-radio-group v-model="radio">
          <van-cell-group>
            <van-cell
              title="A、喜欢在一段时间里专心于一件事情直到完成"
              clickable
              @click="radio = '1'"
            >
              <template #right-icon>
                <van-radio name="1" shape="square" />
              </template>
            </van-cell>
            <van-cell title="单选框 2" clickable @click="radio = '2'">
              <template #right-icon>
                <van-radio name="2" shape="square" />
              </template>
            </van-cell>
          </van-cell-group>
        </van-radio-group>
      </div>
    </div>
    <div class="btn">
      <span class="lefts" @click="LastQuestion">
        上一题
      </span>
      <span class="rights"  @click="NextQuestion">
        下一题
      </span>
      <span v-show="result" class="rights" @click="LookResult">查看结果</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "1",
      text: "1",
      result:true
    };
  },
  methods: {
    onClickLeft() {
      //   Toast('返回');
    },
    onClickRight() {
      //   Toast('按钮');
    },
    // 上一题
    LastQuestion(){
        this.$toast('888')
        this.$toast('上一题')
    },
    // 下一题
    NextQuestion(){
         this.$toast('下一题')

    },
    LookResult(){
        
this.$axios({
        url: "/cee/character/answer",
        method: "post",
        dataType: "json",
        // xhrFields: {
        // withCredentials: true
        // },
            //    headers: {'Content-Type': 'application/json'}, //加上这个
         headers: {'Content-Type': 'application/x-www-form-urlencoded'}, //加上这个
       data:{ "list":[
            {
              "code": "string",
              "id": 0
            }
          ]}
      }).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style lang="less" scoped>
/deep/.van-progress {
  display: inline-block;
  margin: 0 auto;
  width: 87%;
}
/deep/.van-progress__pivot {
  // display: none;
}
/deep/.van-radio-group {
  height: 700px;
}
/deep/.van-radio {
  height: 77px;
  line-height: 77px;
}
/deep/.van-cell {
  // height: 77px;
  span {
    line-height: 40px;
  }
  // line-height: 77px;
}
/deep/.van-cell__title {
  line-height: 77px;
  span {
    font-size: 30px;
    color: #fc8b48;
  }
}

/deep/.van-icon {
  width: 42px;
  height: 42px;
  margin-top: -10px;
  border: 1px solid #fc8b48;
}
/deep/.van-radio__icon--checked /deep/.van-icon {
  background-color: #fc8b48;
}
/deep/.van-icon-success::before {
  font-size: 34px;
}
/deep/[class*="van-hairline"]::after {
  // -webkit-transform:none;
  bottom: none;
  border: none;
}
/deep/.van-cell::after {
  border-bottom: none;
}
span {
  font-size: 32px;
}
.home {
  background: rgba(245, 245, 249, 1);
  // width: 100%;
  height: 100vh;
  font-size: 26px;
  // background-color: pink;
  .line {
    width: 100%;
    height: 2px;
    // background-color: #f5f5f5;
    background-color: pink;
  }
  .pro {
    color: #fc8b48;
    // margin: 50px 0;
    padding: 30px;
  }
  .content {
    margin: 0 auto;
    padding: 30px;
    height: 68%;
    width: 80%;
    background-color: #fff;
    box-shadow: 6px 4px 12px 6px rgba(255, 243, 237, 1);
    border-radius: 18px;

    .top {
      color: #fc8b48;
      font-size: 32px;
      height: 108px;
      line-height: 108px;
      border-bottom: 1px solid #f2f2f2;
    }
    .bottom {
      margin-top: 20px;
    }
  }
  .btn {
    margin: 0 auto;
    display: flex;
    height: 116px;
    line-height: 120px;
    width: 88%;
    background-color: #fff;
    box-shadow: 6px 4px 12px 6px rgba(255, 243, 237, 1);
    border-radius: 0 0 18px 18px;
    margin-top: -16px;
    color: rgba(128, 128, 128, 1);
    span {
      flex: 1;
      text-align: center;
    }
    .lefts {
      font-size: 34px;
    }
    .rights {
      color: #fc8b48;
      font-size: 34px;
    }
  }
}
</style>
