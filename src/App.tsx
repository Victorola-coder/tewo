import { Info, NGN } from "./components/svgs";
import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "./components";

function App() {
  const [amount, setAmount] = useState<number>(30000);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setAmount(Number(value));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <main className="min-h-[100vh] flex flex-col items-center justify-center">
      <div className="flex flex-col gap-[30px]  justify-center bg-white shadow-neutral-800 drop-shadow-lg rounded-[32px] min-w-[510px] p-[30px]">
        <header>
          <h3 className="text-[#1D2329] font-semibold text-[24px]">
            Send Me Money
          </h3>
          <p className="text-[#586283] max-w-[450px] font-normal leading-[24px] text-base">
            Sending me money is as fast as anything. But help my life abeg make
            I fit chop.
          </p>
        </header>

        {/* amount input */}
        <form
          className="border border-[#F0F2F5] bg-white rounded-[24px] flex flex-row items-center justify-between p-[30px]"
          onSubmit={handleSubmit}
        >
          <fieldset>
            <input
              type="number"
              value={amount}
              onChange={handleChange}
              name="amount"
              id="amount"
              className="outline-none w-full text-[#586283] font-semibold text-[32px] leading-[40.32px] "
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
        <Button>Send now</Button>
      </div>
    </main>
  );
}

export default App;


