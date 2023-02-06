import React from "react";
import ClickOutside from "../../hooks/ClickOutside";
const Background = ({ background, setDownloadPopup, backgroundbefore }) => {
  const domNode = ClickOutside(() => {
    setDownloadPopup(false);
  });
  return (
    <section className="fixed bg-black bg-opacity-20 left-0 top-0 z-50 h-screen w-screen px-3">
      <div
        className="bg-white max-w-3xl p-6 mx-auto translate-y-40 rounded-lg text-center"
        ref={domNode}
      >
        <div className="flex justify-end">
          <button onClick={() => setDownloadPopup(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-2 gap-1 text-sm">
          <div>
            <p>Original image</p>
            <img src={backgroundbefore} className="mx-auto mt-1" />
          </div>

          <div>
            <p>Image without background</p>
            <img src={background} className="mx-auto mt-1 mb-5" />

            <a
              download
              href={background}
              className="border p-1.5 text-indigo-500 border-indigo-500  mx-auto w-32 flex justify-center items-center rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              <p>download</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Background;
