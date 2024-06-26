import { inject, observer } from "mobx-react";
import Stores from "@/stores/storeIdentifier";
import { Button, Col, Input, Form, Row } from "antd";
import withRouter from "@/components/Layout/Router/withRouter";
import AuthenticationStore from "@/stores/authenticationStore";
import { Link } from "react-router-dom";
import { useState } from "react";
import { authLayouts } from "@/components/Layout/Router/router.config";

interface IProps {
  navigate: any;
  authenticationStore: AuthenticationStore;
}
const Login = inject(Stores.AuthenticationStore)(
  observer((props: IProps) => {
    const { authenticationStore } = props;
    const [isLoading, setIsLoading] = useState(false);
    const onFinish = async (values: any) => {
      setIsLoading(true);
      await authenticationStore.login(values);
      setIsLoading(false);
    };

    return (
      <Row className="w-full h-full px-20 flex justify-center items-center gap-x-10">
        <Col span={8}>
          <img
            src="https://curnonwatch.com/wp-content/uploads/2023/12/Thiet_ke_chua_co_ten_11_3734c41ee7-1536x598.webp"
            alt="register"
            className="h-[50vh]"
          />
        </Col>
        <Col span={12}>
          <Form onFinish={onFinish}>
            <div className="py-2">
              <h1 className="text-2xl text-[#1a1a1a] font-semibold pb-2">
                CHÀO MỪNG BẠN ĐÃ TRỞ LẠI
              </h1>
              <p className="text-[#1a1a1a] text-left">
                Đăng nhập vào tài khoản hiện tại của bạn để truy cập các đặc
                quyền dành cho thành viên.
              </p>
            </div>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập email!",
                },
              ]}
            >
              <Input placeholder="Địa chỉ Email" type="email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
            >
              <Input.Password placeholder="Mật khẩu" />
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                className="w-full flex justify-center items-center bg-[#1A1A1A] text-white font-bold"
                id="submit-btn"
                disabled={isLoading}
              >
                Đăng nhập
              </Button>
            </Form.Item>
            <span className="text-[#1a1a1a] py-4">
              Thành viên mới?{" "}
              <Link to={`/auth/${authLayouts.register.path}`}>
                <u>Tạo tài khoản</u>
              </Link>
            </span>
          </Form>
        </Col>
      </Row>
    );
  })
);

export default withRouter(Login);
