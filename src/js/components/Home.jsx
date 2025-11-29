import React, { useState } from "react";

// react lo importa como un objeto o este caso lista de emojis
import emojiList from "./emojiList.json";

//create your first component
const Home = () => {

	const [ emojis, setEmojis ] = useState(emojiList);

	const [searchInput, setSearchInput] = useState("");

	// busqueda mas avanzada
	function possibleRelatedEmoji(emoji, searchTerm) {

		if (searchTerm == "") return true
		
		const titleIsRelated = emoji.title.toLowerCase().includes(searchInput.toLowerCase());

		const keyworksMatch = emoji.keywords.toLowerCase().includes(searchInput.toLowerCase());

		if (titleIsRelated || keyworksMatch) return true
		
		return false;
	};

	let emojisBuscados = emojis.filter(
		item => possibleRelatedEmoji(item, searchInput)
	)


	return (
		<div className="text-center min-vh-100 d-flex flex-column justify-content-center align-items-center">            
			<h1 className="text-center mt-5">Los Emojitos 🤠</h1>

			<div className="">
				<p className="lead">
					Una colección de emojis para alegrar tu día. ¡Explora y
					disfruta!
				</p>
				<input
					type="text"
					className="form-control"
					onChange={ event => setSearchInput(event.target.value)}
					placeholder="Buscar emoji..."
					style={{ maxWidth: "300px", margin: "0 auto" }}
				/>
			</div>
			
			<div className="container d-flex flex-wrap mx-auto justify-content-center my-4">

				{
					searchInput != "" && <p className="col-12"> Se han encontrado
						{" "}{emojisBuscados.length}{" "}
						coincidencias para la busqueda `{searchInput}`</p>
				}

				{emojisBuscados.map((emoji, index) => (
						<div
							key={index}
							className="card m-2"
							style={{ width: "6rem" }}>
							<div className="card-body d-flex flex-column justify-content-center align-items-center">
								<span style={{ fontSize: "2rem" }}>
									{emoji.symbol}
								</span>
								<p className="card-text mt-2" style={{ fontSize: "0.8rem" }}>
									{emoji.title}
								</p>
							</div>
						</div>
				))}
			</div>
			
			<p className="mt-auto">
				Made by{" "}
				<a href="http://www.4geeksacademy.com">Latam-pt-60</a>, with
				entusiasmo! 🎉
			</p>
		</div>
	);
};

export default Home;