import React from 'react'
import FilterComponent from './filterComponent';
import { dataMocked } from '../datas/datasMocked';




export const GlobalFilter = () => {
	const [filterText, setFilterText] = React.useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
	const filteredItems = dataMocked.filter(
		item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
	);

	const subHeaderComponentMemo = React.useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

		return (
			<FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
		);
	}, [filterText, resetPaginationToggle]);

};
export default GlobalFilter;
