/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

type TuseCanvasjsConfigProps = {
  suffixShown: () => "%" | "";
};
export type TLegendConfigure = {
  fontColor: string;
  fontSize: number;
  fontWeight: string;
  fontStyle: string;
  verticalAlign: string;
  horizontalAlign: string;
};
export type TAxiosConfig = {
  title: string;
  suffix: "" | "%";
  labelFontSize: number;
  interval: number;
  labelAngle: number;
  interlacedColor: string;
  tickLength: number;
  labelMaxWidth: number;
  titleFontColor: string;
  titleFontSize: number;
  titleFontFamily: string;
  titleFontWeight: string;
  titleFontStyle: string;
};
export type TTitleConfig = {
  text: string
  fontColor: string
  fontFamily: string
  fontSize: number
  fontWeight: string
  fontStyle: string
  padding: number
  margin: number
  backgroundColor: string
  borderColor: string
  borderWidth: number
  horizontalAlign: string
  verticalAlign: string
  wrap: boolean
  maximumWidth: any
  dockInsidePlotArea: boolean
}
export type TIndexLabelConfig = {
  indexLabel: string
  indexLabelFontColor: string
  indexLabelFontSize: number
  indexLabelFontStyle: string
  indexLabelFontWeight: string
  indexLabelBackgroundColor: string
  indexLabelBorderColor: string
  indexLabelPadding: number
  indexLabelWrap: boolean
  indexLabelMaxWidth: any
  indexLabelPlacement: string
  indexLabelLineThickness: number,
  indexLabelOrientation: "vertical"|"horizontal"
}
const useCanvasjsConfig = ({ suffixShown }: TuseCanvasjsConfigProps) => {
  const [xAxisConfigure, setXAxisConfigure] = useState<TAxiosConfig>({
    title: "Here X axis title",
    suffix: suffixShown(),
    labelFontSize: 10,
    interval: 1,
    labelAngle: -20,
    interlacedColor: "#fff",
    tickLength: 1,
    labelMaxWidth: 100,
    titleFontColor: "red",
    titleFontSize: 20,
    titleFontFamily: "verdana",
    titleFontWeight: "bold",
    titleFontStyle: "italic",
  });
  const [yAxisConfigure, setYAxisConfigure] = useState<TAxiosConfig>({
    title: "Here Y axis title",
    suffix: suffixShown(),
    labelFontSize: 10,
    interval: 10,
    labelAngle: -90,
    interlacedColor: "#fff",
    tickLength: 1,
    labelMaxWidth: 100,
    titleFontColor: "#808080",
    titleFontSize: 20,
    titleFontFamily: "verdana",
    titleFontWeight: "bold",
    titleFontStyle: "italic",
  });
  const [legendConfigure, setLegendConfigure] = useState<TLegendConfigure>({
    fontColor: "#0000FF",
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    verticalAlign: "center",
    horizontalAlign: "right",
  });

  const [titleConfig, setTitleConfig] = useState<TTitleConfig>({
    text: "Chart Title",
    fontColor: "black",
    fontFamily: "Arial",
    fontSize: 20,
    fontWeight: "normal",
    fontStyle: "normal",
    padding: 10,
    margin: 10,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 0,
    horizontalAlign: "center",
    verticalAlign: "top",
    wrap: false,
    maximumWidth: null,
    dockInsidePlotArea: false,
  });

  const [indexLabelConfig, setIndexLabelConfig] = useState<TIndexLabelConfig>({
    indexLabel: '{label} - {y}',
    indexLabelFontColor: '#000000',
    indexLabelFontSize: 12,
    indexLabelFontStyle: 'italic',
    indexLabelFontWeight: 'normal',
    indexLabelBackgroundColor: 'transparent',
    indexLabelBorderColor: 'transparent',
    indexLabelPadding: 5,
    indexLabelWrap: false,
    indexLabelMaxWidth: null,
    indexLabelPlacement: 'inside',
    indexLabelLineThickness: 1,
    indexLabelOrientation: "vertical",
});

  return {
    yAxisConfigure,
    setYAxisConfigure,
    xAxisConfigure,
    setXAxisConfigure,
    legendConfigure,
    setLegendConfigure,
    titleConfig,
    setTitleConfig,
    indexLabelConfig,
    setIndexLabelConfig,
  };
};

export default useCanvasjsConfig;