import React from 'react';

const MainButton = ({ children, onClick }) => {
    return (
        <div>
            <button onClick={onClick} className="btn btn-primary font-bold text-black bg-gradient-to-r from-secondary to-primary">{children}</button>
        </div>
    );
};

export default MainButton;