import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import Head from "next/head";
import Footer from "../components/Footer";
import Homeslider from "../components/Homeslider";
import Top from "../components/Top";
import Recentnews from "./Recentnews";
import Relatednews from "./Reletednews";

export const getStaticPaths = async () => {
  const res = await fetch("http://autosapi.ifadgroup.com:8001/content-module/17");
  const data = await res.json();

  const paths = data.map((rony) => {
    return(
    rony.content_item.map(item=>{
    return{
        params: { id: item.id.toString() },    
    }
    })
    )
  }).flat();
  console.log(paths)
  return {
    paths,
    fallback:false
  }
};


export const getStaticProps = async(context)=> {
  const id = context.params.id;
  const res = await fetch(`http://implapi.ifadgroup.com:8001/content-item/${id}`);
  const data = await res.json();
  return {
    props: { ronys: data }
  }
}
const Details = ({ ronys }) => {
  return (
    <>
    
<div className="container-fluid">
        <Head>
          <title>News</title>
          <meta name="description" content="Ifad Autos News" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Top />
        <Homeslider />
        {ronys.map(item=>{
          return(
        <main className="container" key={item.id}>
          <div className="row my-5">
            <h1 className="brandColor fw-bold text-center">News & Events</h1>
          </div>
          <div className="row my-5">
            <div className="col-sm-8">
              <h1>{item.item_name}</h1>
              <div className="col-sm-12 position-relative">
                <Image
                  className="position-relative"
                  width={850}
                  height={500}
                  src={item.item_image}
                  alt="news"
                />
              </div>
              <p className="my-3">{item.item_long_desc}</p>
            </div>
            <div className="col-sm-4">
              <div>
                <Recentnews />
              </div>
            </div>
          </div>
          <h4 className="brandColor fw-bold">Related Articles</h4>
        </main>
          )
        })}
      </div>
    
      
      {/* <Relatednews /> */}
      <Footer />
    </>
  );
};
export default Details;
