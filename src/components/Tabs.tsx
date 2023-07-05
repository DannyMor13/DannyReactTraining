import { Tabs, Tab, Typography, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomePage from "./Pages/HomePage";
import ShoppingCartPage from "./Pages/ShoppingCartPage";
import { useState } from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const tabsStyle = {
  borderColor: "divider",
  display: "flex",
  justifyContent: "flex-end",
};

//Why send value if it is only compared to index?
const TabPanel = ({ children, value, index }: TabPanelProps) => {
  return (
    //is an extra div really needed here?
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

//what it this?
const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const BasicTabs = () => {
  //Change to a better name here
  const [value, setValue] = useState(1);

  //SyntheticEvent usually accepts a generic <> type depenting on the event
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={tabsStyle}>
        <Tabs value={value} onChange={handleChange}>
          <Tab icon={<ShoppingCartIcon />} {...a11yProps(1)} />
          <Tab icon={<HomeIcon />} {...a11yProps(0)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ShoppingCartPage />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <HomePage />
      </TabPanel>
    </Box>
  );
};

export default BasicTabs;
