// 'use client';

import { Button, Modal } from "flowbite-react";
import { useState } from "react";

import PluginCard from "./pluginCard";
// import ToggleButton from '@mui/material/ToggleButton';

function Component({ buttonName }) {
  const [openModal, setOpenModal] = useState(true);

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
              />
              <PluginCard
                apiLink={"https://animechan.xyz/api/random"}
                image={
                  "https://i.pinimg.com/originals/89/bb/06/89bb06251fb7401e094b1f6d71f3d3f4.gif"
                }
                title={"Art Gen"}
                description={"Art Generation. Borrowing Art!"}
              />
              <PluginCard
                apiLink={"https://animechan.xyz/api/random"}
                image={
                  "https://64.media.tumblr.com/863257dd3c283123dd895270f4ddbcf3/d04fe1d6fc0d57b9-81/s400x600/726a7ada710aa4f4c669efc6e906dbdfa39e0d3b.gifv"
                }
                title={"Art Gen"}
                description={"Art Generation. Borrowing Art!"}
              />
              <PluginCard
                apiLink={"https://animechan.xyz/api/random"}
                image={
                  "https://64.media.tumblr.com/cbcd5ba70270c67dbcc2af1ea9617a82/4e9537cad97cbf25-61/s400x600/21cd60dcf9a43d643ecb77d62d09d1cbb9badb1f.gifv"
                }
                title={"Art Gen"}
                description={"Art Generation. Borrowing Art!"}
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
