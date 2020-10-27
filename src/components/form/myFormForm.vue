<template>
  <div>
    <a-modal
      title="myForm表单"
      :visible="visible"
      :maskClosable="false"
      okText="确认"
      cancelText="关闭"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <div style="overflow: auto; max-height: 560px">
        <a-form-model
          ref="myFormForm"
          :model="form"
          :rules="rules"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
        >
        <a-form-model-item label="姓名" prop="name">
                <a-input v-model="form.name" placeholder="输入长度4~10的姓名" />
        </a-form-model-item>
                <a-form-model-item label="密码" prop="password">
                <a-input v-model="form.password" placeholder="" />
        </a-form-model-item>
                <a-form-model-item label="年龄" prop="age">
                <a-input-number placeholder="" v-model="form.age"  :min=0  :max=130 />
        </a-form-model-item>
                <a-form-model-item label="日期" prop="date">
                <a-date-picker v-model="form.date" show-time
                    type="date"  placeholder="请选择日期"/>
        </a-form-model-item>
                <a-form-model-item label="性别" prop="sex">
                <a-select allowClear placeholder="请选择"  mode="single"  v-model="form.sex">
                    <a-select-option  :value="'male'" :key="'male'">男</a-select-option>
                    <a-select-option  :value="'female'" :key="'female'">女</a-select-option>
                </a-select>
        </a-form-model-item>
                <a-form-model-item label="多选框" prop="multiSelect">
                <a-select allowClear placeholder="请选择"  mode="multiple"  v-model="form.multiSelect">
                    <a-select-option  :value="1" :key="1">选项1</a-select-option>
                    <a-select-option  :value="2" :key="2">选项2</a-select-option>
                    <a-select-option  :value="3" :key="3">选项3</a-select-option>
                    <a-select-option  :value="4" :key="4">选项4</a-select-option>
                </a-select>
        </a-form-model-item>
                <a-form-model-item label="最爱颜色" prop="color">
                <a-radio-group v-model="form.color">
                    <a-radio value="'red'">红色</a-radio>
                    <a-radio value="'blue'">蓝色</a-radio>
                    <a-radio value="'green'">绿色</a-radio>
                </a-radio-group>
        </a-form-model-item>
                <a-form-model-item label="是否国内" prop="isChina">
                <a-switch checked-children="是" un-checked-children="否" v-model="form.isChina" />
        </a-form-model-item>
                <a-form-model-item label="运动" prop="sports">
                <a-checkbox-group v-model="form.sports">
                    <a-checkbox value="'swim'" name="sports">游泳</a-checkbox>
                    <a-checkbox value="'basketball'" name="sports">篮球</a-checkbox>
                    <a-checkbox value="'football'" name="sports">足球</a-checkbox>
                    <a-checkbox value="'run'" name="sports">跑步</a-checkbox>
                    <a-checkbox value="'badminton'" name="sports">羽毛球</a-checkbox>
                </a-checkbox-group>
        </a-form-model-item>
        
        </a-form-model>
      </div>
    </a-modal>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import { Prop, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class MyFormForm extends Vue {
  visible = false;
  labelCol = { span: 8 };
  wrapperCol = { span: 14 };
  form: any = {
    name: null,
    password: null,
    age: null,
    date: null,
    sex: [],
    multiSelect: [],
    color: null,
    isChina: false,
    sports: null
    };
  rules: any = {
    name: [
        {
            required: true,
            message: "请输入姓名!",
            trigger: "blur"
        },
        {
           min: 4,
           max: 10,
           message: "请输入长度4~10的姓名" ,
           trigger: "blur"
        },],
    password: [
        {
            required: true,
            message: "请输入密码",
            trigger: "blur"
        },
        {
           pattern: /^[a-zA-Z0-9]{6,12}$/,
           message: "请输入长度6~12的英文数字组合",
           trigger: "blur" 
        },],
    age: [
        {
            required: true,
            message: "请输入年龄",
            trigger: "blur"
        },],
    date: [],
    sex: [],
    multiSelect: [],
    color: [],
    isChina: [],
    sports: [],
    
  };

  showModal() {
    this.visible = true;
  }

  handleOk() {
    const form: any = this.$refs.myFormForm;
    form.validate((valid: any) => {
      if (valid) {
        this.openNotificationWithIcon(JSON.stringify(this.form));
        this.handleCancel();
      } else {
        console.log("error submit!!");
        return false;
      }
    });
  }

  handleCancel() {
    const form: any = this.$refs.myFormForm;
    form.resetFields();
    this.visible = false;
  }

  openNotificationWithIcon(jsonStr: string) {
    this.$notification["success"]({
      message: "成功",
      description: jsonStr,
    });
  }
}
</script>
<style scoped>
</style>