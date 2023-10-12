import { FaBars } from 'react-icons/fa'

const Header = () => {
  return (
    <div className="px-4 pt-3 flex items-center text-[#456db4] justify-between">
    <div className="flex items-center space-x-2">
      <img
        src="/src/assets/sample.png"
        alt="logo"
        className="w-[4rem] rounded-full"
      />
      <span className="text-[18px] uppercase font-bold">banjbel driving school</span>
    </div>
    <FaBars size={24} />
  </div>
  )
}

export default Header
