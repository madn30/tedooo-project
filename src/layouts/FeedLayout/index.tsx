import React from 'react';
import type { FC, ReactNode } from 'react';
import './index.css';
import TopBar from '../../component/TopBar/TopBar';

interface FeedLayoutProps {
  children?: ReactNode;
}

const FeedLayout: FC<FeedLayoutProps> = ({ children }) => (
	<div className="layout-root">
		<TopBar />
		<div className="layout-wrapper">
			<div className="layout-content">
				{children}
			</div>
		</div>
	</div>
);

export default FeedLayout;
