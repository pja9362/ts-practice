import React, { useState } from "react";
import { Box, Button, Tab, Tabs, Typography } from "@mui/material";

const MainTab: React.FC = () => {
    const [tabIndex, setTabIndex] = useState<number>(0);

    const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setTabIndex(newValue);
    }

    const tabsInfo = [
        { label: "새로 들어온 주문!", index: 0 },
        { label: "진행중인 주문", index: 1 },
        { label: "완료된 주문", index: 2 },
    ];

    return (
        <div>
            <Tabs
                value={tabIndex}
                onChange={handleTabChange}
                variant="fullWidth"
                textColor="primary"
                indicatorColor="primary"
            >
                {tabsInfo.map((tab) => (
                    <Tab key={tab.index} label={tab.label} />
                ))}
            </Tabs>
        </div>
    );
}

export default MainTab;