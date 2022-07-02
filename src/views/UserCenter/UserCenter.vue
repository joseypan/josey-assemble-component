<!--
* @FileDescription: 用于展示用户中心的文件
* @Author: 潘旭敏
* @Date: 2022-07-02
* @LastEditors: 潘旭敏
* @LastEditTime: 2022-07-02 12:08
 -->
<template>
  <el-container>
    <!-- topbar顶部布局 -->
    <el-header>
      <p>当前登录用户</p>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <ul>
          <router-link to="/userList">
            <li>
              <el-icon><Avatar /></el-icon>
              <span>用户列表</span>
            </li>
          </router-link>
          <router-link to="myInsterest">
            <li>
              <el-icon><Star /></el-icon>
              <span>我的关注</span>
            </li>
          </router-link>
          <router-link to="noticeCenter">
            <li>
              <el-icon><Comment /></el-icon>
              <span>消息中心</span>
            </li>
          </router-link>
        </ul>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.el-header {
  border-bottom: 1px solid #ccc;
  p {
    text-align: center;
    line-height: 60px;
  }
}
.el-aside {
  border-right: 1px solid #ccc;
  height: calc(100vh - 60px);
}
.el-main {
  width: calc(100vw - 200px);
  height: calc(100vh - 60px);
  overflow: auto;
}
li {
  text-align: center;
  padding: 20px 10px;
  cursor: pointer;
  &:hover {
    background-color: #f8e3c5;
    * {
      color: #fff;
    }
  }
  span {
    margin-left: 5px;
  }
}
</style>
