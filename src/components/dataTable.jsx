import React from 'react';
import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux';

const columns = [
    {
      name: 'Prénom',
      selector: row => row.firstName,
      sortable: true,
    },
    {
      name: 'Nom de famille',
      selector: row => row.lastName,
      sortable: true,
    },
    {
      name: 'Date de début',
      selector: row => row.startDate,
      sortable: true,
    },
    {
      name: 'Département',
      selector: row => row.departement,
      sortable: true,
    },
    {
      name: 'Date de naissance',
      selector: row => row.dateOfBirth,
      sortable: true,
    },
    {
      name: 'Rue',
      selector: row => row.street,
      sortable: true,
    },
    {
      name: 'Ville',
      selector: row => row.city,
      sortable: true,
    },
    {
      name: 'État',
      selector: row => row.state,
      sortable: true,
    },
    {
      name: 'zipCode',
      selector: row => row.zipCode,
      sortable: true,
    },
  ];
  

// const data = [
//   	{
// 		id: 1,
// 		title: 'Beetlejuice',
// 		year: '1988',
// 	},
// 	{
// 		id: 2,
// 		title: 'Ghostbusters',
// 		year: '1984',
// 	},
// ]

function Table() {
    const employeesList = useSelector((state) => state.employees.list)
    console.log(employeesList);
    const [data, setData] = React.useState(() => [...employeesList])
    console.log(data);
    React.useEffect(() => {
        setData([...employeesList])
      }, [employeesList])
	return (
		<DataTable
			columns={columns}
			data={data}
		/>
	);
};
export default Table