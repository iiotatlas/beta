// dashbaord
import Default from "../components/dashboard/default";

//Nodes
import NodeScreen from "../components/nodes/NodeScreen";

// widgets
import GeneralWidget from "../components/widgets/general";
import ChartsWidget from "../components/widgets/charts";

// Users
import UserProfile from "../components/users/userProfile";
import UserEdit from "../components/users/userEdit";
import UserCards from "../components/users/userCards";

// Search page
import Search from "../components/search";

export const routes = [
    { path: "/home", Component: Default },
    
    { path: "/widgets/general", Component: GeneralWidget },
    { path: "/widgets/chart", Component: ChartsWidget },
    
    { path: "/app/users/userProfile", Component: UserProfile },
    { path: "/app/users/userEdit", Component: UserEdit },
    { path: "/app/users/userCards", Component: UserCards },
    
    { path: "/pages/searchpage", Component: Search },

    { path: "/node/:nodeId", Component: NodeScreen },
];
