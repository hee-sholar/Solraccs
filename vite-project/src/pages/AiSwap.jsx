/* ================= AI SWAP + AI STAKE + HISTORY (ENHANCED V2) ================= */

import React from "react";
import {
  CheckCircle2,
  Clock,
  Timer,
  ArrowRightLeft,
  TrendingUp,
  PiggyBank,
} from "lucide-react";

export function AiSwap() {
  const [activeTab, setActiveTab] = React.useState("swap");

  /* Swap Chat Messages */
  const [message, setMessage] = React.useState("");
  const [chat, setChat] = React.useState([
    { from: "ai", text: "👋 Hi! I'm your AI DEX assistant. Tell me what you want to swap. Try: “Swap 1 ETH to USDC” or Buy 100 USDT worth of LINK" }
  ]);

  /* Handle Send Message */
  const handleSend = () => {
    if (!message.trim()) return;

    const userMsg = { from: "user", text: message };

    const aiReply = {
      from: "ai",
      text: `🔎 Scanning blockchains...\nBest route found for: ${message}`
    };

    setChat([...chat, userMsg, aiReply]);
    setMessage("");
  };

  return (
    <div className="w-full max-w-6xl mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      {/* LEFT PANEL */}
      <div className="lg:col-span-2 bg-white rounded-2xl border shadow-sm">

        {/* Tabs */}
        <div className="flex items-center gap-2 p-3 border-b">
          <TabButton active={activeTab === "swap"} onClick={() => setActiveTab("swap")}>AI Swap</TabButton>
          <TabButton active={activeTab === "stake"} onClick={() => setActiveTab("stake")}>AI Stake</TabButton>
          <TabButton active={activeTab === "history"} onClick={() => setActiveTab("history")}>History</TabButton>
        </div>

        {/* Header */}
        <div className="px-6 py-4 bg-sky-50 border-b rounded-t-2xl">
          <h3 className="font-semibold text-sky-600">
            {activeTab === "swap" && "AI Swap Assistant"}
            {activeTab === "stake" && "AI-Optimized Staking"}
            {activeTab === "history" && "Activity History"}
          </h3>

          <p className="text-sm text-gray-500">
            {activeTab === "swap" && "Just tell me what you want to swap!"}
            {activeTab === "stake" && "AI scans protocols & finds the best APY"}
            {activeTab === "history" && "Your staking & swap records"}
          </p>
        </div>

        {/* Content */}
        <div className="p-6 min-h-[300px]">
          {activeTab === "swap" && <AiSwapChat chat={chat} />}
          {activeTab === "stake" && <AiStakePage />}
          {activeTab === "history" && <AiHistoryPage />}
        </div>

        {/* Swap Chat Input */}
        {activeTab === "swap" && (
          <>
            <div className="p-4 border-t flex items-center gap-3">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Try "Swap 0.5 ETH to USDC"'
                className="flex-1 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
              />

              <button
                onClick={handleSend}
                className="bg-red-500 hover:bg-red-600 text-white transition px-4 py-3 rounded-xl"
              >
                ➤
              </button>
            </div>

            <p className="text-xs text-gray-400 px-4 pb-4">
              💡 Tip: use natural language like — swap, buy, sell
            </p>
          </>
        )}
      </div>

      {/* RIGHT SIDEBAR */}
      <SidebarPanel />
    </div>
  );
}

/* =============================== TAB BUTTON =============================== */

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

/* ============================= AI SWAP CHAT UI ============================= */

function AiSwapChat({ chat }) {
  return (
    <div className="space-y-3 max-h-[240px] overflow-y-auto">

      {chat.map((msg, i) => (
        <div
          key={i}
          className={`px-4 py-3 rounded-xl text-sm shadow-sm border max-w-xl ${
            msg.from === "ai"
              ? "bg-sky-50 border-sky-200"
              : "bg-gray-100 border-gray-300 ml-auto"
          }`}
        >
          {msg.text}
        </div>
      ))}
    </div>
  );
}

/* =========================== AI STAKE (DUMMY DATA) =========================== */

const TOKENS = [
  { id: "ETH", name: "Ethereum", price: 3200, apy: 8.47, protocol: "Lido Finance" },
  { id: "USDC", name: "USD Coin", price: 1.0, apy: 5.2, protocol: "Aave" },
  { id: "MATIC", name: "Polygon", price: 0.78, apy: 6.1, protocol: "Curve" }
];

const ACTIVE_STAKES = [
  { token: "ETH", amount: 2.5, apy: 8.47, earned: 127.5, protocol: "Lido" },
  { token: "USDC", amount: 5000, apy: 5.2, earned: 260, protocol: "Aave" }
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
          onChange={(e) => setToken(TOKENS.find(t => t.id === e.target.value))}
        >
          {TOKENS.map(t => (
            <option key={t.id} value={t.id}>{t.id} — {t.name}</option>
          ))}
        </select>

        {/* AMOUNT */}
        <div className="mt-4">
          <p className="text-sm text-white/70">Amount</p>

          <input
            value={amount}
            onChange={e => setAmount(e.target.value)}
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
            <h2 className="text-2xl font-bold">{estYearly} {token.id}</h2>
          </div>
        </div>

        <button className="mt-5 bg-red-500 hover:bg-red-600 transition px-5 py-3 rounded-xl font-medium">
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

/* ============================= HISTORY PAGE ============================= */

const HISTORY = [
  { icon: <PiggyBank />, type: "stake", status: "Success", text: "Staked 2.5 ETH via Lido", value: "$3,800", time: "2 hours ago" },
  { icon: <TrendingUp />, type: "earn", status: "Success", text: "Earned Rewards", value: "$127.50", time: "Yesterday" },
  { icon: <ArrowRightLeft />, type: "swap", status: "Pending", text: "Swapped 1 ETH → USDC", value: "$3,200", time: "Processing..." },
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
              <div className="bg-sky-50 text-sky-700 p-2 rounded-xl">
                {h.icon}
              </div>

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

/* =============================== SIDEBAR =============================== */

function SidebarPanel() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-b from-slate-600 to-slate-800 rounded-2xl p-5 text-white shadow">
        <h4 className="font-semibold mb-3">⚡ Quick Swaps</h4>
        <QuickSwap label="CEDRA → USDC" />
        <QuickSwap label="USDT → CEDRA" />
        <QuickSwap label="WBTC → ETH" />
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
