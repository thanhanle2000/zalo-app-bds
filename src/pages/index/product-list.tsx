import React, { FC, Suspense, useEffect, useState } from "react";
import { Section } from "components/section";
import { useRecoilValue } from "recoil";
import { productsState } from "state";
import { Box } from "zmp-ui";
import { ProductItem } from "components/product/item";
import { ProductItemSkeleton } from "components/skeletons";
import { getDataCloud } from "core/services/connect";

export const ProductListContent = ({ data, title }) => {
  return (
    <Section title={title}>
      <Box className="grid grid-cols-2 gap-4">
        {data.map((product: any) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </Box>
    </Section>
  );
};

export const ProductListFallback = ({ title }) => {
  const products = [...new Array(12)];

  return (
    <Section title={title}>
      <Box className="grid grid-cols-2 gap-4">
        {products.map((_, i) => (
          <ProductItemSkeleton key={i} />
        ))}
      </Box>
    </Section>
  );
};

export const ProductList = ({ idCate, title }) => {
  const [lstPro, setLstPro] = useState<any>([]);

  useEffect(() => {
    const fetchLstPro = async () => {
      const data = await getDataCloud("product", "GOLAND", 2, idCate);
      setLstPro(data);
    };

    fetchLstPro();
  }, [])
  return (
    <Suspense fallback={<ProductListFallback title={title} />}>
      {
        lstPro.length === 0 ? null : <ProductListContent data={lstPro} title={title} />
      }
    </Suspense>
  );
};
