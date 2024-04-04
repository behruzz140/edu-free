import Container from "../containers/container";
import Wrappergrid from "../containers/gridWrapper";
import Card from "../cardGrid"
function dengun() {
  return (
    <>
      <section className="py-[122px]">
        <Container>
          <h1 className=" text-center text-[36px] w-[550px] mx-auto">
            Keuntungan Bergabung Dengan E-Learning EDUFREE
          </h1>
          <Wrappergrid>
            <Card/>
          </Wrappergrid>
        </Container>
      </section>
    </>
  );
}

export default dengun;
