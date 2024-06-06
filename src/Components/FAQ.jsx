import Accordion from 'react-bootstrap/Accordion';
import "../Css/FAQ.css"

const Faq=[
    {
        i:0,
        header:"Accordion Item 1",
        para:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in   reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in  culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        i:1,
        header:"Accordion Item 2",
        para:" Accordion Item 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in   reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in  culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        i:2,
        header:"Accordion Item 3",
        para:" Accordion Item 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in   reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in  culpa qui officia deserunt mollit anim id est laborum."
    }
]
function FAQ() {
  return (
    <div className="Faq-main">
        <h1 style={{textAlign:"center"}}>FAQ Values</h1>
    <Accordion className='faq-con'>
{
    Faq.map((val,i)=>(
      <Accordion.Item eventKey={val.i} key={i}> 
      <div className='faq-header'>
        <Accordion.Header >{val.header}</Accordion.Header></div>
        <Accordion.Body>
         {val.para}
        </Accordion.Body>

      </Accordion.Item>
          ))
        }
      {/* <Accordion.Item eventKey="1">
        <Accordion.Header></Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item> */}
    </Accordion>
    </div>
  );
}

export default FAQ;