import Menu from "../components/menu"
import Footer from "../components/footer"
import { Outlet } from "react-router-dom"
// menu
//footer


export default function Layout() {


    return (<>

        <div className="min-h-screen w-full bg-[#313647] text-[#FFF8D4] flex flex-col">

            <Menu />
            <div className="p-3 m-3 ">
             <Outlet /> 
             </div>
            <Footer />
       </div>
    </>
    )

}
