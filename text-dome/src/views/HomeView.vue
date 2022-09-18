<template>
  <div>
    <el-container>
      <el-aside :width="isCollapse?'65px':'200px'">
        <el-menu 
        default-active="/"
        background-color="#304156" text-color="#fff" 
        active-text-color="#3896fb"
          class="el-menu-vertical-demo" :collapse="isCollapse" router>
          <el-menu-item index="/">
            <i class="el-icon-platform-eleme"></i>
            <span slot="title">主页</span>
          </el-menu-item>
          <el-submenu :index="item.path" v-for="item in permissionList" :key="item.id">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">{{item.title}}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item :index="ele.name" 
              v-for="ele in item.children" 
              :key="ele.id">
                {{ele.title}}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>

          <div class="top">
            <div class="top-Breadcrumb">
              <p   @click="isCollapse=!isCollapse" class="i">
                <i :class="[{active:isCollapse},isCollapse?'el-icon-s-unfold':'el-icon-s-fold']"  class="el-icon-s-operation"></i>
              </p>
              <el-breadcrumb separator="/" >
              <el-breadcrumb-item  v-for="(em,index) in meta" :key="index">{{em}}</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <p class="user">
              欢迎管理员：admin
              <el-dropdown @command="handleCommand" >
                <span class="el-dropdown-link">
                  <img src="../assets/peiqi.jpg" class="img" >
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown"  >
                  <el-dropdown-item>乐居客户端预览</el-dropdown-item>
                  <el-dropdown-item>乐居后台预览</el-dropdown-item>
                  <el-dropdown-item>接口地址</el-dropdown-item>
                  <el-dropdown-item >不凡官网</el-dropdown-item>
                  <el-dropdown-item >gittee</el-dropdown-item>
                   <el-dropdown-item >vue-element-admin</el-dropdown-item>
                    <el-dropdown-item divided command="quit">退出</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
          </div>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { gitlist } from "../../utlis/api.js";
export default {
  data() {
    return {
      isCollapse: false,
      permissionList: [], //侧边栏消息
      meta: {}
    };
  },
  // 获取路由
  watch: {
    $route: {
      handler(val) {
        this.meta = val.meta.title;
        // console.log(this.meta.title);
      },
      deep: true,
      immediate: true
    }
  },

  created() {
    // 获取数据
    gitlist().then(res => {
      this.permissionList = res.data.data.permissionList;
      console.log(res.data.data.permissionList);
    });
  },

  methods: {
    // 退出

    handleCommand(val) {
      console.log(val);
      if (val == "quit") {
        localStorage.removeItem("token");
        this.$router.push("/login");
      }
    }
  }
};
</script>
<style scoped lang='scss'>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  height: 4vh;
  line-height: 4vh;
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    font-size: 24px;
    color: #000;
    .top-Breadcrumb {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .i {
        margin-right: 20px;
      }
    }
    .user {
      overflow: hidden;
      margin-top: 20px;
      font-size: 18px;
      height: 100%;
      img {
        margin: 0 10px;
        vertical-align: middle;
        width: 40px;
        height: 40px;
        border-radius: 4px;
      }
    }
  }
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  height: 100vh;

  transition: all 0.5s;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  height: 90vh;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>