import React from "react";

import TableTitle from "./TableTitle";
import TableRow from "./TableRow";

const Table = (props) => {
	const data = props.data
	const titles = props.titles

	return (
		<table className="border-3 w-full overflow-y-auto z-100 h-[100px]">
			<thead>
				<TableTitle titles={titles} />
			</thead>

			<tbody>
				{data.map((item, index) => <TableRow key={index} row={item} /> )}
			</tbody>
		</table>
	);
};

export default Table;