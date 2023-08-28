import CreateForm from './CreateForm';
import CreateField from './CreateField';
import useForm from './useForm';

const Form = CreateForm

Form.Field = CreateField
Form.useForm = useForm

export {
  CreateForm,
  CreateField,
  useForm
}

export default Form
