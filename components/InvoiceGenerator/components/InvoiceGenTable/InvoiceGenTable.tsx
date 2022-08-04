import React, { FC, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import InvoiceGenInput from "../InvoiceGenInput";
import { nanoid } from "nanoid";
import { InterfaceInvoiceData } from "../../../../pages/api/invoice-generator";

type RowProps = {
  id: string;
  removeRow: (id: string) => void;
};

const Row = ({ id, removeRow }: RowProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<InterfaceInvoiceData>();
  return (
    <tr>
      <td scope="row">
        <InvoiceGenInput
          hasError={Boolean(
            errors[`invoicegen-table`]?.[`row-${id}`]?.[`col-1`]
          )}
          inputProps={{
            type: "text",
          }}
          config={register(`invoicegen-table.row-${id}.col-1`, {
            required: true,
          })}
        />
      </td>
      <td scope="row">
        <InvoiceGenInput
          hasError={Boolean(
            errors[`invoicegen-table`]?.[`row-${id}`]?.[`col-2`]
          )}
          inputProps={{
            type: "text",
          }}
          config={register(`invoicegen-table.row-${id}.col-2`, {
            required: true,
          })}
        />
      </td>
      <td scope="row">
        <InvoiceGenInput
          hasError={Boolean(
            errors[`invoicegen-table`]?.[`row-${id}`]?.[`col-3`]
          )}
          inputProps={{
            type: "text",
          }}
          config={register(`invoicegen-table.row-${id}.col-3`, {
            required: true,
          })}
        />
      </td>
      <td scope="row" className="position-relative">
        <InvoiceGenInput
          hasError={Boolean(
            errors[`invoicegen-table`]?.[`row-${id}`]?.[`col-4`]
          )}
          inputProps={{
            type: "text",
          }}
          config={register(`invoicegen-table.row-${id}.col-4`, {
            required: true,
          })}
        />
        <button
          type="button"
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
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const addNewRow = () => {
    const newRows = [...rows];
    const newId = nanoid();
    newRows.push(newId);
    setRows(newRows);
  };

  const removeRow = (id: string) => {
    if (rows.length === 1) {
      return;
    }
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
                hasError={Boolean(errors["invoicegen-table-head"]?.id)}
                inputProps={{
                  type: "text",
                  placeholder: "ID",
                  defaultValue: "ID",
                }}
                config={register("invoicegen-table-head.id", {
                  required: true,
                })}
              />
            </th>
            <th scope="col">
              <InvoiceGenInput
                hasError={Boolean(errors["invoicegen-table-head"]?.desc)}
                inputProps={{
                  type: "text",
                  placeholder: "DESC",
                  defaultValue: "DESC",
                }}
                config={register("invoicegen-table-head.desc", {
                  required: true,
                })}
              />
            </th>
            <th scope="col">
              <InvoiceGenInput
                hasError={Boolean(errors["invoicegen-table-head"]?.qty)}
                inputProps={{
                  type: "text",
                  placeholder: "qty",
                  defaultValue: "QTY",
                }}
                config={register("invoicegen-table-head.qty", {
                  required: true,
                })}
              />
            </th>
            <th scope="col">
              <InvoiceGenInput
                hasError={Boolean(errors["invoicegen-table-head"]?.price)}
                inputProps={{
                  type: "text",
                  placeholder: "price",
                  defaultValue: "PRICE",
                }}
                config={register("invoicegen-table-head.price", {
                  required: true,
                })}
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
