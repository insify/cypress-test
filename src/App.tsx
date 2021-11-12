import { useState } from "react";
import { Location, Router } from "@reach/router";
import Activity from "./modules/Activity";
import Checkout from "./modules/Checkout";
import HighCare from "./modules/HighCare";
import Inventory from "./modules/Inventory";
import { Activity as IActivity } from "./model/activity";
import "./styles.css";

export type State = {
  activities: IActivity[];
  inventory: string | undefined;
};

export default function App(): JSX.Element {
  const [state, setState] = useState<State>({
    activities: [],
    inventory: undefined
  });
  return (
    <div className="App">
      <Location>
        {({ location }): JSX.Element => (
          <Router location={location} basepath={"/"}>
            <Activity
              path="/activity"
              state={state}
              setState={setState}
              default
            />
            <Inventory path="/inventory" state={state} setState={setState} />
            <Checkout path="/checkout" />
            <HighCare path="/highcare" />
          </Router>
        )}
      </Location>
    </div>
  );
}
