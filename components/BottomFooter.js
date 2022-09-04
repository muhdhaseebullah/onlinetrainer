import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "next/link";

const BottomFooter = () => {
  const [value, setValue] = React.useState(0);
  return (
    <>
      <Box className="bottom-navigation">
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <Link href="./dashboard">
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          </Link>
          <Link href="./chat">
            <BottomNavigationAction label="Chat" icon={<ChatBubbleIcon />} />
          </Link>
          <Link href="./workout">
            <BottomNavigationAction
              label="Workout"
              icon={<FitnessCenterIcon />}
            />
          </Link>
          <Link href="./diet">
            <BottomNavigationAction label="Diet" icon={<RestaurantIcon />} />
          </Link>
        </BottomNavigation>
      </Box>
    </>
  );
};

export default BottomFooter;
