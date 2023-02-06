import React, { useState } from "react";
import loadImage from "blueimp-load-image";
import Background from "./Modals/Background";
const Content = ({ setDownloadPopup, downloadpopup, setImageUrl, imageurl }) => {
  const [loading, setLoading] = useState(false);
  const [backgroundbefore, setBackgroundBefore] = useState("");
  const APIKEYS = [
    "jwW8tL7mdAXbMAKSYiqKaTyp",
    "Rga1ySKzJJgT9RrmRMB3hDnX",
    "Rb7CmEknEh7cK7FHBJyzjZPa",
    "nJDai3fkW9sgERFygU14pPd6",
    "1jXP3i4Wmp6DBSW1BmknwqL7",
    "RktZRuaJGnexf1c2Gu9qL4Dh",
  ];

  function random_ApiKey(APIKEYS) {
    return APIKEYS[Math.floor(Math.random() * APIKEYS.length)];
  }

  const HandleRemoveBground = async (e) => {
    e.preventDefault();
    const resizedImage = await loadImage(e.target.files[0], {
      // resize before sending to Remove.bg for performance
      maxWidth: 1500,
      maxHeight: 1500,
      canvas: true,
    });

    resizedImage.image.toBlob(async function () {
      const formData = new FormData();
      formData.append("image_file", e.target.files[0]);
      setBackgroundBefore(URL.createObjectURL(e.target.files[0]));
      setLoading(true);
      const response = await fetch("https://api.remove.bg/v1.0/removebg", {
        method: "POST",
        headers: {
          "X-Api-Key": random_ApiKey(APIKEYS),
        },
        body: formData,
      });
      setLoading(false);
      setDownloadPopup(true);
      const outputBlob = await response.blob();
      setImageUrl(URL.createObjectURL(outputBlob));
    });
  };

  return (
    <>
      {downloadpopup && (
        <Background
          background={imageurl}
          setDownloadPopup={setDownloadPopup}
          backgroundbefore={backgroundbefore}
        />
      )}

      <section className="flex justify-evenly flex-wrap-reverse items-center mb-20 pt-10 lg:pt-48">
        <header className="px-6">
          <h1 className="font-bold text-4xl mb-4 leading-relaxed">
            Remove the background <br></br> from images for free.
          </h1>
          <p className=" mb-6 text-gray-600">
            Online background remover instantly detects the subject <br></br> from any photo and
            gives you a smooth & clear cutout.
          </p>
          <form className="relative" onChange={(e) => HandleRemoveBground(e)}>
            <button
              type="button"
              className="bg-gradient-to-r from-cyan-500 to-indigo-500 p-4 rounded-full text-white w-52 flex mb-12"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Upload your photo
            </button>
            <input
              type="file"
              name="file"
              className="bg-gradient-to-r from-cyan-500 to-indigo-500 absolute top-3 left-0 opacity-0 cursor-pointer w-48"
            />
            {loading && (
              <div>
                <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 ml-5 w-12"></div>
                <p className="mt-1">Please wait...</p>
              </div>
            )}
          </form>
        </header>
        <div>
          <img
            src="https://www.adobe.com/express/feature/image/media_1c0efc9c59611dc99ccf4168b88aea7f309fde300.png?width=2000&format=webply&optimize=medium"
            className="max-w-md"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default Content;
