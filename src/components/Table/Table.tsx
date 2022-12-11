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
  const { columns = [], dataSource = [] } = props;

  return (
    <div>
      <table className="table">
        <thead className="table-head">
          <tr>
            {columns.map((column) => (
              <th className="table-head-cell" key={column.name}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="table-body">
          {dataSource.map((record) => (
            <tr key={record.key} className="table-body-row">
              {columns.map((column) => {
                if (column.render) {
                  return (
                    <td className="table-body-row-cell" key={column.name}>
                      {column.render(record)}
                    </td>
                  );
                }
                return (
                  <td className="table-body-row-cell" key={column.name}>
                    {record[column.name]}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
