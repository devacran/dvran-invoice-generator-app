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
  try {
    console.log(req.body);
    const prueba = req.body["prueba"];
    const prueba2 = req.body["invoicegen-table"];
    const prueba3 = req.body["invoicegen-table-head"];
    console.log(prueba, prueba2, prueba3);
    req.body.hasOwnProperty("0") ? console.log("si") : console.log("no");
    res.status(201).json({ msg: "ok", error: "ninguno" });
  } catch (e) {
    res.status(400).json({ msg: "an error has occured", error: e as string });
  }
}
