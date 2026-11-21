from pathlib import Path
from html import escape
from math import sin,cos,pi
base=Path(__file__).parent/'public'/'art'
base.mkdir(parents=True,exist_ok=True)
items={
'portfolio':('#18373d','#b7c6b5','PORTFOLIO','// a place for everything','browser'),
'commerce':('#4c3b30','#edcbaa','COMMERCE','the constructed storefront','shop'),
'mobile':('#263f52','#c8dae5','MOBILE STUDIES','interface and interaction','mobile'),
'dashboard':('#2c4540','#c7d8b9','ANALYTICS','signals in the data','chart'),
'writing':('#493a40','#e4d2bc','WORDS & IDEAS','poetry / essay / note','writing'),
'reading':('#3a4230','#ebdeac','THE READING ROOM','a lifetime in margins','books'),
'research':('#34364e','#c6c3e9','RESEARCH NOTES','questions worth asking','orbit'),
'talk':('#483b2b','#e6cb92','A CONVERSATION','ideas on the stage','speech'),
'library':('#4b3f35','#eee0c5','COLLECTIONS','a curated shelf','library'),
'experiment':('#243b40','#c2e8dc','EXPERIMENTS','building, breaking, learning','shapes'),
}
def visual(motif,accent):
    if motif=='browser':
        return f'''<rect x="130" y="250" width="545" height="332" rx="12" fill="#e1e8db" opacity=".85"/><rect x="130" y="250" width="545" height="41" rx="12" fill="#aab9b1"/><circle cx="162" cy="270" r="6" fill="#53756d"/><circle cx="182" cy="270" r="6" fill="#53756d"/><rect x="165" y="325" width="215" height="218" rx="3" fill="#254b4a"/><rect x="411" y="329" width="228" height="14" fill="#638981"/><rect x="411" y="361" width="191" height="7" fill="#9cab9c"/><rect x="411" y="382" width="215" height="7" fill="#9cab9c"/><rect x="411" y="440" width="130" height="32" rx="16" fill="#4b706c"/>'''
    if motif=='shop':
        return '''<rect x="195" y="305" width="418" height="264" rx="3" fill="#e1c8a8"/><path d="M179 304H629L585 226H224Z" fill="#b36b52"/><path d="M255 226L237 304M337 226L325 304M420 226V304M501 226L512 304M584 226L598 304" stroke="#e8c8a7" stroke-width="15"/><rect x="243" y="346" width="135" height="223" fill="#77594f"/><rect x="413" y="346" width="150" height="110" fill="#876659"/><rect x="437" y="375" width="99" height="58" fill="#e8c8a7"/>'''
    if motif=='mobile':
        return '''<rect x="274" y="190" width="253" height="425" rx="38" fill="#e6e4d9"/><rect x="293" y="213" width="216" height="384" rx="24" fill="#b4c8d0"/><rect x="360" y="222" width="74" height="12" rx="6" fill="#4a6272"/><circle cx="400" cy="346" r="74" fill="#577c8b"/><rect x="324" y="453" width="150" height="15" rx="7" fill="#6b8d9b"/><rect x="324" y="484" width="120" height="9" rx="4" fill="#7995a1"/><rect x="324" y="525" width="152" height="38" rx="17" fill="#385466"/>'''
    if motif=='chart':
        return '''<rect x="125" y="240" width="555" height="360" rx="5" fill="#d3dbc6"/><path d="M175 525H637M175 465H637M175 405H637M175 345H637M175 285H637" stroke="#4c685d" opacity=".3" stroke-width="3"/><path d="M180 523L265 463L343 480L429 361L502 384L575 305L633 326" fill="none" stroke="#375e57" stroke-width="15"/><circle cx="429" cy="361" r="15" fill="#e2c694"/><circle cx="575" cy="305" r="15" fill="#e2c694"/>'''
    if motif=='writing':
        return '''<rect x="223" y="203" width="365" height="459" rx="2" transform="rotate(-7 405 433)" fill="#e8d9be"/><path d="M255 290L527 256M248 335L534 300M244 377L532 341M241 425L525 391M232 476L513 439M227 518L523 477M220 561L509 520" stroke="#8b746c" stroke-width="5" opacity=".52"/><path d="M550 166L600 210L340 529L307 551L315 512Z" fill="#b79c7c" stroke="#4e413e" stroke-width="5"/>'''
    if motif=='books':
        return '''<rect x="140" y="260" width="122" height="320" fill="#8f8d65"/><rect x="268" y="226" width="103" height="354" fill="#b3a178"/><rect x="378" y="279" width="112" height="301" fill="#66806b"/><rect x="500" y="204" width="120" height="376" fill="#9d765f"/><path d="M157 289H247M157 539H247M281 254H357M281 545H357M391 308H480M391 546H480M514 233H604M514 548H604" stroke="#efe6c2" stroke-width="5"/><path d="M155 580H628" stroke="#efe6c2" stroke-width="15"/>'''
    if motif=='orbit':
        return '''<circle cx="400" cy="406" r="185" fill="none" stroke="#ddd9ef" stroke-width="8"/><ellipse cx="400" cy="406" rx="248" ry="96" fill="none" stroke="#c3c4e8" stroke-width="8" transform="rotate(-32 400 406)"/><ellipse cx="400" cy="406" rx="92" ry="250" fill="none" stroke="#9faff1" stroke-width="7" transform="rotate(-18 400 406)"/><circle cx="400" cy="406" r="52" fill="#d8d6f1"/><circle cx="585" cy="310" r="18" fill="#d6c9a1"/>'''
    if motif=='speech':
        return '''<rect x="200" y="360" width="400" height="210" fill="#caa67e"/><path d="M240 360V305A160 160 0 0 1 560 305V360" stroke="#e0c591" stroke-width="25" fill="none"/><circle cx="400" cy="261" r="60" fill="#a98562"/><rect x="339" y="417" width="122" height="14" fill="#947258"/><rect x="323" y="458" width="154" height="9" fill="#947258"/><path d="M175 588H625" stroke="#e6c28d" stroke-width="17"/>'''
    if motif=='library':
        return '''<rect x="100" y="235" width="600" height="358" fill="#b49775"/><path d="M100 360H700M100 480H700" stroke="#47392e" stroke-width="14"/><g fill="#5d6855"><rect x="131" y="257" width="35" height="99"/><rect x="182" y="269" width="54" height="87"/><rect x="247" y="251" width="24" height="105"/><rect x="299" y="260" width="61" height="96"/></g><g fill="#68554e"><rect x="401" y="250" width="32" height="106"/><rect x="455" y="257" width="52" height="99"/><rect x="524" y="247" width="28" height="109"/><rect x="567" y="259" width="81" height="97"/></g><g fill="#d4b99d"><rect x="140" y="380" width="45" height="94"/><rect x="201" y="388" width="70" height="86"/><rect x="291" y="376" width="34" height="98"/><rect x="340" y="393" width="59" height="81"/><rect x="416" y="378" width="40" height="96"/><rect x="476" y="381" width="73" height="93"/><rect x="561" y="389" width="41" height="85"/></g>'''
    return '''<rect x="190" y="250" width="215" height="215" fill="#a9ccc5" transform="rotate(-12 297 358)"/><circle cx="490" cy="365" r="136" fill="#7b9fa0"/><path d="M258 560l180-185 168 185Z" fill="#d3c7ac"/><circle cx="476" cy="350" r="32" fill="#d2ddd3"/>'''
for name,(bg,accent,title,subtitle,motif) in items.items():
    pieces=visual(motif,accent)
    svg=f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" role="img" aria-label="Illustrative artwork for {escape(title)}">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="{bg}"/><stop offset="1" stop-color="#121c20"/></linearGradient><pattern id="noise" width="28" height="28" patternUnits="userSpaceOnUse"><path d="M0 0H28M0 0V28" stroke="#fff" stroke-opacity=".07" stroke-width=".7"/></pattern></defs>
<rect width="800" height="800" fill="url(#g)"/><circle cx="790" cy="50" r="490" fill="{accent}" opacity=".08"/><rect width="800" height="800" fill="url(#noise)"/><rect x="37" y="37" width="726" height="726" rx="3" fill="none" stroke="{accent}" stroke-opacity=".3" stroke-width="2"/>
<text x="62" y="100" fill="{accent}" font-family="monospace" font-size="20" letter-spacing="5">ARCHIVE / {escape(name.upper())}</text>
{pieces}
<path d="M62 677H738" stroke="{accent}" stroke-opacity=".8" stroke-width="2"/>
<text x="62" y="716" fill="{accent}" font-family="Georgia,serif" font-size="37">{escape(title)}</text>
<text x="62" y="748" fill="{accent}" fill-opacity=".8" font-family="monospace" font-size="15" letter-spacing="2">{escape(subtitle)}</text>
</svg>'''
    (base/f'{name}.svg').write_text(svg,encoding='utf-8')
print('created',len(items),'illustrations')
