import React, { useContext } from "react";
import { Context } from "../utils/Context";

const Dialog = ({ icon, text, subtext }) => {
  const { dialogModal, openDialog, closeDialog } = useContext(Context);

  return (
    <>
      <dialog
        ref={dialogModal}
        className="self-center justify-self-center p-2 rounded-md max-w-96 dark:bg-[#575858] m-2"
      >
        <div className="flex flex-col items-center justify-center gap-2">
          {icon}
          <p className="font-semibold dark:text-darkheader">{text}</p>
          <p className="dark:text-darknormal text-center">{subtext}</p>
          <button
            className="bg-primary w-[100%] p-2 text-white rounded-sm my-1 hover:bg-[#6466ff] dark:bg-darkprimary"
            onClick={closeDialog}
          >
            OK
          </button>
        </div>
      </dialog>
    </>
  );
};

export default Dialog;
