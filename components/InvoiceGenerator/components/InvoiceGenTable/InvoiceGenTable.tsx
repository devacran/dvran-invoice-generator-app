import React, { FC } from "react";
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
            defaultValue: "1",
          }}
          config={register(`invoicegen-table.col-${id}.row-1`)}
        />
      </td>
      <td>
        <InvoiceGenInput
          inputProps={{
            type: "text",
            defaultValue: "2",
          }}
          config={register(`invoicegen-table.col-${id}.row-2`)}
        />
      </td>
      <td>
        <InvoiceGenInput
          inputProps={{
            type: "text",
            defaultValue: "3",
          }}
          config={register(`invoicegen-table.col-${id}.row-3`)}
        />
      </td>
      <td>
        <InvoiceGenInput
          inputProps={{
            type: "text",
            defaultValue: "4",
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
  const { register } = useFormContext();
  const [rows, setRows] = React.useState<any[]>([]);

  const addNewRow = () => {
    const newRows = [...rows];
    const newId = nanoid();
    newRows.push(newId);
    setRows(newRows);
  };

  const removeRow = (id: string) => {
    const newRows = [...rows];
    console.log(newRows.indexOf(id));
    newRows.splice(newRows.indexOf(id), 1);
    setRows(newRows);
  };

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
                }}
                config={register("invoicegen-table-head-1")}
              />
            </th>
            <th>
              <InvoiceGenInput
                inputProps={{
                  type: "text",
                  placeholder: "DESC",
                }}
                config={register("invoicegen-table-head-2")}
              />
            </th>
            <th>
              <InvoiceGenInput
                inputProps={{
                  type: "text",
                  placeholder: "qty",
                }}
                config={register("invoicegen-table-head-3")}
              />
            </th>
            <th>
              <InvoiceGenInput
                inputProps={{
                  type: "text",
                  placeholder: "price",
                }}
                config={register("invoicegen-table-head-4")}
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
