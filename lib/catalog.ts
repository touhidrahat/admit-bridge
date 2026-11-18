import expandedBD from './universities-bd.json';
import expandedDE from './universities-de.json';
import extraSubjects from './subjects-extra.json';
export type Suggestion={name:string;aliases?:string};
const list=(s:string):Suggestion[]=>s.trim().split('\n').map(r=>{const [name,aliases]=r.split('|');return {name,aliases};});
const baseBD=list(`
Green University of Bangladesh|GUB Green
University of Dhaka|DU Dhaka University
Bangladesh University of Engineering and Technology|BUET
Jahangirnagar University|JU
University of Rajshahi|RU Rajshahi University
University of Chittagong|CU Chittagong University
Khulna University|KU
Jagannath University|JnU
Islamic University, Bangladesh|IU Kushtia
Shahjalal University of Science and Technology|SUST
Khulna University of Engineering and Technology|KUET
Rajshahi University of Engineering and Technology|RUET
Chittagong University of Engineering and Technology|CUET
Dhaka University of Engineering and Technology|DUET
Bangladesh University of Professionals|BUP
Bangladesh Agricultural University|BAU
National University, Bangladesh|NU
Bangladesh Open University|BOU
North South University|NSU
BRAC University|BRACU
Independent University, Bangladesh|IUB
American International University-Bangladesh|AIUB
East West University|EWU
United International University|UIU
Daffodil International University|DIU
Ahsanullah University of Science and Technology|AUST
University of Asia Pacific|UAP
International Islamic University Chittagong|IIUC
International University of Business Agriculture and Technology|IUBAT
University of Liberal Arts Bangladesh|ULAB
University of Information Technology and Sciences|UITS
Southeast University|SEU
Eastern University|EU
Stamford University Bangladesh|SUB
State University of Bangladesh|SUB
World University of Bangladesh|WUB
Bangladesh University|BU
Bangladesh University of Business and Technology|BUBT
Primeasia University
Northern University Bangladesh|NUB
East Delta University|EDU
Premier University
Port City International University|PCIU
Metropolitan University
Leading University
Sylhet International University|SIU
Pabna University of Science and Technology|PUST
Hajee Mohammad Danesh Science and Technology University|HSTU
Mawlana Bhashani Science and Technology University|MBSTU
Noakhali Science and Technology University|NSTU
Jashore University of Science and Technology|JUST
Comilla University|CoU Cumilla
Begum Rokeya University, Rangpur|BRUR
University of Barishal|BU Barisal
Islamic University of Technology|IUT
Military Institute of Science and Technology|MIST
`);
const baseDE=list(`
Technische Universität Ilmenau|TU Ilmenau
Anhalt University of Applied Sciences|Hochschule Anhalt Köthen
Bauhaus-Universität Weimar|Bauhaus University Weimar WEM
Wismar University of Applied Sciences|Hochschule Wismar
Technical University of Munich|TUM Technische Universität München
Ludwig Maximilian University of Munich|LMU München
RWTH Aachen University|RWTH
Karlsruhe Institute of Technology|KIT
Technical University of Berlin|TU Berlin Technische Universität Berlin
Freie Universität Berlin|Free University Berlin FU
Humboldt-Universität zu Berlin|Humboldt University HU
University of Potsdam|Universität Potsdam
University of Hamburg|Universität Hamburg
Hamburg University of Technology|TUHH
Hamburg University of Applied Sciences|HAW Hamburg
University of Bremen|Universität Bremen
University of Oldenburg|Carl von Ossietzky
Leibniz University Hannover|LUH Hanover
Technische Universität Braunschweig|TU Braunschweig
Clausthal University of Technology|TU Clausthal
University of Göttingen|Georg August Universität Göttingen Goettingen
University of Kassel|Universität Kassel
Paderborn University|Universität Paderborn
Bielefeld University|Universität Bielefeld
University of Münster|Universität Münster Muenster
TU Dortmund University|Technische Universität Dortmund
Ruhr University Bochum|RUB Ruhr-Universität Bochum
University of Duisburg-Essen|UDE
University of Bonn|Universität Bonn
University of Cologne|Universität zu Köln Koeln
TH Köln University of Applied Sciences|TH Cologne Koeln
Heinrich Heine University Düsseldorf|HHU Duesseldorf
University of Siegen|Universität Siegen
University of Wuppertal|Bergische Universität
University of Koblenz|Universität Koblenz
University of Trier|Universität Trier
RPTU University Kaiserslautern-Landau|RPTU Kaiserslautern
Saarland University|Universität des Saarlandes Saarbrücken
Goethe University Frankfurt|Goethe Universität
Frankfurt University of Applied Sciences|Frankfurt UAS
Technical University of Darmstadt|TU Darmstadt
Darmstadt University of Applied Sciences|Hochschule Darmstadt h_da
Heidelberg University|Ruprecht Karls Universität
University of Mannheim|Universität Mannheim
University of Stuttgart|Universität Stuttgart
University of Tübingen|Universität Tübingen Tuebingen
University of Freiburg|Albert Ludwigs Universität
University of Konstanz|Universität Konstanz
Ulm University|Universität Ulm
University of Augsburg|Universität Augsburg
University of Passau|Universität Passau
University of Regensburg|Universität Regensburg
University of Bayreuth|Universität Bayreuth
University of Würzburg|Julius Maximilians Universität JMU Wuerzburg
Friedrich-Alexander-Universität Erlangen-Nürnberg|FAU Erlangen Nuremberg
University of Bamberg|Otto Friedrich Universität
Technical University of Applied Sciences Würzburg-Schweinfurt|THWS Wuerzburg Schweinfurt
Aalen University|Hochschule Aalen
Heilbronn University|Hochschule Heilbronn
Albstadt-Sigmaringen University|Hochschule Albstadt Sigmaringen
Schmalkalden University of Applied Sciences|Hochschule Schmalkalden
Harz University of Applied Sciences|Hochschule Harz
Magdeburg-Stendal University of Applied Sciences|Hochschule Magdeburg Stendal
Otto von Guericke University Magdeburg|OVGU
Martin Luther University Halle-Wittenberg|MLU Halle
Leipzig University|Universität Leipzig
Dresden University of Technology|TU Dresden
Chemnitz University of Technology|TU Chemnitz
Freiberg University of Mining and Technology|TU Bergakademie Freiberg
Brandenburg University of Technology Cottbus-Senftenberg|BTU Cottbus
Brandenburg University of Applied Sciences|TH Brandenburg
Friedrich Schiller University Jena|Universität Jena
University of Erfurt|Universität Erfurt
University of Rostock|Universität Rostock
University of Greifswald|Universität Greifswald
Kiel University|Christian Albrechts Universität CAU
University of Lübeck|Universität Lübeck Luebeck
Flensburg University of Applied Sciences|Hochschule Flensburg
Rhine-Waal University of Applied Sciences|Hochschule Rhein Waal Kleve Kamp Lintfort
OWL University of Applied Sciences and Arts|TH OWL
Berlin University of Applied Sciences and Technology|BHT Berliner Hochschule für Technik
HTW Berlin University of Applied Sciences|Hochschule für Technik und Wirtschaft
`);
const baseSubjects=list(`
Computer Science & Engineering|CSE Computer Science and Engineering
Computer Science|CS
Electrical & Electronic Engineering|EEE Electrical and Electronic Engineering
Electrical Engineering|EE
Electronics & Communication Engineering|ECE
Information & Communication Engineering|ICE
Information & Communication Technology|ICT
Software Engineering|SWE SE
Information Technology|IT
Mechanical Engineering|ME
Civil Engineering|CE
Industrial & Production Engineering|IPE
Textile Engineering|TE
Chemical Engineering
Architecture
Mathematics
Applied Mathematics
Physics
Chemistry
Statistics
Economics
Business Administration|BBA
Finance
Accounting
Marketing
English
Biotechnology
Microbiology
Pharmacy
Environmental Science
Agriculture
`);
export function fold(v:string){return v.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]/g,'');}
export function matchSuggestion(item:Suggestion,query:string){const q=fold(query),text=fold(`${item.name} ${item.aliases||''}`);if(!q||text.includes(q))return true;if(q.length<3)return false;let i=0;for(const c of text){if(c===q[i])i++;if(i===q.length)return true;}return false;}
export function canonical(v:string,items:Suggestion[]){const f=fold(v);return items.find(i=>fold(i.name)===f||i.aliases?.split(' ').some(a=>fold(a)===f))?.name||v.trim();}
export function germanGrade(cgpa:number,max:number,min:number){return Number.isFinite(cgpa)&&Number.isFinite(max)&&Number.isFinite(min)&&max>min&&min>=0&&cgpa>=min&&cgpa<=max?1+3*(max-cgpa)/(max-min):null;}

function mergeCatalog(...groups:Suggestion[][]):Suggestion[]{const map=new Map<string,Suggestion>();for(const item of groups.flat()){const key=fold(item.name);const old=map.get(key);if(old)old.aliases=[old.aliases,item.aliases].filter(Boolean).join(' ');else map.set(key,{...item});}return [...map.values()].sort((a,b)=>a.name.localeCompare(b.name));}
export const bdUniversities=mergeCatalog(baseBD,expandedBD);
export const germanUniversities=mergeCatalog(baseDE,expandedDE);
export const subjects=mergeCatalog(baseSubjects,extraSubjects.map(name=>({name})));
