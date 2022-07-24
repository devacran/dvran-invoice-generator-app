import React from "react";
import { useFormContext } from "react-hook-form";
import InvoiceGenInput from "../InvoiceGenInput";

const InvoiceGenBillSummary = () => {
  const { register } = useFormContext();

  return (
    <>
      <div className="row">
        <div className="col">
          <InvoiceGenInput
            config={register("invoicegen-subtotal-label-input")}
            inputProps={{
              type: "text",
              placeholder: "Subtotal",
            }}
          />
        </div>
        <div className="col">
          <InvoiceGenInput
            config={register("invoicegen-subtotal-value-input")}
            inputProps={{
              type: "text",
            }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <InvoiceGenInput
            config={register("invoicegen-tax-label-input")}
            inputProps={{
              type: "text",
              placeholder: "Tax",
            }}
          />
        </div>
        <div className="col">
          <InvoiceGenInput
            config={register("invoicegen-tax-value-input")}
            inputProps={{
              type: "text",
            }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <InvoiceGenInput
            config={register("invoicegen-discount-label-input")}
            inputProps={{
              type: "text",
              placeholder: "Discount",
            }}
          />
        </div>
        <div className="col">
          <InvoiceGenInput
            config={register("invoicegen-discount-value-input")}
            inputProps={{
              type: "text",
            }}
          />
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col">
          <InvoiceGenInput
            config={register("invoicegen-total-label-input")}
            inputProps={{
              type: "text",
              placeholder: "Total",
            }}
          />
        </div>
        <div className="col">
          <InvoiceGenInput
            config={register("invoicegen-total-value-input")}
            inputProps={{
              type: "text",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default InvoiceGenBillSummary;
