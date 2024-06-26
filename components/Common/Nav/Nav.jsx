import { ImCross } from "react-icons/im"
// import { ImHome } from "react-icons/im"
// import { FaHandshake } from "react-icons/fa"
import { FaCode } from "react-icons/fa"
import { HiHomeModern } from "react-icons/hi2"
import { HiIdentification } from "react-icons/hi"
import { MdOutlinePersonPin } from "react-icons/md"
import { MdPhoneCallback } from "react-icons/md"
import NavItem from "./NavItem"
import DrawerLayout from "../DrawerLayout"


const Nav = ({ setIsOpen, isOpen }) => {
    return (
        <DrawerLayout setIsOpen={setIsOpen} isOpen={isOpen}>
            <div className="absolute z-50 flex flex-col justify-center lg:inset-y-0  -right-0 lg:right-0 w-64 h-screen lg:mt-3 lg:mr-3 lg:h-[96%] bg-DeepNightBlack shadow-2xl md:rounded-xl md:overflow-hidden">
                <div onClick={e => setIsOpen(false)} className="flex text-Snow absolute top-0 w-full items-center justify-start pl-6 text-sm h-10 bg-EveningBlack">
                    <ImCross />
                </div>
                <div className="flex flex-col gap-y-2 px-6 w-full transition">
                    <NavItem setIsOpen={setIsOpen} NavRoute={'/'} NavIcon={<HiHomeModern />} NavText={'Home'} />
                    <NavItem setIsOpen={setIsOpen} NavRoute={'/contact'} NavIcon={<MdPhoneCallback />} NavText={'Contacts'} />
                    <NavItem setIsOpen={setIsOpen} NavRoute={'/background'} NavIcon={<MdOutlinePersonPin />} NavText={'About Me'} />
                    <NavItem setIsOpen={setIsOpen} NavRoute={'/portfolio'} NavIcon={<FaCode />} NavText={'Portfolio'} />
                </div>
            </div>
        </DrawerLayout>

    )
}

export default Nav