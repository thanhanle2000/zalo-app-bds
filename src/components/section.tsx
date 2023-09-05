import React, { PropsWithChildren } from "react";
import { FC } from "react";
import { Box, Text } from "zmp-ui";
import { BoxProps } from "zmp-ui/box";

export interface SectionProps extends BoxProps {
  title: string;
  padding?: "all" | "none" | "title-only";
  id: string;
}

export const Section: FC<PropsWithChildren<SectionProps>> = ({
  children,
  title,
  padding = "all",
  id,
  ...props
}) => {
  return (
    <Box
      className={`bg-background ${padding === "all" ? "p-4 space-y-4" : ""} ${padding === "title-only" ? "py-4 space-y-4" : ""
        }`}
      {...props}
    >
      <div className="row-blog-item">
        <Text.Title className={`${padding === "title-only" ? "px-4 title-blog" : ""}`}>
          {title}
        </Text.Title>
        <div className="title-see-all pr-10">Xem thêm</div>
      </div>
      {children}
    </Box>
  );
};
