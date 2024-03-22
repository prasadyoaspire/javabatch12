import GuestDashboard from "./GuestDashboard";
import UserDashboard from "./UserDashboard";

function Home() {

    const isLoggedIn = true;

    const username = "Rohit";

    if(isLoggedIn) {
        return <UserDashboard uname = {username} />
    }
    else {
        return <GuestDashboard/>
    }    
}

export default Home;