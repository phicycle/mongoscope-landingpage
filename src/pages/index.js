import { motion } from 'framer-motion';
import { BarChartIcon, StackIcon, RocketIcon, CodeIcon, GitHubLogoIcon, CopyIcon, CheckIcon } from '@radix-ui/react-icons';
import Head from 'next/head';
import { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import GitHubButton from '../components/GitHubButton';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('npm i mongoscope');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Head>
        <title>MongoScope - MongoDB Collection Analytics</title>
        <meta name="description" content="Free and open source analytics for your MongoDB collections. Monitor performance, analyze patterns, and get insights without writing code." />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mongoscope.phicycle.io/" />
        <meta property="og:title" content="MongoScope - MongoDB Collection Analytics" />
        <meta property="og:description" content="Free and open source analytics for your MongoDB collections. Monitor performance, analyze patterns, and get insights without writing code." />
        <meta property="og:image" content="https://res.cloudinary.com/diroilukd/image/upload/v1734493222/c7d8b526-6d6a-4122-a363-6e1e2ca6fdf1.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://mongoscope.phicycle.io/" />
        <meta property="twitter:title" content="MongoScope - MongoDB Collection Analytics" />
        <meta property="twitter:description" content="Free and open source analytics for your MongoDB collections. Monitor performance, analyze patterns, and get insights without writing code." />
        <meta property="twitter:image" content="https://res.cloudinary.com/diroilukd/image/upload/v1734493222/c7d8b526-6d6a-4122-a363-6e1e2ca6fdf1.png" />

        {/* Favicon */}
        <link rel="icon" href="/logo.svg" />
      </Head>

      <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-[var(--border-color)]">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="MongoScope Logo" className="w-8 h-8" />
            <span className="font-medium">MongoScope</span>
            <div className="flex items-center text-[10px] text-[var(--text-secondary)] ml-2">
              <span>by</span>
              <a href="https://phicycle.io" target="_blank" className="text-[var(--accent-color)] hover:underline ml-1">Phicycle</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.npmjs.com/package/mongoscope"
              target="_blank"
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors flex items-center gap-1"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                <path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331zM10.665 10H12v2.667h-1.335V10z" />
              </svg>
              <span>npm</span>
            </a>
            <GitHubButton />
          </div>
        </div>
      </header>

      <main className="min-h-screen bg-black relative pt-16">
        {/* Subtle Tech Pattern Background */}
        <div
          className="fixed inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--accent-color) 1px, transparent 0),
              linear-gradient(to bottom, var(--accent-color) 1px, transparent 0)
            `,
            backgroundSize: '128px 128px',
            backgroundPosition: 'center center'
          }}
        />
        <div
          className="fixed inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--accent-color) 1px, transparent 0),
              linear-gradient(to bottom, var(--accent-color) 1px, transparent 0)
            `,
            backgroundSize: '32px 32px',
            backgroundPosition: 'center center'
          }}
        />

        {/* Hero Section */}
        <section className="py-20 px-4 relative">
          <div className="max-w-6xl mx-auto text-center relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img src="/logo.svg" alt="MongoScope Logo" className="w-20 h-20 mx-auto mb-8" />
              <h1 className="text-5xl font-bold mb-6 gradient-text">
                MongoDB Analytics Made Simple
              </h1>
              <p className="text-xl text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
                Monitor your MongoDB collections with real-time analytics, performance metrics, and data quality insights.
              </p>
              <div className="text-[var(--accent-color)] mb-8 text-lg font-medium">
                100% Free and Open Source Forever
              </div>
              <div className="flex flex-col items-center gap-6">
                <div className="relative group">
                  <code className="code-text inline-flex items-center px-6">
                    <span className="mr-8">npm i mongoscope</span>
                    <button
                      onClick={handleCopy}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors"
                      aria-label="Copy to clipboard"
                    >
                      {copied ? (
                        <CheckIcon className="w-4 h-4 text-green-500" />
                      ) : (
                        <CopyIcon className="w-4 h-4" />
                      )}
                    </button>
                  </code>
                </div>
                <GitHubButton />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-color)] to-transparent opacity-20"></div>
          <div className="absolute left-1/2 -translate-x-1/2 -top-px">

          </div>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center gradient-text">
              Why Choose MongoScope?
            </h2>
            <p className="text-center text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto">
              Free, open source, and built for developers. Get enterprise-grade analytics without the enterprise price tag.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <RocketIcon className="w-8 h-8" />,
                  title: "Zero Configuration",
                  description: "Get started in minutes with automatic setup. No complex configuration or setup required."
                },
                {
                  icon: <BarChartIcon className="w-8 h-8" />,
                  title: "Code-Free Analytics",
                  description: "Comprehensive analytics and insights without writing a single line of analysis code."
                },
                {
                  icon: <StackIcon className="w-8 h-8" />,
                  title: "Real-time Performance",
                  description: "Production-ready performance with minimal overhead, designed for real-time monitoring."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="card p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="text-[var(--accent-color)] mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-[var(--text-secondary)]">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Preview Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-color)] to-transparent opacity-20"></div>
          <div className="absolute left-1/2 -translate-x-1/2 -top-px">

          </div>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center gradient-text">
              Developer-Friendly Integration
            </h2>
            <div className="text-center mb-8">
              <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                Three lines of code to get started. Designed by developers, for developers.
              </p>
            </div>
            <div className="card overflow-hidden">
              <pre>
                <code className="language-javascript">{`const { MongoScope } = require('mongoscope');

// Initialize MongoScope
const mongoScope = new MongoScope({
  mongoUrl: process.env.MONGODB_URI,
  port: 3100  // Optional, defaults to 3000
});

// Start the analytics dashboard
mongoScope.start().then(() => {
  console.log('MongoScope dashboard running on http://localhost:3100');
});`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Analytics Showcase Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-color)] to-transparent opacity-20"></div>
          <div className="absolute left-1/2 -translate-x-1/2 -top-px">

          </div>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 gradient-text">
                Comprehensive Analytics Suite
              </h2>
              <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
                From basic statistics to advanced pattern analysis, understand your data better than ever.
              </p>
            </div>

            {/* Analytics Navigation */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                {
                  title: "Collection Statistics",
                  description: "Track document counts, collection size, average document size, and index metrics in real-time.",
                  icon: <BarChartIcon className="w-6 h-6" />
                },
                {
                  title: "Time Series & Patterns",
                  description: "Analyze temporal patterns with hourly, daily, monthly, and yearly granularity.",
                  icon: <StackIcon className="w-6 h-6" />
                },
                {
                  title: "Data Quality & Distribution",
                  description: "Monitor completeness, consistency, uniqueness, and distribution patterns across fields.",
                  icon: <RocketIcon className="w-6 h-6" />
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="card p-6 cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-[var(--accent-color)] mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-[var(--text-secondary)] text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Charts Section with Browser Frame */}
            <div className="card relative mb-16 pt-6">
              {/* Browser Frame */}
              <div className="absolute top-0 left-0 w-full h-6 bg-[#1a1a1a] rounded-t-lg flex items-center px-3 gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>

              <div className="p-6">
                {/* Charts Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                  {/* Time Series Analysis */}
                  <div className="card bg-[#1a1a1a]">
                    <div className="flex justify-between items-center mb-6">
                      <h4 className="text-lg font-semibold">Time Series Analysis</h4>
                      <select className="bg-[#1a1a1a] border border-[var(--border-color)] rounded-md px-3 py-1 cursor-not-allowed opacity-80" disabled>
                        <option>Yearly</option>
                      </select>
                    </div>
                    <div className="h-[300px]">
                      <Line
                        data={{
                          labels: [
                            '17/04/2024', '04/05/2024', '10/07/2024', '14/07/2024',
                            '16/07/2024', '27/07/2024', '08/08/2024', '09/08/2024'
                          ],
                          datasets: [
                            {
                              label: 'Count',
                              data: [25, 8, 6, 3, 2, 7, 2, 1],
                              fill: true,
                              borderColor: 'rgb(0, 255, 255)',
                              backgroundColor: 'rgba(0, 255, 255, 0.1)',
                              tension: 0.4,
                              pointRadius: 4,
                              pointBackgroundColor: 'rgb(0, 255, 255)',
                            },
                          ],
                        }}
                        options={{
                          responsive: true,
                          maintainAspectRatio: false,
                          scales: {
                            x: {
                              grid: { color: 'rgba(255, 255, 255, 0.1)' },
                              ticks: { color: 'rgba(255, 255, 255, 0.7)' },
                            },
                            y: {
                              grid: { color: 'rgba(255, 255, 255, 0.1)' },
                              ticks: { color: 'rgba(255, 255, 255, 0.7)' },
                            },
                          },
                          plugins: {
                            legend: { display: false },
                          },
                          interaction: {
                            intersect: false,
                            mode: 'index',
                          },
                        }}
                      />
                    </div>
                  </div>

                  {/* Field Distribution */}
                  <div className="card bg-[#1a1a1a]">
                    <div className="flex justify-between items-center mb-6">
                      <h4 className="text-lg font-semibold">Field Distribution</h4>
                      <select className="bg-[#1a1a1a] border border-[var(--border-color)] rounded-md px-3 py-1 cursor-not-allowed opacity-80" disabled>
                        <option>height</option>
                      </select>
                    </div>
                    <div className="h-[300px]">
                      <Bar
                        data={{
                          labels: ['400', '896', '728', '1200', '1176', '460', '1196', '794', '1431', '816', '1527', '1327', '2044', '18795', '630', '637'],
                          datasets: [{
                            label: 'Count',
                            data: [53, 13, 9, 4, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                            backgroundColor: 'rgb(0, 255, 255)',
                            borderColor: 'rgb(0, 255, 255)',
                            borderWidth: 1,
                          }]
                        }}
                        options={{
                          responsive: true,
                          maintainAspectRatio: false,
                          scales: {
                            y: {
                              beginAtZero: true,
                              grid: { color: 'rgba(255, 255, 255, 0.1)' },
                              ticks: { color: 'rgba(255, 255, 255, 0.7)' },
                            },
                            x: {
                              grid: { color: 'rgba(255, 255, 255, 0.1)' },
                              ticks: { color: 'rgba(255, 255, 255, 0.7)' }
                            }
                          },
                          plugins: {
                            legend: { display: false }
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Advanced Analytics */}
                <div>
                  <h3 className="text-2xl font-bold mb-8 gradient-text">Advanced Analytics</h3>

                  {/* Data Quality Metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="card p-4">
                      <div className="text-[rgb(0, 255, 255)] text-xl font-bold mb-1">100.0%</div>
                      <div className="text-[var(--text-primary)] font-semibold text-sm mb-1">COMPLETENESS</div>
                      <div className="text-[var(--text-secondary)] text-xs">0 missing values</div>
                    </div>

                    <div className="card p-4">
                      <div className="text-[rgb(0, 255, 255)] text-xl font-bold mb-1">100.0%</div>
                      <div className="text-[var(--text-primary)] font-semibold text-sm mb-1">TYPE CONSISTENCY</div>
                      <div className="text-[var(--text-secondary)] text-xs">Expected type: int</div>
                      <div className="text-[var(--text-secondary)] text-xs">97 matching values</div>
                    </div>

                    <div className="card p-4">
                      <div className="text-[rgb(255, 99, 71)] text-xl font-bold mb-1">18.6%</div>
                      <div className="text-[var(--text-primary)] font-semibold text-sm mb-1">UNIQUENESS</div>
                      <div className="text-[var(--text-secondary)] text-xs">18 distinct values</div>
                    </div>

                    <div className="card p-4">
                      <div className="text-[var(--text-primary)] text-xl font-bold mb-1">97</div>
                      <div className="text-[var(--text-primary)] font-semibold text-sm mb-1">TOTAL RECORDS</div>
                    </div>
                  </div>

                  {/* Temporal Patterns */}
                  <div className="card bg-[#1a1a1a] p-6">
                    <h4 className="text-lg font-semibold mb-6">Temporal Patterns</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Day of Week Distribution */}
                      <div className="h-[250px]">
                        <h5 className="text-sm font-medium mb-3">Day of Week Distribution</h5>
                        <Bar
                          data={{
                            labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                            datasets: [{
                              data: [5, 5, 2, 45, 0, 5, 30],
                              backgroundColor: 'rgb(0, 255, 255)',
                              borderColor: 'rgb(0, 255, 255)',
                              borderWidth: 1,
                            }]
                          }}
                          options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            scales: {
                              y: {
                                beginAtZero: true,
                                grid: { color: 'rgba(255, 255, 255, 0.1)' },
                                ticks: { color: 'rgba(255, 255, 255, 0.7)' }
                              },
                              x: {
                                grid: { display: false },
                                ticks: { color: 'rgba(255, 255, 255, 0.7)' }
                              }
                            },
                            plugins: { legend: { display: false } }
                          }}
                        />
                      </div>

                      {/* Hour Distribution */}
                      <div className="h-[250px]">
                        <h5 className="text-sm font-medium mb-3">Hour Distribution</h5>
                        <Line
                          data={{
                            labels: ['0:00', '2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
                            datasets: [{
                              data: [0, 22, 1, 0, 2, 1, 2, 11, 5, 23, 4, 0],
                              borderColor: 'rgb(0, 255, 255)',
                              backgroundColor: 'rgba(0, 255, 255, 0.1)',
                              tension: 0.4,
                              fill: true
                            }]
                          }}
                          options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            scales: {
                              y: {
                                beginAtZero: true,
                                grid: { color: 'rgba(255, 255, 255, 0.1)' },
                                ticks: { color: 'rgba(255, 255, 255, 0.7)' }
                              },
                              x: {
                                grid: { display: false },
                                ticks: { color: 'rgba(255, 255, 255, 0.7)' }
                              }
                            },
                            plugins: { legend: { display: false } }
                          }}
                        />
                      </div>

                      {/* Monthly Distribution */}
                      <div className="h-[250px]">
                        <h5 className="text-sm font-medium mb-3">Monthly Distribution</h5>
                        <Bar
                          data={{
                            labels: ['2024-4', '2024-5', '2024-7', '2024-8', '2024-9'],
                            datasets: [{
                              data: [25, 8, 18, 10, 35],
                              backgroundColor: 'rgb(0, 255, 255)',
                              borderColor: 'rgb(0, 255, 255)',
                              borderWidth: 1,
                            }]
                          }}
                          options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            scales: {
                              y: {
                                beginAtZero: true,
                                grid: { color: 'rgba(255, 255, 255, 0.1)' },
                                ticks: { color: 'rgba(255, 255, 255, 0.7)' }
                              },
                              x: {
                                grid: { display: false },
                                ticks: { color: 'rgba(255, 255, 255, 0.7)' }
                              }
                            },
                            plugins: { legend: { display: false } }
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Visualizations Section */}
            <div className="mt-20 text-center">
              <h2 className="text-3xl font-bold mb-8 gradient-text">
                Powerful Analytics Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    title: "Basic Collection Stats",
                    description: "Monitor document count, collection size, average document size, and index metrics at a glance."
                  },
                  {
                    title: "Time Series Analysis",
                    description: "Flexible time-based analysis with hourly, daily, monthly, and yearly data points."
                  },
                  {
                    title: "Data Quality Metrics",
                    description: "Track completeness, type consistency, uniqueness rate, and overall data quality."
                  },
                  {
                    title: "Temporal Patterns",
                    description: "Analyze distribution patterns across days, hours, and months to identify usage trends."
                  },
                  {
                    title: "Outlier Detection",
                    description: "Identify anomalies with statistical analysis including standard deviation and mean comparison."
                  },
                  {
                    title: "Pattern Recognition",
                    description: "Discover common values, patterns, and correlations between different fields."
                  },
                  {
                    title: "Statistical Overview",
                    description: "Get min/max values, averages, and standard deviations for numerical fields."
                  },
                  {
                    title: "Field Distribution",
                    description: "Visualize value distributions and analyze relationships between fields."
                  },
                  {
                    title: "Key Insights",
                    description: "Automatically generated insights about your data patterns and anomalies."
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="card p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                    <p className="text-[var(--text-secondary)] text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quick Start Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-color)] to-transparent opacity-20"></div>
          <div className="absolute left-1/2 -translate-x-1/2 -top-px">

          </div>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center gradient-text">
              Get Started in Minutes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Install",
                  description: "Add MongoScope to your project with npm",
                  code: "npm i mongoscope"
                },
                {
                  step: "2",
                  title: "Configure",
                  description: "Initialize with your MongoDB connection",
                  code: `const mongoScope = new MongoScope({
  mongoUrl: 'your-mongo-url'
})`
                },
                {
                  step: "3",
                  title: "Start Analyzing",
                  description: "Access analytics dashboard",
                  code: "await mongoScope.start()"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="card p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-[var(--accent-color)] text-sm font-medium mb-2">Step {step.step}</div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-[var(--text-secondary)] text-sm mb-4">{step.description}</p>
                  <code className="block bg-[#1a1a1a] p-3 rounded-md text-sm overflow-x-auto">
                    {step.code}
                  </code>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-color)] to-transparent opacity-20"></div>
          <div className="absolute left-1/2 -translate-x-1/2 -top-px">

          </div>
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-16 gradient-text">
              Why MongoScope?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="card p-6">
                <div className="text-3xl font-bold text-[var(--accent-color)] mb-2">Simple</div>
                <div className="text-[var(--text-secondary)]">Quick Installation</div>
              </div>
              <div className="card p-6">
                <div className="text-3xl font-bold text-[var(--accent-color)] mb-2">Free</div>
                <div className="text-[var(--text-secondary)]">Open Source Forever</div>
              </div>
              <div className="card p-6">
                <div className="text-3xl font-bold text-[var(--accent-color)] mb-2">Secure</div>
                <div className="text-[var(--text-secondary)]">Runs Locally</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-color)] to-transparent opacity-20"></div>
          <div className="absolute left-1/2 -translate-x-1/2 -top-px">

          </div>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center gradient-text">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  q: "Is MongoScope suitable for production use?",
                  a: "Yes, MongoScope is designed to be lightweight and secure, making it suitable for both development and production environments."
                },
                {
                  q: "How does MongoScope handle sensitive data?",
                  a: "MongoScope runs locally in your environment and never sends data to external servers."
                },
                {
                  q: "What's the performance impact?",
                  a: "MongoScope is designed to be lightweight and runs basic analytics queries that have minimal impact on your database performance."
                },
                {
                  q: "Can I use MongoScope with my existing MongoDB setup?",
                  a: "Yes, MongoScope works with any MongoDB deployment including Atlas, self-hosted instances, and replica sets."
                }
              ].map((faq, index) => (
                <div key={index} className="card p-6">
                  <h3 className="text-lg font-bold mb-2">{faq.q}</h3>
                  <p className="text-[var(--text-secondary)]">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-color)] to-transparent opacity-20"></div>
          <div className="absolute left-1/2 -translate-x-1/2 -top-px">

          </div>
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-[var(--text-secondary)]">Product by</span>
              <a href="https://phicycle.io" target="_blank" className="text-[var(--accent-color)] hover:underline">Phicycle</a>
            </div>
            <p className="text-[var(--text-secondary)]">© 2024 Phicycle. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
} 