import { AccountBalanceOutlined, Add, BookOutlined, SchoolOutlined, SupervisorAccountOutlined, SwapHorizOutlined } from '@mui/icons-material'
import { Avatar, Box, Button, Grid } from '@mui/material'
import React from 'react'
import Props from './props/Props'

const Summary = () => {
  return (
    <Box className='m-5 w-[91.5%]'>
        <Box className='mt-2 flex items-end justify-between pr-[19px]'>
            <Grid>
                <Props header="Admin Dashboard"/>
                <div className='bg-[#D60A0B] mb-3' style={{"width":"35px","height":"2px"}}></div>
                <h6 className='font-bold'>Welcome, <b className='text-[#186318]'>Nfon Andrew,</b></h6>
                <span>Here's an overview of your institution.</span>
            </Grid>
            <Button style={{"background":"#98FA81","color":"black","textTransform":"inherit","fontWeight":"bold","fontSize":"14px","height":"44px","padding":"0px 12px 0px 12px","borderRadius":"8px"}} variant='contained'><Add /> New Admission</Button>
        </Box>
        <Grid container gap={4} style={{"margin":"0px","marginTop":"16px"}} spacing={4}>
            <Grid item className='bg-[#7929DCE5] flex items-center px-6 py-7 gap-2 rounded'>
                <Avatar sx={{ bgcolor: 'white',color: '#7929DCE5'}}>
                    <SupervisorAccountOutlined/>
                </Avatar>
                <Grid>
                    <h6 className='text-white text-[17px]'>4,000</h6>
                    <p className='text-white text-[12px]'>Students</p>
                </Grid>
            </Grid>
            <Grid item className='bg-[#F69B0DE5] flex items-center px-6 py-7 gap-2 rounded'>
                <Avatar sx={{ bgcolor: 'white',color: '#F69B0DE5'}}>
                    <SchoolOutlined/>
                </Avatar>
                <Grid>
                    <h6 className='text-white text-[17px]'>250</h6>
                    <p className='text-white text-[12px]'>Lectures</p>
                </Grid>
            </Grid>
            <Grid item className='bg-[#14C354E5] flex items-center px-6 py-7 gap-2 rounded'>
                <Avatar sx={{ bgcolor: 'white',color: '#14C354E5'}}>
                    <SwapHorizOutlined />
                </Avatar>
                <Grid>
                    <h6 className='text-white text-[17px]'>3,000,000</h6>
                    <p className='text-white text-[12px]'>Revenue</p>
                </Grid>
            </Grid>
            <Grid item className='bg-[#4A8BF6] flex items-center px-6 py-7 gap-2 rounded'>
                <Avatar sx={{ bgcolor: 'white',color: '#4A8BF6'}}>
                    <AccountBalanceOutlined/>
                </Avatar>
                <Grid>
                    <h6 className='text-white text-[17px]'>50</h6>
                    <p className='text-white text-[12px]'>Departments</p>
                </Grid>
            </Grid>
            <Grid item className='bg-[#D600B3D4] flex items-center px-6 py-7 gap-2 rounded'>
                <Avatar sx={{ bgcolor: 'white',color: '#D600B3D4'}}>
                    <BookOutlined/>
                </Avatar>
                <Grid>
                    <h6 className='text-white text-[17px]'>150</h6>
                    <p className='text-white text-[12px]'>Courses</p>
                </Grid>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Summary
