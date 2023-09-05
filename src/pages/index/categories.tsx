import React from "react";
import { useNavigate } from "react-router";
import { useSetRecoilState } from "recoil";
import { selectedCategoryIdState } from "state";
import { Box, Text } from "zmp-ui";

const Category = ({ data }) => {
  const navigate = useNavigate();
  const setSelectedCategoryId = useSetRecoilState(selectedCategoryIdState);

  const gotoCategory = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
    navigate("/category");
  };
  return (
    <Box className=" grid grid-cols-4 gap-4 p-4 bk-cate">
      {data.map((item, i) => (
        <div
          key={i}
          onClick={() => gotoCategory(item.id)}
          className="flex flex-col space-y-2 items-center"
        >
          <img className="w-12 h-12" src={item.logo} />
          <Text size="xxSmall" className="text-gray">
            {item.title}
          </Text>
        </div>
      ))}
    </Box>
  );
};

export default Category
