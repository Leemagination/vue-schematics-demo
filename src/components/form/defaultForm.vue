<template>
  <div>
    <a-modal
      title="默认表单"
      :visible="visible"
      :maskClosable="false"
      okText="确认"
      cancelText="关闭"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <div style="overflow: auto; max-height: 560px">
        <a-form-model
          ref="defaultForm"
          :model="form"
          :rules="rules"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
        >
          <a-form-model-item label="Activity name" prop="name">
            <a-input v-model="form.name" />
          </a-form-model-item>
          <a-form-model-item label="Activity zone" prop="region">
            <a-select
              v-model="form.region"
              placeholder="please select your zone"
            >
              <a-select-option value="shanghai"> Zone one </a-select-option>
              <a-select-option value="beijing"> Zone two </a-select-option>
            </a-select>
          </a-form-model-item>
          <a-form-model-item label="Activity time" prop="date1">
            <a-date-picker
              v-model="form.date1"
              show-time
              type="date"
              placeholder="Pick a date"
              style="width: 100%"
            />
          </a-form-model-item>
          <a-form-model-item label="Instant delivery" prop="delivery">
            <a-switch v-model="form.delivery" />
          </a-form-model-item>
          <a-form-model-item label="Activity type" prop="type">
            <a-checkbox-group v-model="form.type">
              <a-checkbox value="1" name="type"> Online </a-checkbox>
              <a-checkbox value="2" name="type"> Promotion </a-checkbox>
              <a-checkbox value="3" name="type"> Offline </a-checkbox>
            </a-checkbox-group>
          </a-form-model-item>
          <a-form-model-item label="Resources" prop="resource">
            <a-radio-group v-model="form.resource">
              <a-radio value="1"> Sponsor </a-radio>
              <a-radio value="2"> Venue </a-radio>
            </a-radio-group>
          </a-form-model-item>
          <a-form-model-item label="Activity form" prop="desc">
            <a-input v-model="form.desc" type="textarea" />
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
export default class DefaultForm extends Vue {
  visible = false;
  labelCol = { span: 8 };
  wrapperCol = { span: 14 };
  form: any = {
    name: "",
    region: undefined,
    date1: undefined,
    delivery: false,
    type: [],
    resource: "",
    desc: "",
  };
  rules = {
    name: [
      {
        required: true,
        message: "Please input Activity name",
        trigger: "blur",
      },
      { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
    ],
    region: [
      {
        required: true,
        message: "Please select Activity zone",
        trigger: "change",
      },
    ],
    date1: [
      { required: true, message: "Please pick a date", trigger: "change" },
    ],
    type: [
      {
        type: "array",
        required: true,
        message: "Please select at least one activity type",
        trigger: "change",
      },
    ],
    resource: [
      {
        required: true,
        message: "Please select activity resource",
        trigger: "change",
      },
    ],
    desc: [
      {
        required: true,
        message: "Please input activity form",
        trigger: "blur",
      },
    ],
  };
  showModal() {
    this.visible = true;
  }

  handleOk() {
    const form: any = this.$refs.defaultForm;
    form.validate((valid: any) => {
      if (valid) {
       this.openNotificationWithIcon(JSON.stringify(this.form))
      } else {
        console.log("error submit!!");
        return false;
      }
    });
  }

  handleCancel() {
    const form: any = this.$refs.defaultForm;
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