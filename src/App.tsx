/* eslint-disable @typescript-eslint/no-unused-vars */
import clsx from "clsx";
import { NGN } from "./svgs";
import { ChangeEvent, FormEvent, useState } from "react";

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
      </div>
    </main>
  );
}

export default App;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  loading?: boolean;
}

function Button(props: ButtonProps) {
  const { loading, className, onClick, children, disabled, ...prop } = props;

  return (
    <button
      onClick={onClick}
      disabled={loading || disabled}
      className={clsx(
        "w-full bg-[#163300]  max-w-[386.1px] px-[14.18px] py-[10.51px] rounded-[2.1px] md:py-[30px] md:px-[65px] md:rounded-xl text-[25px] _xl:w-[664px] _xl:px-[97px] _xl:py-[85px] _xl:rounded-[20px] grid place-items-center text-white -tracking-[0.38px] font-normal text-center _xl:text-[70px] whitespace-nowrap _xl:leading-[55px] disabled:cursor-not-allowed disabled:bg-opacity-60 transition-all duration-300 active:scale-[0.97]",
        className
      )}
      {...prop}
    >
      <div className="flex items-center">
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx={12}
              cy={12}
              r={10}
              stroke="currentColor"
              strokeWidth={4}
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </div>
    </button>
  );
}
