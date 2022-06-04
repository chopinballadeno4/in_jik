import React, { PropsWithChildren } from "react";
import styled from "styled-components";

interface ApplyInfoDefaultType {
  onClickToggleApplyInfo: () => void;
}

function Apply({ onClickToggleApplyInfo, children,} : PropsWithChildren<ApplyInfoDefaultType>) {
  return (
    <Entire>
      <DialogBox>{children}</DialogBox>
      <Backdrop
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();

          if(onClickToggleApplyInfo) {
            onClickToggleApplyInfo();
          }
        }}
      />
    </Entire>
  );
}

const Entire = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

const DialogBox = styled.dialog`
  background-color: ${(props) => props.theme.white1};
  width: 800px;
  height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 3px;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  z-index: 10000;
`;

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.6);
`;

export default Apply;