
import Footer from '@/components/Sheared/Footer/Footer';
import Navbar from '@/components/Sheared/Navbar/Navbar';
import { Box } from '@mui/material';
import React from 'react';

const layout = ({children}:{children:React.ReactNode}) => {
        return (
                <>
                      <Navbar></Navbar>  
                     {children}   
                    <Footer></Footer>
                </>
        );
};

export default layout;