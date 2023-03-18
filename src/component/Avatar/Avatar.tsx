import classnames from 'classnames';
import React from 'react';
import './Avatar.css';

interface AvatarProps {
  src: string;
  className?: string;
  height: number;
  width: number;
}
const Avatar :React.FC<AvatarProps> = (props) => {
	const { className,...rest } = props;

	return (
		<img {...rest} className={classnames(`${ className } avatar`)} alt="avatar" />
	);
};

export default Avatar;
