import { BoxProps } from "zmp-ui/box";


export interface SectionProps extends BoxProps {
    title: string;
    padding?: "all" | "none" | "title-only";
    id: number;
}
