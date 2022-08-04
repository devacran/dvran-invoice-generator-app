import React from "react";
import { useFormContext } from "react-hook-form";
import InvoiceGenInput from "../InvoiceGenInput";

const InvoiceGenBillSummary = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div className="row">
        <div className="col">
          <InvoiceGenInput
            hasError={Boolean(errors["invoicegen-subtotal-label-input"])}
            config={register("invoicegen-subtotal-label-input", {
              required: true,
            })}
            inputProps={{
              type: "text",
              placeholder: "Subtotal",
              defaultValue: "Subtotal",
            }}
          />
        </div>
        <div className="col">
          <InvoiceGenInput
            config={register("invoicegen-subtotal-value-input")}
            inputProps={{
              type: "text",
              placeholder: "0.00",
            }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <InvoiceGenInput
            hasError={Boolean(errors["invoicegen-tax-label-input"])}
            config={register("invoicegen-tax-label-input", {
              required: true,
            })}
            inputProps={{
              type: "text",
              placeholder: "Tax",
              defaultValue: "Tax",
            }}
          />
        </div>
        <div className="col">
          <InvoiceGenInput
            config={register("invoicegen-tax-value-input")}
            inputProps={{
              type: "text",
              placeholder: "0.00",
            }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <InvoiceGenInput
            hasError={Boolean(errors["invoicegen-discount-label-input"])}
            config={register("invoicegen-discount-label-input", {
              required: true,
            })}
            inputProps={{
              type: "text",
              placeholder: "Discount",
              defaultValue: "Discount",
            }}
          />
        </div>
        <div className="col">
          <InvoiceGenInput
            config={register("invoicegen-discount-value-input")}
            inputProps={{
              type: "text",
              placeholder: "0.00",
            }}
          />
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col">
          <InvoiceGenInput
            hasError={Boolean(errors["invoicegen-total-label-input"])}
            config={register("invoicegen-total-label-input", {
              required: true,
            })}
            inputProps={{
              type: "text",
              placeholder: "Total",
              defaultValue: "Total",
            }}
          />
        </div>
        <div className="col">
          <InvoiceGenInput
            config={register("invoicegen-total-value-input")}
            inputProps={{
              type: "text",
              placeholder: "0.00",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default InvoiceGenBillSummary;
