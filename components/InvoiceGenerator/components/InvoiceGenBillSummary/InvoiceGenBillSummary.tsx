import React from "react";
import { useFormContext } from "react-hook-form";
import InvoiceGenInput from "../InvoiceGenInput";

const InvoiceGenBillSummary = () => {
  const { register } = useFormContext();

  return (
    <>
      <div>
        <InvoiceGenInput
          config={register("invoicegen-subtotal.label-input")}
          inputProps={{
            type: "text",
            defaultValue: "4",
          }}
        />
        <InvoiceGenInput
          config={register("invoicegen-subtotal.value-input")}
          inputProps={{
            type: "text",
            defaultValue: "4",
          }}
        />
      </div>
      <div>
        <InvoiceGenInput
          config={register("invoicegen-tax.label-input")}
          inputProps={{
            type: "text",
            defaultValue: "4",
          }}
        />
        <InvoiceGenInput
          config={register("invoicegen-tax.value-input")}
          inputProps={{
            type: "text",
            defaultValue: "4",
          }}
        />
      </div>
      <div>
        <InvoiceGenInput
          config={register("invoicegen-discount.label-input")}
          inputProps={{
            type: "text",
            defaultValue: "4",
          }}
        />
        <InvoiceGenInput
          config={register("invoicegen-discount.value-input")}
          inputProps={{
            type: "text",
            defaultValue: "4",
          }}
        />
      </div>
      <hr />
      <div>
        <InvoiceGenInput
          config={register("invoicegen-total.label-input")}
          inputProps={{
            type: "text",
            defaultValue: "4",
          }}
        />
        <InvoiceGenInput
          config={register("invoicegen-discount.value-input")}
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
