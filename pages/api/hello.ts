// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import pdf, { CreateOptions } from "html-pdf";
import invoiceHtmlTemplateGenerator from "../../lib/api/invoiceHtmlTemplateGenerator";
type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const html = invoiceHtmlTemplateGenerator.generate({ items: [1, 2, 3, 4] });
  const options: CreateOptions = { format: "Letter" };
  pdf.create(html.toString(), options).toBuffer(function (err, buffer) {
    res.setHeader("Content-Type", "application/pdf");
    res.status(200).send(buffer);
  });
}
