'use client';

import { motion } from 'motion/react';
import { GlowCard } from '@/components/ui/glow-card';
import { Zap, Shield, TrendingUp, Cpu } from 'lucide-react';

const data = [
  { name: 'Month 1', efficiency: 20, uptime: 95, cost: 100 },
  { name: 'Month 2', efficiency: 45, uptime: 98, cost: 85 },
  { name: 'Month 3', efficiency: 60, uptime: 99.5, cost: 70 },
  { name: 'Month 4', efficiency: 75, uptime: 99.8, cost: 55 },
  { name: 'Month 5', efficiency: 88, uptime: 99.9, cost: 40 },
  { name: 'Month 6', efficiency: 95, uptime: 99.99, cost: 30 },
];

const stats = [
  { icon: <Zap className="text-yellow-500" />, label: 'Relational Speed', value: '+400%', sub: 'vs Legacy Systems' },
  { icon: <Shield className="text-blue-500" />, label: 'System Integrity', value: '99.99%', sub: 'Operational Guarantee' },
  { icon: <TrendingUp className="text-green-500" />, label: 'ROI Velocity', value: '3.5x', sub: 'Faster Capital Recovery' },
  { icon: <Cpu className="text-purple-500" />, label: 'Logic Overhead', value: '-60%', sub: 'Resource Optimization' },
];

const chartWidth = 800;
const chartHeight = 400;
const paddingX = 56;
const paddingY = 36;

const xStep = (chartWidth - paddingX * 2) / (data.length - 1);

function buildPath(key: keyof (typeof data)[number]) {
  return data
    .map((point, index) => {
      const x = paddingX + index * xStep;
      const value = point[key];
      const normalized = key === 'cost'
        ? 1 - (value as number) / 120
        : (value as number) / 100;
      const y = paddingY + (1 - normalized) * (chartHeight - paddingY * 2);
      return `${index === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(' ');
}

function buildAreaPath(key: keyof (typeof data)[number]) {
  const line = buildPath(key);
  const lastX = paddingX + (data.length - 1) * xStep;
  const firstX = paddingX;
  const baseline = chartHeight - paddingY;
  return `${line} L ${lastX.toFixed(1)} ${baseline} L ${firstX.toFixed(1)} ${baseline} Z`;
}

function getY(key: keyof (typeof data)[number], value: number) {
  const normalized = key === 'cost' ? 1 - value / 120 : value / 100;
  return paddingY + (1 - normalized) * (chartHeight - paddingY * 2);
}

export function Infographic() {
  const efficiencyLine = buildPath('efficiency');
  const costLine = buildPath('cost');
  const efficiencyArea = buildAreaPath('efficiency');
  const costArea = buildAreaPath('cost');

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-brand-dark">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-brand-primary text-xs font-black uppercase tracking-[0.3em] mb-6 block">Precision Metrics</span>
          <h2 className="text-5xl md:text-7xl font-black text-brand-text leading-tight mb-8">
            The Logic of <br /><span className="text-gradient">Optimization</span>
          </h2>
          <p className="text-brand-text-muted max-w-2xl text-lg leading-relaxed font-medium">
            We don&apos;t just guess. We measure every optimization cycle to ensure your business infrastructure is running at peak performance.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Stats Grid */}
          <div className="lg:col-span-1 grid grid-cols-1 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <GlowCard className="p-6 flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center border border-brand-primary/10 group-hover:bg-brand-primary/10 transition-all">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-text/30 mb-1">{stat.label}</p>
                    <div className="text-3xl font-black text-brand-text mb-1 italic tracking-tight">{stat.value}</div>
                    <p className="text-xs font-bold text-brand-text-muted">{stat.sub}</p>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>

          {/* Chart Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 glass-glow rounded-[40px] border border-brand-primary/10 p-10 flex flex-col relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            
            <div className="flex items-center justify-between mb-12 relative z-10">
              <div>
                <h3 className="text-2xl font-black text-brand-text italic uppercase tracking-tight">Performance Lifecycle</h3>
                <p className="text-sm text-brand-text-muted font-medium">Monthly efficiency gains vs. architectural cost reduction</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-brand-primary" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-text/60">Efficiency</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-brand-text/20" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-text/60">Cost</span>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full h-[400px] min-w-0 min-h-[400px] relative z-10">
              <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-full" preserveAspectRatio="none" role="img" aria-label="Performance lifecycle chart">
                <defs>
                  <linearGradient id="colorEff" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6D63F6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#6D63F6" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FAFAFA" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#FAFAFA" stopOpacity={0} />
                  </linearGradient>
                </defs>

                {[0, 1, 2, 3].map((row) => (
                  <line
                    key={row}
                    x1={paddingX}
                    x2={chartWidth - paddingX}
                    y1={paddingY + row * ((chartHeight - paddingY * 2) / 3)}
                    y2={paddingY + row * ((chartHeight - paddingY * 2) / 3)}
                    stroke="rgba(250, 250, 250, 0.08)"
                    strokeDasharray="6 8"
                  />
                ))}

                <path d={efficiencyArea} fill="url(#colorEff)" />
                <path d={costArea} fill="url(#colorCost)" />
                <path d={efficiencyLine} stroke="#6D63F6" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <path d={costLine} stroke="rgba(250, 250, 250, 0.24)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />

                {data.map((point, index) => {
                  const x = paddingX + index * xStep;
                  const efficiencyY = getY('efficiency', point.efficiency);
                  const costY = getY('cost', point.cost);

                  return (
                    <g key={point.name}>
                      <circle cx={x} cy={efficiencyY} r="7" fill="#6D63F6" />
                      <circle cx={x} cy={costY} r="5" fill="#FAFAFA" fillOpacity="0.45" />
                      <text
                        x={x}
                        y={chartHeight - 10}
                        textAnchor="middle"
                        fill="rgba(250, 250, 250, 0.45)"
                        fontSize="14"
                        fontWeight="700"
                      >
                        {point.name}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
            
            <div className="mt-10 pt-8 border-t border-brand-primary/10 flex justify-between items-center relative z-10">
               <p className="text-[10px] font-black uppercase tracking-widest text-brand-text/30 italic">Target Metric: 99.99% Reliability Threshold</p>
               <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-text">Active Monitoring</span>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Infographic Elements */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
           {[
             { label: 'Cloud Latency', value: '14ms', icon: '⚡' },
             { label: 'Logic Entropy', value: 'Low', icon: '🧬' },
             { label: 'Protocol Stability', value: '100%', icon: '💎' },
             { label: 'Scale Quotient', value: '∞', icon: '🚀' }
           ].map((badge, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.5 + (i * 0.1) }}
               className="glass rounded-2xl p-6 border border-brand-primary/5 hover:border-brand-primary/20 transition-all flex flex-col items-center text-center hover:scale-105"
             >
                <div className="text-2xl mb-4">{badge.icon}</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-brand-text/30 mb-2">{badge.label}</div>
                <div className="text-2xl font-black text-brand-text uppercase tracking-tight">{badge.value}</div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
