import { Container, HeadingOneHome, Your } from "./styles";
import { Paragraph } from "./styles";
import FormModal from "../../components/Modal/FormModal";
import { useState } from "react";
import Button from "../../components/Reusable/ButtonComb/Button";
import { Bounce } from "react-reveal";
import lilChart from "../../assets/images/lilChart.svg";
import middle from "../../assets/images/mid.svg";
import mobileImg from '../../assets/images/homDinamik.svg'
import bigChart from "../../assets/images/big.svg";
import up from "../../assets/images/uptrade.svg";
import request from "../../services";
import { useEffect } from "react";
import MainLoading from "../../components/Reusable/MainLoadind";
import Swal from "sweetalert2";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [callData, setCallData] = useState([]);
  const [loading, setLoading] = useState(true);

  //! GET ALL THE DATA FROM SERVER
  const getCallReq = async () => {
    try {
      setLoading(true);
      const res = await request.get(`public/employee`);
      setCallData(res?.data?.data);
      setLoading(false);
    } catch (error) {
       Swal.fire("Serverdan xatolik yoki internetga ulanganingizni tekshiring !",error)
      console.error("Error", error);
      setLoading(false);
    }
  };
  
  useEffect(() => {
    getCallReq();
  }, []);
  
  return (
    <Container id="home">
      {loading ? (
        <MainLoading />
      ) : (
        <Container.MidWrap>
          <Container.Wrapper>
            <Bounce bottom>
              <HeadingOneHome width={"728px"}>
                Solutions to elevate <span>your</span>
              </HeadingOneHome>
            </Bounce>
            <Container.TextWrap>
              <Bounce bottom>
                <Your>your</Your>
              </Bounce>
              <div onClick={() => setShowModal(true)}>
                <Button
                  title="business"
                  fontSize="56px"
                  btnwidth="298px"
                  btnheight="85px"
                  iconSize="34px"
                  aWidth="85px"
                  aHeight="85px"
                />
              </div>
            </Container.TextWrap>
            <Paragraph width="546px" style={{ marginTop: "27px" }}>
              Connect with growing workforce and companies in the field of
              software development and animation to ensure quality and
              competitive
            </Paragraph>
            <Container.TeamBox className="image-class">
              <div>
                {callData?.slice(0, 5).map((items, index) => {
                  const topPosition = index * 0;
                  const leftPosition = index * 50;
                  const zindex = 5 - index;
                  return (
                    <img
                      key={index}
                      className="employee-image"
                      src={items?.employeePhotoUrl}
                      alt="company employees"
                      style={{
                        marginTop: "33px",
                        zIndex: `${zindex}`,
                        top: `${topPosition}px`,
                        left: `${leftPosition}px`,
                        borderRadius: "50%",
                        border: "5px solid #043742",
                        objectFit: "cover",
                        width: "80px",
                        height: "80px",
                      }}
                    />
                  );
                })}
                <div className="lastrounded">
                  <span>{callData.length}+</span>
                </div>
              </div>
            </Container.TeamBox>
            <Container.MobileImg src={mobileImg}/>
          </Container.Wrapper>
          <div className="chart">
            <Bounce bottom>
              <img className="lilChart" src={lilChart} alt="chart" />
            </Bounce>
            <Bounce bottom delay={150}>
              <img className="midChart" src={middle} alt="chart" />
            </Bounce>
            <Bounce bottom delay={100}>
              <img className="bigChart" src={bigChart} alt="chart" />
            </Bounce>
            <Bounce top delay={400}>
              <img className="upTrade" src={up} alt="up arrow" />
            </Bounce>
          </div>
          <Container.MobileBlur></Container.MobileBlur>
          <FormModal
            isVisible={showModal}
            onClose={() => setShowModal(false)}
          ></FormModal>
        </Container.MidWrap>
      )}
    </Container>
  );
}

export default Home;
