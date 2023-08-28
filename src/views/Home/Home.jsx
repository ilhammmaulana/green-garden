import Layout from "../../components/layouts/Layout";
import backgroundImage from "../../assets/images/stock/Background-1.png";
import Button from "../../components/buttons/Button";
export default function Home() {
  return (
    <Layout>
      <section
        className="h-section-sm bg-no-repeat mx-auto bg-cover bg-red-500 flex justify-center "
        style={{
          backgroundImage: `   linear-gradient(
            rgba(0, 0, 0, 0.3), 
            rgba(0, 0, 0, 0.1)
          ),url(${backgroundImage})`,
          backgroundPositionY: "90%",
        }}
      >
        <div className="pt-10 m-auto text-center">
          <h2 className="text-white text-8xl font-signpainter  ">
            Green View For Good Live
          </h2>
          <h6 className="text-white mb-3 text-lg font-light mt-4">
            Prepare your garden with our profesional
          </h6>
          <Button>Hire Our Profesional Now!</Button>
        </div>
      </section>
    </Layout>
  );
}
