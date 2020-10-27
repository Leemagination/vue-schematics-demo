import Component from 'vue-class-component'
import {Vue} from 'vue-property-decorator'
import SearchParams from "./searchParams"
@Component({
  components: {
   
  }
})
export default class MyPagePage extends Vue {
  Mock = require('mockjs')
  searchParams = new SearchParams()
  sexList = [
    { value: 'male',label: '男' },
    { value: 'female',label: '女' }
]
  numberValueList = [
    { value: 1,label: '1' },
    { value: 2,label: '2' },
    { value: 3,label: '3' }
]

  columns = [   
{ title:'年龄',dataIndex:'age',ellipsis: true,},   
{ title:'姓名',dataIndex:'name',ellipsis: true,},   
{ title:'性别',dataIndex:'sex',ellipsis: true,},   
{ title:'日期',dataIndex:'date',ellipsis: true,},   
{ title:'嘿嘿',dataIndex:'hahaha',ellipsis: true,},   
{ title:'testtest',dataIndex:'test',ellipsis: true,}
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
          age:this.Mock.mock('@cparagraph'),
          name:this.Mock.mock('@cparagraph'),
          sex:this.Mock.mock('@cparagraph'),
          date:this.Mock.mock('@cparagraph'),
          hahaha:this.Mock.mock('@cparagraph'),
          test:this.Mock.mock('@cparagraph'),
          key:i
      })
    }
    this.data = arr;
  }
  reset() {
    this.searchParams.reset();
  }
}