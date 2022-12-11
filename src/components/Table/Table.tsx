import { FC, useEffect, useState } from "react";
import { BsSortDownAlt, BsSortUpAlt } from "react-icons/bs";
import { sortList } from "../../utils";
import "./Table.scss";

interface Column {
  name: string;
  label: string;
  render?: (record: any) => JSX.Element;
  sortable?: boolean;
}

interface TableProps {
  columns: Column[];
  dataSource: any[];
  defaultSortOrder?: boolean;
  defualtSortColumn?: string;
}

const Table: FC<TableProps> = (props) => {
  const {
    columns = [],
    dataSource = [],
    defaultSortOrder = false,
    defualtSortColumn = "",
  } = props;
  const [sortOrder, setSortOrder] = useState<boolean>(defaultSortOrder);
  const [sortColumn, setSortColumn] = useState<string>(defualtSortColumn);
  const [data, setData] = useState<any[]>(dataSource);

  useEffect(() => {
    const orderBy = sortOrder ? "asc" : "desc";
    setData(sortList(dataSource, sortColumn, orderBy));
  }, [sortOrder, sortColumn, dataSource]);

  const renderHeader = () => {
    return columns.map((column) => (
      <th className="table-head-cell" key={column.name}>
        {column.label}{" "}
        {column.sortable && (
          <span
            onClick={() => {
              setSortColumn(column.name);
              setSortOrder(!sortOrder);
            }}
          >
            {sortOrder ? <BsSortDownAlt /> : <BsSortUpAlt />}{" "}
            {column.name === sortColumn && <b>Active Sorting</b>}
          </span>
        )}
      </th>
    ));
  };

  return (
    <div>
      <table className="table">
        <thead className="table-head">
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody className="table-body">
          {data.map((record, index) => (
            <tr key={index} className="table-body-row">
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
