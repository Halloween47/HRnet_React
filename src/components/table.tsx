import '../css/employelist.css'

import * as React from 'react'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { useSelector } from 'react-redux'

import { AppState } from '../store/types'

type Person = {
  firstName: string
  lastName: string
  starDate: number
  departement: number
  dateOfBirth: string
  street: string
  city: string
  // state: string
  zipCode: number
}

const defaultData: Person[] = [
  // {
  //   firstName: 'tanner',
  //   lastName: 'linsley',
  //   stardate: 24,
  //   departement: 100,
  //   dateOfBirth: 'In Relationship',
  //   street: 50,
  //   city: 'San Francisco',
  //   // state: 'Arizona',
  //   zipcode: 21456,
  // },
  // {
  //   firstName: 'tandy',
  //   lastName: 'miller',
  //   stardate: 40,
  //   departement: 40,
  //   dateOfBirth: 'Single',
  //   street: 80,
  //   city: 'San Francisco',
  //   // state: 'Arizona',
  //   zipcode: 21456,
  // },
  // {
  //   firstName: 'joe',
  //   lastName: 'dirte',
  //   stardate: 45,
  //   departement: 20,
  //   dateOfBirth: 'Complicated',
  //   street: 10,
  //   city: 'San Francisco',
  //   // state: 'Arizona',
  //   zipcode: 21456,
  // },
]

const columnHelper = createColumnHelper<Person>()

const columns = [
  columnHelper.accessor('firstName', {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.lastName, {
    id: 'lastName',
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Last Name</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('starDate', {
    header: () => 'Star Date',
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('departement', {
    header: () => <span>Departement</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('dateOfBirth', {
    header: 'Date of Birth',
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('street', {
    header: 'Street',
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('city', {
    header: 'City',
    footer: (info) => info.column.id,
  }),
  // columnHelper.accessor('state', {
  //   header: 'State',
  //   footer: (info) => info.column.id,
  // }),
  columnHelper.accessor('zipCode', {
    header: 'Zip Code',
    footer: (info) => info.column.id,
  }),
]

function Table() {
  const employeesList = useSelector((state: AppState) => state.employees.list)
  console.log(employeesList)

  const [data, setData] = React.useState(() => [...employeesList])
  // const [data, setData] = React.useState<Person[]>([]);

  React.useEffect(() => {
    setData([...employeesList])
  }, [employeesList])

  const rerender = React.useReducer(() => ({}), {})[1]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <>
      <br />
      <div className="p-2">
        <br />
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {data.length !== 0
              ? table.getRowModel().rows.map((row) => (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              : 'No data available'}
          </tbody>
          <tfoot>
            {table.getFooterGroups().map((footerGroup) => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.footer,
                          header.getContext(),
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
        <div className="h-4" />
        <button onClick={() => rerender()} className="border p-2">
          Rerender
        </button>
      </div>
    </>
  )
}
export default Table

/////////////////////
/////////////////////
