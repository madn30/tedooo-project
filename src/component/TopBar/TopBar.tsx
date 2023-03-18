import React, { useState } from 'react';
import './TopBar.css';
import logo from '../../assets/logo.webp';
import profile from '../../assets/bamba.jpg';
import Avatar from '../Avatar/Avatar';
import { FiMessageCircle as MessagesIcon } from 'react-icons/fi';
import { BiHomeAlt as HomeIcon } from 'react-icons/bi';
import { IoIosNotificationsOutline as NotificationsIcon } from 'react-icons/io';
import SearchBar from '../SearchBar/SearchBar';

const TopBar = () => {
	const [clickedDiv, setClickedDiv] = useState('home');
	const [showHamburgerMenu, setShowHamburgerMenu] = useState<boolean>(false);

	const handleClick = (divName:string) => {
		setClickedDiv(divName);
	};
	const toggleHamburgerMenu = () => {
		setShowHamburgerMenu(prev => !prev);
	};

	return (
		<div className="topbar-container">

			<div className="topbar-content">

				<div className="left">
					<Avatar src={logo} height={100} width={100} className="header-logo"/>
					<SearchBar/>
				</div>

				<div style={{ flexGrow: 1 }}/>

				<div className="right">
					<div className={`nav-item${ clickedDiv === 'home' ? ' clicked' : '' }`} onClick={() => handleClick('home')}>
						<HomeIcon />
						<span className="messaging">Home</span>
					</div>
					<div className={`nav-item${ clickedDiv === 'messages' ? ' clicked' : '' }`} onClick={() => handleClick('messages')}>
						<MessagesIcon />
						<span className="messaging">Messaging</span>
					</div>
					<div className={`nav-item${ clickedDiv === 'notifications' ? ' clicked' : '' }`} onClick={() => handleClick('notifications')}>
						<NotificationsIcon />
						<span className="messaging">Notifications</span>
					</div>
					<Avatar src={profile} height={100} width={100} className="header-avatar"/>
				</div>

				<div className="hamburger" onClick={toggleHamburgerMenu}>
					<span className="messaging">Menu</span>
				</div>

				{showHamburgerMenu &&
				<div className={`hamburger-menu${ showHamburgerMenu ? ' show' : '' }`}>
					<div className={`nav-item${ clickedDiv === 'home' ? ' clicked' : '' }`} onClick={() => handleClick('home')}>
						<HomeIcon />
						<span className="messaging">Home</span>
					</div>
					<div className={`nav-item${ clickedDiv === 'messages' ? ' clicked' : '' }`} onClick={() => handleClick('messages')}>
						<MessagesIcon />
						<span className="messaging">Messaging</span>
					</div>
					<div className={`nav-item${ clickedDiv === 'notifications' ? ' clicked' : '' }`} onClick={() => handleClick('notifications')}>
						<NotificationsIcon />
						<span className="messaging">Notifications</span>
					</div>
				</div>
				}

			</div>

		</div>
	);
};

export default TopBar;
