import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import logo from "../assets/img/logo.png";
function Navbar(props) {
	const history=useHistory()
	const [searchTerm,setSearchTerm]=useState()
	const handelSearchSubmit=(event)=>{
		event.preventDefault()
		history.push({
			pathname:"/characters",
			search:`?search=${searchTerm}`
		})
	}
	return (
		<>
			<nav className="bg-gray-100">
				<div className="max-w-full mx-auto px-4">
					<div className="flex justify-between py-3">
						<div className="flex space-x-4 justify-center items-center mx-auto">
								<div className=" relative  text-gray-600">
									<form onSubmit={handelSearchSubmit}>
										<input
											key="input-search"
											className="border-2 border-gray-300 bg-white h-10 px-5 pr-14 sm:pr-16 rounded-3xl text-sm focus:outline-none"
											type="search"
											name="search"
											placeholder="Search"
											value={searchTerm}
											onChange={(e)=>setSearchTerm(e.target.value)}
										/>
										<button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
											<svg
												className="text-gray-600 h-4 w-4 fill-current"
												xmlns="http://www.w3.org/2000/svg"
												version="1.1"
												id="Capa_1"
												x="0px"
												y="0px"
												viewBox="0 0 56.966 56.966"
												width="512px"
												height="512px">
												<path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
											</svg>
										</button>
									</form>
								</div>
							
						</div>
						
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
