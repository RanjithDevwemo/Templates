import React from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
//   MegaMenuModel,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
} from 'mdb-react-ui-kit';
import "../Css/Megamenu.css"
export default function Megamenu() {
  return (
    <MDBNavbar expand='' className='main-megamenu'>
      <MDBContainer >
        <MDBNavbarNav className='' >
          <MDBNavbarItem className='position-static'>
            <MDBDropdown>
              <MDBDropdownToggle tag='a' className='mega-con'>
                Mega menu
              </MDBDropdownToggle>
              <MDBDropdownMenu
                className='maga-row'
                style={{
                  borderTopLeftRadius: '0',
                  borderTopRightRadius: '0',
                }}
              >
                <MDBContainer className='maga-row'>
                  <MDBRow className='maga-row'>
                    <MDBCol md='6' lg='3' className='pad'>
                      <MDBListGroup flush className=''>
                        <MDBListGroupItem tag='a' href='#' action className='mega-content'>
                          <p className='content'>Lorem ipsum</p>
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Dolor sit
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Amet consectetur
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Cras justo odio
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Adipisicing elit
                        </MDBListGroupItem>
                      </MDBListGroup>
                    </MDBCol>
                    <MDBCol md='6' lg='3' className='mb-3 mb-lg-0'>
                      <MDBListGroup flush>
                        <MDBListGroupItem tag='a' href='#' action>
                          Explicabo voluptas
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Perspiciatis quo
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Cras justo odio
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Laudantium maiores
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Provident dolor
                        </MDBListGroupItem>
                      </MDBListGroup>
                    </MDBCol>
                    <MDBCol md='6' lg='3' className='mb-3 mb-md-0'>
                      <MDBListGroup flush>
                        <MDBListGroupItem tag='a' href='#' action>
                          Iste quaerato
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Cras justo odio
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Est iure
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Praesentium
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Laboriosam
                        </MDBListGroupItem>
                      </MDBListGroup>
                    </MDBCol>
                    <MDBCol md='6' lg='3'>
                      <MDBListGroup flush>
                        <MDBListGroupItem tag='a' href='#' action>
                          Cras justo odio
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Saepe
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Vel alias
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Sunt doloribus
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Cum dolores
                        </MDBListGroupItem>
                      </MDBListGroup>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  );
}