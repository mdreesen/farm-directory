import ButtonDeleteFarmer from "@/ui/buttons/ButtonDeleteFarmer"
export default function Page() {

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
                <ButtonDeleteFarmer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
