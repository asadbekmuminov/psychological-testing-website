import { useState } from "react";
import ForTest from "./ForTest"; // Test komponenti

function TestPage() {
  const [result, setResult] = useState(null);

  const handleTestComplete = (result) => {
    setResult(result);
  };

  return (
    <div className="p-5">
      <ForTest onComplete={handleTestComplete} />

      {result && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full text-center shadow-lg">
            <h2 className="text-xl font-bold mb-4">Sizning natijangiz</h2>
            <p className="mb-4">{result}</p>
            <button
              onClick={() => setResult(null)}
              className="btn btn-outline btn-accent"
            >
              Yopish
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TestPage;
