import WrapperFlex from "../containers/wrapperflex";
import Container from "../containers/container";
import EDUFRE from "../../assets/images/edufree.png";

function EDUFREE() {
  return (
    <section className="pb-[122px]">
      <Container>
        <WrapperFlex>
          <div>
            <p className="text-[18px]">Tentang Kami</p>
            <h2 className="text-[38px] w-[624px] my-[16px]">
              EDUFREE Layanan E-Learning <br /> Gratis Untuk Membantu Kamu
              Bertumbuh
            </h2>
            <p className="text-[16px] opacity-[0.5]">
              Edufree diharapkann bisa menjadi layanan yang bermanfaat bagi{" "}
              <br />
              kedepanya dalam bidang pendidikan
            </p>
          </div>
          <img src={EDUFRE} alt="" />
        </WrapperFlex>
      </Container>
    </section>
  );
}

export default EDUFREE;
