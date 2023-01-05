import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import Top from "./components/Top";
import Homeslider from "./components/Homeslider";
import Footer from "./components/Footer";
import Link from "next/link";
const Investor = () => {
const [docs, setDocs] = useState([]);
  useEffect(() => {
    fetch("http://autosapi.ifadgroup.com:8001/documents")
      .then((res) => res.json())
      .then((data) => setDocs(data));
  }, []);
const documentButton = docs.map((item,index)=>{
  return(
    <>
      <button className="nav-link text-start" id={item.id} data-bs-toggle="pill" data-bs-target={`#tags-basic_${item.id}`}type="button" role="tab" aria-controls="v-pills-home" aria-selected="true" key={index}>{item.category_name} <i className="bi bi-arrow-right-short"></i></button>      
    </>
  )
})

const document = docs.map((doc)=>{
  return(
    <>
    {doc.all_documents.map(item=>{
      return(
        <>
         <div className="tab-pane fade" id={`tags-basic_${doc.id}`} role="tabpanel" aria-labelledby={item.category_name} tabindex="0">
          <h4>{doc.category_name}</h4>
          {item.document_file=!null ? <Link href={item.document_file}>Download</Link> : <></>}
          </div>
        </>
      )
    })}
    </>
  )
})

 
  return (
    <>
      <div className="container-fluid">
        <Head>
          <title>Values</title>
          <meta name="description" content="All" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Top />
        <Homeslider />
      </div>
      <div className="container">
        <h1 className="brandColor text-center my-5 fw-bold">Investor Information</h1>
        <div className="row">
          <div className="d-flex align-items-start">
  <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    {documentButton}
  </div>
  <div className="tab-content" id="v-pills-tabContent">
    {document }
  </div>
</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Investor;
