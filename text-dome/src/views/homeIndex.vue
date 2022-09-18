<template>
  <div class="box">
    <div data-v-25248a55="" class="title"><span data-v-25248a55="">不凡数据大屏</span></div>
    <!-- 订单退单柱状图 -->
    <div class="echartBox" ref="barEchartsBox"></div>
    <div ref="pieEchartsBox"></div>
  </div>
</template>

<script>
  let echarts = require("echarts")
  export default {
    data() {
      return {

      }
    },
   
    mounted() {
      this.initBar()
    },
    methods: {
      initBar() {
        var xAxisData = []
        var data1 = []
        var data2 = []
        // 模拟50条数据
        for (var i = 0; i < 50; i++) {
          xAxisData.push('date' + i)
          data1.push(Math.ceil(Math.random() * 10))
          data2.push(Math.ceil(Math.random() * 10))
        }

        var option = {
          // 标题的参数
          title: {
            text: '订单退单柱状图',
            // 标题字体样式
            textStyle: {
              color: '#9AA8D4',
              fontSize: 22,
              fontWeight: 'normal'
            }
          },
          // 两个按钮的样式
          legend: {
            // 对应 series里的 name
            data: ['订单', '退单'],
            // 距离底部
            bottom: 10,
            // 字体样式
            textStyle: {
              color: '#A8AAB3', // 坐标值得具体的颜色
              fontSize: 12
            }
          },
          // toolbox: {
          //     // y: 'bottom',
          //     // 右上角工具栏
          //     feature: {
          //         magicType: {
          //             type: ['stack', 'tiled']
          //         },
          //         dataView: {},
          //         saveAsImage: {
          //             pixelRatio: 2
          //         }
          //     }
          // },
          tooltip: {},
          xAxis: {
            data: xAxisData,
            // 网格是否显示
            splitLine: {
              show: false
            },
            // x线的样式
            axisLine: {
              lineStyle: {
                type: 'solid',
                color: '#A8AAB3', // 左边线的颜色
                width: '1'// 坐标线的宽度
              }
            },
            axisLabel: {
              // 坐标轴字体样式
              textStyle: {
                color: '#A8AAB3', // 坐标值得具体的颜色
                fontSize: 12
              }
            }
          },
          yAxis: {
            splitLine: {
              show: false
            },
            // y线的样式
            axisLine: {
              lineStyle: {
                type: 'solid',
                color: '#A8AAB3', // 左边线的颜色
                width: '1'// 坐标线的宽度
              }
            },
            axisLabel: {
              // 坐标轴字体样式
              textStyle: {
                color: '#A8AAB3', // 坐标值得具体的颜色
                fontSize: 12
              }
            }
          },
          series: [{
            name: '订单',
            type: 'bar',
            data: data1,
            itemStyle: {
              normal: {
                // 渐变柱状图
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    { offset: 0, color: '#7D05E2' }, // 柱图渐变色
                    { offset: 0.5, color: '#B600FF' }, // 柱图渐变色
                    { offset: 1, color: '#BC04E2' } // 柱图渐变色
                  ]
                )
              }

            }

          }, {
            name: '退单',
            type: 'bar',
            data: data2,
            itemStyle: {
              normal: {
                // 渐变柱状图
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    { offset: 0, color: '#24CBFF' }, // 柱图高亮渐变色
                    { offset: 0.5, color: '#24A3FF' }, // 柱图高亮渐变色
                    { offset: 1, color: '#2492FF' } // 柱图高亮渐变色
                  ]
                )
              }

            }

          }],
          // 柱子弹出来的动画样式
          animationEasing: 'elasticOut',
          animationDelayUpdate: function (idx) {
            return idx * 5
          }
        }
        // 这里要init一个echarts实例
        var myEcharts = echarts.init(this.$refs.barEchartsBox)
        // 然后把option赋值给实例
        myEcharts.setOption(option)
      },

    },
    components: {

    }
  }
</script>

<style scoped lang='scss'>
  .box{
    background-color: #0a1631;
  }
  .echartBox {
    width: 300px;
    height: 400px;
    /* background-color: pink; */
  }
  .title{
    background: url(../assets//titleBG.a4cdf1b6.png);
    background-size: 100% 100%;
    background-position: 50%;
    width: 70%;
    height: 122px;
    text-align: center;
    line-height: 100px;
    font-size: 36px;
    margin: auto;
    span{
      font-size: 50px;
      flex-wrap: 900;
      color: #fff;
    }
  }
  .dashboard_wrapper .dashboard-main .content-wrapper .top-main .title[data-v-25248a55] {
    margin: 0 auto;
    /* background: url(../../static/img/titleBG.a4cdf1b6.png); */
    background: url(../assets//titleBG.a4cdf1b6.png);
    background-size: 100% 100%;
    background-position: 50%;
    width: 70%;
    height: 122px;
    text-align: center;
    line-height: 100px;
    font-size: 36px;
}
</style>