import React from 'react';

const TabButton = ({ active, selectTab, children }) => {
    return (
      <button
        style={{
          outline: 'none',
          marginRight: '1rem',
        }}
        onClick={selectTab}
      >
        <p className={active ? 'text-white border-b border-purple-500' : 'text-[#ADB7BE] bord'}>
          {children}
        </p>
      </button>
    );
  };
  
  

export default TabButton;
