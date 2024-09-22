import React from "react";
import OrderSummaryBox from "./OrderSummaryBox";
import PickupLists from "./PickupLists";
import { dummyOrders } from "../../dummyData/dummyOrders";
import { Box } from '@mui/material';

const RightTab: React.FC = () => {
    return (
        <>
            <Box sx={{ mb: '20px'}}>
                <OrderSummaryBox />
            </Box>

            <Box 
                sx={{ 
                    border: '7px solid rgba(234, 234, 234, 1)',
                    height:'45vh', 
                    borderRadius: '4px',
                    overflowY: 'scroll', 
                    WebkitOverflowScrolling: "touch",
                    '&::-webkit-scrollbar': {
                        width: "0",
                    } 
                }}>
                <PickupLists orders={dummyOrders} />
            </Box>
        </>
    );
};

export default RightTab;