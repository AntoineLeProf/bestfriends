import { useSelector } from 'react-redux';

function FriendsDisplay() {
	const friends = useSelector((state) => state.friends.value);

	return (
		<h1>Friends : {friends.join(' - ')}</h1>
	);
}

export default FriendsDisplay;
