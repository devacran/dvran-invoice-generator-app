export interface InterfaceInvoiceData {
  "invoicegen-my-company-input": string;
  invoicegen_my_company_input2: string;
  "invoicegen-full-name-input": string;
  "invoicegen-my-company-website-input": string;
  "invoicegen-my-company-address-input": string;
  "invoicegen-city-state-zip-input": string;
  "invoicegen-country-input": string;
  "invoicegen-phone-input": string;
  "invoicegen-email-input": string;
  "invoicegen-client-company-input": string;
  "invoicegen-client-address-input": string;
  "invoicegen-client-city-state-zip-input": string;
  "invoicegen-invoice-number-input": string;
  "invoicegen-invoice-date-input": string;
  "invoicegen-invoice-due-date-input": string;
  "invoicegen-client-country-input": string;
  "invoicegen-img": string;
  "invoicegen-table": Record<string, Record<string, string>>;
  "invoicegen-table-head": {
    id: string;
    price: string;
    desc: string;
    qty: string;
  };
  "invoicegen-table-head-2": string;
  "invoicegen-table-head-3": string;
  "invoicegen-table-head-4": string;
  "invoicegen-notes-input": string;
  "invoicegen-subtotal-label-input": string;
  "invoicegen-subtotal-value-input": string;
  "invoicegen-tax-label-input": string;
  "invoicegen-tax-value-input": string;
  "invoicegen-total-label-input": string;
  "invoicegen-total-value-input": string;
  "invoicegen-discount-label-input": string;
  "invoicegen-discount-value-input": string;
}
