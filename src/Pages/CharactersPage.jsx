import React, { useEffect, useState } from "react";
import { getCharactersBySearch, getCharactersWithPagination } from "../services/apiService";
import {  useHistory, useLocation } from "react-router-dom";
import CharacterCard from "../Components/CharacterCard";

function CharactersPage(props) {

	const location = useLocation();
	const history = useHistory();
	const [characters, setCharacters] = useState([]);
	const [curentPage, setCurrentPage] = useState(1);
	const page = new URLSearchParams(location.search).get("page");
	const search=new URLSearchParams(location.search).get("search");
	let limit = 10;

	const getCharacters = async () => {
		try {
			if(search){
				const {data}=await getCharactersBySearch(search)
				setCharacters(data)
				return
			}

			if (curentPage) {
				const tempCurrentPage = +curentPage;
				let offset = (tempCurrentPage - 1) * limit;
				const { data } = await getCharactersWithPagination({
					limit,
					offset,
				});
				setCharacters(data);
			} else {
				const { data } = await getCharactersWithPagination({
					limit,
					offset: 0,
				});
				console.log(data);
				setCharacters(data);
			}
		} catch (error) {}
	};

	useEffect(() => {
		getCharacters();
	}, []);

	useEffect(() => {
		setCurrentPage(page);
		getCharacters();
	}, [page,search,location]);

	const handelNextPageClick = () => {
		history.push({
			pathname: location.pathname,
			search: `?page=${+curentPage + 1}`,
		});
		setCurrentPage(+curentPage + 1);
	};

	const handelPrevPageClick = () => {
		if (+curentPage >= 2) {
			history.push({
				pathname: location.pathname,
				search: `?page=${+curentPage - 1}`,
			});
			setCurrentPage(+curentPage - 1);
		}
	};
	
	return (
		<>
			<div className="grid grid-cols-1 sm:grid-cols-4 gap-2 mt-4">
				{characters.map((character) => (
					<CharacterCard character={character} key={character.name}/>
				))}
			</div>
			<div>
				<ul className="flex pl-0 list-none rounded justify-center items-center my-2">
					<li
						className="relative block py-2 cursor-pointer px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-gray-200"
						onClick={handelPrevPageClick}>
						Previous
					</li>

					<li
						className="relative block py-2 px-3 cursor-pointer leading-tight bg-white border border-gray-300 text-blue-700 rounded-r hover:bg-gray-200"
						onClick={handelNextPageClick}>
						Next
					</li>
				</ul>
			</div>
		</>
	);
}

export default CharactersPage;
