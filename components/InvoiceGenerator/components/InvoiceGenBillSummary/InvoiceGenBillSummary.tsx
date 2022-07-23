import React from "react";
import { useFormContext } from "react-hook-form";
import InvoiceGenInput from "../InvoiceGenInput";

const InvoiceGenBillSummary = () => {
  const { register } = useFormContext();

  return (
    <>
      <div>
        <InvoiceGenInput config={register("sumaru")} />
        <InvoiceGenInput config={register("sumaru")} />
      </div>
      <div>
        <InvoiceGenInput config={register("sumaru")} />
        <InvoiceGenInput config={register("sumaru")} />
      </div>
      <div>
        <InvoiceGenInput config={register("sumaru")} />
        <InvoiceGenInput config={register("sumaru")} />
      </div>
      <hr />
      <div>
        <InvoiceGenInput config={register("sumaru")} />
        <InvoiceGenInput config={register("sumaru")} />
      </div>
    </>
  );
};

export default InvoiceGenBillSummary;
