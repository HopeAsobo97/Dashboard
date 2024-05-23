import { Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material' 
import React from 'react' 
import { AccountBalanceOutlined, AccountCircleOutlined,  BarChartOutlined, BookOutlined, GridViewOutlined, LogoutOutlined, SchoolOutlined, SettingsOutlined, SupervisorAccountOutlined, SwapHorizOutlined } from '@mui/icons-material'; 
import logo from './assets/Logo.png' 
 
 
 
const Side = () => { 
     
  return ( 
    <Grid className='bg-white h-full w-[20%] items-center' justifyContent={'space-between'} alignItems={'center'}> 
        <Grid justifyContent={'center'} className='py-6 px-11' placeSelf={'center'}  item> 
            <img src={logo} style={{"height":"48px","width":"44px"}}/> 
        </Grid> 
        <hr/> 
        <Grid  className='py-5'> 
          <List> 
            <ListItem className='bg-[#F0F1F3] w-[90%] rounded-s-full rounded-e-none  text-[#186318]'> 
              <ListItemIcon><GridViewOutlined className='text-[#186318]'/></ListItemIcon> 
              <ListItemText className='text-[#186318] text-[11px]'>Dashboard</ListItemText> 
            </ListItem> 
            <ListItem className=' hover:bg-[#F0F1F3] w-[90%] rounded-s-full rounded-e-none  hover:text-[#186318] cursor-pointer'> 
              <ListItemIcon><AccountBalanceOutlined/></ListItemIcon> 
              <ListItemText className='text-[11px]'>Schools</ListItemText> 
            </ListItem> 
            <ListItem className=' hover:bg-[#F0F1F3] w-[90%] rounded-s-full rounded-e-none  hover:text-[#186318] cursor-pointer'> 
              <ListItemIcon><SupervisorAccountOutlined/></ListItemIcon> 
              <ListItemText className='text-[11px]'>Students</ListItemText> 
            </ListItem> 
            <ListItem className=' hover:bg-[#F0F1F3] w-[90%] rounded-s-full rounded-e-none  hover:text-[#186318] cursor-pointer'> 
              <ListItemIcon><SchoolOutlined/></ListItemIcon> 
              <ListItemText className='text-[11px]'>Lectures</ListItemText> 
            </ListItem> 
            <ListItem className=' hover:bg-[#F0F1F3] w-[90%] rounded-s-full rounded-e-none  hover:text-[#186318] cursor-pointer'> 
              <ListItemIcon><BookOutlined/></ListItemIcon> 
              <ListItemText className='text-[11px]'>Courses</ListItemText> 
            </ListItem> 
            <ListItem className=' hover:bg-[#F0F1F3] w-[90%] rounded-s-full rounded-e-none  hover:text-[#186318] cursor-pointer'> 
              <ListItemIcon><BarChartOutlined /></ListItemIcon> 
              <ListItemText className='text-[11px]'>Results</ListItemText> 
            </ListItem> 
            <ListItem className=' hover:bg-[#F0F1F3] w-[90%] rounded-s-full rounded-e-none hover:text-[#186318] cursor-pointer'> 
              <ListItemIcon><SwapHorizOutlined /></ListItemIcon> 
              <ListItemText className='text-[11px]'>Finances</ListItemText> 
            </ListItem> 
            <ListItem className=' hover:bg-[#F0F1F3] w-[90%] rounded-s-full rounded-e-none  hover:text-[#186318] cursor-pointer'> 
              <ListItemIcon><AccountCircleOutlined /></ListItemIcon> 
              <ListItemText className='text-[11px]'>Account</ListItemText> 
            </ListItem> 
            <ListItem className=' hover:bg-[#F0F1F3] w-[90%] rounded-s-full rounded-e-none  hover:text-[#186318] cursor-pointer'> 
              <ListItemIcon><SettingsOutlined /></ListItemIcon> 
              <ListItemText className='text-[11px]'>Settings</ListItemText> 
            </ListItem> 
            <ListItem className=' hover:bg-[#F0F1F3] w-[90%] rounded-s-full rounded-e-none  hover:text-[#186318] cursor-pointer'> 
              <ListItemIcon><LogoutOutlined className='text-[#D60A0B]' /></ListItemIcon> 
              <ListItemText className='text-[#D60A0B] text-[]'>Logout</ListItemText> 
            </ListItem> 
          </List> 
        </Grid> 
    </Grid> 
  ) 
} 
 
export default Side