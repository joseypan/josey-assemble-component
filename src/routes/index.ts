/**
 * @FileDescription:用于统一管理路由的文件（后续会考虑引入权限设计，目前不做处理）
 * @Author: 潘旭敏
 * @Date: 2022-07-02
 * @LastEditors: 潘旭敏
 * @LastEditTime:2022-07-02 12:11
 */
import Home from "../views/Home.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/userCenter",
    name: "UserCenter",
    component: () => import("../views/UserCenter/UserCenter.vue"),
    children: [
      {
        path: "/userList",
        name: "UserList",
        component: () => import("../views/UserCenter/UserList.vue"),
      },
      {
        path: "/myInsterest",
        name: "MyInsterest",
        component: () => import("../views/UserCenter/MyInsterest.vue"),
      },
      {
        path: "/noticeCenter",
        name: "noticeCenter",
        component: () => import("../views/UserCenter/NoticeCenter.vue"),
      },
    ],
  },
];
export default routes;
