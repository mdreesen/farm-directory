import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon, Cog6ToothIcon } from '@heroicons/react/20/solid';
import ButtonDeleteUser from "@/ui/buttons/ButtonDeleteUser";

export default function Page() {

  const settings = (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-[#7A3A30] px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300">
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
            <ButtonDeleteUser />
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )

  return (
    <div className="bg-white">
      <div className="space-y-12">

        <div className="border-b pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Account Settings</h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Delete your account
              </label>
              <div className="mt-2">
              {settings}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
