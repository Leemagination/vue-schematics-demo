import Component from 'vue-class-component'
import {Vue} from 'vue-property-decorator'
import SearchParams from "./searchParams"
@Component({
  components: {
   
  }
})
export default class TemplatePage extends Vue {
  Mock = require('mockjs')
  searchParams = new SearchParams()
  selectList = [
    { value: 0, label: '选项1' },
    { value: 2, label: '选项2' },
    { value: 3, label: '选项3' }
  ]
  columns = [
    {
      title: '标题1',
      dataIndex: 'name',
      ellipsis: true,
    },
    {
      title: '标题2',
      dataIndex: 'age',
      ellipsis: true,
    },
    {
      title: '标题3',
      dataIndex: 'address',
      ellipsis: true,
    },
    {
      title: '标题4',
      dataIndex: 'work',
      ellipsis: true,
    },
    {
      title: '标题5',
      dataIndex: 'cat',
      ellipsis: true,
    }
  ];
  data: any = [];
  created() {
  }
  search() {
    console.log(this.searchParams.getParams());
    const count = Math.floor(Math.random() * 40 + 20)
    const arr = []
    for (let i = 1; i <= count; i++) {
      arr.push({
        name: this.Mock.mock('@cparagraph'),
        age: this.Mock.mock('@cparagraph'),
        address: this.Mock.mock('@cparagraph'),
        work: this.Mock.mock('@cparagraph'),
        cat: this.Mock.mock('@cparagraph'),
        key:i
      })
    }
    this.data = arr;
  }
  reset() {
    this.searchParams.reset();
  }
}