import { useRef } from "react";

class FormStore {
  constructor() {
    this.store = {} // 状态值
    this.fieldEntities = []
    this.callbacks = {}
  }

  // 注册收集实例 (做forceUpdate)
  // 注册与取消注册
  // 订阅与取消订阅
  registerFieldEntities = (entity) => {
    this.fieldEntities.push(entity)

    return () => {
      this.fieldEntities = this.fieldEntities.filter(i => i !== entity)
      delete this.store[entity.props.name]
    }
  }

  // get
  getFieldValue = (name) => {
    return this.store[name]
  }
  getFieldsValue = () => {
    return { ...this.store }
  }
  // set
  setFieldsValue = (newStore) => {
    // 1.update store
    this.store = { ...this.store, ...newStore }
    // 2.update filed
    this.fieldEntities.forEach(entity => {
      Object.keys(newStore).forEach(key => {
        if (key === entity.props.name) {
          entity.onStoreChange()
        }
      })
    })
  }

  setCallbacks = (newCallbacks) => {
    this.callbacks = { ...this.callbacks, ...newCallbacks }
  }

  validate = () => {
    let errors = []
    this.fieldEntities.forEach(entity => {
      const { name, rules } = entity.props
      const value = this.getFieldValue(name)
      const rule = rules[0]
      
      if (rule.required && !value) {
        errors.push({ [name]: rule.message || '', value })
      }
    })
    return errors
  }

  onSubmit = () => {
    const { onFinish, onFinishFailed } = this.callbacks
    let errors = this.validate()
    if (errors.length) {
      onFinishFailed({ errors, store: this.getFieldsValue() })
    } else {
      onFinish({ errors, store: this.getFieldsValue() })
    }
  }

  getForm = () => {
    return {
      getFieldValue: this.getFieldValue,
      getFieldsValue: this.getFieldsValue,
      setFieldsValue: this.setFieldsValue,
      setCallbacks: this.setCallbacks,
      registerFieldEntities: this.registerFieldEntities,
      onSubmit: this.onSubmit
    }
  }
}

export default function useForm(form) {
  // 存值，在组件卸载之前指向的都是同一个值
  const formRef = useRef()

  if (!formRef.current) {
    if (form) {
      formRef.current = form
    } else {
      const formStore = new FormStore()
      formRef.current = formStore.getForm()
    }
  }

  return [formRef.current]
}
