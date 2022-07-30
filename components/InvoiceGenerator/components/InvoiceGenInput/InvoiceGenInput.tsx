import React, { FC, InputHTMLAttributes } from "react";
import { FieldErrorsImpl, UseFormRegisterReturn } from "react-hook-form";
import { InterfaceInvoiceData } from "../../../../pages/api/invoice-generator";

type InvoiceGenInputProps = {
  config: UseFormRegisterReturn;
  inputProps: InputHTMLAttributes<HTMLInputElement>;
  label?: string;
  hasError?: boolean;
};
type InvoiceGenTextAreaInputProps = {
  config: UseFormRegisterReturn;
  inputProps: InputHTMLAttributes<HTMLTextAreaElement>;
};

const InvoiceGenInput: FC<InvoiceGenInputProps> & {
  TextArea: FC<InvoiceGenTextAreaInputProps>;
} = ({ config, inputProps, label, hasError }) => {
  return (
    <div className="row">
      {label && (
        <div className="col-sm-3">
          <label htmlFor={inputProps.id} className="form-label">
            {label}
          </label>
        </div>
      )}
      <div className="col-sm-9">
        <input
          className={`form-control ${hasError ? "is-invalid" : ""}`}
          {...config}
          {...inputProps}
        />
      </div>
    </div>
  );
};

const TextArea: FC<InvoiceGenTextAreaInputProps> = ({ config, inputProps }) => {
  return (
    <>
      <textarea className="form-control" {...config} {...inputProps} />
    </>
  );
};

InvoiceGenInput.TextArea = TextArea;

export default InvoiceGenInput;
