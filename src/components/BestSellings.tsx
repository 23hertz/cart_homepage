import type { IStore } from "../types/IStore";

const BestSellings: React.FC<IStore> = ({
  name,
  slogan,
  image1,
  image2,
  image3,
  price1,
  price2,
  price3,
}) => {
  return (
    <div className="gap-4 rounded-4xl shadow-md">
      <div className="mx-auto w-[100%] p-4 gap-5">
        <div className="flex flex-col text-center p-5">
          <h1 className="font-bold text-xl">{name}</h1>
          <h3 className="text-gray-900 text-[1.1rem] font-bold">{slogan}</h3>
        </div>

        <div className="">
          <div className="flex flex-row gap-2">
            <div
              className={`h-[100px] w-[100%] px-8  mx-auto rounded-3xl`}
              style={{
                backgroundImage: `url('${image1}')`,
                backgroundSize: "cover",
              }}
            ></div>
            <div
              className={`h-[100px] px-8 w-[100%] mx-auto rounded-3xl`}
              style={{
                backgroundImage: `url('${image2}')`,
                backgroundSize: "cover",
              }}
            ></div>
            <div
              className={`h-[100px] px-8  w-[100%] mx-auto rounded-3xl`}
              style={{
                backgroundImage: `url('${image3}')`,
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div className="flex justify-around text-center">
            <div className="">
              <h3
                className="text-left text-[0.9em] mt-3 font-black"
                style={{ fontWeight: 600 }}
              >
                <span className="">Rp</span>{price1}
              </h3>
            </div>
            <div>
              <h3 className="text-left text-[0.9em] mt-3 font-bold" style={{ fontWeight: 600 }}>
                Rp{price2}
              </h3>
            </div>
            <div>
              <h3 className="text-left text-[0.9em] mt-3 font-bold" style={{ fontWeight: 600 }}>
                Rp{price3}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellings;
