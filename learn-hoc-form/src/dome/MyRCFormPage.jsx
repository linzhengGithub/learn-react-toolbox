import React from "react";
import CreateForm from "../components/CreateForm";
import CreateInput from '../components/CreateInput';

const MyRCFormPage = () => {
  return (
    <>
      <CreateForm>
        {
          (state) => (
            <>
              <CreateInput state={state} />
            </>
          )
        }
      </CreateForm>
    </>
  )
}

export default MyRCFormPage

