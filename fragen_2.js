const questions = [
  {
    frage: "Wann beginnt die pränatale Entwicklung?",
    a: "Mit der Einnistung",
    b: "Mit der Befruchtung",
    c: "Mit der Geburt",
    d: "Mit der Bildung der Plazenta",
    richtig: "b",
    begruendung: "Beginn der Entwicklung: Verschmelzung von Ei- und Samenzelle."
  },
  {
    frage: "Wie viele Chromosomen enthält eine Keimzelle?",
    a: "23",
    b: "46",
    c: "22",
    d: "24",
    richtig: "a",
    begruendung: "Gameten sind haploid, besitzen also nur 23 Chromosomen."
  },
  {
    frage: "Wie nennt man die spezielle Zellteilung, bei der Gameten entstehen?",
    a: "Mitose",
    b: "Meiose",
    c: "Apoptose",
    d: "Epigenese",
    richtig: "b",
    begruendung: "Meiose halbiert den Chromosomensatz (Reifeteilung)."
  },
  {
    frage: "Was bedeutet „Epigenese“?",
    a: "Vorformung aller Organe",
    b: "Zufällige Mutation",
    c: "Herausbildung neuer Strukturen im Verlauf der Entwicklung",
    d: "Absterben von Zellen",
    richtig: "c",
    begruendung: "Aristoteles: Entwicklung entsteht schrittweise, nicht durch Präformation."
  },
  {
    frage: "Welche Struktur verhindert das Vermischen von mütterlichem und fötalem Blut?",
    a: "Fruchtblase",
    b: "Plazenta",
    c: "Nabelschnur",
    d: "Chorion",
    richtig: "b",
    begruendung: "Plazenta ist semipermeabel – erlaubt Stoffaustausch, aber kein Blutkontakt."
  },
  {
    frage: "Was versteht man unter einer Blastozyste?",
    a: "Keimblase aus Zellen mit innerer Zellmasse",
    b: "Zygote nach 12 Stunden",
    c: "Fötus im 3. Monat",
    d: "Neuralrohr",
    richtig: "a",
    begruendung: "Ab Tag 4 nach Befruchtung bildet sich die Blastozyste mit Embryoblast."
  },
  {
    frage: "Wann erfolgt typischerweise die Einnistung (Nidation)?",
    a: "Nach 1 Tag",
    b: "Nach 4 Tagen",
    c: "Nach 7 Tagen",
    d: "Nach 14 Tagen",
    richtig: "c",
    begruendung: "Etwa am Ende der 1. Woche nistet sich die Zygote in die Gebärmutter ein."
  },
  {
    frage: "Was entsteht aus der inneren Zellmasse?",
    a: "Plazenta",
    b: "Embryo",
    c: "Chorion",
    d: "Amnion",
    richtig: "b",
    begruendung: "Der Embryoblast entwickelt sich zum eigentlichen Embryo."
  },
  {
    frage: "Welche drei Keimblätter entstehen bei der Differenzierung?",
    a: "Ektoderm, Mesoderm, Entoderm",
    b: "Endoderm, Exoderm, Periderm",
    c: "Neuroderm, Dermis, Epidermis",
    d: "Chorion, Amnion, Plazenta",
    richtig: "a",
    begruendung: "Diese drei Schichten bilden alle späteren Organe."
  },
  {
    frage: "Was entsteht aus dem Ektoderm?",
    a: "Muskeln und Knochen",
    b: "Verdauungssystem",
    c: "Nervensystem und Haut",
    d: "Kreislaufsystem",
    richtig: "c",
    begruendung: "Oberstes Keimblatt bildet Haut, Sinne, Nervensystem."
  },
  {
    frage: "Wie nennt man den programmierten Zelltod?",
    a: "Mutation",
    b: "Mitose",
    c: "Apoptose",
    d: "Differenzierung",
    richtig: "c",
    begruendung: "Apoptose ermöglicht z. B. die Trennung der Finger."
  },
  {
    frage: "Welche Hormone steuern die Geschlechtsentwicklung?",
    a: "Östrogene",
    b: "Androgene",
    c: "Serotonine",
    d: "Adrenaline",
    richtig: "b",
    begruendung: "Androgene (z. B. Testosteron) führen zur Ausbildung männlicher Genitalien."
  },
  {
    frage: "Was bezeichnet „Zelldifferenzierung“?",
    a: "Zellteilung",
    b: "Spezialisierung von Zellen auf bestimmte Funktionen",
    c: "Bildung der Plazenta",
    d: "Wanderung der Zellen",
    richtig: "b",
    begruendung: "Stammzellen entwickeln sich zu Muskel-, Nerven- etc. Zellen."
  },
  {
    frage: "Wann spricht man von einem Embryo?",
    a: "Erste zwei Wochen",
    b: "3.–8. Schwangerschaftswoche",
    c: "9.–12. Woche",
    d: "Nach der Geburt",
    richtig: "b",
    begruendung: "Bis zur 8. Woche heißt der Organismus „Embryo“, danach „Fötus“."
  },
  {
    frage: "Wie nennt man die Wanderung der Zellen im Embryo?",
    a: "Zellmigration",
    b: "Zellbewegung",
    c: "Zellrotation",
    d: "Zelldrift",
    richtig: "a",
    begruendung: "Zellen wandern z. B. von tieferen zu äußeren Hirnschichten."
  },
  {
    frage: "Woraus besteht die Nabelschnur?",
    a: "Muskelgewebe",
    b: "Blutgefäße in Bindegewebe",
    c: "Nervenstränge",
    d: "Fettschicht",
    richtig: "b",
    begruendung: "Drei Gefäße verbinden Fötus und Plazenta."
  },
  {
    frage: "Was schützt den Fötus vor Stößen und Temperatur?",
    a: "Fruchtblase",
    b: "Nabelschnur",
    c: "Chorion",
    d: "Amnionhaut",
    richtig: "a",
    begruendung: "Fruchtwasser wirkt als Schutz- und Dämpfungsmedium."
  },
  {
    frage: "Wie bezeichnet man die Entwicklung vom Kopf zum Schwanz?",
    a: "Kaudozephale Entwicklung",
    b: "Zephalokaudale Entwicklung",
    c: "Laterale Entwicklung",
    d: "Distoproximale Entwicklung",
    richtig: "b",
    begruendung: "Körperregionen nahe am Kopf reifen früher."
  },
  {
    frage: "Wann entstehen die Arm- und Beinknospen?",
    a: "2. Woche",
    b: "4. Woche",
    c: "6. Woche",
    d: "8. Woche",
    richtig: "b",
    begruendung: "Erste Gliedmaßenanlagen sichtbar in Woche 4."
  },
  {
    frage: "Ab wann hat der Fötus eine Überlebenschance außerhalb der Gebärmutter?",
    a: "Ab 20 Wochen",
    b: "Ab 24 Wochen",
    c: "Ab 28 Wochen",
    d: "Ab 32 Wochen",
    richtig: "c",
    begruendung: "Mit 28 Wochen sind Lunge und Gehirn ausreichend entwickelt."
  },
{
    frage: "Wann beginnen erste Bewegungen?",
    a: "3.–4. Woche",
    b: "5.–6. Woche",
    c: "10.–12. Woche",
    d: "20. Woche",
    richtig: "b",
    begruendung: "Ab Woche 5 treten spontane Bewegungen auf."
  },
  {
    frage: "Was ist einer der frühesten Reflexe?",
    a: "Atmung",
    b: "Schluckauf",
    c: "Lächeln",
    d: "Greifen",
    richtig: "b",
    begruendung: "Auftreten ab der 7. Woche, vermutlich Übung für spätere Funktionen."
  },
  {
    frage: "Was übt der Fötus durch Schlucken von Fruchtwasser?",
    a: "Atmung",
    b: "Verdauung",
    c: "Gleichgewicht",
    d: "Saugen",
    richtig: "b",
    begruendung: "Trägt zur Reifung des Verdauungstrakts und Gaumens bei."
  },
  {
    frage: "Wann übt der Fötus Atmungsbewegungen?",
    a: "Ab 5 Wochen",
    b: "Ab 10 Wochen",
    c: "Erst bei Geburt",
    d: "Nur bei Frühgeburten",
    richtig: "b",
    begruendung: "„Fötales Atmen“: rhythmische Brustkorbbewegung ab Woche 10."
  },
  {
    frage: "Welche Sinnesmodalität ist im Mutterleib am stärksten aktiviert?",
    a: "Sehen",
    b: "Hören",
    c: "Schmecken",
    d: "Fühlen",
    richtig: "b",
    begruendung: "Herz-, Blut- und Verdauungsgeräusche dominieren (~70–95 dB)."
  },
  {
    frage: "Wann kann der Fötus visuelle Reize unterscheiden?",
    a: "Nie",
    b: "Erst nach der Geburt",
    c: "Im dritten Trimester",
    d: "Ab Woche 10",
    richtig: "c",
    begruendung: "Studien mit Lichtmustern zeigen Gesichtspräferenzen ab 7. Monat."
  },
  {
    frage: "Welche Geschmacksrichtung bevorzugt der Fötus?",
    a: "Sauer",
    b: "Bitter",
    c: "Süß",
    d: "Salzig",
    richtig: "c",
    begruendung: "Saccharin-Versuche: süßes Fruchtwasser wird bevorzugt."
  },
  {
    frage: "Wie gelangt Geruch zum Fötus?",
    a: "Über Blut",
    b: "Über fötales Atmen durch Fruchtwasser",
    c: "Nur durch die Haut",
    d: "Erst nach Geburt",
    richtig: "b",
    begruendung: "Gerüche aus dem Fruchtwasser stimulieren olfaktorische Rezeptoren."
  },
  {
    frage: "Wie nennt man die Ähnlichkeit von Menschen- und Tierentwicklung?",
    a: "Ontogenetische Kontinuität",
    b: "Phylogenetische Kontinuität",
    c: "Biologische Parallelität",
    d: "Pränatale Homologie",
    richtig: "b",
    begruendung: "Menschen teilen viele Entwicklungsprozesse mit anderen Säugetieren."
  },
  {
    frage: "Wann hört der Fötus die Stimme der Mutter?",
    a: "Ab 10 Wochen",
    b: "Ab 20 Wochen",
    c: "Ab dem letzten Trimester",
    d: "Nach der Geburt",
    richtig: "c",
    begruendung: "Ab ca. 27.–30. Woche reagiert der Fötus auf Stimmen und Musik."
  },
{
    frage: "Was ist „Habituation“?",
    a: "Reflexbewegung",
    b: "Abnahme der Reaktion auf wiederholten Reiz",
    c: "Zunahme der Reaktion",
    d: "Gedächtnisverlust",
    richtig: "b",
    begruendung: "Einfachste Lernform, Hinweis auf funktionierendes Gedächtnis."
  },
  {
    frage: "Wann zeigen Föten Habituation?",
    a: "Ab 20. Woche",
    b: "Ab 30. Woche",
    c: "Erst nach der Geburt",
    d: "Ab 10. Woche",
    richtig: "b",
    begruendung: "ZNS ab 30. Woche ausreichend ausgereift."
  },
  {
    frage: "Wie nennt man das Wiederauftreten der Reaktion bei neuem Reiz?",
    a: "Generalisierung",
    b: "Sensitivierung",
    c: "Dishabituation",
    d: "Adaptation",
    richtig: "c",
    begruendung: "Zeigt, dass der Fötus Reize unterscheiden kann."
  },
  {
    frage: "Was lernen Föten durch mütterliche Sprache?",
    a: "Grammatik",
    b: "Bedeutung von Wörtern",
    c: "Rhythmus und Melodie",
    d: "Wortschatz",
    richtig: "c",
    begruendung: "Flüssigkeit filtert Sprachinhalte – nur Prosodie erreichbar."
  },
  {
    frage: "Welche Präferenz zeigen Neugeborene nach der Geburt?",
    a: "Fremde Stimmen",
    b: "Muttersprache",
    c: "Musik",
    d: "Geräusche mit hohem Ton",
    richtig: "b",
    begruendung: "Präferenz für Sprache und Stimme, die sie pränatal gehört haben."
  },
  {
    frage: "Was bewies die Karottensaft-Studie von Mennella et al.?",
    a: "Geschmacksunterschiede genetisch bedingt",
    b: "Pränatales Lernen von Geschmäckern",
    c: "Keine Effekte nach der Geburt",
    d: "Nur kurzfristige Wirkung",
    richtig: "b",
    begruendung: "Babys bevorzugten Geschmack, den Mütter in Schwangerschaft konsumierten."
  },
  {
    frage: "Wie nennt man schädigende Umwelteinflüsse während der Schwangerschaft?",
    a: "Mutagene",
    b: "Teratogene",
    c: "Pathogene",
    d: "Toxine",
    richtig: "b",
    begruendung: "Teratogene verursachen Fehlbildungen oder Fehlgeburten."
  },
  {
    frage: "Welche Rolle spielt das Timing bei Teratogenen?",
    a: "Keine",
    b: "Nur bei Frühgeburten",
    c: "Entscheidend – sensible Phasen",
    d: "Nur bei genetischen Defekten",
    richtig: "c",
    begruendung: "Empfindlichkeit hängt vom Entwicklungsstadium ab."
  },
  {
    frage: "Wann wirken Thalidomid-Schäden besonders stark?",
    a: "1.–2. Woche",
    b: "4.–6. Woche",
    c: "7.–9. Woche",
    d: "10.–12. Woche",
    richtig: "b",
    begruendung: "Das ist die sensible Phase der Gliedmaßenentwicklung."
  },
  {
    frage: "Wie hoch ist der Anteil früher Fehlgeburten an allen Schwangerschaften?",
    a: "Unter 5 %",
    b: "10–15 %",
    c: "40–50 %",
    d: "Über 70 %",
    richtig: "b",
    begruendung: "Etwa 15 % klinisch erfasster Schwangerschaften enden spontan."
  },
  {
    frage: "Wie nennt man den Zeitpunkt, an dem Organsysteme besonders empfindlich sind?",
    a: "Entwicklungsfenster",
    b: "Kritische Phase",
    c: "Sensible Phase",
    d: "Sensitive Zone",
    richtig: "c",
    begruendung: "Zeitraum größter Vulnerabilität für spezifische Teratogene."
  },
  {
    frage: "Welche Substanzklasse gehört zu den stärksten Teratogenen?",
    a: "Androgene",
    b: "Alkohol",
    c: "Vitamin C",
    d: "Dopamin",
    richtig: "b",
    begruendung: "Alkohol kann fetales Alkoholsyndrom verursachen."
  },
  {
    frage: "Was bewirkt chronischer Stress in der Schwangerschaft?",
    a: "Höheres Geburtsgewicht",
    b: "Erhöhte Glukokortikoidspiegel → Entwicklungsverzögerung",
    c: "Keine Effekte",
    d: "Schnellere Reifung",
    richtig: "b",
    begruendung: "Stresshormone hemmen Wachstum und Hirnreifung."
  },
  {
    frage: "Was ist keine typische Folge von Teratogenen?",
    a: "Wachstumsstörungen",
    b: "Fehlbildungen",
    c: "Bessere Resilienz",
    d: "Funktionseinschränkungen",
    richtig: "c",
    begruendung: "Teratogene haben ausschließlich schädigende Wirkungen."
  },
{
    frage: "Wie nennt man schädigende Umwelteinflüsse während der Schwangerschaft?",
    a: "Mutagene",
    b: "Teratogene",
    c: "Pathogene",
    d: "Toxine",
    richtig: "b",
    begruendung: "Teratogene verursachen Fehlbildungen oder Fehlgeburten."
  },
  {
    frage: "Welche Rolle spielt das Timing bei Teratogenen?",
    a: "Keine",
    b: "Nur bei Frühgeburten",
    c: "Entscheidend – sensible Phasen",
    d: "Nur bei genetischen Defekten",
    richtig: "c",
    begruendung: "Empfindlichkeit hängt vom Entwicklungsstadium ab."
  },
  {
    frage: "Wann wirken Thalidomid-Schäden besonders stark?",
    a: "1.–2. Woche",
    b: "4.–6. Woche",
    c: "7.–9. Woche",
    d: "10.–12. Woche",
    richtig: "b",
    begruendung: "Das ist die sensible Phase der Gliedmaßenentwicklung."
  },
  {
    frage: "Wie hoch ist der Anteil früher Fehlgeburten an allen Schwangerschaften?",
    a: "Unter 5 %",
    b: "10–15 %",
    c: "40–50 %",
    d: "Über 70 %",
    richtig: "b",
    begruendung: "Etwa 15 % klinisch erfasster Schwangerschaften enden spontan."
  },
  {
    frage: "Wie nennt man den Zeitpunkt, an dem Organsysteme besonders empfindlich sind?",
    a: "Entwicklungsfenster",
    b: "Kritische Phase",
    c: "Sensible Phase",
    d: "Sensitive Zone",
    richtig: "c",
    begruendung: "Zeitraum größter Vulnerabilität für spezifische Teratogene."
  },
  {
    frage: "Welche Substanzklasse gehört zu den stärksten Teratogenen?",
    a: "Androgene",
    b: "Alkohol",
    c: "Vitamin C",
    d: "Dopamin",
    richtig: "b",
    begruendung: "Alkohol kann fetales Alkoholsyndrom verursachen."
  },
  {
    frage: "Was bewirkt chronischer Stress in der Schwangerschaft?",
    a: "Höheres Geburtsgewicht",
    b: "Erhöhte Glukokortikoidspiegel → Entwicklungsverzögerung",
    c: "Keine Effekte",
    d: "Schnellere Reifung",
    richtig: "b",
    begruendung: "Stresshormone hemmen Wachstum und Hirnreifung."
  },
  {
    frage: "Was ist keine typische Folge von Teratogenen?",
    a: "Wachstumsstörungen",
    b: "Fehlbildungen",
    c: "Bessere Resilienz",
    d: "Funktionseinschränkungen",
    richtig: "c",
    begruendung: "Teratogene haben ausschließlich schädigende Wirkungen."
  },
  {
    frage: "Wann spricht man von einer Frühgeburt?",
    a: "Vor 38. SSW",
    b: "Vor 40. SSW",
    c: "Nach 42. SSW",
    d: "Ab 30. SSW",
    richtig: "a",
    begruendung: "Frühgeborene: vor Ende der 37. Schwangerschaftswoche."
  },
  {
    frage: "Was misst der Apgar-Score NICHT?",
    a: "Herzfrequenz",
    b: "Muskeltonus",
    c: "Elternbindung",
    d: "Atmung",
    richtig: "c",
    begruendung: "Apgar bewertet Vitalfunktionen des Neugeborenen."
  },
  {
    frage: "Wie viele Aktivitätszustände hat ein Neugeborenes typischerweise?",
    a: "2",
    b: "4",
    c: "6",
    d: "8",
    richtig: "c",
    begruendung: "Schlaf-, Wach-, Dös- und Schreiphasen usw. insgesamt sechs."
  },
  {
    frage: "Was ist die Hauptursache für geringes Geburtsgewicht?",
    a: "Genetik",
    b: "Mangelernährung und pränataler Stress",
    c: "Alter der Mutter",
    d: "Geschlecht",
    richtig: "b",
    begruendung: "Umwelt- und Versorgungsfaktoren entscheidend."
  },
  {
    frage: "Welche Maßnahme verbessert die Entwicklung Frühgeborener?",
    a: "Strenge Ruhe",
    b: "„Känguru-Pflege“ (Hautkontakt)",
    c: "Isolierung",
    d: "Füttern nur nach Plan",
    richtig: "b",
    begruendung: "Hautkontakt stabilisiert Herzschlag, Temperatur, Bindung."
  },
  {
    frage: "Welche Aussage zum Kinderschutz trifft zu?",
    a: "Frühförderung kann Defizite abmildern",
    b: "Störungen sind irreversibel",
    c: "Nur Medikamente helfen",
    d: "Elterntraining unwirksam",
    richtig: "a",
    begruendung: "Frühzeitige Intervention kann langfristige Folgen reduzieren."
  },
{
    frage: "Welche Beziehung besteht zwischen Anlage und Umwelt in der pränatalen Phase?",
    a: "Keine",
    b: "Umwelt dominiert",
    c: "Beide wirken zusammen",
    d: "Nur Gene bestimmen",
    richtig: "c",
    begruendung: "Kombination aus biologischen und Umweltfaktoren prägt Entwicklung."
  },
  {
    frage: "Welches Thema der Entwicklungspsychologie zeigt sich am Fötus als aktivem Lernenden?",
    a: "Anlage vs. Umwelt",
    b: "Aktives Kind",
    c: "Diskontinuität",
    d: "Soziokultureller Kontext",
    richtig: "b",
    begruendung: "Fötus beeinflusst aktiv seine Entwicklung (Bewegung, Lernen)."
  },
  {
    frage: "Warum zeigen Föten schon Kontinuität?",
    a: "Gleiche Umweltbedingungen",
    b: "Ähnliche Verhaltensmuster vor und nach der Geburt",
    c: "Reizunempfindlichkeit",
    d: "Unabhängigkeit",
    richtig: "b",
    begruendung: "Bewegungs- und Temperamentsmuster ähneln späterem Verhalten."
  },
  {
    frage: "Welche kulturelle Vorstellung vertreten die Beng in Westafrika?",
    a: "Leben beginnt mit Befruchtung",
    b: "Kind ist Reinkarnation eines Ahnen",
    c: "Kind entsteht zufällig",
    d: "Leben beginnt mit Taufe",
    richtig: "b",
    begruendung: "Beng glauben an das „wrugbe“ – Doppelleben zwischen Welten."
  },
  {
    frage: "Was zeigt der Beng-Glaube für die Entwicklungspsychologie?",
    a: "Universalismus",
    b: "Soziokulturelle Unterschiede in Lebensanfang und Kindpflege",
    c: "Biologische Determination",
    d: "Fehlende Bindung",
    richtig: "b",
    begruendung: "Beispiel für soziokulturelle Einflüsse auf Entwicklungskonzepte."
  },
  {
    frage: "Welche kulturelle Praxis diente bei den Beng zur Sicherung des Lebenswillens?",
    a: "Strenge Disziplin",
    b: "Schmücken des Babys",
    c: "Getrenntes Schlafen",
    d: "Frühzeitiges Abstillen",
    richtig: "b",
    begruendung: "Eltern bemühen sich, das Kind „im Diesseits zu halten“."
  },
{
    "frage": "Welche Beziehung besteht zwischen Anlage und Umwelt in der pränatalen Phase?",
    "a": "Keine",
    "b": "Umwelt dominiert",
    "c": "Beide wirken zusammen",
    "d": "Nur Gene bestimmen",
    "richtig": "c",
    "begruendung": "Kombination aus biologischen und Umweltfaktoren prägt Entwicklung."
  },
  {
    "frage": "Welches Thema der Entwicklungspsychologie zeigt sich am Fötus als aktivem Lernenden?",
    "a": "Anlage vs. Umwelt",
    "b": "Aktives Kind",
    "c": "Diskontinuität",
    "d": "Soziokultureller Kontext",
    "richtig": "b",
    "begruendung": "Fötus beeinflusst aktiv seine Entwicklung (Bewegung, Lernen)."
  },
  {
    "frage": "Warum zeigen Föten schon Kontinuität?",
    "a": "Gleiche Umweltbedingungen",
    "b": "Ähnliche Verhaltensmuster vor und nach der Geburt",
    "c": "Reizunempfindlichkeit",
    "d": "Unabhängigkeit",
    "richtig": "b",
    "begruendung": "Bewegungs- und Temperamentsmuster ähneln späterem Verhalten."
  },
  {
    "frage": "Welche kulturelle Vorstellung vertreten die Beng in Westafrika?",
    "a": "Leben beginnt mit Befruchtung",
    "b": "Kind ist Reinkarnation eines Ahnen",
    "c": "Kind entsteht zufällig",
    "d": "Leben beginnt mit Taufe",
    "richtig": "b",
    "begruendung": "Beng glauben an das „wrugbe“ – Doppelleben zwischen Welten."
  },
  {
    "frage": "Was zeigt der Beng-Glaube für die Entwicklungspsychologie?",
    "a": "Universalismus",
    "b": "Soziokulturelle Unterschiede in Lebensanfang und Kindpflege",
    "c": "Biologische Determination",
    "d": "Fehlende Bindung",
    "richtig": "b",
    "begruendung": "Beispiel für soziokulturelle Einflüsse auf Entwicklungskonzepte."
  },
  {
    "frage": "Welche kulturelle Praxis diente bei den Beng zur Sicherung des Lebenswillens?",
    "a": "Strenge Disziplin",
    "b": "Schmücken des Babys",
    "c": "Getrenntes Schlafen",
    "d": "Frühzeitiges Abstillen",
    "richtig": "b",
    "begruendung": "Eltern bemühen sich, das Kind „im Diesseits zu halten“."
  },
  {
    "frage": "Was ist das wichtigste Schutzsystem für den Fötus?",
    "a": "Chorion",
    "b": "Plazenta",
    "c": "Eileiter",
    "d": "Vagina",
    "richtig": "b",
    "begruendung": "Austausch- und Schutzorgan zwischen Mutter und Kind."
  },
  {
    "frage": "Welche Erkenntnis liefert die Forschung zur Händigkeit?",
    "a": "Zufällige Entwicklung",
    "b": "Erkennbar durch Daumenlutschen im Mutterleib",
    "c": "Erst nach Geburt bestimmbar",
    "d": "Genetisch fixiert",
    "richtig": "b",
    "begruendung": "Föten, die rechts lutschen, werden meist rechtshändig."
  },
  {
    "frage": "Welcher Geräuschpegel herrscht im Mutterleib?",
    "a": "20–30 dB",
    "b": "40–50 dB",
    "c": "70–95 dB",
    "d": "Über 120 dB",
    "richtig": "c",
    "begruendung": "Lautstärke entspricht Staubsauger – Fötus erlebt Dauergeräusche."
  },
  {
    "frage": "Was lässt sich aus pränatalem Lernen für „Fötus-Förderprogramme“ schließen?",
    "a": "Große Wirkung",
    "b": "Keine Wirkung",
    "c": "Spracherwerb möglich",
    "d": "Intelligenzsteigerung",
    "richtig": "b",
    "begruendung": "Fötales Lernen beschränkt sich auf Rhythmus/Melodie, keine Kognition."
  },
  {
    "frage": "Welcher Nährstoffmangel erhöht das Risiko für Neuralrohrdefekte wie Spina bifida?",
    "a": "Vitamin D",
    "b": "Folsäure",
    "c": "Vitamin C",
    "d": "Jod",
    "richtig": "b",
    "begruendung": "Folsäuremangel in sehr früher Schwangerschaft erhöht das Risiko; daher Anreicherung/Präparate."
  },
  {
    "frage": "Neonatales Abstinenzsyndrom (NAS) tritt besonders nach pränataler Exposition gegenüber…",
    "a": "Benzodiazepinen",
    "b": "Opioiden",
    "c": "Antihistaminika",
    "d": "Antazida",
    "richtig": "b",
    "begruendung": "Typisch: Atem-/Ernährungsprobleme, Krampfanfälle; Behandlung oft mit Methadon/Morphin."
  },
  {
    "frage": "Welche Kombination erhöht die NAS-Wahrscheinlichkeit zusätzlich?",
    "a": "Opioide + Eisen",
    "b": "Opioide + Antidepressiva/Marihuana",
    "c": "Opioide + Folsäure",
    "d": "Opioide + Vitamin D",
    "richtig": "b",
    "begruendung": "Kombinationskonsum steigert das NAS-Risiko."
  },
  {
    "frage": "Zur Wirkung pränatalen Cannabiskonsums finden sich u. a. Hinweise auf…",
    "a": "Frühere Sprachproduktion",
    "b": "Weniger ADHS-Symptome",
    "c": "Mehr Impulsivität und Lern-/Gedächtnisprobleme",
    "d": "Höheres Geburtsgewicht",
    "richtig": "c",
    "begruendung": "Assoziationen u. a. mit ADHS-Symptomen/Impulsivität; Datenlage komplex."
  },
  {
    "frage": "Was ist an der Kombination Cannabis + Tabak bemerkenswert?",
    "a": "Unbedenklich",
    "b": "Besonders problematisch",
    "c": "Schützt vor SIDS",
    "d": "Erhöht IQ",
    "richtig": "b",
    "begruendung": "Studien deuten auf besonders ungünstige Kombination."
  },
  {
    "frage": "Hauptfolgen mütterlichen Rauchens in der Schwangerschaft sind v. a.…",
    "a": "Höheres Geburtsgewicht",
    "b": "Geringeres Geburtsgewicht und verlangsamtes Wachstum",
    "c": "Frühere Lungenreife",
    "d": "Verbesserte Reflexe",
    "richtig": "b",
    "begruendung": "Zusätzlich SIDS-Risiko; Dosis-Wirkungs-Beziehung; stärkere Effekte bei früher Exposition."
  },
  {
    "frage": "Was ist beim Passivrauchen relevant?",
    "a": "Unbedenklich fürs Kind",
    "b": "Nur Geruchsbelastung",
    "c": "Indirekte Sauerstoffreduktion beim Fötus",
    "d": "Führt zu höherer fötaler Atembewegung",
    "richtig": "c",
    "begruendung": "Auch Rauch anderer führt zu reduzierter O₂-Versorgung des Fötus."
  },
  {
    "frage": "Warum sind E-Zigaretten in der Schwangerschaft problematisch?",
    "a": "Kein Nikotin enthalten",
    "b": "Konstanter Nikotingehalt",
    "c": "Stark variabler, teils höherer Nikotingehalt als Zigaretten",
    "d": "Nikotin wird in der Plazenta neutralisiert",
    "richtig": "c",
    "begruendung": "Inhalt teils unreguliert; Risiken werden unterschätzt."
  },
  {
    "frage": "Die häufigste vermeidbare Ursache fötaler Hirnschädigung ist…",
    "a": "Nikotin",
    "b": "Luftverschmutzung",
    "c": "Alkohol",
    "d": "Koffein",
    "richtig": "c",
    "begruendung": "Alkohol ist führende vermeidbare Ursache für Hirnschäden/Behinderungen."
  },
  {
    "frage": "Welche Aussage zu Blei trifft zu?",
    "a": "Führt nur zu Hautreizungen",
    "b": "Kein Effekt in Schwangerschaft",
    "c": "Erhöht Risiko für Fehl-/Frühgeburten und niedriges Geburtsgewicht",
    "d": "Verbessert Schulleistung",
    "richtig": "c",
    "begruendung": "Dosis-Wirkung; außerdem IQ-Defizite/ADHS-Risiko bei Kindern."
  },
  {
    "frage": "Ein gut belegter Effekt früher Bleiexposition beim Kind ist…",
    "a": "Höherer IQ",
    "b": "Bessere Schulnoten",
    "c": "Niedrigerer IQ/Leistungen, ↑ADHS-Symptome",
    "d": "Größere Körpergröße",
    "richtig": "c",
    "begruendung": "Blei ist starkes Neurotoxin mit kognitiven Folgen."
  },
  {
    "frage": "Säuglingssterblichkeit bei sehr jungen Müttern (≤ 15 J.) ist…",
    "a": "Gleich niedrig wie bei 23–29 J.",
    "b": "3–4× höher",
    "c": "Nur bei Jungen erhöht",
    "d": "Nur in Entwicklungsländern erhöht",
    "richtig": "b",
    "begruendung": "Deutlich erhöhtes Risiko im Vergleich zu 23–29-jährigen."
  },
  {
    "frage": "Höheres Elternalter ist assoziiert mit…",
    "a": "Geringerem ASS-Risiko",
    "b": "Erhöhtem ASS-Risiko beim Kind",
    "c": "Besserer Plazentafunktion",
    "d": "Geringerer Fehlbildungsrate",
    "richtig": "b",
    "begruendung": "Mit steigendem Alter ↑Risiken; u. a. ASS assoziiert."
  },
  {
    "frage": "Neugeborene schlafen im Schnitt…",
    "a": "Gleich viel wie junge Erwachsene",
    "b": "Etwa doppelt so lange wie junge Erwachsene",
    "c": "Weniger als Jugendliche",
    "d": "Nur 6 Stunden",
    "richtig": "b",
    "begruendung": "Zwei Kernfakten: viel Schlaf und anderes REM/Non-REM-Muster."
  },
  {
    "frage": "Anteil REM-Schlaf: Neugeborene vs. 3–4-Jährige",
    "a": "20 % → 50 %",
    "b": "50 % → 20 %",
    "c": "10 % → 30 %",
    "d": "70 % → 40 %",
    "richtig": "b",
    "begruendung": "REM sinkt rasch von ~50 % auf ~20 %."
  },
  {
    "frage": "Autostimulationstheorie besagt…",
    "a": "REM stört visuelle Reifung",
    "b": "REM ersetzt Non-REM",
    "c": "REM-Gehirnaktivität kompensiert geringe externe Stimulation",
    "d": "REM verhindert Lernen",
    "richtig": "c",
    "begruendung": "Unterstützt frühe visuelle Entwicklung."
  },
  {
    "frage": "„Myoklonisches Zucken“ im REM bei Säuglingen…",
    "a": "Ist pathologisch",
    "b": "Dient sensorischer Entkopplung",
    "c": "Hilft sensomotorische Verschaltung zu entwickeln",
    "d": "Tritt nur bei Fieber auf",
    "richtig": "c",
    "begruendung": "Unterstützt die Kopplung von Bewegung und Empfindung."
  },
  {
    "frage": "Können Neugeborene im Schlaf lernen?",
    "a": "Nein",
    "b": "Ja, z. B. Lautmuster wiedererkennen",
    "c": "Nur Gerüche",
    "d": "Erst ab 6 Monaten",
    "richtig": "b",
    "begruendung": "Studie: Wiedererkennung finnischer Vokallaute nach Schlaf."
  },
  {
    "frage": "„Schreibabys“ sind definiert durch…",
    "a": "Kurzes Hungerweinen",
    "b": "Langes, untröstliches Schreien ohne klaren Grund",
    "c": "Schreien nur nachts",
    "d": "Schreien nur bei Fieber",
    "richtig": "b",
    "begruendung": "Häufig; Koliken klingen meist ab ~3. Monat, sonst Unterstützung suchen."
  },
  {
    "frage": "Der Apgar-Score dient…",
    "a": "Der Bindungsdiagnostik",
    "b": "Der schnellen Vitalzustandsbeurteilung direkt nach Geburt",
    "c": "Dem Hörscreening",
    "d": "Der Temperamentsmessung",
    "richtig": "b",
    "begruendung": "Bewertet Aussehen, Puls, Tonus, Atmung, Reflexe."
  },
  {
    "frage": "Welches Kriterium ist Teil des Apgar-Scores?",
    "a": "Elternzufriedenheit",
    "b": "Hautfarbe (Aussehen)",
    "c": "Kopfumfang",
    "d": "Geburtsdauer",
    "richtig": "b",
    "begruendung": "Eines der fünf Apgar-Merkmale."
  },
  {
    "frage": "Definition „untergewichtiges Neugeborenes“ (LBW)",
    "a": "< 3000 g",
    "b": "< 2500 g",
    "c": "< 2000 g",
    "d": "< 1500 g",
    "richtig": "b",
    "begruendung": "LBW-Grenze: 2500 g."
  },
  {
    "frage": "„Untergewichtig für das Gestationsalter“ bedeutet…",
    "a": "Reifgeboren, > 4500 g",
    "b": "Gewicht deutlich unter Norm für Schwangerschaftswoche",
    "c": "Frühgeboren, aber schwer",
    "d": "Normales Gewicht",
    "richtig": "b",
    "begruendung": "Bezieht sich auf Perzentile relativ zur Gestationswoche."
  },
  {
    "frage": "Anteil Frühgeborener in Deutschland (WHO-Schätzung)",
    "a": "3 %",
    "b": "6 %",
    "c": "9,2 %",
    "d": "15 %",
    "richtig": "c",
    "begruendung": "In D ~9,2 %; weltweit ~jedes zehnte Kind."
  },
  {
    "frage": "„Extrem untergewichtig“ ist definiert als…",
    "a": "< 1800 g",
    "b": "< 1500 g",
    "c": "< 1200 g",
    "d": "< 1000 g",
    "richtig": "d",
    "begruendung": "ELBW < 1000 g."
  },
  {
    "frage": "Langfristige Outcomes bei ELBW (≤ 1000 g): Anteil mit starken Einschränkungen nach 18–22 Monaten",
    "a": "10 %",
    "b": "25 %",
    "c": "40 %",
    "d": "60 %",
    "richtig": "d",
    "begruendung": "60 % mit dauerhaften starken Beeinträchtigungen (Studie)."
  },
 {
    "frage": "Typische Ursachen für Untergewicht/Frühgeburt sind NICHT…",
    "a": "Rauchen/Alkohol",
    "b": "Blei/Quecksilber",
    "c": "Mehrlingsschwangerschaften",
    "d": "Höhere Jodzufuhr",
    "richtig": "d",
    "begruendung": "Umweltgifte, Substanzen und Mehrlinge erhöhen das Risiko; Jodzufuhr ist kein Risikofaktor."
  },
  {
    "frage": "Die „Känguru-Methode“ bewirkt nachweislich…",
    "a": "Höhere Sterblichkeit",
    "b": "Förderung des Stillens & Bindung",
    "c": "Schlechtere Temperaturregulation",
    "d": "Verzögerte Entwicklung",
    "richtig": "b",
    "begruendung": "Die Methode reduziert Sterblichkeit und fördert die Entwicklung sowie das Bonding."
  },
  {
    "frage": "Was empfehlen moderne NICUs bzgl. Elternkontakt?",
    "a": "Strikte Isolation",
    "b": "Begrenzter Kontakt nur wöchentlich",
    "c": "Viel Haut-zu-Haut-Kontakt, soweit medizinisch möglich",
    "d": "Nur Blickkontakt",
    "richtig": "c",
    "begruendung": "Paradigmenwechsel: Früher kein Kontakt, heute viel Interaktion."
  },
  {
    "frage": "Muttermilch bei Frühgeborenen ist assoziiert mit…",
    "a": "Schlechterer Gehirnentwicklung",
    "b": "Besserer Gehirnentwicklung",
    "c": "Mehr Infektionen",
    "d": "Weniger Bindung",
    "richtig": "b",
    "begruendung": "Muttermilch hat neuroprotektive Effekte."
  },
  {
    "frage": "Kulturelle Geburtspraktiken (z. B. Südsudan/Bali) zeigen…",
    "a": "Überall identische Abläufe",
    "b": "Geringen Einfluss von Kultur",
    "c": "Starken Einfluss des soziokulturellen Kontexts auf Geburt",
    "d": "Nur historische Relevanz",
    "richtig": "c",
    "begruendung": "Es gibt eine große Vielfalt von Praktiken und deren Bedeutung."
  },
  {
    "frage": "Geräuschumwelt des Fötus: Welche Aussage ist korrekt?",
    "a": "Leiser als Bibliothek",
    "b": "70–95 dB, v. a. mütterliche Körpergeräusche",
    "c": "Nur externe Stimmen hörbar",
    "d": "Keine Wirkung auf den Fötus",
    "richtig": "b",
    "begruendung": "Der Fötus hört eine laute interne Geräuschkulisse, besonders die Stimme der Mutter."
  },
  {
    "frage": "Definition „Gestationsalter“",
    "a": "Altersangabe des Neugeborenen in Monaten",
    "b": "Dauer seit der letzten Periode",
    "c": "Dauer seit Befruchtung in Wochen",
    "d": "Dauer der Geburt in Stunden",
    "richtig": "c",
    "begruendung": "Gestationsalter bezeichnet die Zeit in Wochen seit der Befruchtung."
  },
  {
    "frage": "Welche Aussage zu untergewichtigen Kindern trifft zu?",
    "a": "Alle haben schwere Langzeitfolgen",
    "b": "Leicht/mittel Untergewicht normalisiert sich oft im Verlauf",
    "c": "ELBW immer folgenlos",
    "d": "Interventionen sind nutzlos",
    "richtig": "b",
    "begruendung": "Viele leichte/mittlere Untergewichtige holen auf; ELBW bleibt Hochrisiko."
  },
  {
    "frage": "Welche Ursache für erhöhte Säuglingssterblichkeit (ohne Fehlbildungen/Frühgeburt) wird genannt?",
    "a": "SIDS",
    "b": "Fieberkrämpfe",
    "c": "Unfall",
    "d": "Stillen",
    "richtig": "a",
    "begruendung": "SIDS ist die führende „andere“ Todesursache im 1. Lebensjahr (USA-Daten)."
  },
  {
    "frage": "Welche Maßnahme reduziert Untergewicht/Frühgeburt NICHT?",
    "a": "Rauchstopp",
    "b": "Reduktion von Bleiexposition",
    "c": "Förderung Mehrlingsschwangerschaften",
    "d": "Alkoholabstinenz",
    "richtig": "c",
    "begruendung": "Mehrlingsschwangerschaften erhöhen das Risiko."
  },
  {
    "frage": "Was kann den Wehenbeginn mit auslösen?",
    "a": "Nur mütterliches Oxytocin",
    "b": "Ein Protein aus den reifenden fötalen Lungen",
    "c": "Plazentare Östrogene allein",
    "d": "Darmbewegungen des Fötus",
    "richtig": "b",
    "begruendung": "Lungenprotein des Fötus signalisiert den Wehenstart."
  },
  {
    "frage": "Wozu dient der Geburtskanal-Druck auf den Kopf des Babys?",
    "a": "Schädelverhärtung",
    "b": "Temporäre Umfangsvergrößerung",
    "c": "Temporäre Umfangsverkleinerung durch Verschiebung der Schädelplatten",
    "d": "Nichts",
    "richtig": "c",
    "begruendung": "Er erleichtert die Passage durch das Becken."
  },
  {
    "frage": "Welcher physiologische Effekt unterstützt den ersten Atemzug?",
    "a": "Fruchtwasserstau",
    "b": "Auspressen von Fruchtwasser aus den Lungen",
    "c": "Hemmung der Atmung",
    "d": "Aufblähung durch Gasbildung",
    "richtig": "b",
    "begruendung": "Druck presst Flüssigkeit aus den Lungen und erleichtert den Atembeginn."
  },
  {
    "frage": "Was variiert kulturübergreifend besonders stark?",
    "a": "Biologische Mechanik der Geburt",
    "b": "Geburtspraktiken und soziale Einbettung",
    "c": "Fötale Anatomie",
    "d": "Plazentaform",
    "richtig": "b",
    "begruendung": "Geburtspraktiken unterscheiden sich stark, z.B. Bali vs. Klinik."
  },
  {
    "frage": "Wichtigste Maßnahme zur SIDS-Reduktion?",
    "a": "Bauchlage",
    "b": "Seitenlage mit Kissen",
    "c": "Rückenlage beim Schlafen",
    "d": "Federkissen zur Kopfformung",
    "richtig": "c",
    "begruendung": "Rückenlage senkt das Risiko für SIDS deutlich."
  },
  {
    "frage": "Welcher Einzel-Risikofaktor erhöht SIDS am stärksten?",
    "a": "Stillen",
    "b": "Bauchlage",
    "c": "Raumteilen ohne Bettteilen",
    "d": "Zimmer kühl halten",
    "richtig": "b",
    "begruendung": "Bauchlage ist der stärkste Einzelfaktor."
  },
  {
    "frage": "Welche Schlafumgebung ist korrekt?",
    "a": "Weiche Matratze mit Kissen",
    "b": "Feste Matratze ohne Kissen",
    "c": "Viele Kuscheltiere",
    "d": "Decken über Gesichtshöhe",
    "richtig": "b",
    "begruendung": "Feste Unterlage ohne Kissen reduziert Risiko."
  },
  {
    "frage": "Antidepressiva in der Schwangerschaft – was stimmt?",
    "a": "Strikt kontraindiziert",
    "b": "Evidenz klar: stark teratogen",
    "c": "Evidenz nicht eindeutig; Risiko-Nutzen-Abwägung, Behandlung kann postpartale Depression senken",
    "d": "Unwirksam bei Depression",
    "richtig": "c",
    "begruendung": "Ca. 7 % der Schwangeren nehmen Antidepressiva; Nutzen gegen Risiken abwägen."
  },
  {
    "frage": "Pränataler mütterlicher Stress war in einer Adoptions-/IVF-Studie assoziiert mit…",
    "a": "Höherem Geburtsgewicht",
    "b": "Niedrigerem Geburtsgewicht und ↑ späterem antisozialem Verhalten",
    "c": "Besserer Exekutivfunktion",
    "d": "Kein Effekt",
    "richtig": "b",
    "begruendung": "Effekte zeigen sich auch ohne geteilte Gene."
  },
  {
    "frage": "Womit hing kindliche Ängstlichkeit in der Studie stärker zusammen?",
    "a": "Pränatalem Stress",
    "b": "Postnatalem Stress der Mutter",
    "c": "Folsäuregabe",
    "d": "Stillen",
    "richtig": "b",
    "begruendung": "Angst ist eher mit postnatalem Stress assoziiert."
  },
  {
    "frage": "Empfohlene Stress-Reduktion für Schwangere (im Text genannt)?",
    "a": "Hochintensives Intervalltraining",
    "b": "Yoga/Meditation",
    "c": "Fasten",
    "d": "Koffeinsteigerung",
    "richtig": "b",
    "begruendung": "Yoga/Meditation helfen Mutter und Kind."
  },
  {
    "frage": "Definition „Gestationsalter“ nach Kapitel 2:",
    "a": "Seit letzter Periode",
    "b": "Seit vermutetem Eisprung",
    "c": "Seit Befruchtung, in Wochen",
    "d": "Seit Einnistung",
    "richtig": "c",
    "begruendung": "Explizite Definition im Text."
  },
  {
    "frage": "Modell multipler Risiken betont, dass…",
    "a": "Ein einzelner Faktor genügt immer",
    "b": "Mehrere Risiken sich kumulativ auswirken",
    "c": "Risiken sich gegenseitig neutralisieren",
    "d": "Nur Gene zählen",
    "richtig": "b",
    "begruendung": "Mehr Risiken erhöhen die Wahrscheinlichkeit bleibender Probleme."
  },
  {
    "frage": "Resilienz laut Kapitel 2:",
    "a": "Reiner Zufall",
    "b": "Nur von IQ abhängig",
    "c": "Beruht u. a. auf persönlichen Eigenschaften und unterstützenden Beziehungen",
    "d": "In frühen Jahren unmöglich",
    "richtig": "c",
    "begruendung": "Einige Kinder bleiben trotz hoher Risiken widerstandsfähig."
  },
  {
    "frage": "Sozioökonomischer Status (SES) & Säuglingssterblichkeit (DE/Allg.):",
    "a": "Kein Zusammenhang",
    "b": "Höherer SES → höhere Sterblichkeit",
    "c": "Niedriger SES → höhere Sterblichkeit",
    "d": "Nur in Entwicklungsländern",
    "richtig": "c",
    "begruendung": "Klarer Zusammenhang zwischen niedrigem SES und höherer Sterblichkeit."
  },
  {
    "frage": "Beispiel für krankheitsbedingtes Risiko (Mutter):",
    "a": "Masern → Makrosomie",
    "b": "Zika-Infektion → Mikrozephalie beim Kind",
    "c": "Röteln → höherer IQ",
    "d": "Influenza → Polydaktylie",
    "richtig": "b",
    "begruendung": "Zika-Infektion pränatal assoziiert mit Mikrozephalie."
  },
  {
    "frage": "Unbeabsichtigte Folge der Rückenlage-Kampagne:",
    "a": "Früheres Krabbeln",
    "b": "Leicht späteres Krabbeln; daher „tummy time“ am Tag empfohlen",
    "c": "Frühere Gehfähigkeit",
    "d": "Mehr SIDS",
    "richtig": "b",
    "begruendung": "Weniger Bauchlage → weniger Muskeltraining; „tummy time“ als Gegenmaßnahme."
  },
  {
    "frage": "Ab wann besteht laut Tabelle/Abschnitt eine Überlebenschance außerhalb der Gebärmutter?",
    "a": "~20 SSW ohne Eingriffe",
    "b": "~24 SSW ohne Eingriffe",
    "c": "~28 SSW, Gehirn/Lungen ausreichend – Überlebenschance ohne medizinische Eingriffe",
    "d": "Erst ab ET",
    "richtig": "c",
    "begruendung": "Mit ~28 SSW sind Gehirn und Lungen ausreichend entwickelt."
  }
];

