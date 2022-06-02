import { useEffect, useState } from "react";
import { IWizardObj } from "../types";

export const useWizard = (initialValues: any) => {
  const [values, setValues] = useState(initialValues);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    checkValues();
  }, [values]);

  const handleChange = (newValue: any, id: number) => {
    let updatedValues: any = values.map((ele) => {
      if (ele.id !== id) return ele;

      return {
        ...ele,
        amount: newValue,
      };
    });
    setValues(updatedValues);
  };

  const addNewValue = (
    name: string,
    value: string,
    amortized: boolean,
    interest: string
  ) => {
    let updatedValues = values;
    updatedValues.push({
      id: values[values.length - 1].id + 1,
      name,
      value,
      amortized,
      interest,
    });
    setValues([...updatedValues]);
  };

  const editMultipleValues = (newValue: any, id: number) => {
    let updatedValues: any = values.map((ele) => {
      if (ele.id !== id) return ele;

      return newValue;
    });
    setValues(updatedValues);
  };

  const checkValues = () => {
    let valid = true;
    for (let val of values) {
      if (!val.amount) {
        valid = false;
        break;
      }
    }
    setIsValid(valid);
  };

  return [values, handleChange, addNewValue, editMultipleValues, isValid];
};
