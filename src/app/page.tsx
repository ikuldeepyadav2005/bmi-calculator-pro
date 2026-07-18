"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Activity, Droplets, Dumbbell, Flame, Heart, Sparkles, Target, TrendingUp, Waves } from "lucide-react";
import { useMemo, useState } from "react";
import { calculateResults, type ActivityLevel, type CalculatorState, type Gender, type Goal, type UnitSystem } from "@/lib/health";

export default function HomePage() {
  const [state, setState] = useState<CalculatorState>({
    age: "29",
    gender: "male",
    height: "180",
    weight: "80",
    unit: "metric",
    activity: "moderate",
    goal: "maintain",
  });
  const [result, setResult] = useState<ReturnType<typeof calculateResults> | null>(null);

  const summary = useMemo(() => (result ? result : null), [result]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setResult(calculateResults(state));
  };

  const handleReset = () => {
    setState({ age: "", gender: "male", height: "", weight: "", unit: "metric", activity: "moderate", goal: "maintain" });
    setResult(null);
  };

  const riskLabel = result ? (result.bmi < 18.5 ? "Needs more fuel" : result.bmi < 25 ? "Excellent range" : result.bmi < 30 ? "Monitor habits" : "Action recommended") : "Ready to evaluate";

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.15),_transparent_35%),linear-gradient(120deg,_#050816,_#071128)] text-slate-100">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <nav className="sticky top-4 z-30 mb-8 rounded-full border border-white/10 bg-slate-950/70 px-4 py-3 backdrop-blur-xl">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="rounded-full border border-cyan-400/30 bg-cyan-400/10 p-2 text-cyan-300"><Sparkles size={18} /></div>
              <div>
                <p className="text-sm font-semibold tracking-[0.3em] text-slate-200">BMI CALCULATOR PRO</p>
                <p className="text-xs text-slate-400">Premium wellness intelligence</p>
              </div>
            </div>
            <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
              <a href="#calculator" className="transition hover:text-cyan-300">Calculator</a>
              <a href="#results" className="transition hover:text-cyan-300">Results</a>
              <a href="#insights" className="transition hover:text-cyan-300">Insights</a>
            </div>
          </div>
        </nav>

        <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid items-center gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-2xl lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">
              <Heart size={16} /> Luxury fitness intelligence
            </div>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl">
              Know Your Body. <span className="text-cyan-300">Improve Your Health.</span>
            </h1>
            <p className="max-w-2xl text-lg text-slate-300">
              Calculate BMI, BMR, TDEE, protein needs, hydration, lean mass and body fat with a premium, glassy experience built for real-world health goals.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#calculator" className="rounded-full bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">Start Calculating</a>
              <a href="#results" className="rounded-full border border-white/15 bg-white/10 px-5 py-3 font-semibold text-slate-100 transition hover:bg-white/20">Explore Insights</a>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-slate-950/70 p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,191,255,0.28),_transparent_40%)]" />
            <div className="relative space-y-4">
              {[{ label: "Daily Calories", value: "2,350", icon: Flame }, { label: "Hydration", value: "3.6L", icon: Droplets }, { label: "Protein", value: "128g", icon: Target }].map((item) => (
                <div key={item.label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-cyan-400/10 p-2 text-cyan-300"><item.icon size={16} /></div>
                    <span className="text-sm text-slate-300">{item.label}</span>
                  </div>
                  <span className="font-semibold text-white">{item.value}</span>
                </div>
              ))}
              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm text-cyan-100">
                <div className="flex items-center justify-between">
                  <span>Health Score</span>
                  <span className="font-semibold">92 / 100</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-slate-800">
                  <div className="h-2 w-[92%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                </div>
              </div>
            </div>
          </div>
        </motion.header>

        <section id="calculator" className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.form initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-cyan-300">Precision calculator</p>
                <h2 className="text-2xl font-semibold">Profile & goals</h2>
              </div>
              <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300"><Activity size={18} /></div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="rounded-2xl border border-white/10 bg-slate-950/50 p-3 text-sm">
                <span className="mb-2 block text-slate-400">Age</span>
                <input value={state.age} onChange={(e) => setState({ ...state, age: e.target.value })} className="w-full bg-transparent outline-none" type="number" min="1" required />
              </label>
              <label className="rounded-2xl border border-white/10 bg-slate-950/50 p-3 text-sm">
                <span className="mb-2 block text-slate-400">Gender</span>
                <select value={state.gender} onChange={(e) => setState({ ...state, gender: e.target.value as Gender })} className="w-full bg-transparent outline-none">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </label>
              <label className="rounded-2xl border border-white/10 bg-slate-950/50 p-3 text-sm">
                <span className="mb-2 block text-slate-400">Height</span>
                <input value={state.height} onChange={(e) => setState({ ...state, height: e.target.value })} className="w-full bg-transparent outline-none" type="number" min="1" required />
              </label>
              <label className="rounded-2xl border border-white/10 bg-slate-950/50 p-3 text-sm">
                <span className="mb-2 block text-slate-400">Weight</span>
                <input value={state.weight} onChange={(e) => setState({ ...state, weight: e.target.value })} className="w-full bg-transparent outline-none" type="number" min="1" required />
              </label>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="rounded-2xl border border-white/10 bg-slate-950/50 p-3 text-sm">
                <span className="mb-2 block text-slate-400">Units</span>
                <select value={state.unit} onChange={(e) => setState({ ...state, unit: e.target.value as UnitSystem })} className="w-full bg-transparent outline-none">
                  <option value="metric">Metric</option>
                  <option value="imperial">Imperial</option>
                </select>
              </label>
              <label className="rounded-2xl border border-white/10 bg-slate-950/50 p-3 text-sm">
                <span className="mb-2 block text-slate-400">Goal</span>
                <select value={state.goal} onChange={(e) => setState({ ...state, goal: e.target.value as Goal })} className="w-full bg-transparent outline-none">
                  <option value="lose">Lose Weight</option>
                  <option value="maintain">Maintain Weight</option>
                  <option value="gain">Gain Muscle</option>
                </select>
              </label>
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/50 p-4">
              <p className="mb-3 text-sm text-slate-400">Activity level</p>
              <div className="grid gap-2 sm:grid-cols-2">
                {([['sedentary','Sedentary'],['light','Lightly Active'],['moderate','Moderately Active'],['very','Very Active'],['athlete','Athlete']] as const).map(([key, label]) => (
                  <button key={key} type="button" onClick={() => setState({ ...state, activity: key as ActivityLevel })} className={`rounded-xl border px-3 py-2 text-left text-sm transition ${state.activity === key ? 'border-cyan-400 bg-cyan-400/10 text-cyan-200' : 'border-white/10 bg-white/5 text-slate-300 hover:border-cyan-400/30'}`}>
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button type="submit" className="rounded-full bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">Calculate</button>
              <button type="button" onClick={handleReset} className="rounded-full border border-white/15 bg-white/10 px-5 py-3 font-semibold text-slate-100 transition hover:bg-white/20">Reset</button>
            </div>
          </motion.form>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} id="results" className="space-y-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-cyan-300">Live insights</p>
                <h2 className="text-2xl font-semibold">Results dashboard</h2>
              </div>
              <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300"><TrendingUp size={18} /></div>
            </div>

            <AnimatePresence mode="wait">
              {summary ? (
                <motion.div key="results" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="space-y-4">
                  <div className={`rounded-[1.5rem] border border-white/10 bg-gradient-to-br ${summary.category.bg} p-5`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-300">BMI Score</p>
                        <p className="text-5xl font-semibold text-white">{summary.bmi}</p>
                      </div>
                      <div className={`rounded-full border border-white/10 px-4 py-2 text-sm font-semibold ${summary.category.color}`}>{summary.category.label}</div>
                    </div>
                    <div className="mt-4 h-2 rounded-full bg-slate-900/50">
                      <div className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" style={{ width: `${Math.min(100, (summary.bmi / 40) * 100)}%` }} />
                    </div>
                    <p className="mt-3 text-sm text-slate-300">{riskLabel}</p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      { label: "Healthy Range", value: `${summary.healthyMin} - ${summary.healthyMax} kg/m²` },
                      { label: "Ideal Weight", value: `${summary.idealWeight} kg` },
                      { label: "Target Weight", value: `${summary.targetWeight} kg` },
                      { label: "BMR", value: `${summary.bmr} kcal` },
                    ].map((item) => (
                      <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                        <p className="text-sm text-slate-400">{item.label}</p>
                        <p className="mt-2 text-xl font-semibold text-white">{item.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                      <p className="text-sm text-slate-400">Daily calories</p>
                      <p className="mt-2 text-3xl font-semibold text-white">{summary.maintenanceCalories}</p>
                      <p className="mt-2 text-sm text-slate-300">Loss {summary.weightLossCalories} • Gain {summary.weightGainCalories}</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                      <p className="text-sm text-slate-400">Hydration target</p>
                      <p className="mt-2 text-3xl font-semibold text-white">{summary.water} ml</p>
                      <p className="mt-2 text-sm text-slate-300">Protein {summary.protein}g • Body fat {summary.bodyFat}%</p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                    <p className="mb-3 text-sm text-slate-400">Macro targets</p>
                    <div className="grid gap-3 sm:grid-cols-3">
                      {[
                        { label: "Protein", value: `${summary.macro.protein}g` },
                        { label: "Carbs", value: `${summary.macro.carbs}g` },
                        { label: "Fats", value: `${summary.macro.fats}g` },
                      ].map((item) => (
                        <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                          <p className="text-sm text-slate-400">{item.label}</p>
                          <p className="mt-1 text-lg font-semibold text-white">{item.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div key="empty" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="rounded-[1.5rem] border border-dashed border-white/20 bg-slate-950/40 p-8 text-center text-slate-300">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300"><Waves size={24} /></div>
                  <p className="text-lg font-semibold text-white">Your premium dashboard will appear here.</p>
                  <p className="mt-2 text-sm">Complete the form and unlock tailored health metrics.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </section>

        <section id="insights" className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            { title: "Body Fat Estimation", copy: "Use BMI and age cues to create a realistic benchmark range.", icon: Dumbbell },
            { title: "TDEE Forecast", copy: "Align calories to your activity level and target goal.", icon: Flame },
            { title: "Hydration Guide", copy: "Match your fluid needs to body size and training demand.", icon: Droplets },
          ].map((item) => (
            <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <div className="mb-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 p-2 text-cyan-300"><item.icon size={16} /></div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{item.copy}</p>
            </div>
          ))}
        </section>

        <section className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm text-cyan-300">Performance highlights</p>
              <h3 className="text-2xl font-semibold">Health intelligence at a glance</h3>
            </div>
            <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-sm text-cyan-200">Built for premium wellness brands</div>
          </div>
          <div className="mt-6 grid gap-4 lg:grid-cols-4">
            {[
              { label: 'BMI Prime', value: summary?.bmiPrime ?? '—' },
              { label: 'Ponderal Index', value: summary?.ponderalIndex ?? '—' },
              { label: 'Metabolic Age', value: summary ? `${summary.metabolicAge} yrs` : '—' },
              { label: 'Lean Mass', value: summary ? `${summary.leanMass} kg` : '—' },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                <p className="text-sm text-slate-400">{item.label}</p>
                <p className="mt-2 text-2xl font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
