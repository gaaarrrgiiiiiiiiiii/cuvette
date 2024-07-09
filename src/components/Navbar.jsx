import Logo from "../assets/cuvetteimg.jpeg"
export default function Navbar(){
  return(
    <>
    <nav class="bg-black h-[80px] py-2 ">
  <a href="#" class="flex items-center text-white text-2xl font-bold">
    <img src={Logo} alt="Logo" class="h-[65px] w-[80px] mr-2" />
    <span class="hidden md:inline text-white">Logo</span>
  </a>
</nav>


    </>
  )
}