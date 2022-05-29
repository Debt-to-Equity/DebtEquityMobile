import { useEffect, useState } from "react";

export const useArrayForm = (defaultValues: any[]) => {
  const [form, setForm] = useState<any[]>(defaultValues);
  const [isValid, setIsValid] = useState(false);

  //   useEffect(() => {
  //     checkForm();
  //   }, [form]);

  const editForm = (indx: number, value: any) => {
    let newForm = form;
    newForm[indx] = value;
    setForm(newForm);
  };

  const checkForm = () => {
    let formCheck = true;
    form.map((val: any) => {
      if (val.value === "") formCheck = false;
    });

    setIsValid(formCheck);
  };

  return [form, editForm, isValid];
};
