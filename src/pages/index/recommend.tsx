import { DisplayPrice } from "components/display/price";
import { ProductPicker } from "components/product/picker";
import { Section } from "components/section";
import { getDataCloud } from "core/services/connect";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Text } from "zmp-ui";

export const RecommendContent = ({ data, title }) => {

  return (
    <Section title={title} padding="title-only" id="">
      <Swiper slidesPerView={2} slidesPerGroup={2} spaceBetween={16} className="px-4">
        {data.map((product: any) => (
          <SwiperSlide key={product.id} className="row-item">
            <ProductPicker product={product}>
              {({ open }) => (
                <div onClick={open} className="col-item">
                  <div className="space-y-3 row-item-fl">
                    <Box
                      className="relative aspect-video bg-cover bg-center bg-skeleton custom-img-background"
                      style={{ backgroundImage: `url(${product.logo})` }}
                    >
                    </Box>
                    <Box className="space-y-1">
                      <Text size="small" className="title-item">{product.title}</Text>
                      <Text size="xxSmall" className="line-through text-gray">
                        {
                          product.price === 0 ? null : <DisplayPrice>{product.price}</DisplayPrice>
                        }
                      </Text>
                    </Box>
                  </div>
                  <div className="title-contact-item">Liên hệ</div>
                </div>
              )}
            </ProductPicker>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};

export const Recommend = ({ title, idCate }) => {
  const [lstPro, setLstPro] = useState<any>([]);

  useEffect(() => {
    const fetchLstPro = async () => {
      const data = await getDataCloud("product", "GOLAND", 2, idCate, "");
      setLstPro(data);
    };

    fetchLstPro();
  }, [])
  return (
    <div>
      {
        lstPro.length === 0 ? null : <RecommendContent data={lstPro} title={title} />
      }
    </div>
  );
};
