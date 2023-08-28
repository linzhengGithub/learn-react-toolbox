import React from 'react';
import _CreateForm from './CreateForm';
import CreateField from './CreateField';
import useForm from './useForm';

const CreateForm = React.forwardRef(_CreateForm)

CreateForm.Field = CreateField
CreateForm.useForm = useForm

export {
  CreateField,
  useForm
}

export default CreateForm
