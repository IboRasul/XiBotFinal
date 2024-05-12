// 'use client';

import { Button, Modal } from "flowbite-react";
import { useState } from "react";

import PluginCard from "./pluginCard";

import { useAnimeQuotePluginUpdate } from "../contexts/AnimeContext";
import { useMoviesPluginUpdate } from "../contexts/MoviePlugins";
import { useCountryPluginUpdate } from "../contexts/CountriesPlugin";

// import ToggleButton from '@mui/material/ToggleButton';

interface ComponentProps {
  buttonName: string;
}

function Component({ buttonName }: ComponentProps) {
  const [openModal, setOpenModal] = useState(true);
  const toggleAnimeQuotePlugin = useAnimeQuotePluginUpdate();
  const toggleMoviePlugin = useMoviesPluginUpdate();
  const toggleCountryPlugin = useCountryPluginUpdate();

  return (
    <>
      <Button onClick={() => setOpenModal(true)} className=" bg-transparent">
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
        <Modal.Body
          className="bg-red-50"
          style={{
            backgroundImage:
              'url("https://i.pinimg.com/originals/ed/64/a0/ed64a0507de26290aaa1254b61a46f61.gif")',
          }}
        >
          <div className="space-y-6">
            <div className="">
              <div className="rounded-3xl">
                <div className="flex flex-auto justify-normal">
                  <input
                    type="search"
                    className="rounded-3xl border-transparent inline container border text-black"
                    placeholder="Search"
                  />
                  <input
                    type="button"
                    value="search"
                    className="ml-2 p-2 rounded-3xl bg-red-500"
                  />
                </div>
              </div>
              {/* <div className="mt-3">
                <span className="border rounded-3xl p-2 m-2">
                  <input
                    type="checkbox"
                    className="mx-2 appearance-none"
                    id="checkbox1"
                  />
                  <label htmlFor="checkbox1" className="cursor-pointer">
                    Xibot
                  </label>
                </span>

                <span className="border rounded-3xl p-2 m-2">
                  <input
                    type="checkbox"
                    className="mx-2 appearance-none"
                    id="checkbox2"
                  />
                  <label htmlFor="checkbox2" className="cursor-pointer">
                    Xibot
                  </label>
                </span>

                <span className="border rounded-3xl p-2 m-2">
                  <input
                    type="checkbox"
                    className="mx-2 appearance-none"
                    id="checkbox3"
                  />
                  <label htmlFor="checkbox3" className="cursor-pointer">
                    Xibot
                  </label>
                </span>
              </div> */}
            </div>

            <div className="grid grid-cols-3">
              <PluginCard
                image={
                  "https://media.tenor.com/cyORI7kwShQAAAAi/shigure-ui-dance.gif"
                }
                title={"Anime Quote"}
                description={"Random anime qoute. Awesome!"}
                onClickAction={toggleAnimeQuotePlugin} // Pass toggleAnimeQuotePlugin function as onClickAction
              />
              {/* Example 2: Passing toggleAnimeQuotePlugin as onClickAction */}
              <PluginCard
                image="https://i.pinimg.com/originals/43/3d/83/433d83f7e481f35245f8c6bb7c7591d8.gif"
                title="Movies"
                description="Shows all the Features Movies"
                onClickAction={toggleMoviePlugin} // Pass toggleAnimeQuotePlugin function as onClickAction
              />
              {/* Example 3: Passing toggleAnimeQuotePlugin as onClickAction */}
              <PluginCard
                image="https://i.pinimg.com/originals/5a/d6/96/5ad69696e73302c5568e32f19bc3e048.gif"
                title="Country"
                description="Shows all the Country By Prifix"
                onClickAction={toggleCountryPlugin} // Pass toggleAnimeQuotePlugin function as onClickAction
              />
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer className="">
          Use That to Install The API you Like :)
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default Component;
