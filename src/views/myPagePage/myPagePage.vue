<template>
  <div>
    <div class="searchBar">
      
      <search-item :label="'姓名'">
        <a-input :placeholder="'请输入姓名'" v-model="searchParams.name" style="width: 120px" />
      </search-item>
      <search-item :label="'年龄'">
        <a-input-number :placeholder="'请输入年龄'" v-model="searchParams.age" style="width: 150px" :min=0  :max=130 />
      </search-item>
      <search-item :label="'日期'">
        <a-date-picker :placeholder="'请选择日期'" v-model="searchParams.date" style="width: 150px" />
      </search-item>
      <search-item :label="'性别'">
        <a-select style="width: 100px" allowClear :placeholder="'请选择'"  mode="single"  v-model="searchParams.sex">
          <a-select-option v-for="item in sexList" :value="item.value" :key="item.value">
            {{ item.label }}
          </a-select-option>
        </a-select>
      </search-item>
      <search-item :label="'数值选项'">
        <a-select style="width: 100px" allowClear :placeholder="'请选择'"  mode="multiple"  v-model="searchParams.numberValue">
          <a-select-option v-for="item in numberValueList" :value="item.value" :key="item.value">
            {{ item.label }}
          </a-select-option>
        </a-select>
      </search-item>
      <div style="text-align: right">
        <a-button type="primary" @click="search"> 搜索 </a-button>
        <a-button type="default" @click="reset"> 重置 </a-button>
      </div>
    </div>
    <div>搜索参数:{{searchParams}}</div>
    <div>
      <a-table :columns="columns" :data-source="data" >
      </a-table>
    </div>
  </div>
</template>

<script lang="ts" src="./myPagePage.ts">
</script>
<style scoped src="./myPagePage.css">
</style>