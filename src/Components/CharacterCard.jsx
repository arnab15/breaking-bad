import React from "react";
import { Link, useLocation } from "react-router-dom";

function CharacterCard({ character }) {
	const location = useLocation();
	return (
		<Link to={`${location.pathname}/${character.char_id}`}>
			<div className="overflow-hidden shadow-lg rounded-lg relative  mb-6 w-64 m-auto">
				<img alt="eggs" src={character.img} className="rounded-lg" />
				<div className="absolute bg-gradient-to-b bg-opacity-60 from-transparent to-black w-full p-4 bottom-0">
					<p className="text-white text-xl mb-4">
						{character.name} <span className="ml-1">{`(${character.nickname})`}</span>
					</p>
					<div className="flex justify-between">
						<p className="text-sm text-gray-300 flex items-center">
							<span>
								<svg
									className="w-4 h-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"></path>
								</svg>
							</span>
							<span className="px-2">{character.birthday}</span>
						</p>
					</div>

					<p className="text-white">
						<span className="mr-2 text-gray-200">Status</span>{" "}
						<span className="text-gray-100">{character.status}</span>
					</p>
				</div>
			</div>
		</Link>
	);
}

export default CharacterCard;
