import React, { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { newsItems } from "./NewsTestData";

const NewsBody = () => {
  const items = useMemo(() => newsItems, []);
  const navigate = useNavigate();
  const { id } = useParams();

  const selectedId = id ? Number(id) : null;

  const selected = useMemo(
    () => items.find((x) => x.id === selectedId) || null,
    [items, selectedId]
  );

  return (
    <section className="w-full bg-white px-[20px] sm:px-[40px] lg:px-[80px] py-[100px]">
      <div className={`${selected ? "max-w-[1100px]" : "max-w-[1200px]"} mx-auto`}>
        <div className="flex justify-center mb-[30px]">
          <div className="inline-flex flex-col items-center">
            <p className="text-center text-[1rem] sm:text-[1.05rem] font-semibold text-[#2F2F2F] cursor-pointer" 
            onClick={() => navigate("/News")}
            >
              Polygon Agro Holdings News
            </p>
          </div>
        </div>

        {selected ? (
          <div className="border border-[#E6E6E6] rounded-[10px] bg-white overflow-hidden">
            <div className="px-[22px] sm:px-[32px] py-[22px] border-b border-[#EDEDED]">
              <h1 className="text-[1.2rem] sm:text-[1.5rem] font-bold text-[#2F2F2F] mb-[8px]">
                {selected.title}
              </h1>
              <p className="text-[0.9rem] text-[#959595]">{selected.date}</p>
            </div>

            <div className="px-[22px] sm:px-[32px] py-[26px]">
              <div className="w-full overflow-hidden rounded-[10px] border border-[#EFEFEF] bg-[#fafafa]">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-auto block"
                />
              </div>

              <div className="mt-[22px] text-[#000000] leading-[1.9] text-[0.95rem] space-y-[12px]">
                {selected.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="mt-[26px]">
                <button
                  type="button"
                  onClick={() => navigate("/News")}
                  className="text-[#2b2b2b] underline text-[0.95rem]"
                >
                  Back to news
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[26px]">
            {items.map((item) => (
              <article
                key={item.id}
                className="bg-white border border-[#E0E0E0] rounded-[10px] overflow-hidden shadow-sm"
              >
                <div className="w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[220px] object-cover"
                  />
                </div>

                <div className="px-[20px] py-[18px]">
                  <h3 className="text-[1.05rem] font-bold text-[#2F2F2F] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[0.85rem] text-[#959595] mt-[10px]">
                    {item.date}
                  </p>
                </div>

                <div className="border-t border-[#E0E0E0] py-[14px] flex justify-center">
                  <button
                    type="button"
                    onClick={() => navigate(`/News/${item.id}`)}
                    className="text-[0.90rem] underline text-[#000000]"
                  >
                    Read more
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsBody;