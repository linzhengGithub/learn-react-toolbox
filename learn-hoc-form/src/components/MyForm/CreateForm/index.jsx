import FiledContext from '../FieldContext.js';
import useForm from '../useForm.js';


export default function CreateForm({ children, form, onFinish, onFinishFailed }) {
  const [formInstance] = useForm(form)
  formInstance.setCallbacks({ onFinish, onFinishFailed })

  return (
    <form onSubmit={
      (e) => {
        e.preventDefault()
        formInstance.onSubmit()
      }
    }>
      <FiledContext.Provider value={formInstance}>
        {children}
      </FiledContext.Provider>
    </form>
  )
}
