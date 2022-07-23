import React from "react";
import { useFormContext } from "react-hook-form";
import InvoiceGenInput from "../InvoiceGenInput";

const InvoiceGenBillSummary = () => {
  const { register } = useFormContext();

  return (
    <>
      <div>
        <InvoiceGenInput
          config={register("invoicegen-subtotal-input")}
          inputProps={{
            type: "text",
            defaultValue: "4",
          }}
        />
        <InvoiceGenInput
          config={register("invoicegen-tax-input")}
          inputProps={{
            type: "text",
            defaultValue: "4",
          }}
        />
      </div>
      <div>
        <InvoiceGenInput
          config={register("invoicegen-discount-input")}
          inputProps={{
            type: "text",
            defaultValue: "4",
          }}
        />
        <InvoiceGenInput
          config={register("invoicegen-total-input")}
          inputProps={{
            type: "text",
            defaultValue: "4",
          }}
        />
      </div>
      <div>
        <InvoiceGenInput
          config={register("sumaru")}
          inputProps={{
            type: "text",
            defaultValue: "4",
          }}
        />
        <InvoiceGenInput
          config={register("sumaru")}
          inputProps={{
            type: "text",
            defaultValue: "4",
          }}
        />
      </div>
      <hr />
      <div>
        <InvoiceGenInput
          config={register("sumaru")}
          inputProps={{
            type: "text",
            defaultValue: "4",
          }}
        />
        <InvoiceGenInput
          config={register("sumaru")}
          inputProps={{
            type: "text",
            defaultValue: "4",
          }}
        />
      </div>
    </>
  );
};

export default InvoiceGenBillSummary;
