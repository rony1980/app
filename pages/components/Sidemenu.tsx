import Link from "next/link";
import React from "react";

const Sidemenu = () => {
  const menu = [
    {
      id: 1,
      name: "Trucks",
      slug: "#",
      subcat: [
        { id: 2, name: "All Trucks", slug: "#" },
        { id: 3, name: "Haulage", slug: "#" },
        { id: 4, name: "ICV Distribution", slug: "#" },
        { id: 5, name: "Tippers", slug: "#" },
        { id: 6, name: "Tractors", slug: "#" },
      ],
    },
    {
      id: 12,
      name: "Buses",
      slug: "#",
      subcat: [
        { id: 7, name: "All Buses", slug: "#" },
        { id: 8, name: "Bus 1", slug: "#" },
        { id: 9, name: "Bus 2", slug: "#" },
        { id: 10, name: "Bus 3", slug: "#" },
        { id: 11, name: "Bus 4", slug: "#" },
      ],
    },
  ];
  return (
    <div className="cols-sm-3">
      <div className="accordion accordion-flush" id="accordionFlushExample">
        {menu.map((cat, i) => {
          return (
            <div key={i} className="accordion-item">
              {cat.subcat ? (
                <>
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={"#flush-collapseOne" + i}
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      {cat.name}
                    </button>
                  </h2>
                  <div
                    id={"flush-collapseOne" + i}
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <ul className="nav flex-column">
                        {cat.subcat.map((sub: any) => (
                          <li key={sub.id}>
                            <Link
                              style={{ color: "black", textDecoration: "none" }}
                              href={sub.slug}
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              ) : (
                <button className="accordion-button" type="button">
                  {cat.name}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidemenu;
