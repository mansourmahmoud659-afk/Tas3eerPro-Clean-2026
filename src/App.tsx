import React, { useState } from 'react';

export default function App() {
  const [cost, setCost] = useState<number>(0);
  const [margin, setMargin] = useState<number>(20);

  const price = cost > 0 ? cost / (1 - margin / 100) : 0;
  const profit = price - cost;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-6 flex flex-col items-center justify-center font-sans">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-2xl">
        <h1 className="text-2xl font-bold text-emerald-400 mb-6 text-center">حاسبة التسعير الذكية</h1>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-1 text-right">التكلفة (جنيه)</label>
            <input
              type="number"
              value={cost || ''}
              onChange={(e) => setCost(Number(e.target.value))}
              placeholder="0"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-emerald-500 text-right"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-1 text-right">هامش الربح المطلوب (%)</label>
            <input
              type="number"
              value={margin || ''}
              onChange={(e) => setMargin(Number(e.target.value))}
              placeholder="20"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-emerald-500 text-right"
            />
          </div>

          <div className="pt-4 border-t border-zinc-800 space-y-2">
            <div className="flex justify-between items-center text-lg font-semibold">
              <span className="text-emerald-400">{price.toFixed(2)} ج.م</span>
              <span className="text-zinc-300">سعر البيع المقترح:</span>
            </div>
            <div className="flex justify-between items-center text-sm text-zinc-400">
              <span className="text-zinc-200">{profit.toFixed(2)} ج.م</span>
              <span>صافي الربح:</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
