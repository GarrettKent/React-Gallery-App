import React from 'react';
import Image from './Image';
import NotFound from './NotFound';

const Gallery = (props) =>  {
	const results = props.pictures;
	let pics;
	if(results.length > 0) {
		pics = results.map(result => <Image url={`https://farm${result.farm}.staticflickr.com/${result.server}/${result.id}_${result.secret}.jpg`} key={result.id} /> ) 
  } else {
  	pics = <NotFound />
  }
	return (
  <div className="photo-container">
    <h2>Results</h2>
    <ul>
    	{pics}
    </ul>
	</div>
	);
}

export default Gallery;