// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import "../Css/TapSection.css"
// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`vertical-tabpanel-${index}`}
//       aria-labelledby={`vertical-tab-${index}`}
//       {...other}
//       className='tab-main'
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `vertical-tab-${index}`,
//     'aria-controls': `vertical-tabpanel-${index}`,
//   };
// }

// export default function TapSection() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
// // const data=[
// //     {
// //         index:0,
// // label:"Item One",
// // value:" Item One Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla provident explicabo maxime eveniet, enim vitae natus tempora eius commodi rem doloremque nemo dicta aspernatur nostrum ab, dolore, animi maiores facilis?"
// //     },
// //     {
// //         index:2,
// // label:"Item ",
// // value:" Item One Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla provident explicabo maxime eveniet, enim vitae natus tempora eius commodi rem doloremque nemo dicta aspernatur nostrum ab, dolore, animi maiores facilis?"
// //     }
// // ]
//   return (
//     <div className="tap">
//         <h1 className='h1'>Tap Section</h1>
//         {/* <div className="">
//             {
//                 data.map((val,i)=>( */}
//     <Box
//       sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
//  >
  
//       <Tabs
//         orientation="vertical"
//         variant="scrollable"
//         value={value}
//         onChange={handleChange}
//         aria-label="Vertical tabs example"
//         sx={{ borderRight: 1, borderColor: 'divider' }}
//       >
//         <Tab label="One" {...a11yProps(0)} />
//         <Tab label="Two" {...a11yProps(1)} />
//         <Tab label="Three" {...a11yProps(2)} />
      
//         {/* <Tab label={val.label} {...a11yProps(val.index)} />  */}
//       </Tabs>
//       <TabPanel value={value} index={0} className="tap-con">
//         Item One Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla provident explicabo maxime eveniet, enim vitae natus tempora 
//         eius commodi rem doloremque nemo dicta aspernatur nostrum ab, dolore, animi maiores facilis?, Item One Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla provident explicabo maxime eveniet, enim vitae natus tempora 
//         eius commodi rem doloremque nemo dicta aspernatur nostrum ab, dolore, animi maiores facilis?
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         Item Two Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla provident explicabo maxime eveniet, enim vitae natus tempora 
//         eius commodi rem doloremque nemo dicta aspernatur
//         Item One Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla provident explicabo maxime eveniet, enim vitae natus tempora 
//         eius commodi rem doloremque nemo dicta aspernatur nostrum ab, dolore, animi maiores facilis? nostrum ab, dolore, animi maiores facilis?, Item One Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla provident explicabo maxime eveniet, enim vitae natus tempora 
//         eius commodi rem doloremque nemo dicta aspernatur nostrum ab
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         Item Three Item Two Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla provident explicabo maxime 
//         eveniet, enim vitae natus tempora eius commodi rem doloremque nemo dicta aspernatur Item One Lorem ipsum dolor 
//         sit amet consectetur adipisicing elit. Nulla provident explicabo maxime eveniet, enim vitae natus tempora eius 
//         commodi rem doloremque nemo dicta aspernatur nostrum ab, dolore, animi maiores facilis? nostrum ab, dolore, 
//         animi maiores facilis?, Item One Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla provident 
//         explicabo maxime eveniet, enim vitae natus tempora eius commodi
//          rem doloremque nemo dicta aspernatur nostrum ab
//       </TabPanel>
    

//     </Box>
//     {/* ))
// } */}
//     {/* </div> */}
//    </div>
//   );
// }


// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';
// import "../Css/TapSection.css"
// function TapSection() {
//   return (
//     <Tabs
//       defaultActiveKey="profile"
//       id="justify-tab-example"
//       className="mb-3 tap-main"
//       justify
//     >
//       <Tab eventKey="home" title="Home" className='tab'>
//         Tab content for Home
//       </Tab>
//       <Tab eventKey="profile" title="Profile"  className='tab'>
//         Tab content for Profile
//       </Tab >
//       <Tab eventKey="longer-tab" title="Loooonger Tab"  className='tab'>
//         Tab content for Loooonger Tab
//       </Tab>
//       <Tab eventKey="contact" title="Contact"  className='tab' >
//         Tab content for Contact
//       </Tab>
//     </Tabs>
//   );
// }

// export default TapSection;



import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import "../Css/TapSection.css"
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TapSection() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="tab-main">
          <Box sx={{ width: '100%' }}>
            <div className="tap-con">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      </div>
      <CustomTabPanel value={value} index={0}>
        Item One Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut accusantium, eaque id aliquam laborum dignissimos itaque labore ad distinctio eveniet, vero saepe obcaecati voluptate laboriosam 
        perspiciatis, rerum architecto. Dolores, sunt. <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eveniet ipsum officiis ab quos omnis exercitationem numquam recusandae iusto illo consequatur, doloribus dolorum aliquam corrupti.
         Amet nostrum ratione maiores ad.
        
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatibus nihil dolore architecto, quidem, temporibus quos doloremque quam beatae dignissimos tenetur deserunt ipsum
         hic recusandae autem vel excepturi corporis officiis?  <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eveniet ipsum officiis ab quos omnis exercitationem numquam recusandae iusto illo consequatur, doloribus dolorum aliquam corrupti.
         Amet nostrum ratione maiores ad.
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sed quae labore vitae, eos fuga aspernatur sint vel doloribus illo dolores quasi, sit fugit.
         Atque voluptatibus iure saepe mollitia a.  <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eveniet ipsum officiis ab quos omnis exercitationem numquam recusandae iusto illo consequatur, doloribus dolorum aliquam corrupti.
         Amet nostrum ratione maiores ad.
      </CustomTabPanel>
    </Box>
    </div>
  );
}
