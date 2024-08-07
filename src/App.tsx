import Frame from "./assets/frame.png";
import Check from "./assets/check.png";
import { Button, AccountInfo } from "./components";
import { Info, NGN } from "./components/svgs";
import ConfettiExplosion from "react-confetti-explosion";
import { ChangeEvent, FormEvent, useState } from "react";

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
            Sending me money is as fast as anything, but help my life abeg make
            I fit chop. Sapa wan finish me.🥲
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
            isExploding={isExploding}
            setIsExploding={setIsExploding}
            setShowAccountDetails={setShowAccountDetails}
          />
        )}
      </div>
    </main>
  );
}

export default App;
