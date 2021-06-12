import Profile from "./Components/Profile/Profile";
import user from "./Components/Profile/user.json";

import Statistics from "./Components/Statistics/Statistics";
import statisticalData from "./Components/Statistics/statistical-data.json";

import FriendList from "./Components/FriendList/FriendsList";
import friends from "./Components/FriendList/friends.json";

import TransactionHistory from "./Components/Transactions/Transactions";
import transactions from "./Components/Transactions/transactions.json";

const App = () => {
  return (
    <div>
      <h1 style={{ color: "white", textShadow: "1px 1px 2px rgb(0, 0, 0)" }}>
        PROFILE {user.name}
      </h1>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
