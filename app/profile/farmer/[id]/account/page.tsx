import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon, Cog6ToothIcon } from '@heroicons/react/20/solid';
import ButtonDeleteFarmer from "@/ui/buttons/ButtonDeleteFarmer";
import Pricing from "@/ui/section/Pricing"

export default function Page() {

  const settings = (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-[#7A3A30] px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 w-[275px]">
          <span>Delete</span>
          <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
        </MenuButton>
      </div>

      <MenuItems
        // transition
        className="absolute right-[-136px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <ButtonDeleteFarmer />
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )

  return (
    <div className="bg-white">
      <div className="space-y-12">

        <div className="border-b pb-12">
          <h2 className="t-2 text-balance text-5xl font-semibold text-gray-900 sm:text-6xl tracking-tight">Account Settings</h2>

          {/* For pricing tiers in the future */}
          {/* <Pricing /> */}

          <div className="mt-10 flex flex-col">
            <h2 className="text-base/7 font-semibold text-[#7A3A30]">Account deletion</h2>

            <p className="mt-2 text-balance text-3xl font-semibold text-gray-900 sm:text-3xl tracking-tight">
              Delete your account
            </p>
            <div className="mt-2">
              {settings}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
