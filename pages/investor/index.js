import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://cms.demo.api.net.bd/documents");
  const data = await res.json();
  return {
    props: { rony: data },
  };
};
const Products = ({ rony }) => {
  return (
    <div>
      {rony.all_document_list?.map((ron) => (
        <Link key={ron.id} href={`Product/${ron.id}`}>
          <h4>{ron.name}</h4>
        </Link>
      ))}
    </div>
  );
};

export default Products;
