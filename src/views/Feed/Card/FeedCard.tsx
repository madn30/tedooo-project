import moment from 'moment';
import React, { useState, useRef, CSSProperties } from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { BiComment } from 'react-icons/bi';
import Avatar from '../../../component/Avatar/Avatar';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import { FeedItem } from '../../../types/feedItem';

interface FeedCardProps {
  item: FeedItem;
  onIntersect?: () => void;
}

const FeedCard: React.FC<FeedCardProps> = ({ item, onIntersect }) => {
	const ref = useRef<HTMLDivElement>(null);
	const [isLiked,setIsLiked] = useState(item.didLike || false);

	const sendImpression = async () => {
		console.log('TRIGGER',item);
		try {
			const url = `https://www.tedooo.com/?userId=${ item.userId }&itemId=${ item.id }`;
			const response = await fetch(url);

			if (!response.ok) {
				console.error(`Error sending impression: ${ response.status }`);
			}
		} catch (error) {
			console.error(`Error sending impression: ${ error }`);
		}
	};

	useIntersectionObserver(ref, { onIntersect, onImpression: sendImpression });

	const imageContainerStyle = (): CSSProperties => item.images.length == 1
		? { padding: '5px 50px' }
		: { width: 'calc(100% + 33px)',
			marginLeft: -17,
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-between',
		};

	const imageStyle = () : CSSProperties => {
		if (item.images.length === 1) {
			return {
				objectFit: 'fill',
				width: '100%',
				maxWidth: '900px',
				display: 'flex',
				height: 'auto',
				maxHeight: 500,
				minHeight: 300,
				margin: 'auto' };
		}

		else {
			return {
				objectFit: 'fill',
				width: '100%',
				maxWidth: '45%',
				height: 'auto',
				maxHeight: 500,
				minHeight: 300,
				display: 'flex',

			};
		}

	};

	return (
		<div ref={ref}>
			<div className="card" key={item.id}>

				<div className="card-header">
					<Avatar src={item.avatar} height={100} width={100}/>
					<div className="details">
						<span>{item.username}</span>
						<div>
							<span className="shop-name">{item.shopName || 'Pending...'}</span>
							<span className="date">{moment(item.date).fromNow(true)}</span>
						</div>
					</div>
				</div>

				<div className="card-content">
					<h2>{item.text}</h2>
					<div style={imageContainerStyle()}>
						{item.images.slice(0, 2).map((image, imgIndex) => (
							<img
								key={imgIndex}
								src={image}
								alt={`Feed item ${ item.id } image ${ imgIndex }`}
								style={imageStyle()}
							/>
						))}
					</div>
				</div>

				<div className="card-actions">
					<div className="action-counts">
						<span className="like-count">
							<AiOutlineLike className={`like-icon-count${ isLiked ? ' liked-count' : '' }`} />
							&nbsp;{item.likes + (isLiked ? 1 : 0)} Likes
						</span>
						<span className="comment-count">{item.comments} Comments</span>
					</div>

					<div className="action-buttons">
						<button
							className={`like-button${ isLiked ? ' liked' : '' }`}
							onClick={() => setIsLiked(!isLiked)}>
							<AiOutlineLike className="like-icon" />
							Like
						</button>
						<button className="comment-button">
							<BiComment className="like-icon" />
							Comment
						</button>
					</div>

				</div>
			</div>
		</div>
	);
};

export default FeedCard;
