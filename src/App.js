import Profile from "./Profile/Profile";
import user from "./Profile/user.json";

const App = () => {
  return (
    <div>
      <h1> PROFILE {user.name}</h1>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      ;
    </div>
  );
};

export default App;
