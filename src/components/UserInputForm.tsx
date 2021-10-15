import React from "react";
import { getPersonInfo, getPersonInfoWithGender } from "../Api";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextField } from "./TextField";
import { Select } from "./Select";

interface UserInputInterface {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
}

export const UserInputForm = ({ setUserInfo, setPersonInfo }: any) => {
  const onSubmit = (values: UserInputInterface) => {
    setUserInfo(values);
    if (values.gender === "no-preference") {
      getPersonInfo().then((personInfo) => {
        setPersonInfo(personInfo);
      });
    } else {
      getPersonInfoWithGender(values.gender).then((personInfo) => {
        setPersonInfo(personInfo);
      });
    }
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        age: 0,
        gender: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        age: Yup.number().min(1, "Must be a valid age").required("Required"),
        gender: Yup.string().required("Required"),
      })}
      onSubmit={onSubmit}
    >
      <Form>
        <TextField name="firstName" label="First Name" type="text" />
        <TextField name="lastName" label="Last Name" type="text" />
        <TextField name="age" label="Age" type="number" />
        <Select label="Gender Preference" name="gender" />
        <button type="submit">Show me the love of my life</button>
      </Form>
    </Formik>
  );
};
