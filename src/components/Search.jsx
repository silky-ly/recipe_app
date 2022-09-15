import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
	const history = useHistory();

	const [search, setSearch] = useState('');

	const handleChange = e => {
		setSearch(e.target.value);
		console.log(search, 'searched');
	};

	const onSubmit = e => {
		e.preventDefault();
		history.push(`/results?query=${search}`);
		setSearch('');
	};

	return (
		<>
			<div className="search-field">
				<form
					action="#"
					className="search-form"
					onSubmit={onSubmit}
					placeholder="search"
				>
					<input
						type="text"
						className="search-bar"
						value={search}
						onChange={handleChange}
					/>
					<FaSearch
						style={{
							color: '#000',
							width: '18px',
							height: '13px',
							marginLeft: '-20px',
							marginBottom: '1px',
						}}
					/>
				</form>
			</div>
		</>
	);
};

export default Search;
