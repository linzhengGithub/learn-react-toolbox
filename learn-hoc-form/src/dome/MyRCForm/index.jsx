import React, { Component, useEffect } from "react";
import CreateForm, { CreateField } from '../../components/MyForm';
import CreateInput from '../../components/MyForm/CreateInput';

const usernameRules = [{ required: true, message: '请输入用户名' }]
const passwordRules = [{ required: true, message: '请输入密码' }]

// 函数组件
export default function MyRCFormPage() {
  const [form] = CreateForm.useForm()
  const onFinish = (errors) => {
    console.log('onFinish', errors);
  }
  const onFinishFailed = (errors) => {
    console.log('onFinishFailed', errors);
  }
  useEffect(() => {
    form.setFieldsValue({ username: "default" })
  }, []);
  return (
    <>
      <CreateForm form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <CreateField name="username" rules={usernameRules}>
          <CreateInput placeholder="username" />
        </CreateField>
        <CreateField name="password" rules={passwordRules}>
          <CreateInput placeholder="password" />
        </CreateField>
        <button>Submit</button>
      </CreateForm>
    </>
  )
}

// 类组件
// export default class MyRCFormPage extends Component {
//   formRef = React.createRef();

//   componentDidMount() {
//     this.formRef.current.setFieldsValue({ username: "default" })
//   }

//   onFinish = (errors) => {
//     console.log('onFinish', errors);
//   }

//   onFinishFailed = (errors) => {
//     console.log('onFinishFailed', errors);
//   }

//   render() {
//     return (
//       <>
//         <CreateForm ref={this.formRef} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
//           <CreateField name="username" rules={usernameRules}>
//             <CreateInput placeholder="username" />
//           </CreateField>
//           <CreateField name="password" rules={passwordRules}>
//             <CreateInput placeholder="password" />
//           </CreateField>
//           <button>Submit</button>
//         </CreateForm>
//       </>
//     )
//   }
// }


