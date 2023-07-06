import { Tabs, Tab, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomePage from "./Pages/HomePage";
import ShoppingCartPage from "./Pages/ShoppingCartPage";
import { useState } from "react";

const tabsStyle = {
  borderColor: "divider",
  display: "flex",
  justifyContent: "flex-end",
};

const TabPanel = () => {
  const [currTabIndex, setCurrTabIndex] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, index: number) => {
    setCurrTabIndex(index);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={tabsStyle}>
        <Tabs value={currTabIndex} onChange={handleChange} centered>
          <Tab icon={<ShoppingCartIcon />} />
          <Tab icon={<HomeIcon />} />
        </Tabs>
      </Box>
      <Box sx={{ p: 2 }}>
        {currTabIndex === 0 && (
          <Box>
            <ShoppingCartPage />
          </Box>
        )}
        {currTabIndex === 1 && (
          <Box>
            <HomePage />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default TabPanel;
