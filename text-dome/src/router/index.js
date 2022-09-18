import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    children: [{
        path: '/',
        name: 'homeIndex',
        component: () => import('../views/homeIndex.vue'),
        meta: {
          title: ['后台管理', '首页'],
          path: '/homeIndex',
        }
      },

      // 商品管理

      // 商品列表
      {
        path: '/productList',
        name: 'productList',
        component: () => import('../views/productList.vue'),
        meta: {
          title: ['商品管理', '商品列表'],
          path: '/productList',
        }
      },

      // 商品分类
      {
        path: '/productCategory',
        name: 'productCategory',
        component: () => import('../views/productCategory.vue'),
        meta: {
          title: ['商品管理', '商品分类'],
          path: '/productCategory',
        }
      },
      // 品牌管理  
      {
        path: '/productBrand',
        name: 'productBrand',
        component: () => import('../views/productBrand.vue'),
        meta: {
          title: ['商品管理', '品牌管理'],
          path: '/productBrand',
        }
      },

      // 商品编辑
      {
        path: '/productDetail',
        name: 'productDetail',
        component: () => import('../views/productDetail.vue'),
        meta: {
          title: ['商品管理', '商品编辑'],
          path: '/productDetail',
        }
      },

      // 新增商品
      {
        path: '/addProductDetail',
        name: 'addProductDetail',
        component: () => import('../views/addProductDetail.vue'),
        meta: {
          title: ['商品管理', '新增商品'],
          path: '/addProductDetail',
        }
      },



      // 订单管理
      // 订单列表
      {
        path: '/orderList',
        name: 'orderList',
        component: () => import('../views/orderList.vue'),
        meta: {
          title: ['订单管理', '订单列表'],
          path: '/orderList',
        }
      },

      // 订单详情
      {
        path: '/orderDetail',
        name: 'orderDetail',
        component: () => import('../views/orderDetail.vue'),
        meta: {
          title: ['订单管理', '订单详情'],
          path: '/orderDetail',
        }
      },

      // 退单列表
      {
        path: '/orderBack',
        name: 'orderBack',
        component: () => import('../views/orderBack.vue'),
        meta: {
          title: ['订单管理', '退单列表'],
          path: '/orderBack',
        }
      },

      // 退单详情
      {
        path: '/orderBackDetail',
        name: 'orderBackDetail',
        component: () => import('../views/orderBackDetail.vue'),
        meta: {
          title: ['订单管理', '退单详情'],
          path: '/orderBackDetail',
        }
      },

      // 地址管理
      {
        path: '/orderAddress',
        name: 'orderAddress',
        component: () => import('../views/orderAddress.vue'),
        meta: {
          title: ['订单管理', '地址管理'],
          path: '/orderAddress',
        }
      },


      // 注册用户管理
      // 用户列表
      {
        path: '/userList',
        name: 'userList',
        component: () => import('../views/userList.vue'),
        meta: {
          title: ['注册用户管理', '用户列表'],
          path: '/userList',
        }
      },

      // 营销管理

      // 限时活动
      {
        path: '/marketList',
        name: 'marketList',
        component: () => import('../views/marketList.vue'),
        meta: {
          title: ['营销管理', '限时活动'],
          path: '/marketList',
        }
      },
      // 广告列表

      {
        path: '/marketAdvertisement',
        name: 'marketAdvertisement',
        component: () => import('../views/marketAdvertisement.vue'),
        meta: {
          title: ['营销管理', '广告列表'],
          path: '/marketAdvertisement',
        }
      },
      // 内容管理

      // 文章列表
      {
        path: '/articleList',
        name: 'articleList',
        component: () => import('../views/articleList.vue'),
        meta: {
          title: ['内容管理', '文章列表'],
          path: '/articleList',
        }
      },

      // 新增文章
      {
        path: '/addArticle',
        name: 'addArticle',
        component: () => import('../views/addArticle.vue'),
        meta: {
          title: ['内容管理', '新增文章'],
          path: '/addArticle',
        }
      },

      // 编辑文章
      {
        path: '/editArticle',
        name: 'editArticle',
        component: () => import('../views/editArticle.vue'),
        meta: {
          title: ['内容管理', '编辑文章'],
          path: '/editArticle',
        }
      },

      // 素材列表
      {
        path: '/materialList',
        name: 'materialList',
        component: () => import('../views/materialList.vue'),
        meta: {
          title: ['内容管理', '素材列表'],
          path: '/materialList',
        }
      },

      // 个人中心
      // 个人主页
      {
        path: '/personIndex',
        name: 'personIndex',
        component: () => import('../views/personIndex.vue'),
        meta: {
          title: ['个人中心', '个人主页'],
          path: '/personIndex',
        }
      },

      // 个人设置
      {
        path: '/personSetting',
        name: 'personSetting',
        component: () => import('../views/personSetting.vue'),
        meta: {
          title: ['个人中心', '个人设置'],
          path: '/personSetting',
        }
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  // 登录
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, form, next) => {
  if (localStorage.getItem('token') || to.path == '/login') {
    next()
  } else {
    next('/login')
  }
})

export default router