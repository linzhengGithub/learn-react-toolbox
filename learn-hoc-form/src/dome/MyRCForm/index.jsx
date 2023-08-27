import React from "react";
import CreateForm from "../../components/MyForm/CreateForm";
import CreateField from '../../components/MyForm/CreateField';
import CreateInput from '../../components/MyForm/CreateInput';

const MyRCFormPage = () => {
  return (
    <>
      <CreateForm>
        <CreateField>
          <CreateInput />
        </CreateField>
        <CreateField>
          <CreateInput />
        </CreateField>
      </CreateForm>
    </>
  )
}

export default MyRCFormPage

