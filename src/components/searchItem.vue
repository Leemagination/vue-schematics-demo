<template>
  <div style="display: inline-block;font-size:16px;margin:0 18px 8px 0">
    <span>{{ label }}:</span>
    <div style="display:inline-block;">
    <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import { Prop, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class SearchItem extends Vue {
  @Prop({ required: true, default: "" }) label: string|undefined;
}
</script>
<style scoped>
</style>