import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Line, List, Text } from "components";

const HostedMeetingsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-row gap-10 bg-black-900 font-poppins mx-auto w-full">
        {/* Sidebar */}
        <div className="bg-gray-900_3d border border-gray-800 border-solid flex flex-col items-end justify-start mb-[1336px] p-[46px] md:px-5 rounded-[40px] w-[13%] md:w-full" style={{ height: "1010px" }}>
          {/* Logo */}
          <Img
            className="h-[72px] md:h-auto mt-[13px] object-cover w-[72px]"
            src="images/img_logo_72x72.png"
            alt="logo"
            style={{ marginRight: "15px" }}
          />

          {/* Sidebar Content */}
          <div className="flex flex-col gap-[15px] justify-start mt-[19px] w-[83%] md:w-full">
            <div className="bg-amber-A200 flex flex-col h-[63px] items-center justify-start mr-1 mt-[37px] pt-[5px] px-[5px] rounded-[9px] w-[63px]">
              <Img
                className="h-[49px] md:h-auto mt-[7px] object-cover w-[99%]"
                src="images/img_image11.png"
                alt="imageEleven"

              />
            </div>
            <Line className="bg-white-A700 h-px mt-[29px] w-[78%]" style={{ width: "70px" }} />
            {/* Navigation Links */}
            <div className="flex flex-col items-start justify-start mb-[95px] mt-[35px]">
              <Img
                className="common-pointer h-[63px] md:h-auto mt-9 object-cover w-[63px]"
                src="images/img_home1.png"
                alt="homeOne"
                onClick={() => navigate("/meetingtype")}
                style={{ marginTop: "-5px" }}
              />
              <Img
                className="common-pointer h-[63px] md:h-auto mt-[33px] object-cover w-[63px]"
                src="images/img_crown.png"
                alt="crown"
                onClick={() => navigate("/hostedmeetings")}
              />
              <Img
                className="h-[63px] md:h-auto mt-9 object-cover w-[63px]"
                src="images/img_people.png"
                alt="people"
              />
              <Img
                className="h-[63px] md:h-auto mt-[30px] object-cover w-[63px]"
                src="images/img_add.png"
                alt="add"
              />
              <Img
                className="h-[63px] md:h-auto mt-[50px] object-cover w-[63px]"
                src="images/img_setting.png"
                alt="setting"
              />
              <Img
                className="h-[63px] md:h-auto mb-[52px] mt-[58px] object-cover w-[63px]"
                src="images/img_question.png"
                alt="question"
              />
            </div>
          </div>
        </div>

        {/* Hosted Meetings Container */}
        <div className="w-[86%]">
          <div className="bg-black-900 flex flex-col font-poppins gap-[23px] justify-start mx-auto w-full">
            <div className="flex flex-col items-center w-full">
              <div className="flex flex-col md:px-5 relative w-full">
                <div className="h-[1089px] md:h-[NaNpx] ml-auto mt-[-NaNpx] w-[86%] md:w-full z-[1]" style={{ marginLeft: "-180px" }}>
                  <div className="flex flex-col md:gap-10 gap-[647px] h-full justify-start m-auto w-full">
                    <Img
                      className="h-[184px] md:h-auto mr-[930px] object-cover w-[35%]"
                      src="images/img_blob2_184x368.png"
                      alt="blobTwo"
                    />
                    <Img
                      className="h-[258px] md:h-auto md:ml-[0] ml-[1162px] object-cover w-[11%]"
                      src="images/img_blob1_1.png"
                      alt="blobOne"
                    />
                  </div>
                  <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start my-auto right-[8%] w-[74%]" style={{ marginTop: "86px" }}>
                    <Text
                      className="sm:text-[38.94px] md:text-[44.94px] text-[48.94px] text-white-A700"
                      size="txtPoppinsBold4894"
                      style={{ marginLeft: "-140px" }}
                    >
                      Hosted Meetings
                    </Text>
                    <Line className="bg-white-A700 h-px mt-[7px] w-full" style={{ marginLeft: "-140px", width: "900px" }} />
                    <List
                      className="flex flex-col gap-[22px] items-center mt-[27px] w-full"
                      orientation="vertical"
                      style={{ marginLeft: "-140px" }}
                    >
                      <div
                        className="common-pointer md:h-36 h-[93px] relative w-full"
                        onClick={() => navigate("/teamdashboard")}
                      >
                        <div className="absolute bg-blue_gray-100_21 flex md:flex-col flex-row font-kollektif gap-[25px] h-full inset-[0] items-center justify-center m-auto p-6 sm:px-5 rounded-[12px] w-full">
                          <Text
                            className="md:ml-[0] ml-[196px] md:mt-0 my-1 sm:text-[24.55px] md:text-[26.55px] text-[28.55px] text-white-A700"
                            size="txtKollektif2855"
                          >
                            The Annual Conference on How to Schedule More...
                          </Text>
                          <Img
                            className="h-8 md:h-auto mr-2.5 object-cover w-8"
                            src="images/img_arrowdownsigntonavigate_32x32.png"
                            alt="arrowdownsignto"
                          />
                        </div>
                        <Button
                          className="absolute cursor-pointer font-poppins h-full inset-y-[0] leading-[normal] left-[0] min-w-[200px] my-auto rounded-bl-[12px] rounded-tl-[12px] sm:text-[24.55px] md:text-[26.55px] text-[28.55px] text-center"
                          size="sm"
                        >
                          28 Aug
                        </Button>
                      </div>
                    </List>
                  </div>
                </div>
                {/* ... (Rest of the existing Hosted Meetings JSX) */}
              </div>
            </div>
            {/* ... (Rest of the existing Hosted Meetings JSX) */}
          </div>
        </div>
      </div >
    </>
  );
};

export default HostedMeetingsPage;


