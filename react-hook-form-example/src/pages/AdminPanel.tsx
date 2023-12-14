import Header from "./../components/Header";
import Sidebar from "./../components/Sidebar";
import DashboardHeader from "./../components/DashboardHeader";
import Footer from "./../components/Footer";
import { Outlet } from "react-router-dom";

function AdminPanel() {
  return (
    <>
      <div className="lg:flex lg:h-screen bg-gray-100">
        <Sidebar />

        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <DashboardHeader />

          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
            <Outlet />
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default AdminPanel;
