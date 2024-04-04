import Container from "../containers/container";
import WrapperFlex from "../containers/wrapperflex";
import Lorem from "../../assets/images/lorem.svg";
import sections from "../../assets/images/sections.svg";
import owthest from "../../assets/images/owthest.svg";
import neowasi from "../../assets/images/neowasi.svg";
import onago from "../../assets/images/onago.svg";
function ditlance() {
  return (
    <>
      <section className="py-[80px] bg-[#EEF4FA]">
        <Container>
          <WrapperFlex>
            <div>
              <p className="text-[32px] font-semibold">21.000+</p>
              <p className="text-gray-700">Siswa terdaftar</p>
            </div>

            <div>
              <p className="text-[32px] font-semibold">100+</p>
              <p className="text-gray-700">Instruktur Ahli</p>
            </div>

            <div>
              <p className="text-[32px] font-semibold">150+</p>
              <p className="text-gray-700">Kursus Gratis</p>
            </div>

            <div className="flex items-center gap-[10px]">
              <img src={Lorem} alt="smthimg" />
              <b className="text-[24px]">LOREM</b>
            </div>

            <div className="flex items-center gap-[10px]">
              <img src={sections} alt="smthimg" />
              <b className="text-[24px]">Ditlance</b>
            </div>

            <div className="flex items-center gap-[10px]">
              <img src={owthest} alt="smthimg" />
              <b className="text-[24px]">Owthest</b>
            </div>

            <div className="flex items-center gap-[10px]">
              <img src={neowasi} alt="smthimg" />
              <b className="text-[24px]">Neowasi</b>
            </div>

            <div className="flex items-center gap-[10px]">
              <img src={onago} alt="smthimg" />
              <b className="text-[24px]">Onago</b>
            </div>
          </WrapperFlex>
        </Container>
      </section>
    </>
  );
}

export default ditlance;
