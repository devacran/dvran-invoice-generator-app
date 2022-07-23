import React from "react";
//import InvoiceGenProvider from "./invoiceGenStore";
import { useForm, FormProvider } from "react-hook-form";

import InvoiceGenBillSummary from "./components/InvoiceGenBillSummary";
import InvoiceGenCommentBox from "./components/InvoiceGenCommentBox";
import InvoiceGenInput from "./components/InvoiceGenInput";
import InvoiceGenLogo from "./components/InvoiceGenLogo";
import InvoiceGenTable from "./components/InvoiceGenTable";

const InvoiceGenerator = () => {
  const formMethods = useForm();
  const { register } = formMethods;
  const onSubmit = (data) => console.log(data);
  return (
    <FormProvider {...formMethods}>
      <>
        <form onSubmit={formMethods.handleSubmit(onSubmit)}>
          {/* User info */}
          <InvoiceGenLogo />
          {/* User info */}
          <InvoiceGenInput
            config={register("invoicegen-my-company-input")}
            inputProps={{ type: "text" }}
          />
          <InvoiceGenInput
            config={register("invoicegen-full-name-input")}
            inputProps={{ type: "text" }}
          />
          <InvoiceGenInput
            config={register("invoicegen-my-company-website-input")}
            inputProps={{ type: "text" }}
          />
          <InvoiceGenInput
            config={register("invoicegen-my-company-address-input")}
            inputProps={{ type: "text" }}
          />
          <InvoiceGenInput
            config={register("invoicegen-city-state-zip-input")}
            inputProps={{ type: "text" }}
          />
          <InvoiceGenInput
            config={register("invoicegen-country-input")}
            inputProps={{ type: "text" }}
          />
          <InvoiceGenInput
            config={register("invoicegen-phone-input")}
            inputProps={{ type: "phone" }}
          />
          <InvoiceGenInput
            config={register("invoicegen-email-input")}
            inputProps={{ type: "email" }}
          />

          {/* Client info*/}
          <InvoiceGenInput
            config={register("invoicegen-client-company-input")}
            inputProps={{ type: "text" }}
          />
          <InvoiceGenInput
            config={register("invoicegen-client-address-input")}
            inputProps={{ type: "text" }}
          />
          <InvoiceGenInput
            config={register("invoicegen-client-city-state-zip-input")}
            inputProps={{ type: "text" }}
          />

          {/* Invoice info*/}
          <InvoiceGenInput
            config={register("invoicegen-invoice-number-input")}
            inputProps={{ type: "number" }}
          />
          <InvoiceGenInput
            config={register("invoicegen-invoice-date-input")}
            inputProps={{ type: "date" }}
          />
          <InvoiceGenInput
            config={register("invoicegen-invoice-due-date-input")}
            inputProps={{ type: "date" }}
          />
          <InvoiceGenInput
            config={register("invoicegen-client-city-state-zip-input")}
            inputProps={{ type: "text" }}
          />
          <InvoiceGenInput
            config={register("invoicegen-client-country-input")}
            inputProps={{ type: "text" }}
          />
          {/*items table*/}
          <InvoiceGenTable></InvoiceGenTable>
          {/*notes boc*/}
          <InvoiceGenCommentBox></InvoiceGenCommentBox>
          {/*invoice total*/}
          <InvoiceGenBillSummary />
          {/*Submit*/}
          <input type="submit" />
        </form>
        This invoice was created using the Devcran Invoice Template Generator
      </>
    </FormProvider>
  );
};

export default InvoiceGenerator;
