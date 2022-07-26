// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import pdf, { CreateOptions } from "html-pdf";
import InvoiceHtmlTemplateGenerator from "../../../lib/api/invoiceHtmlTemplateGenerator";

type Data =
  | {
      msg: string;
      error: string;
    }
  | Buffer;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    res.status(405).end("Method not allowed");
    return;
  }

  try {
    const data = JSON.stringify(req.body);

    const html = InvoiceHtmlTemplateGenerator.generate(JSON.parse(data));
    const options: CreateOptions = { format: "Letter" };
    const pdfBuffer = await new Promise<Data>((resolve, reject) => {
      pdf.create(html.toString(), options).toBuffer(function (err, buffer) {
        if (err) reject();
        resolve(buffer);
      });
    });
    res.status(201).send(pdfBuffer);
  } catch (e) {
    res.status(400).json({ msg: "an error has occured", error: e as string });
  }
}
