import { FC } from "react";
import "./Table.scss";
interface Column {
  name: string;
  label: string;
  render?: (record: any) => JSX.Element;
}

interface TableProps {
  columns: Column[];
  dataSource: any[];
}

const Table: FC<TableProps> = (props) => {
  const { columns, dataSource } = props;

  return (
    <div>
      <h1>Table</h1>
      <table className="table">
        <thead className="table-head">
          <tr>
            {columns.map((column) => (
              <th key={column.name}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody className="table-body">
          {dataSource.map((record) => (
            <tr key={record.key}>
              {columns.map((column) => {
                if (column.render) {
                  return <td key={column.name}>{column.render(record)}</td>;
                }
                return <td key={column.name}>{record[column.name]}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
