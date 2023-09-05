import React from "react";
import { FC } from "react";
import { Box, Input, useNavigate } from "zmp-ui";

export const Inquiry: FC = () => {
  const navigate = useNavigate();
  return (
    <Box className="search-bk">
      <Input.Search
        onFocus={() => navigate("/search")}
        placeholder="Nhập vào nội dung cần tìm..."
        className="input-custom"
      />
    </Box>
  );
};
