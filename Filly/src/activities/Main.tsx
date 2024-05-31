import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "../components/organisms/AppScreen";
 
const Main: ActivityComponentType = () => {
  return (
    <AppScreen bottomNavigation>
      <div>My Activity</div>
    </AppScreen>
  );
};
 
export default Main;