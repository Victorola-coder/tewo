import { ChangeEvent, FormEvent, useState } from "react";

function App() {
  const [amount, setAmount] = useState<number>(30000);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setAmount(value);
  };

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <main className="min-h-[100vh] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center bg-white shadow-one rounded-[32px] min-w-[510px] p-[30px]  ">
        <header>
          <h3 className="text-[#1D2329] font-semibold text-[24px]  ">
            Send Me Money
          </h3>
          <p className="text-[#586283] max-w-[450px] font-normal leaading-[24px] text-base.0">
            Sending me money is as fast as anything. But help my life abeg make
            I fit chop.
          </p>
        </header>

        {/* amount input */}
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            value={amount}
            onChange={handleChange}
            name="amount"
            id="amount"
          />
        </form>
      </div>
    </main>
  );
}

export default App;
