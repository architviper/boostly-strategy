import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { fadeUp } from "@/lib/animations";

const GrowthCalculator = () => {
  const [currentRate, setCurrentRate] = useState(2);
  const [improvedRate, setImprovedRate] = useState(3.5);
  const [monthlyVisitors, setMonthlyVisitors] = useState(50000);
  const [avgOrderValue, setAvgOrderValue] = useState(500);

  const currentRevenue = monthlyVisitors * (currentRate / 100) * avgOrderValue * 12;
  const improvedRevenue = monthlyVisitors * (improvedRate / 100) * avgOrderValue * 12;
  const revenueGain = improvedRevenue - currentRevenue;

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(val);

  return (
    <section className="section-padding">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">
            Growth Calculator
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text-bright mb-4">
            See Your Revenue Potential
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Small improvements in conversion rate can unlock massive revenue gains. Use this calculator to see the impact.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
          className="max-w-3xl mx-auto surface-glass rounded-2xl p-8 md:p-10"
        >
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium text-text-bright mb-2 block">
                  Monthly Visitors: <span className="text-primary">{monthlyVisitors.toLocaleString()}</span>
                </label>
                <Slider
                  value={[monthlyVisitors]}
                  onValueChange={(v) => setMonthlyVisitors(v[0])}
                  min={1000}
                  max={500000}
                  step={1000}
                  className="mt-2"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-text-bright mb-2 block">
                  Avg. Order Value: <span className="text-primary">₹{avgOrderValue}</span>
                </label>
                <Slider
                  value={[avgOrderValue]}
                  onValueChange={(v) => setAvgOrderValue(v[0])}
                  min={100}
                  max={10000}
                  step={100}
                  className="mt-2"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium text-text-bright mb-2 block">
                  Current Conversion Rate: <span className="text-muted-foreground">{currentRate}%</span>
                </label>
                <Slider
                  value={[currentRate]}
                  onValueChange={(v) => setCurrentRate(v[0])}
                  min={0.5}
                  max={10}
                  step={0.1}
                  className="mt-2"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-text-bright mb-2 block">
                  Improved Conversion Rate: <span className="text-primary">{improvedRate}%</span>
                </label>
                <Slider
                  value={[improvedRate]}
                  onValueChange={(v) => setImprovedRate(v[0])}
                  min={0.5}
                  max={15}
                  step={0.1}
                  className="mt-2"
                />
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="border-t border-border pt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="surface-glass rounded-xl p-5">
                <div className="text-xs text-muted-foreground mb-1">Current Annual Revenue</div>
                <div className="text-xl font-display font-bold text-text-bright">{formatCurrency(currentRevenue)}</div>
              </div>
              <div className="surface-glass rounded-xl p-5">
                <div className="text-xs text-muted-foreground mb-1">Projected Annual Revenue</div>
                <div className="text-xl font-display font-bold text-primary">{formatCurrency(improvedRevenue)}</div>
              </div>
              <div className="rounded-xl p-5 bg-primary/10 border border-primary/20">
                <div className="text-xs text-primary mb-1 flex items-center justify-center gap-1">
                  <TrendingUp className="h-3 w-3" /> Additional Revenue
                </div>
                <div className="text-xl font-display font-bold text-primary">
                  +{formatCurrency(revenueGain)}
                </div>
                <div className="text-xs text-primary/70 mt-1">per year</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GrowthCalculator;
