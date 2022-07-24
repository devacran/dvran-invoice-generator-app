import React, { FC } from "react";
import { useFormContext } from "react-hook-form";
import InvoiceGenInput from "../InvoiceGenInput";

const InvoiceGenLogo: FC = () => {
  const { register } = useFormContext();

  return (
    <>
      <div>
        <h3>Drag & drop a logo file or click to upload</h3>
        <InvoiceGenInput
          inputProps={{ type: "file", accept: "image/*" }}
          config={register("invoicegen-img")}
        />
      </div>
    </>
  );
};

export default InvoiceGenLogo;
