import { getBlock } from "@metablock/core";
import React from "react";
import ReactJson from "react-json-view";

const BlockInfo = () => {
  const [state, setState] = React.useState<any>();
  const [height, setHeight] = React.useState<number>(0);

  const style: any = {};
  if (height > 0) style.minHeight = `${height}px`;

  const block = getBlock();
  const shouldSetHeight = (el: any) => {
    if (el && el.offsetHeight > height) setHeight(el.offsetHeight);
  };

  return (
    <div ref={shouldSetHeight}>
      <ReactJson src={block} theme="monokai" style={style} />
    </div>
  );
};

export default BlockInfo;
