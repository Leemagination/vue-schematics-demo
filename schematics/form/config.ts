type FormConfig = {
    name: string;
    path: string;
    formItem: FormItem[];
}

type Option = {
    value: string | number;
    label: string;
}

type FormBaseItem = {
    label: string;
    prop: string;
    type: string;
    placeHolder?: string;
    required?: string;
    pattern?: {
        reg: RegExp;
        message: string;
    }
}

type InputItem = FormBaseItem & {
    type: 'textInput' | 'numberInput';
    length?: {
        min: number;
        max: number;
        message: string;
    }
}

type DateItem = FormBaseItem & {
    type: 'date';
}

type SwitchItem = FormBaseItem & {
    type: 'switch';
    trueText: string;
    falseText: string;
}

type ChooseItem = FormBaseItem & {
    type: 'radio' | 'checkBox';
    options: Option[];
}

type SelectItem = FormBaseItem & {
    type: 'select';
    multi: boolean;
    options: Option[];
}

type FormItem = InputItem | DateItem | SwitchItem | ChooseItem | SelectItem



const config: FormConfig = {
    name: 'myForm',
    path: './src/components/form',
    formItem: [
        {
            label: '姓名',
            prop: 'name',
            type: 'textInput',
            placeHolder: '输入长度4~10的姓名',
            required: '请输入姓名!',
            length: {
                min: 4,
                max: 10,
                message: '请输入长度4~10的姓名'
            }
        },
        {
            label: '密码',
            prop: 'password',
            type: 'textInput',
            required: '请输入密码',
            pattern: {
                reg: /^[a-zA-Z0-9]{6,12}$/,
                message: '请输入长度6~12的英文数字组合'
            }
        },
        {
            type: 'numberInput',
            label: '年龄',
            required: '请输入年龄',
            prop: 'age',
            length: {
                min: 0,
                max: 130,
                message: '请输入0~130的年龄'
            }
        },
        {
            type: 'date',
            label: '日期',
            placeHolder: '请选择日期',
            prop: 'date'
        },
        {
            type: 'select',
            multi: false,
            label: '性别',
            placeHolder: '请选择',
            prop: 'sex',
            options: [
                { label: '男', value: 'male' },
                { label: '女', value: 'female' }
            ]
        },
        {
            type: 'select',
            multi: true,
            label: '多选框',
            placeHolder: '请选择',
            prop: 'multiSelect',
            options: [
                { label: '选项1', value: 1 },
                { label: '选项2', value: 2 },
                { label: '选项3', value: 3 },
                { label: '选项4', value: 4 }
            ]
        },
        {
            type: 'radio',
            prop: 'color',
            label: '最爱颜色',
            options: [
                { label: '红色', value: 'red' },
                { label: '蓝色', value: 'blue' },
                { label: '绿色', value: 'green' }
            ]
        },
        {
            type: 'switch',
            prop: 'isChina',
            label: '是否国内',
            trueText: '是',
            falseText: '否'
        },
        {
            type: 'checkBox',
            prop: 'sports',
            label: '运动',
            options: [
                { label: '游泳', value: 'swim' },
                { label: '篮球', value: 'basketball' },
                { label: '足球', value: 'football' },
                { label: '跑步', value: 'run' },
                { label: '羽毛球', value: 'badminton' }
            ]
        },
    ]
}


export default config;