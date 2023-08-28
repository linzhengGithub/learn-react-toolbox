import React from 'react';
import _CreateForm from './CreateForm';
import CreateField from './CreateField';
import useForm from './useForm';

// forwardRef 允许你的组件使用 ref 将一个 DOM 节点暴露给父组件
const CreateForm = React.forwardRef(_CreateForm)

CreateForm.Field = CreateField
CreateForm.useForm = useForm

export {
  CreateField,
  useForm
}

export default CreateForm
