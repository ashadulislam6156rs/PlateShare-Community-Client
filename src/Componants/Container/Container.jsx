import React from 'react';

const Container = ({children, className}) => {
    return <section className={`${className} max-w-7xl mx-auto`}>{children}</section>;
};

export default Container;