<template>
    <div class="login-box">
        <div class="box">
            <h2>Login Form</h2>
            <el-input  prefix-icon="el-icon-user-solid
            " v-model="username" clearable>
            </el-input>
            <el-input  prefix-icon="el-icon-s-goods" v-model="password" show-password>
            </el-input>
            <el-button type="primary" @click="login">Login</el-button>
            <p>username:admin  password:123456</p>
        </div>
    </div>
</template>

<script>
import { gitLogin } from "../../utlis/api.js";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  created() {},
  methods: {
    // 登录
    login() {
      console.log(this.username, this.password);
      //   axios.post("/lejuAdmin/index/login", {
      //       username: this.username,
      //       password: this.password
      //     })
      //   使用封装api接口
      gitLogin({
        username: this.username,
        password: this.password
      }).then(res => {
        console.log(res);
        if (res.data.code === 20000) {
          // 成功
          this.$message({
            message: "恭喜你，添加成功",
            type: "success"
          });
          localStorage.setItem("token", res.data.data.token);
          this.$router.push("/");
        } else {
          this.$message.error(res.data.message);
        }
      });
    }
  },
  components: {}
};
</script>

<style scoped lang='scss'>
.login-box {
  width: 100vw;
  height: 100vh;
  background-color: #2d3a4b;
  color: #fff;
  overflow: hidden;
  .box {
    width: 400px;
    height: 400px;
    margin: 160px auto;
    display: flex;
    flex-direction: column;
    h2 {
      text-align: center;
      margin: 30px;
    }
    p {
      margin-top: 20px;
    }
    ::v-deep .el-input__inner {
      background-color: #283443;
      margin: 20px 0;
      color: #fff;
    }
  }
}
</style>