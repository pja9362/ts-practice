import React from "react";
import { Box, Typography } from "@mui/material";
import PickupItem from "./PickupItem";

interface PickupListsProps {
    orders: {
        time: string,
        menus: {
            name: string,
            temp?: string,
            options: string[],
        }[],
        orderId: number,
        orderer: string,
        price: string,
        status: string,
    }[]
}


const PickupLists: React.FC<PickupListsProps> = ({orders}) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            gap="7px"
            overflow={"scroll"}
            sx={{
                WebkitOverflowScrolling: "touch",
                '&::-webkit-scrollbar': {
                    width: "0",
                },
                backgroundColor: 'rgba(234, 234, 234, 1)',
            }}
        >
            {orders.length !== 0 ? (
                orders.map((order) => (
                    <PickupItem key={order.orderId} order={order} />
                ))
            ) : (
                <Box sx={{ backgroundColor: 'rgba(255, 255, 255, 1)', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography sx={{color: 'rgba(117, 117, 117, 1)', fontWeight: 600, fontSize: '14px'}}>아직 주문이 없습니다.</Typography>
                </Box>
            )}
        </Box>
    );
};

export default PickupLists;