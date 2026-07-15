import {MdDashboard,MdOutlineInventory2,MdOutlineLocalOffer,} from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { TbSpeakerphone } from "react-icons/tb";
import {FiClipboard,FiCalendar,FiUsers,FiUser,FiImage,FiBox,FiCheckSquare,} from "react-icons/fi";
import { PiShoppingBagOpen } from "react-icons/pi";

import LogoImg from "../../assets/esteticanow.png";

const SideNavBar = () => {
  return (
    <aside className="w-64 h-screen bg-[#1b1b1b] text-gray-300 flex flex-col sticky top-0 shrink-0">

      {/* Logo */}
      <div className="px-6 pt-10 pb-6 flex items-center justify-start">
        <img src={LogoImg} alt="esteticanow" className="h-11 object-contain" />
      </div>

      {/* Menu */}
      <nav className="flex-1 overflow-y-auto no-scrollbar text-sm">

        <div className="mt-6">

          <div className="flex items-center gap-3 px-6 py-3 ">
            <MdDashboard size={20} />
            <span>Dashboards</span>
          </div>

          <div className="flex items-center gap-3 px-6 py-3 ">
            <PiShoppingBagOpen size={20} />
            <span>POS</span>
          </div>

          <div className="flex items-center gap-3 px-6 py-3 ">
            <FiImage size={20} />
            <span>Services</span>
          </div>

          <div className="flex items-center gap-3 px-6 py-3 ">
            <FiCheckSquare size={20} />
            <span>To Do</span>
          </div>

          <div className="flex items-center gap-3 px-6 py-3 ">
            <MdOutlineInventory2 size={20} />
            <span>Inventory</span>
          </div>

        </div>

        {/* Orders */}
        <p className="text-blue-400 text-xs  mt-6 mb-2 px-2">
          Orders
        </p>

        <div className="flex items-center gap-3 px-6 py-3 ">
          <FiCalendar size={20} />
          <span>Appointments</span>
        </div>

        <div className="flex items-center gap-3 px-6 py-3 ">
          <FiClipboard size={20} />
          <span>Orders</span>
        </div>

        {/* Management */}
        <p className="text-blue-400 text-xs  mt-6 mb-2 px-2">
          Management
        </p>

        <div className="flex items-center gap-3 px-6 py-3 ">
          <FiUsers size={20} />
          <span>Staff Management</span>
        </div>

        <div className="flex items-center gap-3 px-6 py-3 ">
          <FiUsers size={20} />
          <span>Clients</span>
        </div>

        <div className="flex items-center gap-3 px-6 py-3 ">
          <FiUser size={20} />
          <span>Administration</span>
        </div>

        {/* Offers */}
        <p className="text-blue-400 text-xs  mt-6 mb-2 px-2">
          Offers & Promotions
        </p>

        <div className="flex items-center gap-3 px-6 py-3 ">
          <FiImage size={20} />
          <span>Banners</span>
        </div>

        <div className="flex items-center gap-3 px-6 py-3 ">
          <MdOutlineLocalOffer size={20} />
          <span>Coupons</span>
        </div>

        <div className="flex items-center gap-3 px-6 py-3">
          <FiBox size={20} />
          <span>Reels Management</span>
        </div>

         <div className="flex items-center gap-3 px-6 py-3 ">
          <TbSpeakerphone size={20} />
          <span>Campaign</span>
        </div>

        {/* Transactions and reports */}
        <p className="text-blue-400 text-xs  mt-6 mb-2 px-2">
          Transactions & Reports
        </p>
        <div className="flex items-center gap-3 px-6 py-3 ">
          <FiImage size={20} />
          <span>Transactions</span>
        </div>
        <div className="flex items-center gap-3 px-6 py-3 ">
          <FiImage size={20} />
          <span>Reports</span>
        </div>

           {/* setup */}
        <p className="text-blue-400 text-xs  mt-6 mb-2 px-2">
          setup
        </p>
        <div className="flex items-center gap-3 px-6 py-3 ">
          <IoSettingsOutline  size={20} />
          <span>Settings</span>
        </div>
        <div className="flex items-center gap-3 px-6 py-3 ">
          <CiStar size={20} />
          <span>Reviews</span>
        </div>


      </nav>

    </aside>
  );
};

export default SideNavBar;