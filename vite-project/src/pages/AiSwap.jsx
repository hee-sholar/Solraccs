/* ================= AI SWAP — ENHANCED V3 ================= */

import React from "react";
import {
  CheckCircle2,
  Clock,
  Timer,
  ArrowRightLeft,
  TrendingUp,
  PiggyBank,
} from "lucide-react";

/* ================= MAIN COMPONENT ================= */
export function AiSwap() {
  const [activeTab, setActiveTab] = React.useState("swap");

  /* AI Swap Route Preview Card */
  const [swapPreview, setSwapPreview] = React.useState(null);

  /* 🔐 Launch AI Trading Lock */
  const [launched, setLaunched] = React.useState(false);

  /* ⏳ AI Loading Spin */
  const [loading, setLoading] = React.useState(false);

  /* Chat */
  const [message, setMessage] = React.useState("");
  const [chat, setChat] = React.useState([
    {
      from: "ai",
      text: `Hey! 👋 I'm your AI DEX assistant. 
Tell me what you want to swap!

Try: "Swap 1 SOL to USDC" or "Buy 100 USDT worth of LINK"`,
    },
  ]);

  // auto switch to swap tab after launch
  const handleLaunch = () => {
    setLaunched(true);
    setActiveTab("swap");

    setTimeout(() => {
      const el = document.getElementById("swap-card");
      if (el) el.classList.add("animate-bounce");
      setTimeout(() => el?.classList.remove("animate-bounce"), 900);
    }, 300);
  };

  /* Handle Send */
  const handleSend = () => {
    if (!message.trim() || loading || !launched) return;

    const userMsg = { from: "user", text: message };
    setChat((prev) => [...prev, userMsg]);

    setLoading(true);

    /* simulate AI scanning delay */
    setTimeout(() => {
      const preview = {
        dex: "Uniswap V3",
        fromToken: "CEDRA",
        fromAmount: "1.0",
        toToken: "USDC",
        toAmount: "3,247.82",
        fee: "0.05%",
        impact: "0.12%",
      };

      const aiReply = {
        from: "ai",
        text: `✨ Found best route via ${preview.dex}!`,
      };

      setChat((prev) => [...prev, aiReply]);
      setSwapPreview(preview);
      setLoading(false);
      setMessage("");
    }, 1500);
  };

  return (
    <div className="w-full max-w-6xl mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* ================= LEFT PANEL ================= */}
      <div className="lg:col-span-2 bg-white rounded-2xl border shadow-sm">
        {/* Tabs */}
        <div className="flex items-center gap-2 p-3 border-b">
          <TabButton active={activeTab === "swap"} onClick={() => setActiveTab("swap")}>
            AI Swap
          </TabButton>

          <TabButton active={activeTab === "stake"} onClick={() => setActiveTab("stake")}>
            AI Stake
          </TabButton>

          <TabButton active={activeTab === "history"} onClick={() => setActiveTab("history")}>
            History
          </TabButton>
        </div>

        {/* Header */}
        <div className="px-6 py-4 bg-sky-50 border-b rounded-t-2xl">
          <h3 className="font-semibold text-red-400">
            {activeTab === "swap" && "AI Swap Assistant"}
            {activeTab === "stake" && "AI-Optimized Staking"}
            {activeTab === "history" && "Activity History"}
          </h3>

          <p className="text-sm text-gray-500">
            {activeTab === "swap" && "Tell me what you want to swap"}
            {activeTab === "stake" && "AI scans protocols & finds best APY"}
            {activeTab === "history" && "Your swap & staking records"}
          </p>
        </div>

        {/* Content */}
        <div className="p-6 min-h-[300px]">
          {activeTab === "swap" && (
            <AiSwapChat chat={chat} loading={loading} launched={launched} swapPreview={swapPreview} />
          )}

          {activeTab === "stake" && <AiStakePage />}

          {activeTab === "history" && <AiHistoryPage />}
        </div>

        {/* ================= LOCKED STATE BUTTON ================= */}
        {!launched && (
          <div className="border rounded-2xl p-5 bg-gradient-to-br from-sky-50 to-white shadow-sm mb-5">
            <h2 className="text-lg font-semibold mb-2">Launch AI Trading 🚀</h2>

            <p className="text-gray-600 mb-3">
              Click launch to enable AI-powered swap assistant.
            </p>

            <button
              onClick={handleLaunch}
              className="px-5 py-2 rounded-xl font-semibold bg-red-500 text-white cursor-pointer"
            >
              Launch AI Trading
            </button>
          </div>
        )}

        {/* ================= CHAT INPUT ================= */}
        {activeTab === "swap" && launched && (
          <>
            <div className="p-4 border-t flex items-center gap-3">
              <input
                value={message}
                disabled={loading}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Try "Swap 1 SOL to USDC" or "Buy $1000 of LINK"'
                className={`flex-1 border rounded-xl px-4 py-3 text-sm focus:outline-none ${
                  loading ? "bg-gray-100 cursor-not-allowed" : "focus:ring-2 focus:ring-red-400"
                }`}
              />

              <button
                onClick={handleSend}
                disabled={loading}
                className="bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white px-4 py-3 rounded-xl cursor-pointer"
              >
                {loading ? (
                  <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4 inline-block" />
                ) : (
                  "➤"
                )}
              </button>
            </div>

            <p className="text-xs text-gray-400 px-4 pb-4">
              💡 Tip: Use natural language like "swap", "buy", "sell", or "exchange"
            </p>
          </>
        )}
      </div>

      {/* RIGHT SIDEBAR */}
      <SidebarPanel />
    </div>
  );
}

/* ================= TAB BUTTON ================= */
function TabButton({ active, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
        active ? "bg-red-500 text-white" : "bg-gray-100 text-gray-500"
      }`}
    >
      {children}
    </button>
  );
}

/* ================= SWAP CHAT ================= */
function AiSwapChat({ chat, loading, launched, swapPreview }) {
  return (
    <div className="space-y-3 max-h-[240px] overflow-y-auto">
      {!launched && (
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-xl text-sm">
          🔐 Swap chat is locked — click <b>Launch AI Trading</b> to enable.
        </div>
      )}

      {chat.map((msg, i) => (
        <div
          key={i}
          className={`px-4 py-3 rounded-xl text-sm shadow-sm border max-w-xl transition-all duration-300 ${
            msg.from === "ai" ? "bg-sky-50 border-sky-200" : "bg-gray-100 border-gray-300 ml-auto"
          }`}
        >
          {msg.text}
        </div>
      ))}

      {loading && (
        <div className="px-4 py-3 rounded-xl text-sm shadow-sm border max-w-xs bg-sky-50 border-sky-200 animate-pulse">
          🤖 AI is calculating best route…
        </div>
      )}

      {swapPreview && <SwapPreviewCard data={swapPreview} />}
    </div>
  );
}

/* ================= SWAP PREVIEW CARD ================= */
function SwapPreviewCard({ data }) {
  return (
    <div
      id="swap-card"
      className="border rounded-2xl p-4 shadow-sm bg-white animate-[slide-up_0.3s_ease] max-w-sm"
    >
      <p className="text-sm font-medium">
        Found best route via <span className="text-sky-600">{data.dex}</span> 🚀
      </p>

      <div className="mt-3 bg-sky-50 border border-sky-200 rounded-xl p-4">
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>Swap Route</span>
          <span className="text-green-600 font-semibold">Best Price ✓</span>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-1">
          <div className="bg-white rounded-xl border p-3">
            <p className="text-xs text-gray-500">From</p>
            <h3 className="font-semibold text-lg">
              {data.fromAmount} {data.fromToken}
            </h3>
          </div>

          <div className="bg-white rounded-xl border p-3">
            <p className="text-xs text-gray-500">To</p>
            <h3 className="font-semibold text-lg">
              {data.toAmount} {data.toToken}
            </h3>
          </div>
        </div>

        <div className="flex justify-between text-xs mt-3 text-gray-600">
          <p>Fee: {data.fee}</p>
          <p>Impact: {data.impact}</p>
        </div>

        <button className="mt-3 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-xl font-semibold cursor-pointer">
          Execute
        </button>
      </div>
    </div>
  );
}

/* ================= STAKE PAGE ================= */
const TOKENS = [
  { id: "SOL", name: "Solana", price: 3200, apy: 8.47, protocol: "Lido Finance" },
  { id: "USDC", name: "USD Coin", price: 1.0, apy: 5.2, protocol: "Aave" },
  { id: "MATIC", name: "Polygon", price: 0.78, apy: 6.1, protocol: "Curve" },
];

const ACTIVE_STAKES = [
  { token: "SOL", amount: 2.5, apy: 8.47, earned: 127.5, protocol: "Lido" },
  { token: "USDC", amount: 5000, apy: 5.2, earned: 260, protocol: "Aave" },
];

export function AiStakePage() {
  const [token, setToken] = React.useState(TOKENS[0]);
  const [amount, setAmount] = React.useState("");

  const usdValue = amount ? (amount * token.price).toFixed(2) : "0.00";
  const estYearly = amount ? ((amount * token.apy) / 100).toFixed(3) : "0.000";

  return (
    <div className="space-y-5">
      {/* TOKEN SELECT */}
      <div className="bg-slate-900 text-white rounded-2xl p-5 border">
        <p className="text-sm text-white/70 mb-2">Select Token</p>

        <select
          className="bg-slate-800 rounded-xl px-3 py-3 w-full"
          value={token.id}
          onChange={(e) => setToken(TOKENS.find((t) => t.id === e.target.value))}
        >
          {TOKENS.map((t) => (
            <option key={t.id} value={t.id}>
              {t.id} — {t.name}
            </option>
          ))}
        </select>

        {/* AMOUNT */}
        <div className="mt-4">
          <p className="text-sm text-white/70">Amount</p>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.0"
            className="bg-slate-800 w-full mt-1 px-3 py-3 rounded-xl"
          />
          <p className="text-xs mt-1 text-white/60">≈ ${usdValue} USD</p>
        </div>

        {/* APY & EARNINGS */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="bg-slate-800 rounded-xl p-3">
            <p className="text-xs text-white/60">AI Recommended APY</p>
            <h2 className="text-2xl font-bold">{token.apy}%</h2>
            <p className="text-xs mt-1">via {token.protocol}</p>
          </div>

          <div className="bg-slate-800 rounded-xl p-3">
            <p className="text-xs text-white/60">Est. Yearly Earnings</p>
            <h2 className="text-2xl font-bold">
              {estYearly} {token.id}
            </h2>
          </div>
        </div>

        <button className="mt-5 bg-red-500 hover:bg-red-600 transition px-5 py-3 rounded-xl font-medium cursor-pointer">
          Stake with AI Optimization
        </button>
      </div>

      {/* ACTIVE STAKES */}
      <div className="bg-slate-900 text-white rounded-2xl p-5 border">
        <p className="text-sm text-white/70 mb-3">Your Active Stakes</p>

        {ACTIVE_STAKES.map((s, i) => (
          <div key={i} className="bg-slate-800 rounded-xl p-4 mb-2">
            <p className="font-semibold">{s.token}</p>
            <p className="text-sm">Staked: {s.amount}</p>
            <p className="text-sm">Earned: ${s.earned}</p>
            <p className="text-xs text-white/60">via {s.protocol}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================= HISTORY PAGE ================= */
const HISTORY = [
  { icon: <PiggyBank />, type: "stake", status: "Success", text: "Staked 2.5 SOL via Lido", value: "$3,800", time: "2 hours ago" },
  { icon: <TrendingUp />, type: "earn", status: "Success", text: "Earned Rewards", value: "$127.50", time: "Yesterday" },
  { icon: <ArrowRightLeft />, type: "swap", status: "Pending", text: "Swapped 1 SOL → USDC", value: "$3,200", time: "Processing..." },
];

function StatusBadge({ status }) {
  return (
    <span
      className={`px-2 py-1 rounded-lg text-xs font-medium ${
        status === "Success"
          ? "bg-green-100 text-green-700 flex items-center gap-1"
          : "bg-yellow-100 text-yellow-700 flex items-center gap-1"
      }`}
    >
      {status === "Success" ? <CheckCircle2 size={14} /> : <Timer size={14} />}
      {status}
    </span>
  );
}

function AiHistoryPage() {
  return (
    <div className="bg-white rounded-2xl p-5 border shadow-sm">
      <h3 className="font-semibold mb-3">Recent Activity</h3>

      <div className="space-y-3 text-sm">
        {HISTORY.map((h, i) => (
          <div key={i} className="border rounded-xl p-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="bg-sky-50 text-sky-700 p-2 rounded-xl">{h.icon}</div>

              <div>
                <p className="font-medium">{h.text}</p>
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <Clock size={12} /> {h.time}
                </p>
              </div>
            </div>

            <div className="text-right">
              <StatusBadge status={h.status} />
              <p className="font-semibold mt-1">{h.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================= SIDEBAR ================= */
function SidebarPanel() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-b from-slate-600 to-slate-800 rounded-2xl p-5 text-white shadow">
        <h4 className="font-semibold mb-3">⚡ Quick Swaps</h4>
        <QuickSwap label="CEDRA → USDC" />
        <QuickSwap label="USDT → CEDRA" />
        <QuickSwap label="WBTC → SOL" />
      </div>

      <div className="bg-sky-50 rounded-2xl p-5 border">
        <h4 className="font-semibold text-sky-600 mb-3">AI Advantage</h4>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>✓ Scans 10+ DEXs for best rates</li>
          <li>✓ MEV protection built-in</li>
          <li>✓ Gas optimization included</li>
        </ul>
      </div>
    </div>
  );
}

function QuickSwap({ label }) {
  return (
    <button className="w-full text-left bg-white/10 hover:bg-white/20 transition rounded-xl px-4 py-3 text-sm mb-2">
      <p className="font-medium">{label}</p>
      <p className="text-xs text-white/70">Best rate via Uniswap</p>
    </button>
  );
}
