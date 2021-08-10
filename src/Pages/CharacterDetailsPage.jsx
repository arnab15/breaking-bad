import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacterbyId as characterByIdApi, getQuoteByAuthor as getQuoteByAuthorApi } from "../services/apiService";

function CharacterDetailsPage() {
	const { id } = useParams();
	const [charDetails, setCharDetails] = useState();
	const [quotes, setQuotes] = useState([]);

	const getCharacterById = async () => {
		if (id) {
			try {
				const { data } = await characterByIdApi(id);
				setCharDetails(data[0]);
			} catch (error) {}
		}
	};

	const getAuthorQuote = async () => {
		if (charDetails) {
			try {
				const { data } = await getQuoteByAuthorApi(charDetails.name);
				
				setQuotes(data);
			} catch (error) {}
		}
	};

	useEffect(() => {
		getCharacterById();
	}, []);

	useEffect(() => {
		getAuthorQuote();
	}, [charDetails]);

	return (
		<div className="bg-gray-100">
			{charDetails && (
				<>
					<div className="container mx-auto my-5 p-5">
						<div className="md:flex no-wrap md:-mx-2 ">
							<div className="w-full md:w-3/12 md:mx-2">
								<div className="bg-white p-3 border-t-4 border-blue-400">
									<div className="image overflow-hidden">
										<img className="h-auto w-full mx-auto" src={charDetails.img} alt="" />
									</div>
									<h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
										{charDetails.name}{" "}
										<span className="pl-1 text-gray-700">{`(${charDetails.nickname})`}</span>
									</h1>
									{quotes.length > 0 && (
										
											<blockquote className="p-4 italic border-l-4 bg-gray-100 text-gray-600 border-gray-300">
												<p className="mb-2">"{quotes.length > 0 && quotes[0].quote}"</p>
											</blockquote>
										
									)}

									<ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
										<li className="flex items-center py-3">
											<span>Birth Day</span>
											<span className="ml-auto">{charDetails.birthday}</span>
										</li>
										<li className="flex items-center py-3">
											<span>Status</span>
											<span className="ml-auto">
												{charDetails.status === "Alive" ? (
													<span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
														{charDetails.status}
													</span>
												) : (
													<span className="bg-gray-500 py-1 px-2 rounded text-white text-sm">
														dead
													</span>
												)}
											</span>
										</li>
									</ul>
								</div>
								<div className="my-4"></div>
							</div>

							<div className="w-full md:w-9/12 mx-2 h-64">
								<div className="bg-white p-3 shadow-sm rounded-sm">
									<div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
										<span className="tracking-wide ml-4">About</span>
									</div>
									<div className="text-gray-700">
										<div className="grid md:grid-cols-2 text-sm">
											<div className="grid grid-cols-2">
												<div className="px-4 py-2 font-semibold">Name</div>
												<div className="px-4 py-2">{charDetails.name}</div>
											</div>
											<div className="grid grid-cols-2">
												<div className="px-4 py-2 font-semibold">Occupation</div>
												<div className="px-4 py-2">
													{charDetails.occupation.map((occu) => (
														<p className="text-gray-500" key={occu}>{occu},</p>
													))}
												</div>
											</div>
											<div className="grid grid-cols-2">
												<div className="px-4 py-2 font-semibold">Nickname</div>
												<div className="px-4 py-2">{charDetails.nickname}</div>
											</div>
											<div className="grid grid-cols-2">
												<div className="px-4 py-2 font-semibold">Appeared In Seasons</div>
												<div className="px-4 py-2">
													{charDetails.appearance.map((season) => (
														<span key={season} >{season}, </span>
													))}
												</div>
											</div>
											<div className="grid grid-cols-2">
												<div className="px-4 py-2 font-semibold">Portrays character</div>
												<div className="px-4 py-2">{charDetails.portrayed}</div>
											</div>
											<div className="grid grid-cols-2">
												<div className="px-4 py-2 font-semibold">Status</div>
												<div className="px-4 py-2">
													{charDetails.status === "Alive" ? (
														<span className="py-1 px-2  text-gray-400 text-sm">
															{charDetails.status}
														</span>
													) : (
														<span className="py-1 px-2  text-gray-500 text-sm">dead</span>
													)}
												</div>
											</div>
											<div className="grid grid-cols-2">
												<div className="px-4 py-2 font-semibold">Birthday</div>
												<div className="px-4 py-2">{charDetails.birthday}</div>
											</div>
										</div>
									</div>
								</div>

								<div className="my-4"></div>

								<div className="bg-white p-3 shadow-sm rounded-sm">
									<div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
										<span className="tracking-wide ml-4">Quotes</span>
									</div>
									<div className="grid grid-cols-1 sm:grid-cols-2  gap-4">
										{quotes.map((quote) => (
											<blockquote key={quote.quote_id} className="p-4 italic border-l-4  border-gray-300">
												<p className="mb-2">"{quote.quote}"</p>
												<hr className="pt-2" />
											</blockquote>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>{" "}
				</>
			)}
		</div>
	);
}

export default CharacterDetailsPage;
