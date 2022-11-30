import Image from "next/image";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await res.json();
  const paths = data.map((rony) => {
    return {
      params: { id: rony.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  const data = await res.json();
  return {
    props: { rony: data },
  };
}
const Detail = ({ rony }) => {
  return (
    <div>
      <h1>{rony.title}</h1>
      <Image width={300} height={200} src={`/${rony.url}`} alt="" />
    </div>
  );
};
export default Detail;
