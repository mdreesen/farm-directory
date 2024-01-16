import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

import { fetchFarmers } from '@/app/lib/data';

export default async function CardWrapper() {

  // This is a freakin Array - typescript you suck
  // Not giving it extra types because I shouldnt have to you MOTHA@#%%$#%^%$%^&^%$#$%^%$#$%^&
  const farmers = await fetchFarmers();
  const numberOfFarmers = Number(farmers.length);

  const Card = () => {
    return (
      <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
        <div className="flex p-4">
          <UserGroupIcon className="h-5 w-5 text-gray-700" />
          <h3 className="ml-2 text-sm font-medium">Total Customers</h3>
        </div>
        <p
          className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
        >
          {numberOfFarmers}
        </p>
      </div>
    );
  }

  return (
    <>
      <Card />
    </>
  );
}

// export function Card(title: any, value: Number | undefined) {
//   const Icon = UserGroupIcon;

//   return (
//     <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
//       <div className="flex p-4">
//         {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
//         <h3 className="ml-2 text-sm font-medium">{title}</h3>
//       </div>
//       <p
//         className={`${lusitana.className}
//           truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
//       >
//         {/* {value} */}
//       </p>
//     </div>
//   );
// }
