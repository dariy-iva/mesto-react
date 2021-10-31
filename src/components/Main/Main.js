import React from 'react';
import { api } from '../../utils/Api';
import Card from '../Card/Card'

export default function Main(props) {
	const [userName, setUserName] = React.useState();
	const [userDescription, setUserDescription] = React.useState();
	const [userAvatar, setUserAvatar] = React.useState();
	const [posts, setPosts] = React.useState([]);

	React.useEffect(() => {
		const searchUserInfoServer = api.searchUserInfo();
		searchUserInfoServer
			.then((data) => {
				setUserName(data.name);
				setUserDescription(data.about);
				setUserAvatar(data.avatar);
			})
			.catch(err => console.log(err))
	}, [])

	React.useEffect(() => {
		const searchPostsServer = api.searchPosts();
		searchPostsServer
			.then((data) => {
				setPosts(data);
			})
			.catch(err => console.log(err))
	}, [])

	return (
		<main className="content">
			<section className="profile">
				<img src={userAvatar} alt="аватар" className="profile__avatar" />
				<div className="profile__edit-avatar" onClick={props.onEditAvatar}></div>
				<div className="profile__info">
					<h1 className="profile__name">{userName}</h1>
					<p className="profile__about-me">{userDescription}</p>
					<button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
				</div>
				<button className="profile__add-button" type="button" onClick={props.onAddPost}></button>
			</section>
			<section className="posts">
				{posts.map((post) => {
					return <li key={post._id}>
						<Card card={post} onCardClick={props.onCardClick} />
					</li>
				})}
			</section>
		</main>
	);
}