import React, { useEffect, useState } from 'react';

function FollowersPage() {
    const [users, setUsers] = useState([]);
    const [following, setFollowing] = useState([]);
    const currentUserId = localStorage.getItem('id');

    useEffect(() => {
        fetch(`http://localhost:8222/api/v1/auth/allusers/${currentUserId}`)
            .then((response) => response.json())
            .then((data) => {
                console.log('Users Response:', data);
                setUsers(data.filter(user => user.id !== currentUserId));
            })
            .catch((error) => console.error('Error fetching users:', error));

        fetch(`http://localhost:8222/api/v1/followers/following/${currentUserId}`)
            .then((response) => response.json())
            .then((data) => {
                console.log('Following Response:', data);
                setFollowing(data.map(item => item.followingId));
            })
            .catch((error) => console.error('Error fetching following list:', error));
    }, [currentUserId]);

    const handleFollow = (userId) => {
        const isFollowing = following.includes(userId);
        const requestDto = {
            followerId: currentUserId,
            followingId: userId,
        };

        const url = isFollowing
            ? `http://localhost:8222/api/v1/followers/unfollow`
            : `http://localhost:8222/api/v1/followers/follow`;

        fetch(url, {
            method: isFollowing ? 'DELETE' : 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestDto),
        })
            .then((response) => {
                console.log('Follow/Unfollow Response:', response);
                if (response.status === 200) {
                    if (isFollowing) {
                        setFollowing(following.filter((id) => id !== userId));
                        // Make a DELETE request to remove the following data
                        fetch(`http://localhost:8222/api/v1/followers/unfollow/${currentUserId}/${userId}`, {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        }).then((deleteResponse) => {
                            console.log('Delete Following Response:', deleteResponse);
                            // Handle delete response if needed
                        }).catch((deleteError) => console.error('Error deleting following data:', deleteError));
                    } else {
                        setFollowing([...following, userId]);
                    }
                } else {
                    console.error('Error:', response.statusText);
                }
            })
            .catch((error) => console.error('Error:', error));
    };

    return (
        <div>
            <h1>Followers</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Follow</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>
                                <button
                                    onClick={() => handleFollow(user.id)}
                                    disabled={following.includes(user.id)}
                                >
                                    {following.includes(user.id) ? 'Following' : 'Follow'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default FollowersPage;
