import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Slide from "react-reveal/Slide";

import SvgIcon from "../../../common/SvgIcon";

import * as S from "./styles";

import ReactPlayer from "react-player";

const VideoContentBlock = ({ icon, title, content, section, t, id }) => {
  return (
    <S.RightBlockContainer>
    <Row type="flex" justify="space-between" align="middle" id={id}>
      <Col lg={11} md={11} sm={11} xs={24}>
        <Slide left>
          <S.ContentWrapper>
          <h6>{t(title)}</h6>
            <S.ServiceWrapper>
              <ReactPlayer url={content}/>
            </S.ServiceWrapper>
          </S.ContentWrapper>
        </Slide>
      </Col>
      <Col lg={11} md={11} sm={12} xs={24}>
        <Slide right>
          <SvgIcon
            src={icon}
            className="about-block-image"
            width="100%"
            height="100%"
          />
        </Slide>
      </Col>
    </Row>
  </S.RightBlockContainer>
/*
    <S.LeftContentBlock>
      <Row type="flex" justify="space-between" align="middle" id={id}>
        <Col lg={11} md={11} sm={12} xs={24}>
          <Slide left>
            <SvgIcon
              src={icon}
              className="about-block-image"
              width="100%"
              height="100%"
            />
          </Slide>
        </Col>
        <Col lg={11} md={11} sm={11} xs={24}>
          <Slide right>
            <S.ContentWrapper>
              <h6>{t(title)}</h6>
              <S.ServiceWrapper>
               <ReactPlayer url={content}/>
              </S.ServiceWrapper>
            </S.ContentWrapper>
          </Slide>
        </Col>
      </Row>
    </S.LeftContentBlock>
  */
    );
};

export default withTranslation()(VideoContentBlock);
