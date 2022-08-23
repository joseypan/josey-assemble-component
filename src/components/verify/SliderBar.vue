<!--
* @FileDescription: 用来展示滑块组件
* @Author: 潘旭敏
* @Date: 2022-08-23
* @LastEditors: 潘旭敏
* @LastEditTime: 2022-08-23 23:40
 -->
<template>
  <div class="slider-bar-container">
    <!-- 显示进度条的容器 -->
    <div class="bar-container" ref="barRef">
      <div class="block" ref="blockRef"></div>
      <p>滑动此滑块</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
let blockRef = ref();
let barRef = ref();
onMounted(() => {
  blockRef.value.addEventListener("mousedown", (e: MouseEvent) => {
    noteInitMousePosition(e.offsetX);
    addMouseMove();
  });
  window.addEventListener("mouseup", () => {
    console.log("mouseUp");
    clearMouseMove();
  });
});
let initMousePosition = 0;
/**
 * 描述：记录点击时鼠标的坐标
 * @param {  }
 * @return
 */
const noteInitMousePosition = (position: number) => {
  initMousePosition = position;
};
/**
 * 描述：处理鼠标移动事件
 * @param {  }
 * @return
 */
const addMouseMove = () => {
  barRef.value.addEventListener("mousemove", handleMouseMove);
};
/**
 * 描述：鼠标移动
 * @param {  }
 * @return
 */
const handleMouseMove = (e: MouseEvent) => {
  const minOffset = 0;
  const maxOffset = 240;
  // let offsetX =
  //   e.offsetX - initMousePosition < 0
  //     ? 0
  //     : e.offsetX - initMousePosition > 240
  //     ? 240
  //     : e.offsetX - initMousePosition;
  let offsetX = e.offsetX;
  console.log("offsetX", offsetX);
  blockRef.value.style = `transform:translate(${offsetX}px)`;
};
/**
 * 描述：清除鼠标移动事件的监听
 * @param {  }
 * @return
 */
const clearMouseMove = () => {
  barRef.value.removeEventListener("mousemove", handleMouseMove);
};
</script>

<style lang="scss" scoped>
.slider-bar-container {
  position: relative;
  margin: 0 auto;
  width: 300px;
  height: 300px;
  background-color: #ccc;
  border: 1px solid #000;
  .bar-container {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background-color: #fff;
    user-select: none;
    .block {
      position: absolute;
      left: 0;
      top: 0;
      width: 60px;
      height: 60px;
      background-color: pink;
      cursor: pointer;
      transition: all 0.5s;
    }
  }
}
</style>
