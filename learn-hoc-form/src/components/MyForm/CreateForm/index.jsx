import React from 'react';
import FiledContext from '../FieldContext.js';
import useForm from '../useForm.js';

export default function CreateForm({ children, form, onFinish, onFinishFailed }, ref) {
  const [formInstance] = useForm(form);

  React.useImperativeHandle(ref, () => formInstance);

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


// const CreateForm = forwardRef(({ children, form, onFinish, onFinishFailed }, ref) => {
//   const [formInstance] = useForm(form);
//   console.log(ref);

//   React.useImperativeHandle(ref, () => formInstance);

//   formInstance.setCallbacks({ onFinish, onFinishFailed })

//   return (
//     <form onSubmit={
//       (e) => {
//         e.preventDefault()
//         formInstance.onSubmit()
//       }
//     }>
//       <FiledContext.Provider value={formInstance}>
//         {children}
//       </FiledContext.Provider>
//     </form>
//   )
// })

// export default CreateForm
