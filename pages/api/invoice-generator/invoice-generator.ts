// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import pdf, { CreateOptions } from "html-pdf";
import InvoiceHtmlTemplateGenerator from "../../../lib/api/invoiceHtmlTemplateGenerator";

type Data =
  | {
      error: string;
    }
  | Buffer;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = req.body;
  const html = InvoiceHtmlTemplateGenerator.generate(data);
  const options: CreateOptions = { format: "Letter" };
  pdf.create(html.toString(), options).toBuffer(function (err, buffer) {
    if (err) res.status(400).json({ error: "an error has occureds" });
    res.setHeader("Content-Type", "application/pdf");
    res.status(201).send(buffer);
  });
}
