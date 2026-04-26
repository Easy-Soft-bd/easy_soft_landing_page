'use client';

import { motion } from 'motion/react';
import { useMemo } from 'react';
import { Globe2 } from 'lucide-react';
import DottedMap from '@setkernel/dotted-map-next';

type LocationPoint = {
  name: string;
  lat: number;
  lng: number;
};

type MapPin = LocationPoint & {
  x: number;
  y: number;
};

const escapeXml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

const locations = [
  { name: 'Singapore', lat: 1.3521, lng: 103.8198 },
  { name: 'Dubai', lat: 25.2048, lng: 55.2708 },
  { name: 'Saudi Arabia', lat: 24.7136, lng: 46.6753 },
  { name: 'Bangladesh', lat: 23.8103, lng: 90.4125 },
  { name: 'Thailand', lat: 13.7563, lng: 100.5018 },
  { name: 'Africa', lat: 1.2921, lng: 36.8219 },
  { name: 'Australia', lat: -33.8688, lng: 151.2093 },
  { name: 'UK', lat: 51.5074, lng: -0.1278 },
  { name: 'US', lat: 40.7128, lng: -74.0060 },
] satisfies LocationPoint[];

export function GlobalPresence() {
  const map = useMemo(() => {
    const nextMap = new DottedMap({
      height: 60,
      grid: 'diagonal',
    });

    locations.forEach((location) => {
        nextMap.addPin({
          lat: location.lat,
          lng: location.lng,
          svgOptions: {
            color: '#6D63F6',
            radius: 0.16,
          },
        });
    });

    return nextMap;
  }, []);

  const svgMap = useMemo(() => {
    return map.getSVG({
      radius: 0.22,
      color: 'rgba(148, 163, 184, 0.32)',
      backgroundColor: 'transparent',
      shape: 'circle',
    });
  }, [map]);

  const mapPins = useMemo<MapPin[]>(() => {
    return locations.map((location) => {
      const pin = map.getPin({ lat: location.lat, lng: location.lng });
      return {
        ...location,
        x: pin.x,
        y: pin.y,
      };
    });
  }, [map]);

  const mapMarkup = useMemo(() => {
    const tooltipPins = mapPins
      .map((pin) => {
        return `
          <g class="map-pin" tabindex="0" focusable="true" transform="translate(${pin.x} ${pin.y})">
            <title>${escapeXml(pin.name)}</title>
            <circle r="5.6" fill="transparent" />
            <circle r="2.2" fill="#6D63F6" />
            <circle r="1" fill="#FAFAFA" />
          </g>
        `;
      })
      .join('');

    return svgMap.replace(
      '</svg>',
      `<style>
        .map-pin { cursor: pointer; }
        .map-pin .map-tooltip {
          opacity: 0;
          transform-box: fill-box;
          transform-origin: center;
          transition: opacity 180ms ease, transform 180ms ease;
        }
        .map-pin:hover .map-tooltip,
        .map-pin:focus .map-tooltip,
        .map-pin:focus-within .map-tooltip {
          opacity: 1;
        }
      </style>
      ${tooltipPins}
      </svg>`
    );
  }, [mapPins, svgMap]);

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-brand-primary/10 blur-[180px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-secondary/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 md:mb-14"
        >
          <span className="text-brand-primary text-xs font-black uppercase tracking-[0.3em] block mb-5">
            Global Reach
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-brand-text leading-tight max-w-4xl">
            We work across <span className="text-gradient">key markets worldwide.</span>
          </h2>
          <p className="text-brand-text-muted text-lg md:text-xl leading-relaxed max-w-2xl mt-6">
            Our team supports clients and collaborations across strategic business hubs in Asia, the Middle East, Europe, Africa, Australia, and North America.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.4fr_0.9fr] gap-8 lg:gap-10 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-[32px] border border-brand-primary/10 glass-glow overflow-hidden min-h-[420px] md:min-h-[560px]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(109,99,246,0.10),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]" />
            <div className="absolute inset-0 opacity-35 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

            <div
              className="absolute inset-0 p-4 md:p-8 [&_svg]:w-full [&_svg]:h-full [&_svg]:object-contain"
              aria-label="World map with locations highlighted in the countries we work in"
              role="img"
              dangerouslySetInnerHTML={{ __html: mapMarkup }}
            />
        </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[32px] border border-brand-primary/10 glass-glow p-8 md:p-10 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary">
                <Globe2 size={22} />
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.28em] text-brand-text/30">Coverage</div>
                <div className="text-xl font-black text-brand-text">Where our team is active</div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {locations.map((point, index) => (
                <motion.div
                  key={point.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="rounded-2xl border border-brand-primary/10 bg-brand-surface/60 px-4 py-4 flex items-center justify-between gap-4"
                >
                  <div>
                    <div className="text-sm font-black text-brand-text">{point.name}</div>
                    <div className="text-[10px] font-black uppercase tracking-[0.22em] text-brand-text/30 mt-1">
                      Active projects
                    </div>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-brand-primary shadow-[0_0_0_6px_rgba(109,99,246,0.12)] animate-pulse" />
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-5 rounded-2xl border border-brand-primary/10 bg-brand-primary/5">
              <p className="text-sm md:text-base text-brand-text-muted leading-relaxed">
                We collaborate remotely across these regions and align with local time zones for smoother planning, delivery, and support.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
