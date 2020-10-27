type SearchItem = {
    type: string;
    label: string;
    placeHolder: string;
    model: string;
    width?: number;
}
type TextInput = SearchItem & {
    type: 'textInput';
}
type NumberInput = SearchItem & {
    type: 'numberInput';
    min?: number;
    max?: number;
}
type DateType = SearchItem & {
    type: 'date';
}

type Select = SearchItem & {
    type: 'select';
    multi: boolean;
    options: { label: string; value: string | number }[]
}

type Column = {
    title: string;
    model: string;
    ellipsis?: boolean;
}

type SearchItemType = TextInput | NumberInput | DateType | Select;

type PageConfig = {
    name: string;
    path: string;
    searchBar: SearchItemType[];
    tableConfig: Column[];
}

const config: PageConfig = {
    name: 'myPage',
    path: './src/views',
    searchBar: [
        {
            type: 'textInput',
            label: '姓名',
            placeHolder: '请输入姓名',
            width: 120,
            model: 'name'
        },
        {
            type: 'numberInput',
            label: '年龄',
            placeHolder: '请输入年龄',
            model: 'age',
            max: 130,
            min: 0,
            width: 150,
        },
        {
            type: 'date',
            label: '日期',
            placeHolder: '请选择日期',
            model: 'date',
            width: 150,
        },
        {
            type: 'select',
            multi: false,
            label: '性别',
            placeHolder: '请选择',
            model: 'sex',
            options: [
                { label: '男', value: 'male' },
                { label: '女', value: 'female' }
            ],
            width: 100,
        },
        {
            type: 'select',
            multi: true,
            label: '数值选项',
            placeHolder: '请选择',
            model: 'numberValue',
            options: [
                { label: '1', value: 1 },
                { label: '2', value: 2 },
                { label: '3', value: 3 }
            ],
            width: 100,
        },
    ],
    tableConfig: [
        { title: '年龄', model: 'age' },
        { title: '姓名', model: 'name' },
        { title: '性别', model: 'sex'},
        { title: '日期', model: 'date' },
        { title: '嘿嘿', model: 'hahaha' },
        { title: 'testtest', model: 'test' }
    ]
};

export default config