import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";

const Footer = ({ muscles, onSelect, category }) => {
  const index = category
    ? muscles.findIndex(group => group === category) + 1
    : 0;

  const onSelectCategory = (e, idx) => {
    onSelect(idx === 0 ? "" : muscles[idx - 1]);
  };
  return (
    <Paper>
      <Tabs
        value={index}
        onChange={onSelectCategory}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="All" />
        {muscles.map(group => (
          <Tab key={group} label={group} />
        ))}
      </Tabs>
    </Paper>
  );
};

export default Footer;
