import { parse } from "node-html-parser";
import { InterfaceInvoiceData } from "../../pages/api/invoice-generator";
import HTML_INVOCE_TEMPLATE_STRING from "./htmlInvoiceTemplateString";

type InvoiceData = InterfaceInvoiceData;

type InvoiceHtmlTemplateGenerator = {
  generate: (invoiceData: InvoiceData) => string;
};

function InvoiceHtmlTemplateGenerator(): InvoiceHtmlTemplateGenerator {
  const template = parse(HTML_INVOCE_TEMPLATE_STRING);

  const createTableRow = (row: Record<string, string>, colIndex: number) => {
    const newRow = parse(`<tr id=col-${colIndex}/>`);
    template.querySelector("#invoicegen-table tbody")?.appendChild(newRow);

    Object.values(row).forEach((rowItemValue, rowIndex) => {
      const newRowItem = parse(`<td id=row-${rowIndex}-col${colIndex}/>`);
      template.querySelector(`#col-${colIndex}`)?.appendChild(newRowItem);
      template.getElementById(`row-${rowIndex}-col${colIndex}`).textContent =
        rowItemValue;
    });
  };

  const createTableHeader = (headerData: Record<string, string>) => {
    Object.values(headerData).forEach((value, idx) => {
      template.getElementById(`invoicegen-table-header-${idx}`).textContent =
        value;
    });
  };

  const createTable = (invoiceData: InterfaceInvoiceData) => {
    const tableItems = invoiceData["invoicegen-table"];
    console.log(
      "🚀 ~ file: invoiceHtmlTemplateGenerator.ts ~ line 35 ~ createTable ~ tableItems",
      tableItems
    );
    const tableHead = invoiceData["invoicegen-table-head"];
    console.log(
      "🚀 ~ file: invoiceHtmlTemplateGenerator.ts ~ line 37 ~ createTable ~ tableHead",
      tableHead
    );

    Object.values(tableItems).forEach(createTableRow);
    createTableHeader(tableHead);
    template
      .getElementById("invoicegen-my-company-input")
      .setAttribute("value", invoiceData["invoicegen-my-company-input"]);
    template
      .getElementById("invoicegen-full-name-input")
      .setAttribute("value", invoiceData["invoicegen-full-name-input"]);
    template
      .getElementById("invoicegen-my-company-website-input")
      .setAttribute(
        "value",
        invoiceData["invoicegen-my-company-website-input"]
      );
    template
      .getElementById("invoicegen-my-company-address-input")
      .setAttribute(
        "value",
        invoiceData["invoicegen-my-company-address-input"]
      );
    template
      .getElementById("invoicegen-city-state-zip-input")
      .setAttribute("value", invoiceData["invoicegen-city-state-zip-input"]);
    template
      .getElementById("invoicegen-country-input")
      .setAttribute("value", invoiceData["invoicegen-country-input"]);
    template
      .getElementById("invoicegen-phone-input")
      .setAttribute("value", invoiceData["invoicegen-phone-input"]);
    template
      .getElementById("invoicegen-email-input")
      .setAttribute("value", invoiceData["invoicegen-email-input"]);
    template
      .getElementById("invoicegen-client-company-input")
      .setAttribute("value", invoiceData["invoicegen-client-company-input"]);
    template
      .getElementById("invoicegen-client-address-input")
      .setAttribute("value", invoiceData["invoicegen-client-address-input"]);
    template
      .getElementById("invoicegen-invoice-number-input")
      .setAttribute("value", invoiceData["invoicegen-invoice-number-input"]);
    template
      .getElementById("invoicegen-invoice-date-input")
      .setAttribute("value", invoiceData["invoicegen-invoice-date-input"]);
    template
      .getElementById("invoicegen-invoice-due-date-input")
      .setAttribute("value", invoiceData["invoicegen-invoice-due-date-input"]);
    template
      .getElementById("invoicegen-client-country-input")
      .setAttribute("value", invoiceData["invoicegen-client-country-input"]);
    template
      .getElementById("invoicegen-subtotal-label-input")
      .setAttribute("value", invoiceData["invoicegen-subtotal-label-input"]);
    template
      .getElementById("invoicegen-subtotal-value-input")
      .setAttribute("value", invoiceData["invoicegen-subtotal-value-input"]);
    template
      .getElementById("invoicegen-tax-label-input")
      .setAttribute("value", invoiceData["invoicegen-tax-label-input"]);
    template
      .getElementById("invoicegen-tax-value-input")
      .setAttribute("value", invoiceData["invoicegen-tax-value-input"]);
    template
      .getElementById("invoicegen-total-label-input")
      .setAttribute("value", invoiceData["invoicegen-total-label-input"]);
    template
      .getElementById("invoicegen-total-value-input")
      .setAttribute("value", invoiceData["invoicegen-total-value-input"]);
    template
      .getElementById("invoicegen-discount-value-input")
      .setAttribute("value", invoiceData["invoicegen-discount-value-input"]);
    template
      .getElementById("invoicegen-discount-label-input")
      .setAttribute("value", invoiceData["invoicegen-discount-label-input"]);
  };
  return {
    generate: function (invoiceData) {
      createTable(invoiceData);
      return template.toString();
    },
  };
}

export default InvoiceHtmlTemplateGenerator();
