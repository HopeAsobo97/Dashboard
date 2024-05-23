import { ExpandMoreOutlined, LogoutOutlined, NotificationsOutlined, Search } from "@mui/icons-material";
import { Avatar, Badge, Box, Button, Grid, ListItemText } from "@mui/material";
import React from "react";
import './responsiveness.css'

const Head = () => {



  return (
    <Box display={"flex"} justifyContent={'space-between'} alignItems={'center'} className="bg-white header px-10 py-6">
      <Grid display={"flex"} justifyContent={'center'} alignItems={'center'} item className="relative hide">
        <input type="search" placeholder="Search for a student, lecturer or course" className="border-slate-400 z-0 px-2 rounded-lg w-[350px] h-3 block py-[20px] text-sm border outline-1 outline-slate-500" name="" id="" />
        <Search style={{"fontSize":"24px"}} className="text-slate-400 absolute right-4"/>
      </Grid>
      <Grid display={'flex'} className="gap-5 account-info" alignItems={'center'} item>
        <Button style={{'border':"1px solid black",'color':'black'}} variant="outlined" className="w-[25px] h-[30px]">En <ExpandMoreOutlined /></Button>
        <Badge color="error" badgeContent=" " variant="dot">
            <NotificationsOutlined />
        </Badge>
        <Grid display={'flex'} justifyContent={'center'} gap={'5px'} alignItems={'center'} item>
            <Avatar sx={{ bgcolor:"green" }}>NA</Avatar>
            <ListItemText>
                <h6 className="text-[17px] font-bold">Nfon Andrew</h6>
                <p className="text-[10px] font-light">HOD Computer Engineering</p>
            </ListItemText>
        </Grid>
        <LogoutOutlined className='text-[#D60A0B]'/>
      </Grid>
    </Box>
  );
};

export default Head;
