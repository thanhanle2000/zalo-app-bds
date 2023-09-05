import { FinalPrice } from "components/display/final-price";
import React from "react";
import { Box, Text } from "zmp-ui";
import { ProductPicker } from "./picker";

export const ProductItem = ({ product }) => {
  return (
    <ProductPicker product={product}>
      {({ open }) => (
        <div className="space-y-2 row-item-cus" onClick={open}>
          <Box className="w-full aspect-square relative img-blog">
            <img
              loading="lazy"
              src={product.logo}
              className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover object-center rounded-lg bg-skeleton"
            />
          </Box>
          <Text className="title-item pl-0">{product.title}</Text>
          <Text size="xxSmall" className="text-gray pb-2">
            {
              product.price === 0 ? null : <FinalPrice>{product}</FinalPrice>
            }
          </Text>
        </div>
      )}
    </ProductPicker>
  );
};
