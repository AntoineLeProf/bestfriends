import { useDispatch } from 'react-redux';
import { addFriendToStore } from '../reducers/friends';

function FriendsButtons() {
	const dispatch = useDispatch();

  const addFriend = (newFriend) => {
		dispatch(addFriendToStore(newFriend));
	};

	return (
		<div>
			<button onClick={() => addFriend('Sheldon')}>Sheldon</button>
			<button onClick={() => addFriend('Leonard')}>Leonard</button>
			<button onClick={() => addFriend('Penny')}>Penny</button>
		</div>
	);
}

export default FriendsButtons;
