import Frame from "../assets/frame.png";
import Check from "../assets/check.png";

export default function AccountInfo({
  isExploding,
  setShowAccountDetails,
  setIsExploding,
}: {
  isExploding: boolean;
  setShowAccountDetails: React.Dispatch<React.SetStateAction<boolean>>;
  setIsExploding: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  if (isExploding)
    return (
      <section className="absolute w-full max-w-[510px] rounded-[32px] inset-0 animate-slide-up max-h-[450px] bg-red-100 flex flex-col items-center justify-center">
        <div className="flex flex-col  justify-center bg-white shadow-neutral-800 drop-shasadow-lg rounded-[32px] w-full h-full p-3 md:p-[30px]">
          <h1 className=" text-center text-4xl">Thanks alot 🤗🙂😍</h1>
        </div>
      </section>
    );
  return (
    <section className="absolute w-full max-w-[510px] rounded-[32px] inset-0 animate-slide-up max-h-[450px] bg-red-100 flex flex-col items-center justify-center">
      <div className="flex flex-col  justify-center bg-white shadow-neutral-800 drop-shasadow-lg rounded-[32px] w-full h-full p-3 md:p-[30px]">
        <header className=" mx-auto flex justify-center mb-[30px] rounded-[12px] w-full ">
          <figure>
            <img src={Frame} className=" object-cover " alt="" />
          </figure>
        </header>
        <div className="mb-5 w-full  sm:min-w-[450px] mx-auto flex justify-between items-center">
          <p className="  text-[##586283] font-normal text-[16px]  leading-[24px] ">
            Bank Name:
          </p>
          <p className="text-[#1D2329] font-medium  text-[16px]  leading-[24px] ">
            {" "}
            PayCom (Opay)
          </p>
        </div>
        <div className=" mb-5 w-full  sm:min-w-[450px] mx-auto flex justify-between items-center">
          <p className=" text-[##586283] font-normal text-[16px]  leading-[24px] ">
            Account Number:
          </p>
          <p className="text-[#1D2329] font-medium  text-[16px]  leading-[24px] ">
            9075789680
          </p>
        </div>
        <div className=" mb-5 w-full  sm:min-w-[450px] mx-auto flex justify-between items-center">
          <p className=" text-[##586283] font-normal text-[16px]  leading-[24px] ">
            Account Name:
          </p>
          <p className="text-[#1D2329] font-medium  text-[16px]  leading-[24px] ">
            {" "}
            Victor Olatunji
          </p>
        </div>
        <div className="max-w-[450px] mx-auto flex w-full gap-5 justify-between">
          <button
            onClick={() => setIsExploding(true)}
            className=" py-2.5 md:py-5 flex-1 flex justify-center items-center text-white gap-2 rounded-[16px] bg-[#FE7122]"
          >
            Sent ? <img src={Check} alt="" />{" "}
          </button>
          <button
            onClick={() => setShowAccountDetails(false)}
            className=" text-white rounded-[16px]  py-2.5 md:py-5 flex-1 bg-[#141414]"
          >
            Close
          </button>
        </div>
      </div>
    </section>
  );
}
