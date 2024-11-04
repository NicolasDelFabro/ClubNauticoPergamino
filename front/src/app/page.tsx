import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Landing from "@/views/Landing";

function Home() {
  return (
   <div>
    <div>
      <NavBar />
    </div>
    <div>
      <Landing />
    </div>
      <Footer/>
   </div>
  );
}


export default Home;