import React from 'react';
import { Typography, Box } from '@mui/material';
import Sidebar from '../components/Common/Sidebar';
import MainTab from '../components/CurrentOrder/MainTab';
import RightTab from '../components/CurrentOrder/RightTab';
import SalesMainTab from '../components/Sales/SalesMainTab';
import StoreMainTab from '../components/Store/StoreMainTab';
import NoticeMainTab from '../components/Notice/NoticeMainTab';

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<string>('current');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const renderMainContent = () => {
    switch (activeTab) {
      case 'current':
        return <MainTab />;
      case 'sales':
        return <SalesMainTab />;
      case 'store':
        return <StoreMainTab />;
      case 'notice':
        return <NoticeMainTab />;
      default:
        return null;
    }
  };

  const renderRightContent = () => {
    switch (activeTab) {
      case 'current':
        return <RightTab />;
      default:
        return <Typography variant="h5">{`Current Tab: ${activeTab}`}</Typography>;
    }
  };
  
  return (
    <Box display="flex" sx={{ m: '85px 12% 25px', gap: '25px' }}>
      <Box sx={{ width: '24%' }}>
        <Sidebar activeTab={activeTab} setActiveTab={handleTabChange} />
      </Box>
      <Box sx={{ width: '50%' }}>
        {renderMainContent()}
      </Box>
      <Box sx={{ width: '26%' }}>
        {renderRightContent()}
      </Box>
    </Box>
  );
};

export default Home;
