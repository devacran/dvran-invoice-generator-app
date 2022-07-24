import React, { useState } from "react";
import axios from "axios";
import { useForm, FormProvider } from "react-hook-form";

import InvoiceGenBillSummary from "./components/InvoiceGenBillSummary";
import InvoiceGenCommentBox from "./components/InvoiceGenCommentBox";
import InvoiceGenInput from "./components/InvoiceGenInput";
import InvoiceGenLogo from "./components/InvoiceGenLogo";
import InvoiceGenTable from "./components/InvoiceGenTable";

const InvoiceGenerator = () => {
  const [downloadUrl, setDownloadUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const formMethods = useForm();
  const {
    register,
    formState: { errors },
  } = formMethods;
  const onSubmit = (data) => {
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
                config={register("invoicegen-my-company-input")}
                inputProps={{
                  type: "text",
                  placeholder: "Your Company",
                }}
              />
              <InvoiceGenInput
                config={register("invoicegen-full-name-input")}
                inputProps={{ type: "text", placeholder: "Full Name" }}
              />
              <InvoiceGenInput
                config={register("invoicegen-my-company-website-input")}
                inputProps={{ type: "text", placeholder: "Website" }}
              />
              <InvoiceGenInput
                config={register("invoicegen-my-company-address-input")}
                inputProps={{ type: "text", placeholder: "Address" }}
              />
              <InvoiceGenInput
                config={register("invoicegen-city-state-zip-input")}
                inputProps={{ type: "text", placeholder: "City, State, Zip" }}
              />
              <InvoiceGenInput
                config={register("invoicegen-country-input")}
                inputProps={{ type: "text", placeholder: "Country" }}
              />
              <InvoiceGenInput
                config={register("invoicegen-phone-input")}
                inputProps={{ type: "phone", placeholder: "Phone" }}
              />
              <InvoiceGenInput
                config={register("invoicegen-email-input")}
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
                config={register("invoicegen-client-company-input")}
                inputProps={{ type: "text", placeholder: "Client Company" }}
              />
              <InvoiceGenInput
                config={register("invoicegen-client-address-input")}
                inputProps={{ type: "text", placeholder: "Address" }}
              />
              <InvoiceGenInput
                config={register("invoicegen-client-city-state-zip-input")}
                inputProps={{ type: "text", placeholder: "City, State, Zip" }}
              />
              <InvoiceGenInput
                config={register("invoicegen-client-country-input")}
                inputProps={{ type: "text", placeholder: "Country" }}
              />
            </div>
            <div className="col">
              <div className="row">
                {/* Invoice info*/}
                <InvoiceGenInput
                  config={register("invoicegen-invoice-number-input")}
                  inputProps={{ type: "number", placeholder: "Invoice Number" }}
                  label="Invoice Number"
                />
                <InvoiceGenInput
                  config={register("invoicegen-invoice-date-input")}
                  inputProps={{ type: "date", placeholder: "Invoice Date" }}
                  label="Invoice Date"
                />
                <InvoiceGenInput
                  config={register("invoicegen-invoice-due-date-input")}
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
