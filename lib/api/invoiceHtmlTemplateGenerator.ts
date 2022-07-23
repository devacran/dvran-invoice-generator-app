import { parse } from "node-html-parser";
type InvoiceData = { items: any[] };

type InvoiceHtmlTemplateGenerator = {
  generate: (invoiceData: InvoiceData) => string;
};

function InvoiceHtmlTemplateGenerator(): InvoiceHtmlTemplateGenerator {
  const template = parse(
    `<!doctype html><html><body>hola mundo mundial<div id="invoicegen-table"></div></body></html>`
  );

  const addItem = () => {
    const newItem = parse("<div>item</div>");
    template.querySelector("#invoicegen-table")?.appendChild(newItem);
  };
  return {
    generate: function (invoiceData) {
      const { items } = invoiceData;
      items.forEach(addItem);
      return template.toString();
    },
  };
}

export default InvoiceHtmlTemplateGenerator();
