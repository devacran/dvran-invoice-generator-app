import React, { FC } from "react";

const InvoiceGenTable: FC = () => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>DESC</th>
            <th>QTY</th>
            <th>PRICE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Item 1</td>
            <td>1</td>
            <td>$1.00</td>
          </tr>
        </tbody>
      </table>
      <div>add more</div>
    </>
  );
};

export default InvoiceGenTable;
