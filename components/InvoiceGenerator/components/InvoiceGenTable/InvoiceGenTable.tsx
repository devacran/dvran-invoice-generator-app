import React, { FC, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import InvoiceGenInput from "../InvoiceGenInput";
import { nanoid } from "nanoid";

type RowProps = {
  id: string;
  removeRow: (id: string) => void;
};

const Row = ({ id, removeRow }: RowProps) => {
  const { register } = useFormContext();
  return (
    <tr>
      <td scope="row">
        <InvoiceGenInput
          inputProps={{
            type: "text",
          }}
          config={register(`invoicegen-table.col-${id}.row-1`)}
        />
      </td>
      <td scope="row">
        <InvoiceGenInput
          inputProps={{
            type: "text",
          }}
          config={register(`invoicegen-table.col-${id}.row-2`)}
        />
      </td>
      <td scope="row">
        <InvoiceGenInput
          inputProps={{
            type: "text",
          }}
          config={register(`invoicegen-table.col-${id}.row-3`)}
        />
      </td>
      <td scope="row" className="position-relative">
        <InvoiceGenInput
          inputProps={{
            type: "text",
          }}
          config={register(`invoicegen-table.col-${id}.row-4`)}
        />
        <button
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => {
            removeRow(id);
          }}
        >
          X<span className="visually-hidden">delete row</span>
        </button>
      </td>
    </tr>
  );
};

const InvoiceGenTable: FC = () => {
  const [rows, setRows] = React.useState<any[]>([]);

  const { register } = useFormContext();

  const addNewRow = () => {
    const newRows = [...rows];
    const newId = nanoid();
    newRows.push(newId);
    setRows(newRows);
  };

  const removeRow = (id: string) => {
    const newRows = [...rows];
    newRows.splice(newRows.indexOf(id), 1);
    setRows(newRows);
  };

  useEffect(() => {
    addNewRow();
  }, []);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              <InvoiceGenInput
                inputProps={{
                  type: "text",
                  placeholder: "ID",
                  defaultValue: "ID",
                }}
                config={register("invoicegen-table-head.id")}
              />
            </th>
            <th scope="col">
              <InvoiceGenInput
                inputProps={{
                  type: "text",
                  placeholder: "DESC",
                  defaultValue: "DESC",
                }}
                config={register("invoicegen-table-head.desc")}
              />
            </th>
            <th scope="col">
              <InvoiceGenInput
                inputProps={{
                  type: "text",
                  placeholder: "qty",
                  defaultValue: "QTY",
                }}
                config={register("invoicegen-table-head.qty")}
              />
            </th>
            <th scope="col">
              <InvoiceGenInput
                inputProps={{
                  type: "text",
                  placeholder: "price",
                  defaultValue: "PRICE",
                }}
                config={register("invoicegen-table-head.price")}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((rowId) => (
            <Row key={rowId} id={rowId} removeRow={removeRow} />
          ))}
        </tbody>
      </table>
      <button
        className="btn btn-info"
        type="button"
        onClick={() => {
          addNewRow();
        }}
      >
        ADD MORE
      </button>
    </>
  );
};

export default InvoiceGenTable;
