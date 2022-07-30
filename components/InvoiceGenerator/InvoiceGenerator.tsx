import React, { useState } from "react";
import axios from "axios";
import { useForm, FormProvider } from "react-hook-form";

import InvoiceGenBillSummary from "./components/InvoiceGenBillSummary";
import InvoiceGenCommentBox from "./components/InvoiceGenCommentBox";
import InvoiceGenInput from "./components/InvoiceGenInput";
import InvoiceGenLogo from "./components/InvoiceGenLogo";
import InvoiceGenTable from "./components/InvoiceGenTable";
import { InterfaceInvoiceData } from "../../pages/api/invoice-generator";

const InvoiceGenerator = () => {
  const [downloadUrl, setDownloadUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const formMethods = useForm<InterfaceInvoiceData>();
  const {
    register,
    formState: { errors },
  } = formMethods;
  const onSubmit = (data: InterfaceInvoiceData) => {
    setLoading(true);
    axios
      .post("/api/invoice-generator", data, { responseType: "arraybuffer" })
      .then((res) => {
        const blob = new Blob([res.data], { type: "application/pdf" });
        const dwnUrl = window.URL.createObjectURL(blob);
        setDownloadUrl(dwnUrl);
        setLoading(false);
      });
  };
  return (
    <FormProvider {...formMethods}>
      <>
        <h1>Invoice</h1>
        <form onSubmit={formMethods.handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col">
              {/* User info */}

              <InvoiceGenInput
                hasError={Boolean(errors["invoicegen-my-company-input"])}
                config={register("invoicegen-my-company-input", {
                  required: true,
                })}
                inputProps={{
                  type: "text",
                  placeholder: "Your Company",
                }}
              />
              <InvoiceGenInput
                hasError={Boolean(errors["invoicegen-full-name-input"])}
                config={register("invoicegen-full-name-input", {
                  required: true,
                })}
                inputProps={{ type: "text", placeholder: "Full Name" }}
              />
              <InvoiceGenInput
                hasError={Boolean(
                  errors["invoicegen-my-company-website-input"]
                )}
                config={register("invoicegen-my-company-website-input", {
                  required: true,
                })}
                inputProps={{ type: "text", placeholder: "Website" }}
              />
              <InvoiceGenInput
                hasError={Boolean(
                  errors["invoicegen-my-company-address-input"]
                )}
                config={register("invoicegen-my-company-address-input", {
                  required: true,
                })}
                inputProps={{ type: "text", placeholder: "Address" }}
              />
              <InvoiceGenInput
                hasError={Boolean(errors["invoicegen-city-state-zip-input"])}
                config={register("invoicegen-city-state-zip-input", {
                  required: true,
                })}
                inputProps={{ type: "text", placeholder: "City, State, Zip" }}
              />
              <InvoiceGenInput
                hasError={Boolean(errors["invoicegen-country-input"])}
                config={register("invoicegen-country-input", {
                  required: true,
                })}
                inputProps={{ type: "text", placeholder: "Country" }}
              />
              <InvoiceGenInput
                hasError={Boolean(errors["invoicegen-phone-input"])}
                config={register("invoicegen-phone-input", {
                  required: true,
                })}
                inputProps={{ type: "phone", placeholder: "Phone" }}
              />
              <InvoiceGenInput
                hasError={Boolean(errors["invoicegen-email-input"])}
                config={register("invoicegen-email-input", {
                  required: true,
                })}
                inputProps={{ type: "email", placeholder: "Email" }}
              />
            </div>
            <div className="col">
              {/* User info */}
              <InvoiceGenLogo />
            </div>
          </div>
          <div className="row mt-5 mb-5">
            <div className="col">
              {/* Client info*/}
              <InvoiceGenInput
                hasError={Boolean(errors["invoicegen-client-company-input"])}
                config={register("invoicegen-client-company-input", {
                  required: true,
                })}
                inputProps={{ type: "text", placeholder: "Client Company" }}
              />
              <InvoiceGenInput
                hasError={Boolean(errors["invoicegen-client-address-input"])}
                config={register("invoicegen-client-address-input", {
                  required: true,
                })}
                inputProps={{ type: "text", placeholder: "Address" }}
              />
              <InvoiceGenInput
                hasError={Boolean(
                  errors["invoicegen-client-city-state-zip-input"]
                )}
                config={register("invoicegen-client-city-state-zip-input", {
                  required: true,
                })}
                inputProps={{ type: "text", placeholder: "City, State, Zip" }}
              />
              <InvoiceGenInput
                hasError={Boolean(errors["invoicegen-client-country-input"])}
                config={register("invoicegen-client-country-input", {
                  required: true,
                })}
                inputProps={{ type: "text", placeholder: "Country" }}
              />
            </div>
            <div className="col">
              <div className="row">
                {/* Invoice info*/}
                <InvoiceGenInput
                  hasError={Boolean(errors["invoicegen-invoice-number-input"])}
                  config={register("invoicegen-invoice-number-input", {
                    required: true,
                  })}
                  inputProps={{ type: "number", placeholder: "Invoice Number" }}
                  label="Invoice Number"
                />
                <InvoiceGenInput
                  hasError={Boolean(errors["invoicegen-invoice-date-input"])}
                  config={register("invoicegen-invoice-date-input", {
                    required: true,
                  })}
                  inputProps={{ type: "date", placeholder: "Invoice Date" }}
                  label="Invoice Date"
                />
                <InvoiceGenInput
                  hasError={Boolean(
                    errors["invoicegen-invoice-due-date-input"]
                  )}
                  config={register("invoicegen-invoice-due-date-input", {
                    required: true,
                  })}
                  inputProps={{ type: "date", placeholder: "Due Date" }}
                  label="Due Date"
                />
              </div>
            </div>
          </div>
          {/*items table*/}
          <InvoiceGenTable />
          <div className="row">
            <div className="col">
              {/*notes boc*/}
              <InvoiceGenCommentBox />
            </div>
            <div className="col">
              {/*invoice total*/}
              <InvoiceGenBillSummary />
            </div>
          </div>
          {/*Submit*/}
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
          {downloadUrl && (
            <a
              className="btn btn-warning"
              download={"invoice.pdf"}
              href={downloadUrl}
            >
              Download PDF
            </a>
          )}
          {loading && (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </form>

        <footer className="mt-5">
          This invoice was created using the Devcran Invoice Template Generator
        </footer>
      </>
    </FormProvider>
  );
};

export default InvoiceGenerator;
