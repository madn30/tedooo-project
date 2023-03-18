import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FeedItem from './Card/FeedCard';
import { FeedItems } from '../../types/feedItem';

const Feed = () => {
	const [items, setItems] = useState<FeedItems>([]);
	const [currentIndex, setCurrentIndex] = useState(6);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		fetchItems();
	}, []);

	const fetchItems = async () => {
		setLoading(true);
		try {
			const response = await axios.get<FeedItems>('https://dev.tedooo.com/feed.json');

			setItems((response as any).data.data);
		} catch (error) {
			console.error('Error fetching items:', error);
		} finally {
			setLoading(false);
		}
	};

	const handleIntersection = () => {
		setCurrentIndex((prevIndex) => prevIndex + 6);
	};

	const renderedItems = items.slice(0, currentIndex).map((item, index) => (
		<FeedItem
			key={item.id}
			item={item}
			onIntersect={index === currentIndex - 1 ? handleIntersection : undefined}
		/>
	));

	return (
		<div className="App">
			<div className="card-container">{renderedItems}</div>
			{loading && <div>Loading...</div>}
		</div>
	);
};

export default Feed;
