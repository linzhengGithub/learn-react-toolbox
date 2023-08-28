import React from 'react';
import FieldContext from '../FieldContext';

export default function Field(props) {
  const { children, name } = props
  const { getFieldValue, setFieldsValue, registerFieldEntities } = React.useContext(FieldContext)

  React.useLayoutEffect(() => {
    const unregister = registerFieldEntities({
      props,
      onStoreChange: forceUpdate
    })
    return unregister
  }, [])

  const [, forceUpdate] = React.useReducer(x => x + 1, 0)

  const getControlled = () => {
    return {
      value: getFieldValue(name),
      onChange: (e) => {
        const newValue = e.target.value
        setFieldsValue({ [name]: newValue })
      }
    }
  }

  const returnChildNode = React.cloneElement(children, getControlled())
  return returnChildNode
}
