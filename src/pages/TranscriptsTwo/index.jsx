import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Img, Line, List, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const TranscriptsTwoPage = () => {
  const navigate = useNavigate();

  const sideBarMenu = [
    {
      label: (
        <div className="bg-amber-A200 flex flex-col h-[63px] items-center justify-end pt-[7px] px-[5px] rounded-[9px] w-[63px]">
          <Img
            className="h-[49px] md:h-auto object-cover w-[99%]"
            src="images/img_image11.png"
            alt="imageEleven_One"
          />
        </div>
      ),
    },
    {
      label: (
        <Img
          className="h-[63px] md:h-auto object-cover w-[63px]"
          src="images/img_crown.png"
          alt="crown"
        />
      ),
    },
    {
      label: (
        <Img
          className="h-[63px] md:h-auto object-cover w-[63px]"
          src="images/img_people.png"
          alt="people"
        />
      ),
    },
    {
      label: (
        <Img
          className="h-[63px] md:h-auto object-cover w-[63px]"
          src="images/img_add.png"
          alt="add"
        />
      ),
    },
  ];

  return (
    <>
      <div className="bg-black-900 flex flex-col font-kollektif items-start justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-11 items-start justify-start md:px-5 w-[92%] md:w-full">
          <Sidebar1 className="!sticky !w-[185px] bg-gray-900_3d border border-gray-800 border-solid flex h-screen md:hidden justify-start overflow-auto rounded-[40px] top-[0]" />
          <div className="flex flex-1 flex-col gap-7 items-end justify-start w-full">
            <div className="flex flex-col items-start justify-start w-[96%] md:w-full">
              <div className="flex flex-row gap-[30px] items-start justify-start w-[31%] md:w-full">
                <Img
                  className="common-pointer h-[50px] md:h-auto mt-[3px] object-cover w-[50px]"
                  src="images/img_arrow1.png"
                  alt="arrowOne"
                  onClick={() => navigate("/teamdashboard")}
                />
                <Text
                  className="sm:text-[40px] md:text-[46px] text-[50px] text-white-A700"
                  size="txtKollektifBold50"
                >
                  Transcripts
                </Text>
              </div>
              <Text
                className="md:ml-[0] ml-[81px] mt-[15px] md:text-5xl text-[70px] text-yellow-100"
                size="txtKollektif70"
              >
                Annual Strategy Review Meeting
              </Text>
              <Line className="bg-white-A700 h-px mt-1.5 w-full" />
            </div>
            <div className="flex flex-col gap-[26px] items-center justify-start w-full">
              <div className="flex md:flex-col flex-row gap-8 items-center justify-between w-full">
                <List
                  className="flex flex-col gap-[23px] w-[56%]"
                  orientation="vertical"
                >
                  <div className="bg-blue_gray-100_21 flex sm:flex-col flex-row sm:gap-5 items-center justify-end p-[19px] rounded-[12px] w-full">
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                      size="txtKollektifBold30WhiteA700"
                    >
                      John Doe
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[57px] sm:mt-0 mt-0.5 sm:text-[24.55px] md:text-[26.55px] text-[28.55px] text-white-A700"
                      size="txtPoppinsRegular2855"
                    >
                      10,789 words
                    </Text>
                    <div
                      className="common-pointer flex sm:flex-1 flex-row font-poppins items-center justify-center sm:ml-[0] ml-[29px] mr-0.5 w-[33%] sm:w-full"
                      onClick={() => navigate("/transcriptsone")}
                    >
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-deep_purple-200"
                        size="txtPoppinsSemiBold28"
                      >
                        Show more
                      </Text>
                      <Img
                        className="h-8 md:h-auto ml-0.5 object-cover w-8"
                        src="images/img_downarrow1.png"
                        alt="downarrowOne"
                      />
                    </div>
                  </div>
                  <div className="bg-blue_gray-100_21 flex sm:flex-col flex-row sm:gap-10 items-center justify-between p-[19px] rounded-[12px] w-full">
                    <Text
                      className="sm:ml-[0] ml-[7px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                      size="txtKollektifBold30WhiteA700"
                    >
                      Sarah Hil
                    </Text>
                    <Text
                      className="sm:mt-0 mt-0.5 sm:text-[24.55px] md:text-[26.55px] text-[28.55px] text-white-A700"
                      size="txtPoppinsRegular2855"
                    >
                      9,139 words
                    </Text>
                    <div className="flex flex-row font-poppins items-end justify-center mr-[5px]">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-deep_purple-200"
                        size="txtPoppinsSemiBold28"
                      >
                        Show more
                      </Text>
                      <Img
                        className="h-8 md:h-auto mb-[3px] ml-0.5 mt-1.5 object-cover w-8"
                        src="images/img_downarrow1.png"
                        alt="downarrowTwo"
                      />
                    </div>
                  </div>
                  <div className="bg-blue_gray-100_21 flex sm:flex-col flex-row sm:gap-10 items-center justify-between p-[19px] rounded-[12px] w-full">
                    <Text
                      className="ml-1.5 sm:ml-[0] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                      size="txtKollektifBold30WhiteA700"
                    >
                      Taylor Mu
                    </Text>
                    <Text
                      className="sm:mt-0 mt-0.5 sm:text-[24.55px] md:text-[26.55px] text-[28.55px] text-white-A700"
                      size="txtPoppinsRegular2855"
                    >
                      11,345 words
                    </Text>
                    <div className="flex flex-row font-poppins items-end justify-center mr-1">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-deep_purple-200"
                        size="txtPoppinsSemiBold28"
                      >
                        Show more
                      </Text>
                      <Img
                        className="h-8 md:h-auto mb-[3px] ml-0.5 mt-1.5 object-cover w-8"
                        src="images/img_downarrow1.png"
                        alt="downarrowThree"
                      />
                    </div>
                  </div>
                  <div className="bg-blue_gray-100_21 flex sm:flex-col flex-row sm:gap-5 items-center justify-end p-[19px] rounded-[12px] w-full">
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                      size="txtKollektifBold30WhiteA700"
                    >
                      John Doe
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[57px] sm:mt-0 mt-0.5 sm:text-[24.55px] md:text-[26.55px] text-[28.55px] text-white-A700"
                      size="txtPoppinsRegular2855"
                    >
                      10,789 words
                    </Text>
                    <div className="flex sm:flex-1 flex-row font-poppins items-start justify-center sm:ml-[0] ml-[27px] mr-1.5 w-[33%] sm:w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-deep_purple-200"
                        size="txtPoppinsSemiBold28"
                      >
                        Show more
                      </Text>
                      <Img
                        className="h-8 md:h-auto ml-0.5 mt-[3px] object-cover w-8"
                        src="images/img_downarrow1.png"
                        alt="downarrowFour"
                      />
                    </div>
                  </div>
                </List>
                <List
                  className="flex flex-col gap-[41px] w-[42%]"
                  orientation="vertical"
                >
                  <div className="flex flex-col items-center justify-start my-0 w-full">
                    <div className="bg-gray-900_bf border border-gray-400 border-solid flex flex-col items-center justify-start p-4 rounded-[40px] w-full">
                      <div className="flex flex-col items-center justify-start mb-1 w-[91%] md:w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-evenly w-[97%] md:w-full">
                          <Text
                            className="sm:mt-0 mt-1.5 sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                            size="txtKollektif40"
                          >
                            Minutes of Meeting
                          </Text>
                          <Img
                            className="h-[50px] md:h-auto mb-1 object-cover w-[50px]"
                            src="images/img_image12.png"
                            alt="imageTwelve"
                          />
                        </div>
                        <Text
                          className="mt-3 text-3xl sm:text-[26px] md:text-[28px] text-white-A700_7f"
                          size="txtKollektif30WhiteA7007f"
                        >
                          Annual Strategy Review...pdf
                        </Text>
                        <div className="flex sm:flex-col flex-row font-poppins sm:gap-5 items-start justify-start mt-[7px] w-full">
                          <Text
                            className="common-pointer sm:text-2xl md:text-[26px] text-[28px] text-purple-100 underline"
                            size="txtPoppinsSemiBold28Purple100"
                            onClick={() => navigate("/transcriptsthree")}
                          >
                            View
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[159px] sm:text-2xl md:text-[26px] text-[28px] text-purple-100"
                            size="txtPoppinsSemiBold28Purple100"
                          >
                            Download
                          </Text>
                          <Img
                            className="h-[25px] md:h-auto sm:ml-[0] ml-[5px] sm:mt-0 mt-2 object-cover w-[25px]"
                            src="images/img_arrow11.png"
                            alt="arrowEleven"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start my-0 w-full">
                    <div className="bg-gray-900_bf border border-gray-400 border-solid flex flex-col items-center justify-start p-[18px] rounded-[40px] w-full">
                      <div className="flex flex-col items-start justify-start mb-0.5 w-[92%] md:w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[96%] md:w-full">
                          <Text
                            className="sm:mt-0 mt-1 sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                            size="txtKollektif40"
                          >
                            Meeting Highlights
                          </Text>
                          <Img
                            className="h-[50px] md:h-auto mb-0.5 sm:ml-[0] ml-[5px] object-cover w-[50px]"
                            src="images/img_image12.png"
                            alt="imageTwelve"
                          />
                        </div>
                        <Text
                          className="mt-3 text-3xl sm:text-[26px] md:text-[28px] text-white-A700_7f"
                          size="txtKollektif30WhiteA7007f"
                        >
                          Annual Strategy Review...pdf
                        </Text>
                        <div className="flex sm:flex-col flex-row font-poppins sm:gap-5 items-start justify-start mt-[7px] w-full">
                          <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-purple-100 underline"
                            size="txtPoppinsSemiBold28Purple100"
                          >
                            View
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[159px] sm:text-2xl md:text-[26px] text-[28px] text-purple-100"
                            size="txtPoppinsSemiBold28Purple100"
                          >
                            Download
                          </Text>
                          <Img
                            className="h-[25px] md:h-auto sm:ml-[0] ml-[5px] sm:mt-0 mt-2 object-cover w-[25px]"
                            src="images/img_arrow11.png"
                            alt="arrowTwelve"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
              <div className="flex md:flex-col flex-row gap-[31px] items-start justify-between w-full">
                <div className="bg-blue_gray-100_21 flex md:flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-end mb-[122px] p-[18px] rounded-[12px] w-[56%] md:w-full">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                    size="txtKollektifBold30WhiteA700"
                  >
                    John Doe
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[57px] sm:mt-0 my-0.5 sm:text-[24.55px] md:text-[26.55px] text-[28.55px] text-white-A700"
                    size="txtPoppinsRegular2855"
                  >
                    10,789 words
                  </Text>
                  <div className="flex flex-row font-poppins items-end justify-center sm:ml-[0] ml-[25px] mr-[7px] w-[33%] sm:w-full">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-deep_purple-200"
                      size="txtPoppinsSemiBold28"
                    >
                      Show more
                    </Text>
                    <Img
                      className="h-8 md:h-auto mb-0.5 ml-0.5 mt-[7px] object-cover w-8"
                      src="images/img_downarrow1.png"
                      alt="downarrowFive"
                    />
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[15px] w-[42%] md:w-full">
                  <div className="bg-gray-900_bf border border-gray-400 border-solid flex flex-col items-center justify-start p-[19px] rounded-[40px] w-full">
                    <div className="flex flex-col items-start justify-start w-[92%] md:w-full">
                      <div className="flex flex-row items-start justify-start w-[92%] md:w-full">
                        <Text
                          className="mt-[3px] sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                          size="txtKollektif40"
                        >
                          Summary Meeting
                        </Text>
                        <Img
                          className="h-[50px] md:h-auto ml-0.5 object-cover w-[50px]"
                          src="images/img_image12.png"
                          alt="imageThirteen"
                        />
                      </div>
                      <Text
                        className="mt-3 text-3xl sm:text-[26px] md:text-[28px] text-white-A700_7f"
                        size="txtKollektif30WhiteA7007f"
                      >
                        Annual Strategy Review...pdf
                      </Text>
                      <div className="flex sm:flex-col flex-row font-poppins sm:gap-5 items-start justify-start mt-[7px] w-full">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-purple-100 underline"
                          size="txtPoppinsSemiBold28Purple100"
                        >
                          View
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[159px] sm:text-2xl md:text-[26px] text-[28px] text-purple-100"
                          size="txtPoppinsSemiBold28Purple100"
                        >
                          Download
                        </Text>
                        <Img
                          className="h-[25px] md:h-auto sm:ml-[0] ml-[5px] sm:mt-0 mt-2 object-cover w-[25px]"
                          src="images/img_arrow11.png"
                          alt="arrowThirteen"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TranscriptsTwoPage;
