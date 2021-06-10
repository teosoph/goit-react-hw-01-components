import Profile from "./Components/Profile/Profile";
import user from "./Components/Profile/user.json";

import Statistics from "./Components/Statistics/Statistics";
import statisticalData from "./Components/Statistics/statistical-data.json";

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
      <Statistics title="Upload stats" stats={statisticalData} />;
      <Statistics stats={statisticalData} />;
    </div>
  );
};

export default App;
