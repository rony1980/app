export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products/");
  const data = await res.json();
  return {
    props: { rony: data },
  };
};
