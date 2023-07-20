import React from "react";
import "./HomeScreen.css";
import { HomeScreenNotesButton} from "../../components/HomeScreenNotesButton/HomeScreenNotesButton";
import { HomeScreenGameButton} from "../../components/HomeScreenGameButton/HomeScreenGameButton";

function HomeScreen() {
  return (
    <div className="screen">
      <div className="background">
        <h1 className="h-1">Let’s Learn Cryptography!</h1>
        <HomeScreenNotesButton className="tutorial-button-instance" />
        <HomeScreenGameButton className="test-button-instance" />
      </div>
    </div>

  );
};

export default HomeScreen;