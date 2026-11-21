from pathlib import Path
from html import escape
import cairosvg
base=Path(__file__).parent
out=[]
W,H=1280,720
out.append(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}">')
out.append('''<defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#11191f"/><stop offset="1" stop-color="#22292d"/></linearGradient><marker id="arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10Z" fill="#ceb895"/></marker></defs>
<rect width="1280" height="720" rx="24" fill="url(#bg)"/>
<text x="67" y="65" font-size="18" font-family="monospace" letter-spacing="3" fill="#cbb99b">LAYOUT BEHAVIOR / 01</text>
<text x="67" y="115" font-size="47" font-family="Georgia,serif" fill="#f3eee3">How the archive grows</text>
<text x="67" y="146" font-family="sans-serif" font-size="19" fill="#b4bab9">Same square tiles · asymmetric composition · new tiers extend downward, not outward</text>''')
pattern=[(0,0,3),(3,0,2),(3,2,2),(0,3,2),(2,3,1),(2,4,1),(3,4,1),(4,4,1)]
xs=[78,518,953]
y0=213
unit=22
names=[('10 entries','1 tier · 16 slots'),('18 entries','2 tiers · 32 slots'),('34 entries','3 tiers · 48 slots')]
colors=['#527f7b','#ba9472','#59748e','#897789','#9c9978','#5c8c8c','#a48a6e','#5d7590']
for stage,(x,count) in enumerate(zip(xs,[10,18,34])):
    modules=(count+15)//16
    title,subtitle=names[stage]
    out.append(f'<text x="{x}" y="194" fill="#f1ece2" font-family="Georgia,serif" font-size="28">{title}</text>')
    for m in range(modules):
        for side in range(2):
            for idx,(tx,ty,s) in enumerate(pattern):
                i=(m*8+idx)*2+side
                filled=i < count
                px=x+((side*5)+tx)*unit
                py=y0+(m*5+ty)*unit
                col=colors[(idx+side*3+m)%len(colors)] if filled else '#2a3337'
                stroke='#e1d8c4' if filled else '#526064'
                out.append(f'<rect x="{px}" y="{py}" width="{s*unit}" height="{s*unit}" fill="{col}" stroke="{stroke}" stroke-width="1.4" />')
                if filled and s>1:
                    out.append(f'<path d="M{px+10} {py+14} H{px+s*unit-12}" stroke="#f7ecdc" stroke-width="2" opacity=".55"/>')
    out.append(f'<text x="{x+5*unit}" y="{y0+modules*5*unit+33}" text-anchor="middle" fill="#d4d0c4" font-size="17" font-family="monospace">10u wide × {modules*5}u high</text>')
    bracketX=x+10*unit+11
    end=y0+modules*5*unit
    out.append(f'<path d="M{bracketX} {y0} h7 M{bracketX+7} {y0} V{end} M{bracketX} {end} h7" stroke="#bcb69e" stroke-width="2" fill="none"/>')
    out.append(f'<text x="{bracketX+20}" y="{y0+(end-y0)/2+6}" fill="#f1dec3" font-family="monospace" font-size="15">{5*modules}u</text>')
    out.append(f'<text x="{x}" y="{634}" fill="#a8b4b2" font-family="sans-serif" font-size="17">{subtitle}</text>')
for x in [415,848]:
    out.append(f'<path d="M{x} 286 H{x+51}" stroke="#ceb895" stroke-width="4" marker-end="url(#arrow)"/>')
    out.append(f'<text x="{x+25}" y="273" fill="#ceb895" text-anchor="middle" font-family="monospace" font-size="13">ADD</text>')
out.append('''<path d="M65 666 H1215" stroke="#657176" stroke-width="1"/>
<text x="67" y="690" font-family="sans-serif" font-size="16" fill="#c1c4bd">Desktop Archive Mode: width fixed at 10u. Portfolio Mode: two 5u wings hug the central page.</text>
<text x="1214" y="690" text-anchor="end" font-family="monospace" font-size="11" fill="#9da8a8">u = current square-grid unit</text>
</svg>''')
svg='\n'.join(out)
p=base/'docs'/'mosaic-growth.svg'
p.write_text(svg,encoding='utf-8')
cairosvg.svg2png(bytestring=svg.encode(),write_to=str(base/'docs'/'mosaic-growth.png'),output_width=1280,output_height=720)
(root:=Path('/mnt/data/mosaic-growth-diagram.png')).write_bytes((base/'docs'/'mosaic-growth.png').read_bytes())
Path('/mnt/data/mosaic-growth-diagram.svg').write_bytes(p.read_bytes())
print('diagram:',root,root.stat().st_size)
