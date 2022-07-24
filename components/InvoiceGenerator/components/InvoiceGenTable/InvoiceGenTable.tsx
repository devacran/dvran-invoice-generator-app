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
      <td>
        <InvoiceGenInput
          inputProps={{
            type: "text",
          }}
          config={register(`invoicegen-table.col-${id}.row-1`)}
        />
      </td>
      <td>
        <InvoiceGenInput
          inputProps={{
            type: "text",
          }}
          config={register(`invoicegen-table.col-${id}.row-2`)}
        />
      </td>
      <td>
        <InvoiceGenInput
          inputProps={{
            type: "text",
          }}
          config={register(`invoicegen-table.col-${id}.row-3`)}
        />
      </td>
      <td>
        <InvoiceGenInput
          inputProps={{
            type: "text",
          }}
          config={register(`invoicegen-table.col-${id}.row-4`)}
        />
        <button
          onClick={() => {
            removeRow(id);
          }}
        >
          X
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
      <table>
        <thead>
          <tr>
            <th>
              <InvoiceGenInput
                inputProps={{
                  type: "text",
                  placeholder: "ID",
                  defaultValue: "ID",
                }}
                config={register("invoicegen-table-head.id")}
              />
            </th>
            <th>
              <InvoiceGenInput
                inputProps={{
                  type: "text",
                  placeholder: "DESC",
                  defaultValue: "DESC",
                }}
                config={register("invoicegen-table-head.desc")}
              />
            </th>
            <th>
              <InvoiceGenInput
                inputProps={{
                  type: "text",
                  placeholder: "qty",
                  defaultValue: "QTY",
                }}
                config={register("invoicegen-table-head.qty")}
              />
            </th>
            <th>
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
