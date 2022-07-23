import React, { FC, InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type InvoiceGenInputProps = {
  config: UseFormRegisterReturn;
  inputProps: InputHTMLAttributes<HTMLInputElement>;
};
type InvoiceGenTextAreaInputProps = {
  config: UseFormRegisterReturn;
  inputProps: InputHTMLAttributes<HTMLTextAreaElement>;
};

const InvoiceGenInput: FC<InvoiceGenInputProps> & {
  TextArea: FC<InvoiceGenTextAreaInputProps>;
} = ({ config, inputProps }) => {
  return (
    <>
      <input {...config} {...inputProps} />
    </>
  );
};

const TextArea: FC<InvoiceGenTextAreaInputProps> = ({ config, inputProps }) => {
  return (
    <>
      <textarea {...config} {...inputProps} />
    </>
  );
};

InvoiceGenInput.TextArea = TextArea;

export default InvoiceGenInput;
