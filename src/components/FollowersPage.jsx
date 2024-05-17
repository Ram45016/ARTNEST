import React, { Component } from 'react';
import '../assets/css/FollowersPage.css';


class FollowersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      followers: [
        { id: 1, name: 'Artist 1', username: 'artist1', avatar: 'https://images.unsplash.com/photo-1610045058619-8c37e8913c55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3Vuc2V0JTIwYmVhY2h8ZW58MHx8MHx8fDA%3D&w=1000&q=80', isFollowing: true },
        { id: 2, name: 'Artist 2', username: 'artist2', avatar: 'https://images.unsplash.com/photo-1617824254005-facacd2c7623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VyJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww&w=1000&q=80', isFollowing: false },
        { id: 3, name: 'Artist 3', username: 'artist3', avatar: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80', isFollowing: false },
        { id: 4, name: 'Artist 4', username: 'artist4', avatar: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80', isFollowing: false },
        { id: 5, name: 'Artist 5', username: 'artist5', avatar: 'https://images.unsplash.com/photo-1610045058619-8c37e8913c55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3Vuc2V0JTIwYmVhY2h8ZW58MHx8MHx8fDA%3D&w=1000&q=80', isFollowing: true },
        // Add more followers here
      ],
      searchTerm:'',
      showResults: false,
    };
  }

  toggleFollow = (id) => {
    this.setState((prevState) => ({
        followers: prevState.followers.map((follower) =>
            follower.id === id ? { ...follower, isFollowing: !follower.isFollowing } : follower
        ),
    }));
};

renderFollowers() {
    let displayedFollowers = this.state.followers;

    if (this.state.searchTerm && this.state.showResults) {
        displayedFollowers = displayedFollowers.filter(follower =>
            follower.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
            follower.username.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        );
    }

    return displayedFollowers.map((follower) => (
        <div className={`follower-card ${follower.isFollowing ? 'following' : ''}`} key={follower.id}>
            <div className="avatar-container">
                <img src={follower.avatar} alt={`${follower.name}'s profile`} className="avatar" />
            </div>
            <div className="follower-info">
                <h3>{follower.name}</h3>
                <p>@{follower.username}</p>
            </div>
            <button
                className={`follow-button ${follower.isFollowing ? 'following' : ''}`}
                onClick={() => this.toggleFollow(follower.id)}
            >
                {follower.isFollowing ? 'Following' : 'Follow'}
            </button>
        </div>
    ));
}

render() {
    return (
        <div className="followers-page">
            <h1>Your Followers</h1>

            <div className="search-section">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search followers..."
                    value={this.state.searchTerm}
                    onChange={e => {
                        this.setState({ searchTerm: e.target.value });
                        if (!e.target.value) {
                            this.setState({ showResults: false });
                        }
                    }}
                />
                <button onClick={() => this.setState({ showResults: true })}>Search</button>
            </div>

            <div className="followers-list">{this.renderFollowers()}</div>
        </div>
    );
}
}

export default FollowersPage;