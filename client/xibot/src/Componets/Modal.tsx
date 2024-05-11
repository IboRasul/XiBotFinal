// 'use client';

import { Button, Modal } from "flowbite-react";
import { useState } from "react";

import PluginCard from "./pluginCard";

import {
  useAnimeQuotePlugin,
  useAnimeQuotePluginUpdate,
} from "../contexts/AnimeContext";
import { useMoviesPluginUpdate } from "../contexts/MoviePlugins";
// import ToggleButton from '@mui/material/ToggleButton';

function Component({ buttonName }) {
  const [openModal, setOpenModal] = useState(true);
  const toggleAnimeQuotePlugin = useAnimeQuotePluginUpdate();
  const toggleMoviePlugin = useMoviesPluginUpdate();

  return (
    <>
      <Button onClick={() => setOpenModal(true)} className="inline p-0 m-0">
        {buttonName}
      </Button>
      <Modal
        dismissible
        show={openModal}
        onClose={() => setOpenModal(false)}
        className="backdrop-blur bg-white/  "
      >
        <Modal.Header
          className="bg-red-500 text-gray-950 from-neutral-900"
          color="black"
        >
          Install Plugins
        </Modal.Header>
        <Modal.Body className="bg-red-50">
          <div className="space-y-6">
            <div className="">
              <div className="rounded-3xl">
                <div className="flex flex-auto justify-normal">
                  <input
                    type="search"
                    className="rounded-3xl border-transparent inline container border "
                    placeholder="Search"
                  />
                  <input
                    type="button"
                    value="search"
                    className="ml-2 p-2 rounded-3xl bg-red-500 "
                  />
                </div>
              </div>
              <div className="mt-3">
                <span className="border rounded-3xl p-2 m-2">
                  <input type="checkbox" className=" mx-2" id="checkbox1" />
                  <label htmlFor="checkbox1" id="">
                    Xibot
                  </label>
                </span>

                <span className="border rounded-3xl p-2 m-2">
                  <input type="checkbox" className=" mx-2" id="checkbox2" />
                  <label htmlFor="checkbox2" id="">
                    Xibot
                  </label>
                </span>

                <span className="border rounded-3xl p-2 m-2">
                  <input type="checkbox" className=" mx-2" id="checkbox3" />
                  <label htmlFor="checkbox3" id="">
                    Xibot
                  </label>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3">
              <PluginCard
                apiLink={"https://animechan.xyz/api/random"}
                image={
                  "https://media.tenor.com/cyORI7kwShQAAAAi/shigure-ui-dance.gif"
                }
                title={"Anime Quote"}
                description={"Random anime qoute. Awesome!"}
                onClickAction={toggleAnimeQuotePlugin} // Pass toggleAnimeQuotePlugin function as onClickAction
              />
              {/* Example 2: Passing toggleAnimeQuotePlugin as onClickAction */}
              <PluginCard
                apiLink="your-api-link"
                image="your-image-src"
                title="Plugin Title"
                description="Plugin Description"
                onClickAction={toggleMoviePlugin} // Pass toggleAnimeQuotePlugin function as onClickAction
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="">
          Hi im a footer down here not near your foot
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Component;
