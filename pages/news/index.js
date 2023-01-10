import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch(
    "http://autosapi.ifadgroup.com:8001/content-module/17"
  );
  const data = await res.json();
  return {
    props: { rony: data },
  };
};
const News = ({ rony }) => {
  return (
    <div>
      {rony.map((ron) =>
        ron.content_item.map((item) => {
          return (
            <Link key={item.id} href={`news/${item.id}`}>
              <h4>{item.item_name}</h4>
            </Link>
          );
        })
      )}
    </div>
  );
};

export default News;
