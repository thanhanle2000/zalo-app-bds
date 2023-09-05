import React, { FC } from "react";
import { useRecoilValueLoadable } from "recoil";
import { userState } from "state";
import { Box, Header, Text } from "zmp-ui";
import appConfig from "../../../app-config.json";
import logo from "../../assets/20210531_212350.png";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

export const Welcome: FC = () => {
  const user = useRecoilValueLoadable(userState);

  return (

    <Header
      className="app-header no-border pl-4 flex-none pb-[6px] bk-color-header"
      showBackIcon={false}
      title={
        (
          <Box flex justifyContent="space-between" alignItems="center" className="space-x-2">
            <img
              className="w-8 h-8 rounded-lg border-inset"
              src={logo}
            />
            {/* <Box>
              <Text.Title size="small">{appConfig.app.title}</Text.Title>
            </Box> */}
            <div className="row-ac">
              <div className="ic-ac-header mr-10">
                <AccountCircleIcon />
                <div className="name-user">{user.contents.name}</div>
              </div>
              <div className="my-loca mr-10">
                <MyLocationIcon />
              </div>
              <div className="my-loca">
                <HeadsetMicIcon />
              </div>
            </div>
          </Box>
        ) as unknown as string
      }
    />
  );
};
