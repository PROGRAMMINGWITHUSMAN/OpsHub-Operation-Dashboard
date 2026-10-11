import { useState } from "react";
import { Outlet } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import SideBar from "../Components/Main/SideBar/SideBar";
import Header from "../Components/Main/Header/Header";

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-secondary">
      {/* Desktop sidebar: sirf lg se upar */}
      <aside className="hidden lg:block fixed inset-y-0 left-0 z-30 w-64 bg-primary">
        <SideBar />
      </aside>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed inset-y-0 left-0 z-50 w-64 bg-primary lg:hidden"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.25 }}
            >
              <SideBar onNavigate={() => setOpen(false)} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Header + Main */}
      <div className="lg:ml-64 flex min-h-screen flex-col">
        <header className="sticky top-0 z-20">
          <Header onMenuClick={() => setOpen(true)} />
        </header>

        <main className="flex-1 min-w-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;