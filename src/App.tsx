import { Info, NGN } from "./components/svgs";
import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "./components";
import Check from "./assets/check.png";
import Frame from "./assets/frame.png";
import ConfettiExplosion from "react-confetti-explosion";
function App() {
  const [amount, setAmount] = useState<number>(30000);
  const [isExploding, setIsExploding] = useState(false);
  const [showAccountDetails, setShowAccountDetails] = useState<boolean>(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setAmount(Number(value));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleShowDetails = () => {
    setShowAccountDetails((prev) => !prev);
  };

  return (
    <main className="animate-fade-in relative min-h-[100vh] flex flex-col items-center px-3 md:px-10 justify-center">
      {isExploding && <ConfettiExplosion />}
      <div className="flex flex-col gap-[30px] justify-center bg-white shadow-neutral-800 drop-shadow-lg rounded-[32px] max-w-[510px] p-3 md:p-[30px]">
        <header>
          <h3 className="text-[#1D2329] font-semibold text-[32px] md:text-[24px]">
            Send Me Money
          </h3>
          <p className="text-[#586283] max-w-[450px] font-normal leading-[24px] text-sm md:text-base">
            Sending me money is as fast as anything. But help my life abeg make
            I fit chop.
          </p>
        </header>

        {/* amount input */}
        <form
          className="border border-[#F0F2F5] bg-white rounded-[24px] flex flex-row items-center justify-between p-[10px] md:p-[30px]"
          onSubmit={handleSubmit}
        >
          <fieldset>
            <input
              type="number"
              value={amount}
              onChange={handleChange}
              name="amount"
              id="amount"
              min={100}
              className="outline-none w-full text-[#586283] font-semibold text-[20px] md:text-[32px] leading-[40.32px] "
            />
          </fieldset>

          <NGN />
          <fieldset>
            <select
              className="bg-[#F7FAFC] flex flex-row items-center gap-1 outline-none font-medium text-[#586283] text-[12px] leading-[15.12px] "
              name="currency"
              id="ngn"
            >
              <option className="bg-none" value="NGN">
                NGN
              </option>
            </select>
          </fieldset>
        </form>

        {/* notice */}
        <div className="bg-[#F6F2FF] flex flex-row items-center gap-1.5 rounded-[16px] p-[13px] w-full">
          <Info />
          <p className="text-[#586283] font-normal text-[14px] leading-[17.64px]">
            Send me money abeg make I fit chop 🥺
          </p>
        </div>

        {/* button */}
        <Button onClick={handleShowDetails}>Send now</Button>
        {showAccountDetails && (
          <AccountInfo
            setIsExploding={setIsExploding}
            setShowAccountDetails={setShowAccountDetails}
          />
        )}
      </div>
    </main>
  );
}

export default App;
// interface AccountInfoProps {
//   onClick

function AccountInfo({
  setShowAccountDetails,
  setIsExploding,
}: {
  setShowAccountDetails: React.Dispatch<React.SetStateAction<boolean>>;
  setIsExploding: React.Dispatch<React.SetStateAction<boolean>>;
}) {
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
            Bank Name:
          </p>
          <p className="text-[#1D2329] font-medium  text-[16px]  leading-[24px] ">
            {" "}
            PayCom (Opay)
          </p>
        </div>
        <div className=" mb-5 w-full  sm:min-w-[450px] mx-auto flex justify-between items-center">
          <p className=" text-[##586283] font-normal text-[16px]  leading-[24px] ">
            Bank Name:
          </p>
          <p className="text-[#1D2329] font-medium  text-[16px]  leading-[24px] ">
            {" "}
            PayCom (Opay)
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
