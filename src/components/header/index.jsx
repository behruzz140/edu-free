import Container from "../containers/container";
import "./style.css";
import Logo from "../../assets/images/logo.svg";
import Icon from "../../assets/images/iconheader.svg";
function header() {
  return (
    <>
      <header>
        <Container>
          <nav className="flex items-center justify-between ">
            <img src={Logo} alt="logo" />
            <div className="flex items-center gap-[20px]">
              <ul className="flex items-center gap-[34px]">
                <li className="text-white">HOME</li>
                <li className="text-white">TENTANG KAMI</li>
                <li className="text-white">KURSUS</li>
                <li className="text-white">FAQ</li>
                <li className="flex text-white  ">
                  BLOG
                  <img src={Icon} alt="smthimg" />
                </li>
              </ul>
              <button className="py-2 px-6 border border-white rounded-lg text-white">
                Login
              </button>
            </div>
          </nav>
        </Container>
      </header>
    </>
  );
}

export default header;
