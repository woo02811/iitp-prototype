import React from "react";
import {useTable, useSortBy} from "react-table";

/**
 * https://karthikraja555.medium.com/server-side-pagination-in-react-table-a4311b730d19
 *   const columns = [{Header:'1',accessor:'A'},{Header:'2',accessor:'B'}]
 *   return (
 *     <Styles>
 *       <ReactTable tableHeader={columns} />
 *     </Styles>
 *   )
 *   const Styles = styled.div`
 *   padding: 1rem;
 *
 *   table {
 *     border-spacing: 0;
 *     border: 1px solid black;
 *
 *     tr {
 *       :last-child {
 *         td {
 *           border-bottom: 0;
 *         }
 *       }
 *     }
 *
 *     th,
 *     td {
 *       margin: 0;
 *       padding: 0.5rem;
 *       border-bottom: 1px solid black;
 *       border-right: 1px solid black;
 *
 *       :last-child {
 *         border-right: 0;
 *       }
 *     }
 *   }
 * `
 */


function ReactTable({ tableHeader, tableBody }) {

  const columns = React.useMemo(
    () => tableHeader,
    []
  )
  console.log(tableBody);
  const data = React.useMemo(() => [{A:'1',B:'1'},{A:'2',B:'2'},{A:'3',B:'3'}], [])
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  },useSortBy)

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
                                             // Sort
            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
              {column.render('Header')}
              {/* Sort */}
              <span>
                {column.isSorted
                    ? column.isSortedDesc
                    ? ' 🔽'
                    : ' 🔼'
                    : ' 🔽🔼'
                }
              </span>
            </th>
          ))}
        </tr>
      ))}
      </thead>
      <tbody {...getTableBodyProps()}>
      {rows.map((row, i) => {
        prepareRow(row)
        return (
          <tr {...row.getRowProps()} style={{position:"sticky", top:"0"}}>
            {row.cells.map(cell => {
              return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
            })}
          </tr>
        )
      })}
      </tbody>
    </table>
  )
}
ReactTable.defaultProps={
  tableBody:[]
}
export default ReactTable;
