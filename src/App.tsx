import React from 'react';
import './App.css';
import FeedLayout from './layouts/FeedLayout';
import Feed from './views/Feed/Feed';

const App: React.FC = () => (
	<FeedLayout>
		<Feed/>
	</FeedLayout>
);

export default App;
