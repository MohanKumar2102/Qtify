import React from "react";
import {Box,Tabs,Tab} from "@mui/material";
import Typography from "@mui/material/Typography";
// import * from "@material-ui/core";
import { PropTypes } from "prop-types";


function TabPanel(props){
    const {children,value,index,...other} = props;

    return (
        <div role="tabpanel"
        hidden = {value!==index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}>
            {value===index && (
                <Box sx={{p:3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}

        </div>
    )
}

TabPanel.propTypes={
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}


function allyProps(i){
    return {
        id: `simple-tab-${i}`,
        'aria-controls':`simple-tabPanel-${i}`
    };
}

export default function BasicTabs({value, handleChange}){

    return (
        <Box sx={{width:100}}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="All" {...allyProps(0)} />
        <Tab label="Rock" {...allyProps(1)} />
        <Tab label="Pop" {...allyProps(2)} />
        </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
        All
        </TabPanel>
        <TabPanel value={value} index={1}>
        Rock
        </TabPanel>
        <TabPanel value={value} index={2}>
        Pop
        </TabPanel>
        </Box>

    )
}