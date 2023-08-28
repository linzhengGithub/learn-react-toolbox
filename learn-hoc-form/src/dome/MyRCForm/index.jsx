import React from "react";
import Form, { CreateField, CreateForm } from '../../components/MyForm';
import CreateInput from '../../components/MyForm/CreateInput';

const MyRCFormPage = () => {
  const [form] = Form.useForm()
  const usernameRules = [{ required: true, message: '请输入用户名' }]
  const passwordRules = [{ required: true, message: '请输入密码' }]
  const onFinish = (errors) => {
    console.log('onFinish', errors);
  }
  const onFinishFailed = (errors) => {
    console.log('onFinishFailed', errors);
  }
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

export default MyRCFormPage

