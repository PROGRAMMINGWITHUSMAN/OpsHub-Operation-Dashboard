import { Outlet } from "react-router-dom";
import {
  BsGraphUpArrow,
  BsFillPeopleFill,
  BsShieldCheck,
} from "react-icons/bs";

const features = [
  { icon: BsGraphUpArrow, text: "Live sales and performance insights" },
  { icon: BsFillPeopleFill, text: "Manage users and teams in one place" },
  { icon: BsShieldCheck, text: "Secure, role-based access" },
];

const AuthLayout = () => {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-secondary">
      {/* Brand panel */}
      <div className="relative hidden lg:flex flex-col justify-between overflow-hidden bg-primary p-12 text-surface">
        {/* Decorative circles */}
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-surface/5" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-surface/5" />

        <div className="relative flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-surface/10">
            <BsGraphUpArrow size={24} />
          </div>
          <h1 className="text-2xl font-bold text-white leading-none flex flex-col">
            <span className="text-secondary">OpsHub</span>
            <span className="text-secondary text-base font-normal opacity-60">
              Operation Dashboard
            </span>
          </h1>
        </div>

        <div className="relative capitalize">
          <h2 className="text-4xl font-bold leading-tight">
            Run your operations
            <br />
            with clarity.
          </h2>
          <p className="mt-4 max-w-md text-surface/70">
            One dashboard for sales, orders, and users, built to keep your team
            fast and organized.
          </p>

          <ul className="mt-10 space-y-4">
            {features.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-surface/10">
                  <Icon size={16} />
                </span>
                <span className="text-sm text-surface/90">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="relative text-xs text-surface/50">
          © {new Date().getFullYear()} OpsHub Operations Dashboard
        </p>
      </div>

      {/* Form side */}
      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-md rounded-2xl border border-surface-muted bg-surface p-8 shadow-sm">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
