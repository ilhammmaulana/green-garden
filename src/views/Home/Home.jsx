import Layout from "../../components/layouts/Layout";
import backgroundImage from "../../assets/images/stock/Background-1.png";
export default function Home() {
  return (
    <Layout>
      <section
        className="h-section-sm bg-no-repeat mx-auto bg-cover bg-red-500"
        style={{
          backgroundImage: `   linear-gradient(
            rgba(0, 0, 0, 0.3), 
            rgba(0, 0, 0, 0.1)
          ),url(${backgroundImage})`,
          backgroundPositionY: "90%",
        }}
      ></section>
    </Layout>
  );
}
