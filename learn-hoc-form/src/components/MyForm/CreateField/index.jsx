import React, { Component } from 'react';
import FieldContext from '../FieldContext';

// 函数组件
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

// 类组件
// export default class Field extends Component {
//   static contextType = FieldContext

//   // 挂载
//   componentDidMount() {
//     this.unregister = this.context.registerFieldEntities(this)
//   }
//   // 卸载
//   componentWillUnmount() {
//     this.unregister()
//   }
//   // 更新
//   onStoreChange = () => {
//     this.forceUpdate()
//   }

//   getControlled = () => {
//     const { getFieldValue, setFieldsValue } = this.context
//     const { name } = this.props

//     return {
//       value: getFieldValue(name),
//       onChange: (e) => {
//         const newValue = e.target.value
//         setFieldsValue({ [name]: newValue })
//       }
//     }
//   }

//   render() {
//     const returnChildNode = React.cloneElement(this.props.children, this.getControlled())
//     return returnChildNode
//   }
// }
