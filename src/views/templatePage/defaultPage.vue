<template>
  <div>
    <div class="searchBar">
      <search-item :label="'输入框'">
        <a-input placeholder="Basic usage" v-model="searchParams.inputField" />
      </search-item>
      <search-item :label="'数字输入框'">
        <a-input-number id="inputNumber" v-model="searchParams.numberInputField" />
      </search-item> 
      <search-item :label="'日期选择框'">
        <a-date-picker v-model="searchParams.dateField" />
      </search-item>
      <search-item :label="'下拉框'">
        <a-select style="width: 120px" allowClear v-model="searchParams.selectField">
          <a-select-option v-for="item in selectList" :value="item.value" :key="item.value">
            {{ item.label }}
          </a-select-option>
        </a-select>
      </search-item>
      <search-item :label="'多选框'">
         <a-select style="width: 120px" mode="multiple" allowClear v-model="searchParams.multiSelectField" >
          <a-select-option  v-for="item in selectList" :value="item.value" :key="item.value">
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

<script lang="ts" src="./defaultPage.ts">
</script>
<style scoped src="./defaultPage.css">
</style>