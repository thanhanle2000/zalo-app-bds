import { getDataCloud } from "core/services/connect";
import BlogItem from "pages/blog/blog-item";
import React, { Suspense, useEffect, useState } from "react";
import { Box, Page } from "zmp-ui";
import { Banner } from "./banner";
import Category from "./categories";
import { Inquiry } from "./inquiry";
import { Recommend as SectionDataList } from "./recommend";
import { Welcome } from "./welcome";

const HomePage: React.FunctionComponent = () => {
  // useState with explicit type annotation
  const [lstBanner, setLstBanner] = useState<any>([]);
  const [lstCate, setLstCate] = useState<any>([]);
  const [lstBlog, setLstBlog] = useState<any>([]);

  useEffect(() => {
    // banner
    const fetchLstBanner = async () => {
      const data = await getDataCloud("banner-mobile", "GOLAND", 1, 0, "");
      setLstBanner(data);
    };
    // cate
    const fetchLstCate = async () => {
      const data = await getDataCloud("category", "GOLAND", 1, 0, "");
      setLstCate(data);
    };
    // blog
    const fetchLstBlog = async () => {
      const data = await getDataCloud("blogs", "GOLAND", 1, 0, "");
      setLstBlog(data);
    };
    fetchLstBanner();
    fetchLstCate();
    fetchLstBlog();
  }, []);
  return (
    <Page className="relative flex-1 flex flex-col">
      <Welcome />
      <Box className="flex-1 overflow-auto bk-white">
        <Inquiry />
        <div className="sec-page h-screen">
          <Category data={lstCate} />
          <Suspense>
            <Banner banner={lstBanner} />
          </Suspense>
          <BlogItem data={lstBlog} />
          {
            lstCate.map((e: any) => <SectionDataList key={e.id} idCate={e.id} title={e.title} />)
          }
        </div>
      </Box>
    </Page>
  );
};

export default HomePage;
