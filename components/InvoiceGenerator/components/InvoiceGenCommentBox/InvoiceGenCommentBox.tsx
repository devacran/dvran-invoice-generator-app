import React, { FC } from "react";
import { useFormContext } from "react-hook-form";
import InvoiceGenInput from "../InvoiceGenInput/InvoiceGenInput";

const InvoiceGenCommentBox: FC = () => {
  const { register } = useFormContext();

  return (
    <>
      <div>
        <h3>Comments</h3>
        <InvoiceGenInput.TextArea
          config={register("invoicegen-notes-input")}
          inputProps={{ type: "text" }}
        />
      </div>
    </>
  );
};

export default InvoiceGenCommentBox;
