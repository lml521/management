<template>
  <div>
    <el-card class="card">
      <p>
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item label="昵称">
            <el-input v-model="user" placeholder="昵称模糊搜索"></el-input>
          </el-form-item>
          <el-form-item label="用户名">
            <el-input v-model="name" placeholder="用户名模糊搜索"></el-input>
          </el-form-item>
        </el-form>

      </p>
      <p class="top">
        <el-button @click="reset">重置</el-button>
        <el-button type="primary" @click="search">查询</el-button>

      </p>

    </el-card>

    <el-card class="card">
      <el-button type="primary" @click="add">新增</el-button>

      <el-table :data="rowsList" border style="width: 100%">
        <el-table-column fixed type="index" label="#">
        </el-table-column>
        <el-table-column fixed prop="name" label="用户名">
        </el-table-column>
        <el-table-column prop="brandName" label="昵称">
        </el-table-column>
        <el-table-column label="头像">
          <template slot-scope="scope">
            <img :src="scope.row.pic" alt="">
            </template>

          
        </el-table-column>
        <el-table-column prop="city" label="角色">
        </el-table-column>
        <el-table-column prop="createTime" label="添加时间">
        </el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)"  size="small">查看</el-button>
            <el-button  size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
  // import echarts from 'echarts'
  import { gituser } from "../../utlis/api.js";
  export default {
    data() {
      return {
        pageindex:1,
        pagenum:10,
        user: '',
        name: '',
        rowsList:[],//展示数据

      }
    },
    created() {
      this.gitusers()
    },
    methods: {
      // 重置
      reset() {
        this.user = ""
        this.name = ""
      },
      // 搜索
      search() {

      },
      // 新增
      add() { },
      gitusers(){
        // http://leju.bufan.cloud/lejuAdmin/product/productsByPage/1/10
        gituser(`lejuAdmin/product/productsByPage/${this.pageindex}/${this.pagenum}`).then(res=>{
        console.log(res.data.data.rows,'1');
        if(res.data.code==20000){
          // console.log(111);
          this.rowsList=res.data.data.rows

        }
      })
      },
      

    },
    components: {

    }
  }
</script>

<style scoped lang='scss'>
  .card {
    margin: 20px;
  }

  .top {
    float: right;
    margin-bottom: 20px;
  }
  img{
    width: 80px;
    height: 80px;
  }
</style>