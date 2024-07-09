import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";
import { toast } from "sonner";

const { Content, Header } = Layout;

// const items: MenuProps["items"] = [
//   {
//     key: "1",
//     label: "Dashboard",
//   },
//   {
//     key: "2",
//     label: "admin",
//     children: [
//       {
//         key: "11",
//         label: "create admin",
//       },
//       {
//         key: "21",
//         label: "login admin",
//       },
//     ],
//   },
//   {
//     key: "3",
//     label: "user",
//   },
// ];

function MainLayout() {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logout succesfully", { duration: 2000 });
  };
  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar></Sidebar>
      <Layout>
        <Header>
          <Button onClick={handleLogout}>Logout</Button>{" "}
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            {/* this line is for route inner components here */}
            <Outlet></Outlet>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default MainLayout;
