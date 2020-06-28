import React from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';


export default function Home() {
  return (
    <React.Fragment>
      <HomeWrapper>
        <BackgroundLeft>
          <Row>
            <Col lg="6" md="6" sm="12" xs="12">
              <BannerText>
                <h1> Let's Build The Structure Together</h1>
                <h5>
                  You house can be built from anywhere around the world, Your
                  materials can be delivered to any location in Nigeria
                </h5>
              </BannerText>
              <SignUpLink to="/">View Products</SignUpLink>
            </Col>
            <Col lg="6" md="6" sm="0" xs="0">
              <Background></Background>
            </Col>
          </Row>
        </BackgroundLeft>
      </HomeWrapper>
      <HomeBody>
        <Container>
          <BodyHead>
            <Row>
              <Col lg="6" md="6" xs="12" sm="12">
                <h1>Best Value For Your Money</h1>
                <p>
                  We ensure that the best quality of products and services are
                  delivered.{" "}
                </p>
              </Col>
            </Row>
          </BodyHead>
          <Row>
            <Col lg="6" md="6" xs="12" sm="12">
              <GifImage
                src="img/value.gif"
                alt="Tippanigeria value"
              />
            </Col>
            <Col lg="6" md="6" xs="12" sm="12">
              <SectionBody>
                <h1>
                  We believe structures should be built with quality
                  materials
                </h1>
                <p>
                  {" "}
                  And for a good price we will get and deliver you the best
                  quality materials{" "}
                </p>
                <p> You don't need to worry about where and how.  We Supply:</p>
                <Row>
                  <Col lg="6" md="6" sm="6" xs="6">
                    <p> <FontAwesomeIcon icon={faCheckSquare} className="mr-3"/>Granites and Rocks</p>
                  </Col>
                  <Col lg="6" md="6" sm="6" xs="6">
                    <p> <FontAwesomeIcon icon={faCheckSquare} className="mr-3"/> Gates</p>
                  </Col>
                </Row>
                <Row>
                  <Col lg="6" md="6" sm="6" xs="6">
                    <p>  <FontAwesomeIcon icon={faCheckSquare} className="mr-3"/>Quality/imported tiles</p>
                  </Col>
                  <Col lg="6" md="6" sm="6" xs="6">
                    <p> <FontAwesomeIcon icon={faCheckSquare} className="mr-3"/>Long Lasting irons</p>
                  </Col>
                </Row>
                <Row>
                  <Col lg="6" md="6" sm="6" xs="6">
                    <p> <FontAwesomeIcon icon={faCheckSquare} className="mr-3"/>Roofing sheets</p>
                  </Col>
                  <Col lg="6" md="6" sm="6" xs="6">
                    <p> <FontAwesomeIcon icon={faCheckSquare} className="mr-3"/>Imported/Local Doors</p>
                  </Col>
                </Row>
                <Row>
                  <Col lg="6" md="6" sm="6" xs="6">
                    <p> <FontAwesomeIcon icon={faCheckSquare} className="mr-3"/>Abestors and Pop</p>
                  </Col>
                  <Col lg="6" md="6" sm="6" xs="6">
                    <p> <FontAwesomeIcon icon={faCheckSquare} className="mr-3"/>Aluminium</p>
                  </Col>
                  
                </Row>
                <Row>
                  <Col lg="6" md="6" sm="6" xs="6">
                    <p> <FontAwesomeIcon icon={faCheckSquare} className="mr-3"/>Plumbing materials</p>
                  </Col>
                  <Col lg="6" md="6" sm="6" xs="6">
                    <p> <FontAwesomeIcon icon={faCheckSquare} className="mr-3"/>Wood</p>
                  </Col>
                  
                </Row>
                <Row>
                  <Col lg="6" md="6" sm="6" xs="6">
                    <p> <FontAwesomeIcon icon={faCheckSquare} className="mr-3"/>Safety Materials</p>
                  </Col>
                  <Col lg="6" md="6" sm="6" xs="6">
                    <p> <FontAwesomeIcon icon={faCheckSquare} className="mr-3"/>Wood</p>
                  </Col>
                  
                </Row>
                <ViewMoreContainer>
                  <ViewMore to ="/">View More <FontAwesomeIcon icon={faArrowAltCircleRight} className="ml-2"/></ViewMore>
                  </ViewMoreContainer>

                {/* <h1>We care about what materials you use in construction</h1>
                <p>You dont have to worry about how you will get quality/imported tiles,
                Best Roofing sheets,Imported Doors, Long Lasting irons, Granites and Rocks</p> */}
              </SectionBody>
            </Col>
          </Row>
        </Container>

        <CardSection>
          <Content>
            <h2>Why Tippa</h2>
            <Row>
              <Col lg="4" md="4" sm="12" xs="12">
                <CardFeatures>
                  <img
                    src="img/middleman.png"
                    alt="Tippa Middleman"
                    height="100px"
                  />

                  <div>
                    <h3> Middlemen </h3>

                    <hr />
                  </div>
                  <h6>
                    {" "}
                    It elimates the postion of middlemen in Your construction
                    process thereby ensuring that Your construction finishes up
                    within a specified time frame
                  </h6>
                </CardFeatures>
              </Col>
              <Col lg="4" md="4" sm="12" xs="12">
                <CardFeatures>
                  <img
                    src="img/Best Price.png"
                    alt="Tippa Best Price"
                    height="100px"
                  />
                  <div>
                    <h3>Reduce Risks</h3>

                    <hr />
                  </div>
                  <h6>
                    Why pay a huge price to get a product when you can get it
                    for the best product? We give you the best value for your
                    money
                  </h6>
                </CardFeatures>
              </Col>
              <Col lg="4" md="4" sm="12" xs="12">
                <CardFeatures>
                  <img
                    src="img/customer care.png"
                    alt="Tippa Customer Service"
                    height="100px"
                  />
                  <div>
                    <h3> Customer Support</h3>

                    <hr />
                  </div>
                  <h6>
                    {" "}
                    You can contact our customer support for informatin on the
                    best products to use on your site at no cost
                  </h6>
                </CardFeatures>
              </Col>
            </Row>
          </Content>
        </CardSection>

        <Content>
          <Row>
            <Col lg="6" md="6" xs="12" sm="12">
            <SectionBody>
              <h1>Fast Order, Swift Delivery</h1>
              <p>
                After you pay for a product, your delievery would be swift and
                timely
              </p>
              <h1>
                Delivery of products should not be the reason why your building
                takes the length of time
              </h1>
              <p>
                We get to deliver your orders within 24 hrs when the order was
                placed. Your site projects finishes on time because of how fast
                materials are delivered
              </p>
              </SectionBody>
              <ViewMoreContainer>
                  <ViewMore to ="/">Learn more about how we can serve you better<FontAwesomeIcon icon={faArrowAltCircleRight} className="ml-2"/></ViewMore>
                  </ViewMoreContainer>
            </Col>
            <Col lg="6" md="6" xs="12" sm="12">
              <GifImage
                src="img/speed.gif"
                alt="Tippanigeria value"
               
              />
            </Col>

          </Row>
        </Content>
        <CardSection>
          <Content>
            {/* <h2>WHY CHOOSE US</h2> */}
            <Row>
              <Col lg="4" md="4" sm="12" xs="12">
                <CardFeatures>
                  <img
                    src="img/middleman.png"
                    alt="Tippa Middleman"
                    height="100px"
                  />

                  <div>
                    <h3> Support Officers </h3>

                    <hr />
                  </div>
                  <h6>
                    {" "}
                    It elimates the postion of middlemen in Your construction
                    process thereby ensuring that Your construction finishes up
                    within a specified time frame
                  </h6>
                </CardFeatures>
              </Col>
              <Col lg="4" md="4" sm="12" xs="12">
                <CardFeatures>
                  <img
                    src="img/Best Price.png"
                    alt="Tippa Best Price"
                    height="100px"
                  />
                  <div>
                    <h3> Construction Professionals </h3>

                    <hr />
                  </div>
                  <h6>
                    Why pay a huge price to get a product when you can get it
                    for the best product? We give you the best value for your
                    money
                  </h6>
                </CardFeatures>
              </Col>
              <Col lg="4" md="4" sm="12" xs="12">
                <CardFeatures>
                  <img
                    src="img/customer care.png"
                    alt="Tippa Customer Service"
                    height="100px"
                  />
                  <div>
                    <h3> Customer Support</h3>

                    <hr />
                  </div>
                  <h6>
                    {" "}
                    You can contact our customer support for informatin on the
                    best products to use on your site at no cost
                  </h6>
                </CardFeatures>
              </Col>
            </Row>
          </Content>
        </CardSection>
      </HomeBody>
    </React.Fragment>
  );
}

const Content = styled.div`
  margin-right: 80px;
  margin-left: 80px;
  @media (max-width: 450px) {
    margin-right: 30px;
    margin-left: 30px;
  }
`;
const HomeWrapper = styled.div`
  background-color: var(--lightBack);
  height: 650px;
  padding-left: 50px;
  padding-right: 15px;
  @media (max-width: 992px) {

    height: 420px;
  }
  @media (max-width: 450px) {
    padding-left: 15px;
    height: 400px;
  }
`;
const BackgroundLeft = styled.div`
  @media (max-width: 450px) {
    background-image: url(img/back-mobilee.png);
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
const Background = styled.div`
  background-image: url("img/back.png");
  background-size: cover;
  margin-top: 100px;
  height: 400px;

  @media (max-width: 450px) {
    display: none;
  }
`;
const BannerText = styled.div`
  width: 90%;
  margin-top: 250px;

  h1 {
    font-size: 2.5em;
    font-weight:bold;
  }
  h5 {
    width: 85%;
    font-weight: 500;
    margin-top: 20px;
    margin-bottom: 50px;
    line-height: 30px;
  }
  @media (max-width: 1200px) {
margin-top:220px;
      h1{
          font-size:2.5em;
          font-weight:bold;
      }
    h5{
      font-size:1em;
      
  }
  }
  @media (max-width: 992px) {
    margin-top:80px;

    h1{
        font-size:2em;
        font-weight:bold;
    }
  }
  
  @media (max-width: 450px) {
    margin-top: 70px;
    h1 {
      font-weight: bold;
      font-size: 2em;
      margin-left: 10px;
    }
    h5 {
      width: 85%;
      font-weight: 500;
      margin-top: 20px;
      margin-bottom: 50px;
      font-size: 18px;
      margin-left: 10px;
    }
  }
  @media (max-width: 320px) {
    width: 100%;
    h5 {
      width: 100%;
    }
  }
`;
const GifImage =styled.img `
width:100%;
@media only screen and (min-width: 768px) and (max-width: 991.98px),
    only screen and (max-width: 767.98px) {
margin-top:180px;
    }

    @media (max-width: 450px) {
        margin-top: 0px;
    }


`
const SignUpLink = styled(Link)`
  padding: 1em 2em;
  background-color: var(--mainGreen);
  color: var(--mainAsh);
  border-radius: 2em;

  &:hover {
    text-decoration: none;
    background-color: var(--mainOrange);
    color: var(--lightBack);
  }
`
const HomeBody = styled.div`
  @media (max-width: 450px) {
    h1 {
      font-size: 2em;
    }
    p {
      font-size: 1em;
    }
  }
`
const ViewMoreContainer = styled.div `

`
const ViewMore =styled(Link) `
color:var(--mainGreen);
float:right;
font-style:italic;
font-weight:bold;


&:hover{
    color: var(--mainOrange);
    text-decoration:none;
}
`
const SectionBody = styled.div`
  h1 {
    font-size: 2em;
    line-height:1.5em;
    margin-bottom: 1em;
    font-weight: bold;
  }
  p {
    font-size: 1.2em;
  }
  @media (max-width: 1200px) {
      h1{
          line-height:1.2em;
          margin-bottom: 0.5em;

      }
    p{
      font-size:1em;
      
    }
  }
  @media (max-width: 450px) {
    h1 {
      margin-top: 25px;
      font-size: 2em;
    }
    p {
      font-size: 1em;
    }
  }
`;
const BodyHead = styled.div`

  margin-top: 50px;
  margin-bottom: 50px;
  h1{
    font-size:2em;
font-weight:bold;
  }
  p{
      font-size:1.2em;
      width:70%;
  }
  @media (max-width: 1200px) {
    p{
      font-size:1em;
      width:80%;
  }
  }
  @media (max-width: 450px) {
    margin-bottom: 25px;
    margin-top: 25px;

    h1 {
    
      font-weight: bold;
    }
  }
`;

const CardSection = styled.div`
  background-color: var(--mainBlue);
  color: var(--mainBlue);
  margin-top: 50px;
  margin-bottom: 50px;

  h2 {
    color: var(--lightBack);
    padding-top: 35px;
    margin-top: 40px;
    text-align:center;
  }
`;

const CardFeatures = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 30px;
  margin-right: 30px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 30px;
  overflow: hidden;
  padding: 15px;
  border-radius: 10px;
  background: rgb(255, 255, 255);
  border-bottom: 3px solid rgb(57, 156, 202);
  transition-property: all;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;

  h6 {
    height: 80px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1199.98px) {
    margin-left: 10px;
    margin-right: 10px;

    h6 {
      height: 80px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 991.98px),
    only screen and (max-width: 767.98px) {
    margin-left: 10px;
    margin-right: 10px;

    h6 {
      height: 100px;
      line-height: 20px;
    }
  }
  @media only screen and (max-width: 479.98px) {
    margin-left: 30px;
    margin-right: 30px;

    h6 {
      height: 80px;
    }
  }
`;
