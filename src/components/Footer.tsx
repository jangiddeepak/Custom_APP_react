import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='https://x.com/i/flow/login' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='https://www.google.com/' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='https://www.instagram.com/' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='https://www.linkedin.com/in/deepak-jangid-071798187/' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='https://github.com/jangiddeepak' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
              Custom App
              </h6>
              <p>
               This app is created for Learning purpose
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='/mens' className='text-reset'>
                  mens
                </a>
              </p>
              <p>
                <a href='she/her' className='text-reset'>
                  girls
                </a>
              </p>
              <p>
                <a href='/electronics' className='text-reset'>
                  Electronics
                </a>
              </p>
             
              <p>
                <a href='' className='text-reset'>
                 Travel by makebyTrip
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Go to</h6>
              <p>
                <a href='/profile' className='text-reset'>
                  Profile
                </a>
              </p>
              <p>
                <a href='/myaccount' className='text-reset'>
                  My account
                </a>
              </p>
              <p>
                <a href='/home' className='text-reset'>
                 Home
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
              Jodhpur,Rajasthan
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />royalxtic@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" />9588099941
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024Copyright:Deepak Jangid
      </div>
    </MDBFooter>
  );
}