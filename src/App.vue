<template>
  <div id="app">
    <div id="nav">
     <a-row>
      <a-col :span="8">
        <router-link to="default"><a-button class="linkButton">概述</a-button></router-link>
        <h1>使用schematics创建的页面</h1>
        <div style="text-align:left;" id="routelinkContainer">
        <router-link to="template"><a-button class="linkButton">默认页面</a-button></router-link>  
        </div>
        <h1>使用schematics创建的表单</h1>
        <div style="text-align:left;" id="formModalContainer">
          <a-button class="linkButton" @click="openModal('defaultForm')">默认表单</a-button>
          </div>
      </a-col>
      <a-col :span="16" id="formModalContainer" style="padding:20px;">
          <router-view/>
      </a-col>
    </a-row>
    </div>
    <template id="formContainer">
      <default-form ref="defaultForm"></default-form>
          <my-form ref="myForm"></my-form> 
        <my-form ref="myForm"></my-form> 
      </template>     
  </div>
</template>
<script lang="ts">
import Component from 'vue-class-component'
import {Vue} from 'vue-property-decorator'
import DefaultForm from './components/form/defaultForm.vue';

@Component({
  components: {
    "default-form":DefaultForm,
    }
})
  export default class App extends Vue {
    created(){
    }
    mounted(){
    
    }

    openModal(formName:string){
      const form:any = this.$refs[formName]
        form.showModal()
    }
  }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.linkButton{
  margin:6px 10px;
}
.searchBar{
  text-align: left;
}
</style>
