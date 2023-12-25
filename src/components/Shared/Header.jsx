import { FixedHeader, Logo } from "@/styles/CommonStyle";
import logo from "@/assets/images/logo.png";

const Header = () => {
  return (
    <FixedHeader>
      <Logo src={logo} />
    </FixedHeader>
  );
};

export default Header;
