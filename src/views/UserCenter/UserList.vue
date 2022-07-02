<!--
* @FileDescription: 用来展示用户列表的页面
* @Author: 潘旭敏
* @Date: 2022-07-02
* @LastEditors: 潘旭敏
* @LastEditTime: 2022-07-02 14:21
 -->
<template>
  <div>
    <header>用户列表</header>
    <div class="user-container">
      <div class="user-item" v-for="item in 10">
        <div class="user-avatar">
          <el-avatar
            :size="40"
            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
          />
        </div>
        <div class="user-info">
          <p class="username">用户名</p>
          <p class="user-description">用户简介</p>
        </div>
        <div class="option-button">
          <el-button type="primary">添加关注</el-button>
          <!-- <el-button type="default">取消关注</el-button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
header {
  font-size: 18px;
  font-weight: 700;
}
.user-item {
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e9e9eb;
  .user-avatar {
    text-align: center;
    width: 80px;
  }
  .user-info {
    flex: 1;
  }
  .option-button {
    width: 100px;
  }
}
</style>
