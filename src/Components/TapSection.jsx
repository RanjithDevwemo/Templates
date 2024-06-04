import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "../Css/TapSection.css"
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function TapSection() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
// const data=[
//     {
//         index:0,
// label:"Item One",
// value:" Item One Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla provident explicabo maxime eveniet, enim vitae natus tempora eius commodi rem doloremque nemo dicta aspernatur nostrum ab, dolore, animi maiores facilis?"
//     },
//     {
//         index:2,
// label:"Item ",
// value:" Item One Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla provident explicabo maxime eveniet, enim vitae natus tempora eius commodi rem doloremque nemo dicta aspernatur nostrum ab, dolore, animi maiores facilis?"
//     }
// ]
  return (
    <div className="tap">
        <h1 className='h1'>Tap Section</h1>
        {/* <div className="">
            {
                data.map((val,i)=>( */}
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
 >
  
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="One" {...a11yProps(0)} />
        <Tab label="Two" {...a11yProps(1)} />
        <Tab label="Three" {...a11yProps(2)} />
      
        {/* <Tab label={val.label} {...a11yProps(val.index)} />  */}
      </Tabs>
      <TabPanel value={value} index={0}>
        Item One Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla provident explicabo maxime eveniet, enim vitae natus tempora 
        eius commodi rem doloremque nemo dicta aspernatur nostrum ab, dolore, animi maiores facilis?
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla provident explicabo maxime eveniet, enim vitae natus tempora 
        eius commodi rem doloremque nemo dicta aspernatur nostrum ab, dolore, animi maiores facilis?
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    

    </Box>
    {/* ))
} */}
    {/* </div> */}
   </div>
  );
}
