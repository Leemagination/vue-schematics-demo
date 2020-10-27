<template>
  <div style="font-size:20px;">
    <h1>vue项目schematics的演示</h1>
    <p>创建页面只需修改schematics/page/config.ts文件,修改完后运行npx schematics page便会创建出页面并自动注册路由和添加导航按钮</p>
    <p>创建表单只需修改schematics/form/config.ts文件,修改完后运行npx schematics form便会自动创建表单并注册组件和添加弹框按钮</p>
  </div>
</template>

<script lang="ts" src="./defaultPage.ts">
</script>
<style scoped src="./defaultPage.css">
</style>