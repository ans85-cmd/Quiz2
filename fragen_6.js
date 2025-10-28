const questions = [
  {
    "frage": "1. Was beschreibt die Generativität von Sprache am besten?",
    "a": "Grammatik ist optional",
    "b": "Sprache ist immer wörtlich",
    "c": "Endliche Mittel erlauben unendlich viele Sätze",
    "d": "Wörter haben feste, begrenzte Bedeutungen",
    "richtig": "c",
    "begruendung": "Mit endlicher Zahl von Wörtern/Morphemen lassen sich unendlich viele Sätze bilden. Klausurfalle: Morpheme nicht mit Phonemen verwechseln (Bedeutung vs. Laut)."
  },
  {
    "frage": "2. Phoneme sind…",
    "a": "Regeln der Wortstellung",
    "b": "kleinste bedeutungstragende Einheiten",
    "c": "Betonungsmuster einer Sprache",
    "d": "elementare lautliche Einheiten",
    "richtig": "d",
    "begruendung": "Phoneme (Phonem = kleinste lautliche Einheit) sind die elementaren Lautbausteine, die Bedeutungsunterschiede markieren. Klausurfalle: Phoneme nicht mit Morphemen verwechseln (Laut vs. Bedeutung)."
  },
  {
    "frage": "3. Morpheme sind…",
    "a": "Betonungsmuster",
    "b": "kleinste bedeutungstragende Einheiten",
    "c": "Vokale einer Sprache",
    "d": "Regeln der Wortstellung",
    "richtig": "b",
    "begruendung": "Morpheme (Morphem = kleinste bedeutungstragende Einheit) tragen Bedeutung (z. B. „Hund“ + Plural-morphem „-e“ → „Hunde“). Klausurfalle: Morpheme nicht mit Phonemen verwechseln (Bedeutung vs. Laut)."
  },
  {
    "frage": "4. Syntax bezieht sich auf…",
    "a": "Regeln zur Kombination von Wortklassen",
    "b": "Lautunterschiede",
    "c": "Wortbedeutungen",
    "d": "Betonungsmuster",
    "richtig": "a",
    "begruendung": "Syntax (Syntax = Regeln der Wortstellung/Kombination) legt fest, wie Wörter zu grammatisch korrekten Sätzen kombiniert werden. Klausurfalle: Syntax nicht mit Semantik/Pragmatik gleichsetzen."
  },
  {
    "frage": "5. Pragmatische Entwicklung meint…",
    "a": "Erlernen von Farbwörtern",
    "b": "Erwerb der Schreibschrift",
    "c": "Erwerb der Lautkategorien",
    "d": "Wissen, wie Sprache im sozialen Kontext verwendet wird",
    "richtig": "d",
    "begruendung": "Es geht um „zwischen den Zeilen“ – kontextangemessene Nutzung von Sprache. Klausurfalle: Pragmatik nicht mit reiner Grammatik verwechseln."
  },
  {
    "frage": "6. Welche Aussage zur Lateralisierung ist typisch?",
    "a": "Sprache ist meist in der linken Hemisphäre lokalisiert",
    "b": "Keine Hemisphärenunterschiede",
    "c": "Links nur für Lesen",
    "d": "Sprache ist überwiegend rechtshemisphärisch",
    "richtig": "a",
    "begruendung": "Bei den meisten Menschen ist Sprache links lateralisiert – auch bei Gebärdensprachen. Klausurfalle: Nicht rechtshemisphärische Dominanz annehmen – meist links."
  },
  {
    "frage": "7. „Kritische Phase“ des Spracherwerbs:",
    "a": "0–2 Monate",
    "b": "bis zur Pubertät",
    "c": "2–5 Jahre",
    "d": "ab 20 Jahren",
    "richtig": "b",
    "begruendung": "Vor der Pubertät gelingt Spracherwerb leichter und erfolgreicher. Klausurfalle: Nicht mit kurzen Zeitfenstern (Monate) verwechseln – reicht bis zur Pubertät."
  },
  {
    "frage": "8. Zentrale Evidenz für die sensible Phase stammt u. a. aus…",
    "a": "Tierexperimenten mit Katzen",
    "b": "Schreiblern-Studien",
    "c": "Emigrantenstudien (Johnson & Newport)",
    "d": "Farbdiskriminationsstudien",
    "richtig": "c",
    "begruendung": "Grammatikleistung sinkt mit steigendem Alter des Lernbeginns einer L2. Klausurfalle: Nicht mit kurzen Zeitfenstern (Monate) verwechseln – reicht bis zur Pubertät."
  },
  {
    "frage": "9. Neugeborene bevorzugen…",
    "a": "Geräusche von Maschinen",
    "b": "Nur Musik",
    "c": "Sprachlaute (inkl. Primatenlaute) gegenüber Nicht-Sprachgeräuschen",
    "d": "Stille",
    "richtig": "c",
    "begruendung": "Sehr frühe Präferenz für (menschen-)sprachnahe Laute; sie wird später verfeinert. Klausurfalle: UG ≠ Wortschatz; es geht um abstrakte Regeln."
  },
  {
    "frage": "10. Kindzentrierte Sprache (IDT) ist typischerweise…",
    "a": "langsamer, höhere Tonhöhe, viele Wiederholungen",
    "b": "nur Schriftform",
    "c": "identisch zur Erwachsenensprache",
    "d": "schneller, monotoner, komplexer",
    "richtig": "a",
    "begruendung": "Charakteristisch: hohe Tonlage, große Prosodievariation, Wiederholungen, Fragen. Klausurfalle: IDT ist häufig, aber nicht in allen Kulturen universell."
  },
  {
    "frage": "11. Funktion der IDT:",
    "a": "Schadet anhaltend",
    "b": "Verlangsamt Wortlernen",
    "c": "Ersetzt Grammatik",
    "d": "Erhöht Aufmerksamkeit und unterstützt Lernen",
    "richtig": "d",
    "begruendung": "Sie lenkt Aufmerksamkeit auf Sprache und erleichtert Wortlernen/Verarbeitung. Klausurfalle: IDT ist häufig, aber nicht in allen Kulturen universell."
  },
  {
    "frage": "12. IDT ist…",
    "a": "nur im Englischen belegt",
    "b": "weltweit häufig, aber nicht universell",
    "c": "nur in Städten vorhanden",
    "d": "in allen Kulturen identisch vorhanden",
    "richtig": "b",
    "begruendung": "Häufig, aber nicht in jeder Kultur üblich; kulturelle Kontexte variieren. Klausurfalle: IDT ist häufig, aber nicht in allen Kulturen universell."
  },
  {
    "frage": "13. Prosodie bezeichnet…",
    "a": "Syntaxfehler",
    "b": "Rhythmus, Tempo, Intonation, Melodie",
    "c": "Artikulationsstellen",
    "d": "Morpheme",
    "richtig": "b",
    "begruendung": "Prosodie (Rhythmus/Intonation/Melodie) erklärt, warum Sprachen so unterschiedlich „klingen“. Klausurfalle: Morpheme nicht mit Phonemen verwechseln (Bedeutung vs. Laut)."
  },
  {
    "frage": "14. Kategoriale Wahrnehmung heißt, dass…",
    "a": "Laute als kontinuierlich wahrgenommen werden",
    "b": "nur Vokale unterschieden werden",
    "c": "nur ab 2 Jahren auftritt",
    "d": "kontinuierliche Unterschiede in Kategorien „geschnitten“ werden",
    "richtig": "d",
    "begruendung": "Kontinuierliche Akustik → diskrete Kategorien (z. B. /b/ vs. /p/). Klausurfalle: Nicht als graduelle Wahrnehmung interpretieren – es gibt eine kategoriale Grenze."
  },
  {
    "frage": "15. Voice Onset Time (VOT) ist…",
    "a": "Zeit zwischen Luftfreilassung und Stimmlippenvibration",
    "b": "Zeit zwischen Wortende und Atemzug",
    "c": "Zeit bis zum Satzende",
    "d": "nur bei Vokalen relevant",
    "richtig": "a",
    "begruendung": "Kernparameter bei Unterscheidung stimmhafter/stimmloser Plosive. Klausurfalle: VOT nicht mit Pausenlänge im Satz verwechseln."
  },
  {
    "frage": "16. Befund mit VOT-Kontinuum:",
    "a": "Nur Japaner kategorisieren",
    "b": "Erwachsene hören graduelle Übergänge",
    "c": "Wechsel wird abrupt kategorisiert",
    "d": "Babys nicht sensibel für VOT",
    "richtig": "c",
    "begruendung": "Sowohl Erwachsene als auch Säuglinge zeigen kategoriale Grenzziehung. Klausurfalle: VOT nicht mit Pausenlänge im Satz verwechseln."
  },
  {
    "frage": "17. Habituation/Dishabituation in Säuglingsstudien zeigt…",
    "a": "Gedächtnisverlust",
    "b": "Unterscheidungsvermögen zwischen Lauten",
    "c": "motorische Störung",
    "d": "Müdigkeit",
    "richtig": "b",
    "begruendung": "Mehr Saugen/Dishabituation (Habituation = Gewöhnung; Dishabituation = Wiederanstieg der Reaktion) bei neuem Phonem (Phonem = kleinste lautliche Einheit) belegt Diskrimination. Klausurfalle: Phoneme nicht mit Morphemen verwechseln (Laut vs. Bedeutung)."
  },
  {
    "frage": "18. Wahrnehmungsverengung (perceptual narrowing) bei Sprache:",
    "a": "Sensitivität für L1-relevante Laute steigt, für nicht-L1 sinkt im 1. Jahr",
    "b": "nur bei Lesen",
    "c": "ab 10 Jahren",
    "d": "nimmt Sensitivität für L1-Laute ab",
    "richtig": "a",
    "begruendung": "Zwischen ca. 6–12 Monaten Spezialisierung auf Muttersprache. Klausurfalle: Es bedeutet Spezialisierung, nicht generellen Verlust des Hörens."
  },
  {
    "frage": "Head-Turn-Paradigma misst…",
    "a": "Atemfrequenz",
    "b": "Schreibgeschwindigkeit",
    "c": "Blickpräferenzen über Kopfdrehung zu Lauten",
    "d": "Greifgeschwindigkeit",
    "richtig": "c",
    "begruendung": "Kopfdrehungen zu Seitenlautsprechern dienen als Präferenzmaß. Klausurfalle: Blick-/Kopfdauer ist das Maß, nicht Bewegungsrichtung allein."
  },
  {
    "frage": "Wortsegmentierung bedeutet…",
    "a": "Wörter in Silben zerlegen",
    "b": "Silben zählen",
    "c": "Buchstabenlernen",
    "d": "Anfang/Ende von Wörtern im kontinuierlichen Sprachstrom erkennen",
    "richtig": "d",
    "begruendung": "Babys finden Wortgrenzen ohne hörbare „Leerzeichen“. Klausurfalle: Schriftliche Leerzeichen sind kein Auditorium-Hinweis."
  },
  {
    "frage": "Hinweis für frühe Segmentierung:",
    "a": "erst mit Schuleintritt",
    "b": "18 Monate",
    "c": "nur bei geschriebenen Wörtern",
    "d": "7–8 Monate erkennen wiederholte Wörter in Sätzen",
    "richtig": "d",
    "begruendung": "Säuglinge extrahieren wiederkehrende Wörter aus Sätzen. Klausurfalle: UG ≠ Wortschatz; es geht um abstrakte Regeln."
  },
  {
    "frage": "Statistisches Lernen im Sprachstrom:",
    "a": "Kinder ignorieren Übergangswahrscheinlichkeiten",
    "b": "Nur visuell möglich",
    "c": "Kinder nutzen Silben-Übergangswahrscheinlichkeiten, um „Wörter“ zu finden",
    "d": "Nur Erwachsene können das",
    "richtig": "c",
    "begruendung": "Hohe Übergangswahrscheinlichkeit (Übergangswahrscheinlichkeit = wie oft Silben/Laute nacheinander auftreten) innerhalb, niedrige zwischen Wörtern. Klausurfalle: Nicht mit Häufigkeit einzelner Wörter verwechseln."
  },
  {
    "frage": "Eigennamen-Effekt:",
    "a": "ab ~4,5 Monaten hören Säuglinge ihren Namen selektiv heraus",
    "b": "erst ab 2 Jahren",
    "c": "irrelevant",
    "d": "nur bei lauter Musik",
    "richtig": "a",
    "begruendung": "Eigener Name wird früh erkannt und stützt weiteres Wortlernen. Klausurfalle: UG ≠ Wortschatz; es geht um abstrakte Regeln."
  },
  {
    "frage": "Vorbereitung auf Produktion: frühe Vokalisationen (~6–8 Wo.):",
    "a": "keine soziale Reaktion",
    "b": "lange vokalische Laute („oooh/aaah“), Gurr-Dialoge",
    "c": "klare Wörter",
    "d": "nur Weinen",
    "richtig": "b",
    "begruendung": "Zunehmende motorische Kontrolle, soziale Vokal-Wechsel. Klausurfalle: Begriffe nicht aus Nachbarbereichen verwechseln; genau auf Formulierungen achten."
  },
  {
    "frage": "Plappern (babbling) beginnt typischerweise…",
    "a": "1.–2. Woche",
    "b": "erst mit 2 Jahren",
    "c": "3.–4. Monat",
    "d": "6.–10. Monat (Ø ~7 Monat)",
    "richtig": "d",
    "begruendung": "Reduplikatives CV-Plappern (Plappern = wiederholte Konsonant‑Vokal‑Silben) („bababa“) in diesem Zeitfenster. Klausurfalle: Plappern ≠ echte Wörter; auch bei Gebärden vorhanden."
  },
  {
    "frage": "Welche Laute beim frühen Plappern?",
    "a": "nur L1-Laute",
    "b": "auch nicht-muttersprachliche Laute",
    "c": "nur Vokale",
    "d": "nur Nasale",
    "richtig": "b",
    "begruendung": "Früh sind Repertoires breit, inkl. nicht-L1-typischer Laute. Klausurfalle: Plappern ≠ echte Wörter; auch bei Gebärden vorhanden."
  },
  {
    "frage": "Warum reicht „menschliches Gehirn“ allein nicht?",
    "a": "Medien genügen",
    "b": "Sprache ist genetisch fix",
    "c": "Es braucht eine menschliche sprachliche Umwelt",
    "d": "Tiere lehren Sprache",
    "richtig": "c",
    "begruendung": "Sprachinput/Interaktion sind notwendig für normalen Erwerb. Klausurfalle: Begriffe nicht aus Nachbarbereichen verwechseln; genau auf Formulierungen achten."
  },
  {
    "frage": "Nichtmenschliche Kommunikation (z. B. Affenalarme)…",
    "a": "ist reich, aber reichweitenbegrenzt",
    "b": "ist schriftlich",
    "c": "hat unbegrenzte Generativität",
    "d": "erreicht menschliche Syntax",
    "richtig": "a",
    "begruendung": "Umfang und Grammatikalität bleiben begrenzt gegenüber menschlicher Sprache. Klausurfalle: Syntax nicht mit Semantik/Pragmatik gleichsetzen."
  },
  {
    "frage": "Kanzi (Bonobo) zeigte…",
    "a": "großen, aber begrenzten Symbolgebrauch (~>350)",
    "b": "keine Zeichenverwendung",
    "c": "nur Imitation ohne Bedeutung",
    "d": "komplexe freie Syntax",
    "richtig": "a",
    "begruendung": "Beeindruckender Wortschatz, aber begrenzte syntaktische Struktur. Klausurfalle: Syntax nicht mit Semantik/Pragmatik gleichsetzen."
  },
  {
    "frage": "Gebärdensprachen (ASL etc.) sind…",
    "a": "nur Gesten ohne Grammatik",
    "b": "universell identisch",
    "c": "keine „echten“ Sprachen",
    "d": "echte Sprachen mit vergleichbarer Erwerbsdynamik",
    "richtig": "d",
    "begruendung": "Vollwertige Sprachen; Erwerb ähnelt gesprochenen Sprachen. Klausurfalle: Begriffe nicht aus Nachbarbereichen verwechseln; genau auf Formulierungen achten."
  },
  {
    "frage": "Bilingualismus führt typischerweise zu…",
    "a": "Verlernen einer Sprache",
    "b": "massiver, dauerhafter Verzögerung",
    "c": "getrennten Systemen, oft Code-Switching",
    "d": "Verwechslung der Sprachen",
    "richtig": "c",
    "begruendung": "Sprachmischungen spiegeln keine Verwirrung, sondern flexible Nutzung. Klausurfalle: Bilingualismus führt typischerweise nicht zu dauerhafter Verzögerung."
  },
  {
    "frage": "Kognitiver Vorteil bei Bilingualen (häufig berichtet):",
    "a": "schlechteres Arbeitsgedächtnis",
    "b": "bessere kognitive Kontrolle/Flexibilität",
    "c": "schlechtere Inhibition",
    "d": "keine Unterschiede",
    "richtig": "b",
    "begruendung": "Häufig bessere Leistungen in Aufgaben zur kognitiven Kontrolle. Klausurfalle: Bilingualismus führt typischerweise nicht zu dauerhafter Verzögerung."
  },
  {
    "frage": "Warum evtl. früher Fremdsprachenunterricht?",
    "a": "Grammatik ist leichter",
    "b": "Kinder sind größer",
    "c": "sensible Phase ausnutzen",
    "d": "Lehrer sind jünger",
    "richtig": "c",
    "begruendung": "Früh beginnen nutzt die hohe Lernbereitschaft vor der Pubertät. Klausurfalle: Nicht mit kurzen Zeitfenstern (Monate) verwechseln – reicht bis zur Pubertät."
  },
  {
    "frage": "Warum lernen jüngere Kinder evtl. leichter?",
    "a": "mehr Input",
    "b": "kleineres Arbeitsgedächtnis kann kleineren Phrasen zugutekommen",
    "c": "mehr Angst",
    "d": "besseres Arbeitsgedächtnis",
    "richtig": "b",
    "begruendung": "„Less is more“-Hypothese: kürzere Phrasen erleichtern Strukturentdeckung. Klausurfalle: UG ≠ Wortschatz; es geht um abstrakte Regeln."
  },
  {
    "frage": "Welche Komponente gehört NICHT zu den „Komponenten der Sprache“?",
    "a": "Semantik/Morpheme",
    "b": "Syntax",
    "c": "Phonologie/Phoneme",
    "d": "Hormonspiegel",
    "richtig": "d",
    "begruendung": "Hormonspiegel ist keine Sprachkomponente. Klausurfalle: Phoneme nicht mit Morphemen verwechseln (Laut vs. Bedeutung)."
  },
  {
    "frage": "Beispiel für semantische Veränderung durch Phonemtausch:",
    "a": "Rippe vs. Lippe",
    "b": "gehen vs. gegangen",
    "c": "Tisch vs. Stuhl",
    "d": "der vs. die",
    "richtig": "a",
    "begruendung": "/r/↔/l/-Wechsel ändert Bedeutung vollständig. Klausurfalle: Phoneme nicht mit Morphemen verwechseln (Laut vs. Bedeutung)."
  },
  {
    "frage": "Warum fällt „Nthlakapmx“ Deutschsprechern schwer auszusprechen?",
    "a": "zu viele Silben",
    "b": "fehlende Vokale",
    "c": "ungewohnte Lautkombinationen in Deutsch",
    "d": "es ist ein Fantasiewort",
    "richtig": "c",
    "begruendung": "Phonotaktiken variieren zwischen Sprachen. Klausurfalle: Begriffe nicht aus Nachbarbereichen verwechseln; genau auf Formulierungen achten."
  },
  {
    "frage": "„Wug-Test“ illustriert…",
    "a": "Generativität/Grammatikregelableitung (Pluralbildung)",
    "b": "Lesefähigkeit",
    "c": "Prosodiefehler",
    "d": "Wortschatzgröße",
    "richtig": "a",
    "begruendung": "Kinder wenden Regeln („Wugs“) auf neue Wörter an. Klausurfalle: UG ≠ Wortschatz; es geht um abstrakte Regeln."
  },
  {
    "frage": "Pragmatische Hinweise in IDT sind oft…",
    "a": "bedeutungslos",
    "b": "kulturunabhängig in Valenz (Zustimmung/Missbilligung)",
    "c": "nur schriftlich",
    "d": "nur im Deutschen",
    "richtig": "b",
    "begruendung": "Intonationsmuster für Zustimmung/Missbilligung werden kulturübergreifend verstanden. Klausurfalle: Pragmatik nicht mit reiner Grammatik verwechseln."
  },
  {
    "frage": "40. Größte Säuglingsstudie (ManyBabies) zeigt:",
    "a": "nur Buben reagieren",
    "b": "keine IDT-Präferenz",
    "c": "IDT schadet",
    "d": "starke Präferenz für IDT",
    "richtig": "d",
    "begruendung": "Meta-Evidenz für globale IDT (IDT = kindzentrierte Sprache mit hoher Tonlage/Variation)-Präferenz. Klausurfalle: IDT ist häufig, aber nicht in allen Kulturen universell."
  },
  {
    "frage": "41. Direkte soziale Interaktion beim L2-Phonemlernen (Mandarin) ist…",
    "a": "irrelevant",
    "b": "schlechter als Video",
    "c": "besser als passives Video",
    "d": "gleich",
    "richtig": "c",
    "begruendung": "Live-Interaktion fördert phonologische Lerngewinne. Klausurfalle: Phoneme nicht mit Morphemen verwechseln (Laut vs. Bedeutung)."
  },
  {
    "frage": "42. Lernen am Bildschirm mit Peer (9 Monate) vs. allein:",
    "a": "nur nachts wirksam",
    "b": "allein besser",
    "c": "egal",
    "d": "mit Peer besser",
    "richtig": "d",
    "begruendung": "Soziales Co-Viewing steigert Lernerfolg. Klausurfalle: Begriffe nicht aus Nachbarbereichen verwechseln; genau auf Formulierungen achten."
  },
  {
    "frage": "43. Welche Regel nutzen 8-Monats-Kinder beim Segmentieren im Engl./Deutsch häufig?",
    "a": "nur Endbetonung",
    "b": "Betonung oft auf erster Silbe zweisilbiger Wörter",
    "c": "keine Betonung",
    "d": "Betonung auf zweiter Silbe",
    "richtig": "b",
    "begruendung": "Trochäisches Muster hilft beim Wortfinden. Klausurfalle: Begriffe nicht aus Nachbarbereichen verwechseln; genau auf Formulierungen achten."
  },
  {
    "frage": "44. „Verteilungscharakteristik“ meint…",
    "a": "Auftretenswahrscheinlichkeiten von Laut/Folgepaaren",
    "b": "Häufigkeitsverteilung von Buchstaben in Texten",
    "c": "Sitzordnung im Klassenraum",
    "d": "Lautstärkeverteilung",
    "richtig": "a",
    "begruendung": "Übergangswahrscheinlichkeit (wie oft Silben/Laute nacheinander auftreten)en zwischen Silben. Klausurfalle: Nicht mit Häufigkeit einzelner Wörter verwechseln."
  },
  {
    "frage": "45. Beleg für frühe lexikalische Verarbeitung im Deutschen:",
    "a": "erst mit 3 Jahren",
    "b": "nur mit Schrift",
    "c": "7–8 Monate erkennen unbetonte Funktionswörter (z. B. „der“, „bei“)",
    "d": "nur in Dialekten",
    "richtig": "c",
    "begruendung": "Frühe Nutzung lexikalischer Hinweise. Klausurfalle: Begriffe nicht aus Nachbarbereichen verwechseln; genau auf Formulierungen achten."
  },
  {
    "frage": "46. Warum fallen Erwachsenen L2-Phoneme schwerer als Babys?",
    "a": "Wahrnehmungsverengung – L1 filtert irrelevante Kontraste",
    "b": "nur wegen Grammatik",
    "c": "schlechteres Gehör",
    "d": "zu wenig Motivation",
    "richtig": "a",
    "begruendung": "Nicht-L1-Kontraste werden weniger wahrgenommen. Klausurfalle: Phoneme nicht mit Morphemen verwechseln (Laut vs. Bedeutung)."
  },
  {
    "frage": "47. Welche Methode zeigt frühe Diskrimination eindrucksvoll?",
    "a": "Laufen-Zeit",
    "b": "Zeichentest",
    "c": "IQ-Test",
    "d": "Schnuller-Saugfrequenz-Paradigma",
    "richtig": "d",
    "begruendung": "Saugrate ändert sich bei neuem Laut (Dishabituation). Klausurfalle: Saugabnahme ≠ Desinteresse; es zeigt Habituation."
  },
  {
    "frage": "48. „Babysprache“ ist oft begleitet von…",
    "a": "geschlossenen Augen",
    "b": "übertriebenen Gesichtsausdrücken",
    "c": "ohne Gestik",
    "d": "starren Gesichtern",
    "richtig": "b",
    "begruendung": "Mimik ist überzeichnet und stützt die Prosodie. Klausurfalle: UG ≠ Wortschatz; es geht um abstrakte Regeln."
  },
  {
    "frage": "49. Welche Kultur spricht Babys kaum direkt an (Beispiel im Text)?",
    "a": "Kaluli/Tsimane (selten direkte Ansprache)",
    "b": "Japan",
    "c": "Deutschland",
    "d": "USA",
    "richtig": "a",
    "begruendung": "Beispiel kultureller Variation des sprachlichen Inputs. Klausurfalle: Begriffe nicht aus Nachbarbereichen verwechseln; genau auf Formulierungen achten."
  },
  {
    "frage": "50. Bilingual erzogene Säuglinge im Mutterleib…",
    "a": "bevorzugen eine Sprache",
    "b": "nur Musikpräferenz",
    "c": "zeigen gleich starke Präferenzen für beide",
    "d": "keine Präferenz",
    "richtig": "c",
    "begruendung": "Pränatale Exposition prägt Präferenzen für zwei Sprachen. Klausurfalle: Bilingualismus führt typischerweise nicht zu dauerhafter Verzögerung."
  },
  {
    "frage": "51. Frühe Worterkennung im fortlaufenden Sprechen wurde gezeigt durch…",
    "a": "Blick auf Bilder",
    "b": "EEG im Tiefschlaf",
    "c": "Griffstärke",
    "d": "Head-Turn-Präferenzen für zuvor gehörte Wörter",
    "richtig": "d",
    "begruendung": "Längere Hörzeit für bekannte Wörter. Klausurfalle: Blick-/Kopfdauer ist das Maß, nicht Bewegungsrichtung allein."
  },
  {
    "frage": "52. Warum hilft der eigene Name beim Wortlernen?",
    "a": "ist lang",
    "b": "dient als Anker/Marker in Sätzen",
    "c": "hat besondere Phoneme",
    "d": "wird selten gesagt",
    "richtig": "b",
    "begruendung": "Co-Vorkommen mit Zielworten erleichtert deren Erwerb. Klausurfalle: Phoneme nicht mit Morphemen verwechseln (Laut vs. Bedeutung)."
  },
  {
    "frage": "53. Sprachsysteme bei Bilingualen:",
    "a": "täglich wechselnd",
    "b": "ein vermischtes System",
    "c": "keine Systeme",
    "d": "zwei getrennte Systeme, flexible Umschaltung",
    "richtig": "d",
    "begruendung": "Evidenz spricht für getrennte, koordinierte Systeme. Klausurfalle: Bilingualismus führt typischerweise nicht zu dauerhafter Verzögerung."
  },
  {
    "frage": "54. „Code-Switching“ ist…",
    "a": "normaler Aspekt zweisprachiger Kommunikation",
    "b": "nur bei Erwachsenen",
    "c": "Fehler",
    "d": "verboten",
    "richtig": "a",
    "begruendung": "Oft funktional (Lücken füllen, Kontextwechsel). Klausurfalle: Code‑Switching ist normal, kein Fehler."
  },
  {
    "frage": "55. Warum unterstützen zweisprachige Bildungssettings L2/L1?",
    "a": "sie vermeiden Grammatik",
    "b": "sie verhindern Code-Switching",
    "c": "sie stärken beide Sprachen parallel",
    "d": "sie reduzieren Wortschatz",
    "richtig": "c",
    "begruendung": "Forschung stützt frühzeitige, systematische Förderung beider Sprachen. Klausurfalle: Code‑Switching ist normal, kein Fehler."
  },
  {
    "frage": "56. Kinder verstehen typischerweise…",
    "a": "gar nichts",
    "b": "viel mehr als sie produzieren",
    "c": "weniger als sie sagen",
    "d": "gleich viel",
    "richtig": "b",
    "begruendung": "Sprachverstehen liegt vor Sprachproduktion. Klausurfalle: Begriffe nicht aus Nachbarbereichen verwechseln; genau auf Formulierungen achten."
  },
  {
    "frage": "57. Beispiel „Klaus liebt Anna“ vs. „Anna liebt Klaus“ illustriert…",
    "a": "Syntax (Wortstellung)",
    "b": "Phonologie",
    "c": "Pragmatik",
    "d": "Prosodie",
    "richtig": "a",
    "begruendung": "Wortreihenfolge trägt Bedeutungsunterschiede. Klausurfalle: Syntax nicht mit Semantik/Pragmatik gleichsetzen."
  },
  {
    "frage": "58. Warum sind Tier-„Sprachen“ begrenzt?",
    "a": "zu laute Umgebung",
    "b": "keine Kommunikation",
    "c": "fehlen syntaktisch generative Strukturen",
    "d": "kein Gehör",
    "richtig": "c",
    "begruendung": "Training zeigt Symbole, aber kaum regelgeleitete Syntax. Syntax = Regeln der Wortstellung/Kombination. Klausurfalle: Syntax nicht mit Semantik/Pragmatik gleichsetzen."
  },
  {
    "frage": "59. Frühe linke Lateralisierung zeigt sich…",
    "a": "erst in der Pubertät",
    "b": "nur bei Männern",
    "c": "nur beim Lesen",
    "d": "bereits bei Säuglingen in sprachbezogenen Antworten",
    "richtig": "d",
    "begruendung": "Bildgebende Befunde belegen frühe Linksdominanz. Klausurfalle: Nicht rechtshemisphärische Dominanz annehmen – meist links."
  },
  {
    "frage": "60. Warum sind die „Wolfskind“-Fälle keine eindeutige Evidenz allein?",
    "a": "zu modern",
    "b": "Konfundierungen (allg. Deprivation, Entwicklungsstörungen)",
    "c": "nur männliche Kinder",
    "d": "zu viele Daten",
    "richtig": "b",
    "begruendung": "Andere Faktoren außer fehlendem Sprachinput könnten Defizite erklären. Klausurfalle: Begriffe nicht aus Nachbarbereichen verwechseln; genau auf Formulierungen achten."
  },
  {
    "frage": "61. Johnson & Newport (1989): Beste Grammatikleistungen bei…",
    "a": "L2-Beginn < 7 Jahre",
    "b": "L2-Beginn 17–39",
    "c": "L2-Beginn 11–15",
    "d": "unabhängig vom Beginn",
    "richtig": "a",
    "begruendung": "Früher Beginn ≈ Muttersprachlerniveau. Klausurfalle: Begriffe nicht aus Nachbarbereichen verwechseln; genau auf Formulierungen achten."
  },
  {
    "frage": "62. Hartshorne et al. (2018) fanden…",
    "a": "Verbesserung im Alter",
    "b": "spätere Verschlechterung (Ende Adoleszenz)",
    "c": "nur Wortschatz-Effekte",
    "d": "keinen Alters-Effekt",
    "richtig": "b",
    "begruendung": "Onlinedaten deuten auf spätere Sensitivitätsgrenze – methodische Unterschiede. Klausurfalle: Begriffe nicht aus Nachbarbereichen verwechseln; genau auf Formulierungen achten."
  },
  {
    "frage": "63. Warum Videolernen < Live-Interaktion?",
    "a": "Licht stört",
    "b": "Ton ist schlechter",
    "c": "Babys mögen keine Bildschirme",
    "d": "soziale/aufmerksame Kopplung fördert phonologisches Mapping",
    "richtig": "d",
    "begruendung": "Soziale Kontingenz fördert Lernen. Klausurfalle: Begriffe nicht aus Nachbarbereichen verwechseln; genau auf Formulierungen achten."
  },
  {
    "frage": "64. Frühe Vokalisationen bewirken u. a.:",
    "a": "Lärmgefahr",
    "b": "Sprachverlust",
    "c": "mehr motorische Kontrolle + soziale Dialoge",
    "d": "weniger soziale Reaktionen",
    "richtig": "c",
    "begruendung": "Kind lernt Kontrolle und Effekte auf andere. Klausurfalle: Begriffe nicht aus Nachbarbereichen verwechseln; genau auf Formulierungen achten."
  },
  {
    "frage": "65. Babys nutzen beim Segmentieren NICHT:",
    "a": "Buchstabierregeln",
    "b": "Übergangswahrscheinlichkeiten",
    "c": "Betonungsmuster",
    "d": "eigene Namen",
    "richtig": "a",
    "begruendung": "Buchstabierregeln gehören zur Schrift, nicht zum auditiven Segmentieren. Klausurfalle: Nicht mit Häufigkeit einzelner Wörter verwechseln."
  },
  {
    "frage": "66. Warum ist statistisches Lernen so beeindruckend?",
    "a": "nur mit Belohnung",
    "b": "erfordert Jahre",
    "c": "nur mit Musik",
    "d": "gelingt nach Minuten Input",
    "richtig": "d",
    "begruendung": "Schon 2 Minuten Kunstwortstrom genügen für Effekte. Klausurfalle: Begriffe nicht aus Nachbarbereichen verwechseln; genau auf Formulierungen achten."
  },
  {
    "frage": "67. Welche Aussage zum bilingualen Wortschatz ist korrekt?",
    "a": "starke Verzögerung",
    "b": "dauerhaft kleiner in Summe",
    "c": "anfänglich verteilt über zwei Sprachen, Gesamtverlauf ähnlich",
    "d": "keine frühen Wörter",
    "richtig": "c",
    "begruendung": "Anfangs leichte Verzögerungen in jeder Sprache möglich, Gesamtkompetenz wächst normal. Klausurfalle: Bilingualismus führt typischerweise nicht zu dauerhafter Verzögerung."
  },
  {
    "frage": "68. Funktion von Funktionswörtern (z. B. „der“, „bei“) für Babys:",
    "a": "nur Schrift",
    "b": "dienen als segmentierende Marker",
    "c": "nur Dialekt",
    "d": "ignoriert",
    "richtig": "b",
    "begruendung": "Erkannt und genutzt zur Strukturierung. Klausurfalle: Begriffe nicht aus Nachbarbereichen verwechseln; genau auf Formulierungen achten."
  },
  {
    "frage": "69. „Perceptual narrowing“ bei Vokalen tritt…",
    "a": "nur im Schlaf",
    "b": "nie",
    "c": "früher als bei Konsonanten",
    "d": "später als bei Konsonanten",
    "richtig": "c",
    "begruendung": "Für Vokale zeigen sich Veränderungen noch etwas früher. Klausurfalle: Es bedeutet Spezialisierung, nicht generellen Verlust des Hörens."
  },
  {
    "frage": "70. Warum ist „Nthlakapmx“ im Text wichtig?",
    "a": "Beispiel für Prosodie",
    "b": "Beispiel für Semantik",
    "c": "Beispiel für statistisches Lernen",
    "d": "Beispiel für nicht-L1-Kontraste, die Babys anfangs noch hören",
    "richtig": "d",
    "begruendung": "Babys diskriminieren Kontraste, die Erwachsene nicht mehr unterscheiden. Klausurfalle: Begriffe nicht aus Nachbarbereichen verwechseln; genau auf Formulierungen achten."
  },
  {
    "frage": "71. „Sprachmischung“ (Code-Mixing) bei Eltern/Kindern…",
    "a": "normal und häufig",
    "b": "selten",
    "c": "verboten",
    "d": "pathologisch",
    "richtig": "a",
    "begruendung": "In bilingualen Familien üblich; kein Zeichen von Verwirrung. Klausurfalle: Bilingualismus führt typischerweise nicht zu dauerhafter Verzögerung."
  },
  {
    "frage": "72. Warum sind Computermodelle bislang schwach im Segmentieren?",
    "a": "fehlende Rechenleistung",
    "b": "echte Sprache ist komplex; Babys nutzen vielfältige Hinweise gleichzeitig",
    "c": "Babys können mehr hören",
    "d": "Technikverbot",
    "richtig": "b",
    "begruendung": "Multikue-Integration macht den Unterschied. Klausurfalle: Begriffe nicht aus Nachbarbereichen verwechseln; genau auf Formulierungen achten."
  },
  {
    "frage": "73. Kindzentrierte Sprache klingt für Babys oft „fröhlich“. Effekt?",
    "a": "macht ängstlich",
    "b": "verhindert Lernen",
    "c": "senkt Präferenz",
    "d": "Teil der Erklärung, warum IDT bevorzugt wird",
    "richtig": "d",
    "begruendung": "Affekt trägt zur Attraktivität von IDT (IDT = kindzentrierte Sprache mit hoher Tonlage/Variation) bei. Klausurfalle: IDT ist häufig, aber nicht in allen Kulturen universell."
  },
  {
    "frage": "Welche Aussage zur „menschlichen Umwelt“ ist falsch?",
    "a": "Notwendig für Sprachentwicklung",
    "b": "Unwichtig bei Gebärdensprachen",
    "c": "Varianz zwischen Kulturen",
    "d": "Fast überall verfügbar",
    "richtig": "b",
    "begruendung": "Auch Gebärdensprachen erfordern sozialen Input. Klausurfalle: Begriffe nicht aus Nachbarbereichen verwechseln; genau auf Formulierungen achten."
  },
  {
    "frage": "„Active child“-Thema in Kapitel 6 zeigt…",
    "a": "Kinder sind passiv",
    "b": "nur Imitation",
    "c": "Kinder lenken aktiv Aufmerksamkeit/Interaktion und lernen so Sprache",
    "d": "nur genetisch",
    "richtig": "c",
    "begruendung": "Aktive Teilnahme an Kommunikation treibt Erwerb. Klausurfalle: Begriffe nicht aus Nachbarbereichen verwechseln; genau auf Formulierungen achten."
  },
  {
    "frage": "74. Warum gilt „Sprache ist universal“?",
    "a": "nahezu alle Menschen erwerben in der Kindheit Sprache",
    "b": "nur mit Schrift",
    "c": "nur in Europa",
    "d": "nur in Städten",
    "richtig": "a",
    "begruendung": "Sprachkompetenz entwickelt sich weltweit – gesprochene oder gebärdete Sprache. Klausurfalle: Begriffe nicht aus Nachbarbereichen verwechseln; genau auf Formulierungen achten."
  },
  {
    "frage": "75. Welche Ebene ist NICHT Teil der hierarchischen Sprachstruktur laut Text?",
    "a": "Gene → Wörter",
    "b": "Wörter → Sätze",
    "c": "Sätze → Geschichten/Gespräche",
    "d": "Lautpegel → Wörter",
    "richtig": "a",
    "begruendung": "Gene sind keine Ebene der Sprachhierarchie, sondern biologisch. Klausurfalle: Begriffe nicht aus Nachbarbereichen verwechseln; genau auf Formulierungen achten."
  },
  {
    "frage": "76. Warum ist „Rico“ (Hund) im Text?",
    "a": "sprach Englisch",
    "b": "zeigte Wortlernen mit Einschränkungen",
    "c": "beherrschte Syntax wie Kinder",
    "d": "konnte lesen",
    "richtig": "b",
    "begruendung": "Lernte >200 Wörter, aber keine volle Sprachkompetenz. Klausurfalle: Syntax nicht mit Semantik/Pragmatik gleichsetzen."
  },
  {
    "frage": "77. „Alex“ (Papagei) lernte…",
    "a": "über Kinder hinausgehende Englischkompetenz",
    "b": "nur Geräusche",
    "c": "Grammatik wie Erwachsene",
    "d": "elementare Produktion/Verständnis – nicht über Kleinkindniveau",
    "richtig": "d",
    "begruendung": "Kompetenzen blieben auf frühem Niveau. Klausurfalle: Begriffe nicht aus Nachbarbereichen verwechseln; genau auf Formulierungen achten."
  },
  {
    "frage": "78. Praxis-Implikation der sensiblen Phase:",
    "a": "L2 erst in Oberstufe",
    "b": "keine Konsequenzen",
    "c": "frühe Einführung von Gebärdensprache bei gehörlosen Kindern",
    "d": "nur Schrifttraining",
    "richtig": "c",
    "begruendung": "Früher Zugang verbessert Outcomes deutlich. Klausurfalle: UG ≠ Wortschatz; es geht um abstrakte Regeln."
  },
  {
    "frage": "79. Sprachverstehen vs. -produktion im Alter 5:",
    "a": "Verständnis < Produktion",
    "b": "keine Grammatik",
    "c": "Grammatische Produktion oft schon erwachsenennah, Wortschatz noch im Aufbau",
    "d": "Produktion weit voraus",
    "richtig": "c",
    "begruendung": "Sätze meist korrekt; Lexikon/Pragmatik reifen weiter. Klausurfalle: Pragmatik nicht mit reiner Grammatik verwechseln."
  },
  {
    "frage": "80. Warum ist „trochäisches Muster“ für Deutsch wichtig?",
    "a": "nur bei Namen",
    "b": "Wörter enden stets betont",
    "c": "nur schriftlich",
    "d": "Betonung häufig auf erster Silbe – Hinweis für Wortanfänge",
    "richtig": "d",
    "begruendung": "Hilft bei Segmentierung im Hörstrom. Klausurfalle: Begriffe nicht aus Nachbarbereichen verwechseln; genau auf Formulierungen achten."
  },
  {
    "frage": "81. Welche Messgröße zeigt Präferenz im Head-Turn-Setup?",
    "a": "Dauer des Blicks zur Seite (Stimulus wird länger gespielt)",
    "b": "Puls",
    "c": "Schreidauer",
    "d": "Hautleitwert",
    "richtig": "a",
    "begruendung": "Hördauer über Blick/Kopfdrehung ist Präferenzmaß. Klausurfalle: Blick-/Kopfdauer ist das Maß, nicht Bewegungsrichtung allein."
  },
  {
    "frage": "82. Warum ist „less-is-more“ paradox?",
    "a": "mehr Wörter = schlechter",
    "b": "begrenztes Arbeitsgedächtnis erleichtert Strukturentdeckung",
    "c": "nur bei Erwachsenen",
    "d": "weniger Input = weniger Lernen",
    "richtig": "b",
    "begruendung": "Kürzere „Portionen“ offenbaren Regelmäßigkeiten leichter. Klausurfalle: Begriffe nicht aus Nachbarbereichen verwechseln; genau auf Formulierungen achten."
  },
  {
    "frage": "83. Welche Aussage zu IDT ist falsch?",
    "a": "langsamere Rede",
    "b": "deutliche Vokalartikulation",
    "c": "geringere Tonhöhenvariabilität",
    "d": "viele Wiederholungen",
    "richtig": "c",
    "begruendung": "IDT (IDT = kindzentrierte Sprache mit hoher Tonlage/Variation) hat größere Tonhöhenvariabilität. Klausurfalle: IDT ist häufig, aber nicht in allen Kulturen universell."
  },
  {
    "frage": "84. „Präferenz für IDT“ bei Babys ist…",
    "a": "nur in einer Studie gezeigt",
    "b": "weltweit repliziert",
    "c": "nur im Labor",
    "d": "nur bei Mädchen",
    "richtig": "b",
    "begruendung": "Große internationale Stichproben bestätigen den Effekt. Klausurfalle: IDT ist häufig, aber nicht in allen Kulturen universell."
  },
  {
    "frage": "85. Warum sind Betonungsmuster hilfreich?",
    "a": "zeigen Bedeutungslosigkeit",
    "b": "nur in Lyrik",
    "c": "signalisieren Satzende",
    "d": "markieren oft Wortanfänge",
    "richtig": "d",
    "begruendung": "Rhythmische Hinweise stützen Segmentierung. Klausurfalle: Begriffe nicht aus Nachbarbereichen verwechseln; genau auf Formulierungen achten."
  },
  {
    "frage": "86. Welche Rolle spielt die soziale Responsivität der Bezugsperson?",
    "a": "mehr kontingente Reaktion → komplexere Vokalisationen beim Kind",
    "b": "senkt Vokalisationen",
    "c": "keine",
    "d": "stört Lernen",
    "richtig": "a",
    "begruendung": "Feinfühliges Antworten fördert Lautrepertoire. Klausurfalle: UG ≠ Wortschatz; es geht um abstrakte Regeln."
  },
  {
    "frage": "87. Warum ist „Sprachinput“ bei Kulturen ohne IDT nicht null?",
    "a": "Kinder sind taub",
    "b": "passive Teilhabe an Gesprächen liefert Input",
    "c": "keine Menschen",
    "d": "nur Geräusche",
    "richtig": "b",
    "begruendung": "Kinder hören Sprache auch ohne direkte Ansprache. Klausurfalle: IDT ist häufig, aber nicht in allen Kulturen universell."
  },
  {
    "frage": "88. Warum ist die Emigranten-Evidenz stark?",
    "a": "nur kurze Tests",
    "b": "alle gleich alt",
    "c": "natürliche Variation des Startalters bei hoher Exposition",
    "d": "nur Vokab",
    "richtig": "c",
    "begruendung": "Alter-bei-Beginn erklärt Grammatikkompetenz unabhängig von Expositionsdauer. Klausurfalle: Begriffe nicht aus Nachbarbereichen verwechseln; genau auf Formulierungen achten."
  },
  {
    "frage": "89. „Fast mapping“ bezeichnet…",
    "a": "langsames Wortlernen über Wochen",
    "b": "Auswendiglernen von Wörterlisten",
    "c": "Lesenlernen im Vorschulalter",
    "d": "schnelles Herstellen einer Wort-Bedeutungs-Zuordnung nach minimalem Input",
    "richtig": "d",
    "begruendung": "Kinder können neue Wort-Referent-Zuordnungen nach sehr wenig Exposition bilden. Klausurfalle: Fast mapping ≠ dauerhaftes, vollständiges Lernen ohne Kontext."
  },
  {
    "frage": "90. Welcher Heuristik folgen Kinder häufig beim Benennen neuer Gegenstände?",
    "a": "Whole-object-Bias (Wort bezieht sich auf das ganze Objekt)",
    "b": "Funktions-Bias ausschließlich",
    "c": "Material-Bias ausschließlich",
    "d": "Teile-Bias",
    "richtig": "a",
    "begruendung": "Neue Wörter werden zunächst dem ganzen Objekt zugeschrieben, nicht Teilen/Eigenschaften. Klausurfalle: Neues Wort bezieht sich nicht automatisch auf Teil/Farbe."
  }
];

