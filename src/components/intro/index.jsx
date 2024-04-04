import Container from "../containers/container";
import WRapper from "../containers/wrapper";
import Right from "../../assets/images/introright.png";
function intro() {
  return (
    <>
      <section id="intro" className="bg-[#1C1E53] pt-[122px] pb-[135px]">
        <Container>
          <WRapper>
            <div>
              <h1 className="text-white text-[42px] w-[595px]">
                Bangun dan Wujudkan Cita Bersama EDUFREE
              </h1>
              <p className="text-white w-[595px] mt-[32px] mb-[62px]">
                EDUFREE adalah sebuah layanan kursus dan pelatihan gratis secara
                online yang bertujuan untuk membantu kamu meraih cita di bidang
                teknologi.
              </p>
              <div className="wrapper-btn flex items-center gap-[32px]">
                <button className="py-[15px] px-[45px] bg-[#FCD980]">
                  Lihat Kursus
                </button>
                <a href="#" className="text-white">
                  Lihat Alur Belajar
                  <i class="bi bi-arrow-right-short"></i>
                </a>
              </div>
            </div>
            <img src={Right} alt="" />
          </WRapper>
        </Container>
      </section>
    </>
  );
}

export default intro;
