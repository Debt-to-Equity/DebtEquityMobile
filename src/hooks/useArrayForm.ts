import { useEffect, useState } from "react";

export const useArrayForm = (defaultValues: any) => {
  const [form, setForm] = useState(defaultValues);
  const [isValid, setIsValid] = useState(false);

  //   useEffect(() => {
  //     checkForm();
  //   }, [form]);

  const editForm = (indx: string, value: any) => {
    let newForm = form;
    newForm[indx] = value;
    setForm(newForm);
  };

  const checkForm = () => {
    console.log("hello");
    let formCheck = true;
    form.map((val: any) => {
      console.log("helo");
      if (val.value === "") formCheck = false;
    });

    setIsValid(formCheck);
  };

  return [form, editForm, isValid];
};
