import React, { FC, InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

const InvoiceGenInput: FC<{
  config: UseFormRegisterReturn;
  inputProps: InputHTMLAttributes<HTMLInputElement>;
}> = ({ config, inputProps }) => {
  return (
    <>
      {" "}
      <input defaultValue="test" {...config} {...inputProps} />
    </>
  );
};

export default InvoiceGenInput;
