<template>
  <div>
    <header>我的关注</header>
    <div class="recommend-container card-container">
      <el-card class="box-card">
        <!-- 当前分类的标题 -->
        <p class="title">推荐列表</p>
        <div class="content">
          <el-card v-for="item in 6" :key="item" shadow="hover">
            <div class="tag-item">
              <div class="user-avatar">
                <el-avatar
                  :size="20"
                  src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                />
              </div>
              <div class="user-info">
                <p class="username">用户名</p>
                <p class="user-description">用户简介</p>
              </div>
              <div class="option-button">
                <el-button type="primary">关注</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </el-card>
    </div>
    <div class="history-container card-container">
      <el-card class="box-card">
        <!-- 当前分类的标题 -->
        <p class="title">历史访问</p>
        <div class="content">
          <el-card v-for="item in 6" :key="item" shadow="hover">
            <div class="tag-item">
              <div class="user-avatar">
                <el-avatar
                  :size="20"
                  src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                />
              </div>
              <div class="user-info">
                <p class="username">用户名</p>
                <p class="user-description">用户简介</p>
              </div>
            </div>
          </el-card>
        </div>
      </el-card>
    </div>
    <div class="insterest-container">
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
          <el-button type="default">取消关注</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
</script>

<style scoped lang="scss">
header {
  font-size: 18px;
  font-weight: 700;
}
.card-container {
  margin-top: 10px;
}
.box-card {
  .title {
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    padding: 10px 0px;
  }
  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    overflow: auto;
    :deep .el-card {
      width: 200px;
      .el-card__body {
        width: 100%;
      }
    }
  }
}
.insterest-container {
  overflow: auto;
  height: calc(100vh - 460px);
  padding: 10px 0;
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
}

.tag-item {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  .user-avatar {
    text-align: center;
    width: 24px;
  }
  .user-info {
    flex: 1;
    font-size: 12px;
  }
  .option-button {
    width: 60px;
  }
}
</style>
