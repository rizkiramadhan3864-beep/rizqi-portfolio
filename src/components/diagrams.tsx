import type { CSSProperties, ReactElement } from 'react'
import type { ProjectId } from '../content/profile'

/**
 * Hand-built SVG diagrams. They are schematic illustrations, not photographs
 * of the real systems, and are labelled as such in the UI.
 */

const C = {
  forest: '#0E3A2F',
  sage: '#A9D4BC',
  sageSoft: '#E3F3E8',
  ivory: '#F3F8F4',
  paper: '#FFFFFF',
  terracotta: '#2BA3B5',
  ink: '#526660',
}

/** Hero backdrop: field-map contours crossed by irrigation laterals with sensor nodes. */
export function FieldMap({ className = '' }: { className?: string }) {
  const contours = [
    'M-20 380 C 80 330, 160 360, 240 310 S 420 250, 540 280',
    'M-20 330 C 70 290, 150 300, 230 260 S 400 200, 540 220',
    'M-20 280 C 60 250, 140 240, 220 210 S 380 150, 540 160',
    'M-20 230 C 60 200, 130 190, 210 160 S 360 100, 540 100',
    'M-20 180 C 50 150, 120 140, 200 110 S 340 50, 540 40',
    'M60 440 C 140 400, 250 420, 330 380 S 470 340, 540 350',
  ]
  return (
    <svg viewBox="0 0 520 440" className={className} aria-hidden="true" fill="none">
      <g className="contour-draw" stroke={C.forest} strokeOpacity="0.22" strokeWidth="1">
        {contours.map((d, i) => (
          <path key={d} d={d} style={{ '--d': `${0.15 * i}s` } as CSSProperties} />
        ))}
      </g>
      {/* Irrigation mainline and laterals */}
      <g stroke={C.forest} strokeOpacity="0.35" strokeWidth="1">
        <path d="M70 40 V 420" strokeDasharray="2 5" />
        {[90, 170, 250, 330].map((y) => (
          <path key={y} d={`M70 ${y} H 480`} strokeDasharray="1 7" />
        ))}
      </g>
      {/* Sensor nodes */}
      {[
        [150, 170],
        [310, 250],
        [410, 90],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="11" stroke={C.terracotta} strokeOpacity="0.5" />
          <circle cx={x} cy={y} r="3.5" fill={C.terracotta} />
          <text x={x + 16} y={y - 10} fontFamily="IBM Plex Mono, monospace" fontSize="9" fill={C.ink}>
            SM-0{i + 1}
          </text>
        </g>
      ))}
      <text x="78" y="32" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill={C.ink} letterSpacing="1">
        PLOT A · MAINLINE
      </text>
    </svg>
  )
}

function Label({ x, y, children, anchor = 'start' }: { x: number; y: number; children: string; anchor?: 'start' | 'middle' | 'end' }) {
  return (
    <text x={x} y={y} textAnchor={anchor} fontFamily="IBM Plex Mono, monospace" fontSize="10" letterSpacing="0.6" fill={C.ink}>
      {children}
    </text>
  )
}

function IrrigationDiagram() {
  return (
    <svg viewBox="0 0 400 240" fill="none" className="h-full w-full">
      {/* Soil profile */}
      <rect x="0" y="170" width="400" height="70" fill={C.sageSoft} />
      {Array.from({ length: 40 }).map((_, i) => (
        <circle key={i} cx={(i * 37) % 400} cy={182 + ((i * 13) % 50)} r="1.4" fill={C.forest} fillOpacity="0.25" />
      ))}
      <path d="M0 170 H400" stroke={C.forest} strokeOpacity="0.4" />
      {/* Sensors */}
      {[70, 150, 230].map((x, i) => (
        <g key={x}>
          <rect x={x - 5} y={150} width="10" height="22" rx="2" fill={C.forest} />
          <path d={`M${x - 3} 172 v 22 M${x + 3} 172 v 22`} stroke={C.forest} strokeWidth="1.5" />
          <path d={`M${x} 150 C ${x} 110, 300 120, 300 98`} stroke={C.forest} strokeOpacity="0.45" className="flow-dash" />
          <Label x={x} y={222} anchor="middle">{`S${i + 1}`}</Label>
        </g>
      ))}
      {/* Controller */}
      <rect x="262" y="56" width="76" height="44" rx="6" fill={C.forest} />
      <text x="300" y="76" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="9.5" fill={C.ivory}>CONTROLLER</text>
      <text x="300" y="90" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill={C.sage}>hysteresis</text>
      {/* Pipe to sprinkler */}
      <path d="M338 78 H 360 V 140" stroke={C.terracotta} strokeWidth="2" />
      <path d="M352 140 h16 l-3 30 h-10 Z" fill={C.terracotta} />
      {[-30, -15, 0, 15, 30].map((a) => (
        <path
          key={a}
          d={`M360 140 q ${a * 1.2} -40 ${a * 2.6} -20`}
          stroke={C.terracotta}
          strokeOpacity="0.55"
          strokeDasharray="2 4"
        />
      ))}
      {/* Hysteresis band chart */}
      <g transform="translate(20 22)">
        <rect width="200" height="92" rx="6" fill={C.paper} stroke={C.forest} strokeOpacity="0.15" />
        <path d="M12 30 H188" stroke={C.terracotta} strokeDasharray="3 3" />
        <path d="M12 66 H188" stroke={C.terracotta} strokeDasharray="3 3" />
        <path d="M12 34 L 60 64 L 82 32 L 130 64 L 152 31 L 188 52" stroke={C.forest} strokeWidth="1.6" />
        <Label x={14} y={22}>upper threshold · OFF</Label>
        <Label x={14} y={82}>lower threshold · ON</Label>
      </g>
    </svg>
  )
}

function FertigationDiagram() {
  return (
    <svg viewBox="0 0 400 240" fill="none" className="h-full w-full">
      {/* Tanks */}
      {[
        { x: 24, label: 'WATER' },
        { x: 84, label: 'NUTRIENT' },
      ].map((t) => (
        <g key={t.x}>
          <rect x={t.x} y="60" width="46" height="70" rx="6" stroke={C.forest} strokeWidth="1.4" fill={C.paper} />
          <rect x={t.x + 3} y="92" width="40" height="35" rx="3" fill={t.label === 'WATER' ? C.sage : C.terracotta} fillOpacity="0.55" />
          <Label x={t.x + 23} y={150} anchor="middle">{t.label}</Label>
        </g>
      ))}
      <path d="M70 118 H 84 M130 118 H 168" stroke={C.forest} strokeWidth="1.6" />
      {/* Pump + controller */}
      <circle cx="186" cy="118" r="18" stroke={C.forest} strokeWidth="1.4" fill={C.paper} />
      <path d="M178 118 l8 -8 l8 8 l-8 8 Z" fill={C.forest} />
      <Label x={186} y={152} anchor="middle">PUMP</Label>
      <rect x="150" y="26" width="72" height="34" rx="6" fill={C.forest} />
      <text x="186" y="47" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="9.5" fill={C.ivory}>IoT NODE</text>
      <path d="M186 60 V 100" stroke={C.forest} strokeOpacity="0.5" className="flow-dash" />
      {/* Signal arcs */}
      {[10, 18, 26].map((r) => (
        <path key={r} d={`M${222 + r * 0.4} ${43 - r} a ${r} ${r} 0 0 1 0 ${r * 2}`} stroke={C.terracotta} strokeOpacity={0.9 - r / 40} transform={`translate(${r * 0.6} 0)`} />
      ))}
      {/* Drip lines to beds */}
      <path d="M204 118 H 250 V 200 M250 118 H 380 M250 160 H 380 M250 200 H 380" stroke={C.forest} strokeWidth="1.4" />
      {[118, 160, 200].map((y) =>
        [280, 320, 360].map((x) => (
          <g key={`${x}-${y}`}>
            <circle cx={x} cy={y + 6} r="2" fill={C.sage} />
            <path d={`M${x} ${y - 2} c -6 -8 -2 -16 0 -18 c 2 2 6 10 0 18`} fill={C.forest} fillOpacity="0.75" />
          </g>
        )),
      )}
      <Label x={250} y={228}>DRIP LINES · BEDS</Label>
    </svg>
  )
}

function PlantFactoryDiagram() {
  const steps = ['SEEDLING', 'TRANSPLANT', 'MAINTAIN', 'HARVEST']
  return (
    <svg viewBox="0 0 400 240" fill="none" className="h-full w-full">
      {/* Shelving rack */}
      {[40, 100, 160].map((y) => (
        <g key={y}>
          <rect x="24" y={y} width="352" height="6" rx="2" fill={C.forest} fillOpacity="0.85" />
          <rect x="30" y={y + 6} width="340" height="3" fill={C.terracotta} fillOpacity="0.35" />
        </g>
      ))}
      {steps.map((step, i) => {
        const x = 70 + i * 88
        const h = 8 + i * 7
        return (
          <g key={step}>
            {[40, 100, 160].map((y) => (
              <g key={y}>
                <path d={`M${x} ${y} v ${-h}`} stroke={C.forest} strokeWidth="1.3" />
                <path d={`M${x} ${y - h * 0.6} c -${4 + i * 3} -2 -${6 + i * 3} -${6 + i * 2} -${4 + i * 3} -${8 + i * 3} c ${3 + i} 1 ${4 + i * 3} ${4 + i} ${4 + i * 3} ${8 + i * 3}`} fill={C.sage} />
                <path d={`M${x} ${y - h * 0.85} c ${4 + i * 3} -2 ${6 + i * 3} -${6 + i * 2} ${4 + i * 3} -${8 + i * 3} c -${3 + i} 1 -${4 + i * 3} ${4 + i} -${4 + i * 3} ${8 + i * 3}`} fill={C.forest} fillOpacity="0.7" />
              </g>
            ))}
          </g>
        )
      })}
      {/* Workflow strip */}
      <path d="M44 206 H 356" stroke={C.forest} strokeOpacity="0.3" />
      {steps.map((step, i) => (
        <g key={step}>
          <circle cx={70 + i * 88} cy="206" r="5" fill={i === 3 ? C.terracotta : C.forest} />
          <Label x={70 + i * 88} y={228} anchor="middle">{step}</Label>
        </g>
      ))}
    </svg>
  )
}

function GreenhouseDiagram() {
  const readings = ['T', 'RH', 'pH', 'EC']
  return (
    <svg viewBox="0 0 400 240" fill="none" className="h-full w-full">
      {/* Greenhouse frame */}
      <path d="M40 200 V 100 Q 200 10 360 100 V 200 Z" fill={C.paper} stroke={C.forest} strokeWidth="1.4" />
      {[100, 160, 240, 300].map((x) => (
        <path key={x} d={`M${x} 200 V ${x < 200 ? 100 - (x - 40) * 0.55 + 20 : 100 - (360 - x) * 0.55 + 20}`} stroke={C.forest} strokeOpacity="0.2" />
      ))}
      <path d="M40 200 H 360" stroke={C.forest} strokeWidth="1.4" />
      {/* Melon rows */}
      {[80, 130, 180, 230, 280, 320].map((x) => (
        <g key={x}>
          <path d={`M${x} 200 V 150`} stroke={C.forest} strokeOpacity="0.5" />
          <circle cx={x} cy="186" r="8" fill={C.sage} stroke={C.forest} strokeOpacity="0.4" />
          <path d={`M${x - 5} 182 q 5 6 10 0`} stroke={C.forest} strokeOpacity="0.4" />
        </g>
      ))}
      {/* Readout panel */}
      <g transform="translate(118 66)">
        <rect width="164" height="40" rx="6" fill={C.forest} />
        {readings.map((r, i) => (
          <g key={r} transform={`translate(${14 + i * 38} 0)`}>
            <text y="18" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill={C.ivory}>{r}</text>
            <rect y="25" width="26" height="4" rx="2" fill={C.sage} fillOpacity="0.4" />
            <rect y="25" width={10 + i * 4} height="4" rx="2" fill={i % 2 ? C.terracotta : C.sage} />
          </g>
        ))}
      </g>
      <Label x={200} y={226} anchor="middle">400 m² · PREMIUM MELON</Label>
    </svg>
  )
}

const diagrams: Record<string, () => ReactElement> = {
  irrigation: IrrigationDiagram,
  fertigation: FertigationDiagram,
  'plant-factory': PlantFactoryDiagram,
  greenhouse: GreenhouseDiagram,
}

export function ProjectDiagram({ id, title }: { id: ProjectId; title: string }) {
  const Diagram = diagrams[id]
  if (!Diagram) return null
  return (
    <div role="img" aria-label={`Schematic diagram: ${title}`} className="h-full w-full">
      <Diagram />
    </div>
  )
}
