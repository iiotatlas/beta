// dashbaord
import Default from "../components/dashboard/default";

//Nodes
import NodeScreen from "../components/nodes/NodeScreen";
import Node1 from "../components/systems/Node1";
import Node2 from "../components/systems/Node2";
import Node3 from "../components/systems/Node3";
import Node4 from "../components/systems/Node4";
import Node5 from "../components/systems/Node5";
import Node6 from "../components/systems/Node6";
import Node7 from "../components/systems/Node7";

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

    { path: "/node/:nodeId", Component: NodeScreen },

    { path: "/node1", Component: Node1 },
    { path: "/node2", Component: Node2 },
    { path: "/node3", Component: Node3 },
    { path: "/node4", Component: Node4 },
    { path: "/node5", Component: Node5 },
    { path: "/node6", Component: Node6 },
    { path: "/node7", Component: Node7 },

    { path: "/widgets/general", Component: GeneralWidget },
    { path: "/widgets/chart", Component: ChartsWidget },

    { path: "/app/users/userProfile", Component: UserProfile },
    { path: "/app/users/userEdit", Component: UserEdit },
    { path: "/app/users/userCards", Component: UserCards },

    { path: "/pages/searchpage", Component: Search },
];
