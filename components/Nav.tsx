import { Menu, Transition } from "@headlessui/react";
import ChevronDownIcon from "../public/images/chevronDownIcon";

const PageList = {
  Activity: ["Workout", "Running", "Cycling"],
  Wellness: ["Yoga", "Meditation", "Sleep"],
  Productivity: ["Journal", "ToDo List", "Goals"],
};

const MenuItem = ({ label, list }: { label: string; list: string[] }) => {
  return (
    <li>
      <Menu as="div" className="relative inline-block">
        <div>
          <Menu.Button className="inline-flex items-center justify-center px-2 w-40 text-xl font-medium text-white hover:text-blue-400">
            <div>{label}</div>
            <div className="pl-1.5">
              <ChevronDownIcon />
            </div>
          </Menu.Button>
          <Transition
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute -left-4 w-40 mt-2 bg-white rounded-md shadow-lg">
              <div className="px-1 py-1 ">
                {list.map((item: string) => (
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-blue-600 text-white" : "text-gray-900"
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        {item}
                      </button>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </div>
      </Menu>
    </li>
  );
};

const Nav = () => {
  return (
    <nav className="bg-gray-800 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto md:order-0 text-white"
          id="menu-logo"
        >
          LOGO
        </div>
        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1 text-white"
          id="menu-items"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-24 md:mt-0">
            <MenuItem label="Activity" list={PageList.Activity} />
            <MenuItem label="Wellness" list={PageList.Wellness} />
            <MenuItem label="Productivity" list={PageList.Productivity} />
          </ul>
        </div>
        <div className="flex md:order-2">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
