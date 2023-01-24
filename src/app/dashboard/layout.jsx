import HeaderInfo from "@/components/dashboard/HeaderInfo";
import SearchBar from "@/components/dashboard/SearchBar";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-12">
      <Sidebar />
      <div className="col-span-10 flex min-h-screen flex-col">
        <header className="flex w-full justify-between py-3">
          <SearchBar />
          <HeaderInfo />
        </header>
        <div className="mx-auto min-h-screen w-full bg-slate-100 p-5">
          {children}
        </div>
      </div>
      {/* <div className="col-span-3 bg-red-500">Activity</div> */}
    </div>
  );
}
