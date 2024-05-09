// 'use client';

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { iconButton } from "../Componets/iconButton";
import IconButtons from "./iconButton";
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
              
              <PluginCard apiLink={"https://animechan.xyz/api/random"} image={"https://media.tenor.com/cyORI7kwShQAAAAi/shigure-ui-dance.gif"} title={"Anime Quote"} description={"Random anime qoute. Awesome!"}/>

              <div className="col border-red-700 border shadow-2xl m-4 rounded-lg ">
                <div className="m-1">
                  <div className="flex flex-row justify-center">
                    <img
                      src="https://i.pinimg.com/originals/23/17/14/231714e953b3482067337f40c7f8af7f.gif"
                      alt=""
                      className="inline h-24 rounded"
                    />
                  </div>
                  <p className="text-xl font-bold">Art Gen</p>
                  <p>Art Gen generate arts in realtime</p>
                </div>
              </div>
              <div className="col border-red-700 border shadow-2xl m-4 rounded-lg ">
                <div className="m-1">
                  <div className="flex flex-row justify-center">
                    <img
                      src="https://i.pinimg.com/originals/23/17/14/231714e953b3482067337f40c7f8af7f.gif"
                      alt=""
                      className="inline h-24 rounded"
                    />
                  </div>
                  <p className="text-xl font-bold">Art Gen</p>
                  <p>Art Gen generate arts in realtime</p>
                </div>
              </div>
              <div className="col border-red-700 border shadow-2xl m-4 rounded-lg ">
                <div className="m-1">
                  <div className="flex flex-row justify-center">
                    <img
                      src="https://i.pinimg.com/originals/23/17/14/231714e953b3482067337f40c7f8af7f.gif"
                      alt=""
                      className="inline h-24 rounded"
                    />
                  </div>
                  <p className="text-xl font-bold">Art Gen</p>
                  <p>Art Gen generate arts in realtime</p>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="bg-red-50">
          <Button className="bg-cyan-600" onClick={() => setOpenModal(false)}>
            I accept
          </Button>
          <Button
            color="red"
            className="bg-red-800 "
            onClick={() => setOpenModal(false)}
          >
            <span className="text-white">Decline</span>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Component;
