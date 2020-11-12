import React from 'react'; 
import "./Card.css"

const Card = ({id, name, username, email}) => {
	return(
		<div className="bg-light-green dib br3 pa3 ma2 bw2 shadow-5 grow tc cardSize">
			<img src={`https://robohash.org/${id}?size=200x200`} alt="robots" />
				<div>
					<h2>{name}</h2>
					<p>{email}</p>
				</div>
		</div>
	);
}

export default Card;