import '../css/employelist.css'

import * as React from 'react'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
} from '@tanstack/react-table'

import { useSelector } from 'react-redux'

import { AppState } from '../store/types'

type Person = {
  firstName: string
  lastName: string
  startDate: number
  dateOfBirth: number
  // startDateFormat: number
  departement: number
  dateFormat: string
  street: string
  city: string
  state: string
  zipCode: number
}
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
  // columnHelper.accessor('startDateFormat', {
  columnHelper.accessor('startDate', {
    header: () => 'Star Date',
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('departement', {
    header: () => <span>Departement</span>,
    footer: (info) => info.column.id,
  }),
  // columnHelper.accessor('dateFormat', {
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
  columnHelper.accessor('state', {
    header: 'State',
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('zipCode', {
    header: 'Zip Code',
    footer: (info) => info.column.id,
  }),
]

function Table() {
  const employeesList = useSelector((state: AppState) => state.employees.list)
  console.log(employeesList)

  const [data, setData] = React.useState(() => [...employeesList])
  const [globalFilter, setGlobalFilter] = React.useState('')

  React.useEffect(() => {
    setData([...employeesList])
  }, [employeesList])

  const rerender = React.useReducer(() => ({}), {})[1]
  const [filtering, setFiltering] = React.useState('')
  const [sorting, setSorting] = React.useState<any>([])

  // const columns = React.useMemo<ColumnDef<Person>[]>(
  //   () => [
  //     {
  //       header: 'First Name',
  //       accessorKey: 'firstName',
  //       cell: (info) => info.getValue(),
  //       footer: (info) => info.column.id,
  //     },
  //     {
  //       accessorFn: (row) => row.lastName,
  //       id: 'lastName',
  //       cell: (info) => info.getValue(),
  //       footer: (info) => info.column.id,
  //     },
  //     {
  //       header: 'Star Date',
  //       // accessorKey: 'startDateFormat',
  //       accessorKey: 'startDate',
  //       cell: (info) => info.renderValue(),
  //       footer: (info) => info.column.id,
  //     },
  //     {
  //       accessorKey: 'departement',
  //       Footer: (info) => info.column.id,
  //     },
  //     {
  //       header: 'Date of Birth',
  //       accessorKey: 'dateFormat',
  //       Footer: (info) => info.column.id,
  //     },
  //     {
  //       header: 'Street',
  //       accessorKey: 'street',
  //       Footer: (info) => info.column.id,
  //     },
  //     {
  //       header: 'City',
  //       accessorKey: 'city',
  //       Footer: (info) => info.column.id,
  //     },
  //     {
  //       header: 'State',
  //       accessorKey: 'state',
  //       Footer: (info) => info.column.id,
  //     },
  //     {
  //       header: 'Zip Code',
  //       accessorKey: 'zipCode',
  //       Footer: (info) => info.column.id,
  //     },
  //   ],
  //   [],
  // )

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter: filtering,
      sorting: sorting,
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setFiltering,
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
  })

  return (
    <div className="table-container">
      <br />
      <div className="p-2" id="table-content">
        <select
          id="show"
          value={table.options.state.pagination?.pageSize}
          onChange={(e) => {
            const pageSize = parseInt(e.target.value, 10)
            table.setPageSize(pageSize)
          }}
        >
          {[1, 2, 3, 10, 25, 50].map((pageSizeEl) => {
            return (
              <option key={pageSizeEl} value={pageSizeEl}>
                Show {pageSizeEl}
              </option>
            )
          })}
        </select>

        <input
          type="text"
          value={filtering}
          onChange={(e) => setFiltering(e.target.value)}
          id="table-filtre"
          placeholder="Recherche"
        />

        <br />
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                        {
                          { asc: ' 🔼', desc: '🔽' }[
                            header.column.getIsSorted()
                          ]
                        }
                      </div>
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
        <div id="zone-next_previous">
          {/* <button onClick={() => rerender()} className="border p-2">
            Rerender
          </button> */}

          <span className="flex items-center gap-1" id="page-count">
            <div>Page </div>
            <strong>
              {table.getState().pagination.pageIndex + 1} sur{' '}
              {table.getPageCount()}
            </strong>
          </span>
          <div className="zone_button-next-previous">
            <button onClick={() => table.previousPage()}>Précédent</button>
            <button onClick={() => table.nextPage()}>Suivant</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Table
