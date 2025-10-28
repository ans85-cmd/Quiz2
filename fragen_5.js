const questions = [
  {
    "frage": "Was bezeichnet „Sinnesempfindung“?",
    "a": "Verarbeitung grundlegender Informationen durch Sinnesorgane",
    "b": "Interpretation von Umweltreizen",
    "c": "Gedächtnisbildung",
    "d": "Kognitive Bewertung",
    "richtig": "a",
    "begruendung": "Saubere Trennung zwischen Reizaufnahme (Empfindung) und Interpretation (Wahrnehmung) (Sinnesempfindung = physiologische Reizaufnahme) (Wahrnehmung = Interpretation/Strukturierung sensorischer Daten) Mögliche Klausurfallen: Empfindung und Wahrnehmung vertauscht. Definitionen auf falscher Ebene."
  },
  {
    "frage": "Was versteht man unter „Wahrnehmung“?",
    "a": "Reine Reizaufnahme",
    "b": "Interpretation sensorischer Informationen",
    "c": "Emotionale Bewertung",
    "d": "Gedächtnisabruf",
    "richtig": "b",
    "begruendung": "Saubere Trennung zwischen Reizaufnahme (Empfindung) und Interpretation (Wahrnehmung) (Sinnesempfindung = physiologische Reizaufnahme) (Wahrnehmung = Interpretation/Strukturierung sensorischer Daten) Mögliche Klausurfallen: Empfindung und Wahrnehmung vertauscht. Definitionen auf falscher Ebene."
  },
  {
    "frage": "Welche Methode wird bei Babys zur Messung der Sehpräferenz eingesetzt?",
    "a": "fMRI",
    "b": "EEG",
    "c": "TMS",
    "d": "Eye-Tracking",
    "richtig": "d",
    "begruendung": "Längere Fixationsdauer korrekt als Präferenzindikator genutzt, nicht als Leistungsmaß (Blickpräferenz = längeres Hinschauen als Präferenzindikator) Mögliche Klausurfallen: Blickpräferenz mit Bildgebung verwechselt. Präferenz als Fähigkeitstest missdeutet."
  },
  {
    "frage": "Die Blickpräferenzmethode zeigt, dass Säuglinge…",
    "a": "keine Muster erkennen",
    "b": "bevorzugt dort hinschauen, wo Kontraste sind",
    "c": "gleichmäßig auf alle Reize reagieren",
    "d": "Licht meiden",
    "richtig": "b",
    "begruendung": "Längere Fixationsdauer korrekt als Präferenzindikator genutzt, nicht als Leistungsmaß (Blickpräferenz = längeres Hinschauen als Präferenzindikator) Mögliche Klausurfallen: Blickpräferenz mit Bildgebung verwechselt. Präferenz als Fähigkeitstest missdeutet."
  },
  {
    "frage": "Was misst die Habituationsmethode?",
    "a": "Gedächtnisleistung",
    "b": "Reaktionszeit",
    "c": "Muskeltonus",
    "d": "Unterscheidungsfähigkeit von Reizen",
    "richtig": "d",
    "begruendung": "Die Option trifft die Gewöhnungslogik: Wiederholung senkt die Reaktion; ein neuer Reiz hebt sie an (Habituation = Reaktionsabnahme bei Wiederholung) (Dishabituation = Wiederanstieg bei neuem Reiz) Mögliche Klausurfallen: Habituation mit Ermüdung verwechselt. Dishabituation als bloße Neugier missdeutet."
  },
  {
    "frage": "Die Sehschärfe (Visus) von Neugeborenen beträgt etwa…",
    "a": "1,0",
    "b": "0,8",
    "c": "0,5",
    "d": "0,1",
    "richtig": "d",
    "begruendung": "Visus-/Kontrastentwicklung im Säuglingsalter stimmig eingeordnet (Visus = Sehschärfe (Auflösungsvermögen)) (Fovea/Zapfen = Bereich/Photorezeptoren für Details/Farbe) Mögliche Klausurfallen: Dezimalvisus und Snellen vertauscht. Kontrastempfindlichkeit mit Helligkeitssinn gleichgesetzt."
  },
  {
    "frage": "Warum ist die Kontrastempfindlichkeit Neugeborener gering?",
    "a": "Unreife der Fovea-Zapfen",
    "b": "Fehlende Farbrezeptoren",
    "c": "Zu hohe Lichtempfindlichkeit",
    "d": "Zu kleine Pupillen",
    "richtig": "a",
    "begruendung": "Visus-/Kontrastentwicklung im Säuglingsalter stimmig eingeordnet (Visus = Sehschärfe (Auflösungsvermögen)) (Fovea/Zapfen = Bereich/Photorezeptoren für Details/Farbe) Mögliche Klausurfallen: Dezimalvisus und Snellen vertauscht. Kontrastempfindlichkeit mit Helligkeitssinn gleichgesetzt."
  },
  {
    "frage": "Wann ähnelt die Farbwahrnehmung der von Erwachsenen?",
    "a": "Bei Geburt",
    "b": "Mit 6 Monaten",
    "c": "Erst mit 1 Jahr",
    "d": "Mit 2 Monaten",
    "richtig": "d",
    "begruendung": "Saubere Trennung zwischen Reizaufnahme (Empfindung) und Interpretation (Wahrnehmung) (Sinnesempfindung = physiologische Reizaufnahme) (Wahrnehmung = Interpretation/Strukturierung sensorischer Daten) Mögliche Klausurfallen: Empfindung und Wahrnehmung vertauscht. Definitionen auf falscher Ebene."
  },
  {
    "frage": "Was zeigte die fNIRS-Studie von Yang et al. (2016)?",
    "a": "Farbenlernen ist sprachabhängig",
    "b": "Farbwahrnehmung entsteht erst mit Wörtern",
    "c": "Keine Kategorisierung ohne Sprache",
    "d": "Säuglinge kategorisieren Farben schon vor dem Spracherwerb",
    "richtig": "d",
    "begruendung": "Saubere Trennung zwischen Reizaufnahme (Empfindung) und Interpretation (Wahrnehmung) (Sinnesempfindung = physiologische Reizaufnahme) (Wahrnehmung = Interpretation/Strukturierung sensorischer Daten) Mögliche Klausurfallen: Empfindung und Wahrnehmung vertauscht. Definitionen auf falscher Ebene."
  },
  {
    "frage": "Wann gelingt Babys erstmals das flüssige Verfolgen bewegter Objekte?",
    "a": "1 Monat",
    "b": "4 Monate",
    "c": "2 Monate",
    "d": "8 Monate",
    "richtig": "b",
    "begruendung": "Korrekte Definition/Logik gemäß Kap. 5"
  },
  {
    "frage": "Wofür steht „Wahrnehmungsverengung“?",
    "a": "Verlust des Farbsehens",
    "b": "Konzentration auf vertraute Reize",
    "c": "Zunehmende Kurzsichtigkeit",
    "d": "Motorische Einschränkung",
    "richtig": "b",
    "begruendung": "Die Antwort beschreibt den andere-Ethnie-Effekt und erfahrungsbasierte Spezialisierung präzise (andere-Ethnie-Effekt = bessere Unterscheidung eigener Ethnie) (Wahrnehmungsverengung = Spezialisierung auf häufige Stimuli) Mögliche Klausurfallen: Attraktivitätseffekt statt Gedächtnisvorteil angenommen. Alterseffekte (6 vs. 9 Monate) vertauscht."
  },
  {
    "frage": "Ab wann zeigen Babys eine Präferenz für Gesichter der eigenen Ethnie?",
    "a": "Geburt",
    "b": "6 Monate",
    "c": "3 Monate",
    "d": "9 Monate",
    "richtig": "c",
    "begruendung": "Die Antwort beschreibt den andere-Ethnie-Effekt und erfahrungsbasierte Spezialisierung präzise (andere-Ethnie-Effekt = bessere Unterscheidung eigener Ethnie) (Wahrnehmungsverengung = Spezialisierung auf häufige Stimuli) Mögliche Klausurfallen: Attraktivitätseffekt statt Gedächtnisvorteil angenommen. Alterseffekte (6 vs. 9 Monate) vertauscht."
  },
  {
    "frage": "Was besagt der „andere-Ethnie-Effekt“?",
    "a": "Kinder erkennen fremde Gesichter besser",
    "b": "Keine Unterschiede",
    "c": "Eigene Ethnie wird besser unterschieden",
    "d": "Kulturelle Einflüsse fehlen",
    "richtig": "c",
    "begruendung": "Die Antwort beschreibt den andere-Ethnie-Effekt und erfahrungsbasierte Spezialisierung präzise (andere-Ethnie-Effekt = bessere Unterscheidung eigener Ethnie) (Wahrnehmungsverengung = Spezialisierung auf häufige Stimuli) Mögliche Klausurfallen: Attraktivitätseffekt statt Gedächtnisvorteil angenommen. Alterseffekte (6 vs. 9 Monate) vertauscht."
  },
  {
    "frage": "Was zeigte Pascali et al. (2002)?",
    "a": "6-Monate-Babys unterscheiden nur Menschen",
    "b": "9-Monate-Babys können keine Gesichter mehr unterscheiden",
    "c": "Erwachsene erkennen Affen besser",
    "d": "6-Monate-Babys unterscheiden auch Affen",
    "richtig": "d",
    "begruendung": "Die Antwort beschreibt den andere-Ethnie-Effekt und erfahrungsbasierte Spezialisierung präzise (andere-Ethnie-Effekt = bessere Unterscheidung eigener Ethnie) (Wahrnehmungsverengung = Spezialisierung auf häufige Stimuli) Mögliche Klausurfallen: Attraktivitätseffekt statt Gedächtnisvorteil angenommen. Alterseffekte (6 vs. 9 Monate) vertauscht."
  },
  {
    "frage": "Was deutet bei Autismus auf atypische Gesichtsverarbeitung hin?",
    "a": "Bevorzugung geometrischer Formen",
    "b": "Blick auf Mimik",
    "c": "Häufiges Blinzeln",
    "d": "Interesse an Geräuschen",
    "richtig": "a",
    "begruendung": "Die Antwort beschreibt den andere-Ethnie-Effekt und erfahrungsbasierte Spezialisierung präzise (andere-Ethnie-Effekt = bessere Unterscheidung eigener Ethnie) (Wahrnehmungsverengung = Spezialisierung auf häufige Stimuli) Mögliche Klausurfallen: Attraktivitätseffekt statt Gedächtnisvorteil angenommen. Alterseffekte (6 vs. 9 Monate) vertauscht."
  },
  {
    "frage": "Was ist „Wahrnehmungskonstanz“?",
    "a": "Veränderung der Netzhautbilder",
    "b": "Konstante Wahrnehmung trotz wechselnder Sinnesdaten",
    "c": "Fehlende Tiefenwahrnehmung",
    "d": "Illusion",
    "richtig": "b",
    "begruendung": "Konstanzphänomene trotz variabler Netzhautbilder korrekt beschrieben (Wahrnehmungskonstanz = stabile Größe/Form trotz veränderter Projektion) Mögliche Klausurfallen: Netzhautbild mit wahrgenommener Größe gleichgesetzt. Konstanz mit Sehschärfe verwechselt."
  },
  {
    "frage": "Was ermöglicht die Objekttrennung?",
    "a": "Farbempfinden",
    "b": "Tiefenwahrnehmung",
    "c": "Gesichtsidentifikation",
    "d": "Erkennen einzelner Gegenstände",
    "richtig": "d",
    "begruendung": "Die Antwort beschreibt den andere-Ethnie-Effekt und erfahrungsbasierte Spezialisierung präzise (andere-Ethnie-Effekt = bessere Unterscheidung eigener Ethnie) (Wahrnehmungsverengung = Spezialisierung auf häufige Stimuli) Mögliche Klausurfallen: Attraktivitätseffekt statt Gedächtnisvorteil angenommen. Alterseffekte (6 vs. 9 Monate) vertauscht."
  },
  {
    "frage": "Welche Information ist entscheidend für Objekttrennung bei 4-Monatigen?",
    "a": "Farbe",
    "b": "Bewegung",
    "c": "Textur",
    "d": "Form",
    "richtig": "b",
    "begruendung": "Vorrang gemeinsamer Bewegung als Hinweis auf Einheitlichkeit gegenüber statischen Merkmalen (Objekttrennung = Abgrenzung einzelner Gegenstände) (gemeinsame Bewegung = Hinweis auf Einheitlichkeit) Mögliche Klausurfallen: Farbe/Textur überbewertet. Bewegungshinweis ignoriert."
  },
  {
    "frage": "Was zeigte Kellman & Spelke (1983)?",
    "a": "Babys erkennen Farben",
    "b": "Bewegung hilft bei Objektwahrnehmung",
    "c": "Gesichtererkennung ist angeboren",
    "d": "6-Monate-Babys erkennen auch Affen",
    "richtig": "b",
    "begruendung": "Die Antwort beschreibt den andere-Ethnie-Effekt und erfahrungsbasierte Spezialisierung präzise (andere-Ethnie-Effekt = bessere Unterscheidung eigener Ethnie) (Wahrnehmungsverengung = Spezialisierung auf häufige Stimuli) Mögliche Klausurfallen: Attraktivitätseffekt statt Gedächtnisvorteil angenommen. Alterseffekte (6 vs. 9 Monate) vertauscht."
  },
  {
    "frage": "Was versteht man unter „Erwartungsverletzung“?",
    "a": "Stressreaktion",
    "b": "Experimentelles Paradigma zur Überraschung bei unmöglichen Ereignissen",
    "c": "Gedächtnisfehler",
    "d": "Verhaltenstraining",
    "richtig": "b",
    "begruendung": "Korrekte Definition/Logik gemäß Kap. 5"
  },
  {
    "frage": "Was zeigte Baillargeon (1987)?",
    "a": "Kinder verstehen Schwerkraft",
    "b": "Piaget hatte recht",
    "c": "Objektpermanenz entsteht erst mit 1 Jahr",
    "d": "Säuglinge repräsentieren unsichtbare Objekte",
    "richtig": "d",
    "begruendung": "Korrekte Definition/Logik gemäß Kap. 5"
  },
  {
    "frage": "Was signalisiert „Objektausdehnung“?",
    "a": "Objekt wird kleiner",
    "b": "Entfernung nimmt ab",
    "c": "Bewegung zur Seite",
    "d": "Veränderung der Farbe",
    "richtig": "b",
    "begruendung": "Korrekte Definition/Logik gemäß Kap. 5"
  },
  {
    "frage": "Was bedeutet „binokulare Disparität“?",
    "a": "Unterschiedliche Farbwahrnehmung",
    "b": "Unterschiedliche Netzhautbilder beider Augen",
    "c": "Bewegungskontrast",
    "d": "Pupillendifferenz",
    "richtig": "b",
    "begruendung": "Die Lösung trennt korrekt mono- und binokulare Tiefenhinweise und ordnet die Entwicklungszeitpunkte richtig ein (binokulare Disparität = Unterschied der Netzhautbilder) (Stereosehen = Tiefe aus Disparität) Mögliche Klausurfallen: Mono-/binokulare Hinweise vertauscht. Zeitpunkt der Stereopsis falsch."
  },
  {
    "frage": "Wann entwickelt sich Stereosehen?",
    "a": "Geburt",
    "b": "4 Monate",
    "c": "2 Monate",
    "d": "8 Monate",
    "richtig": "b",
    "begruendung": "Die Lösung trennt korrekt mono- und binokulare Tiefenhinweise und ordnet die Entwicklungszeitpunkte richtig ein (binokulare Disparität = Unterschied der Netzhautbilder) (Stereosehen = Tiefe aus Disparität) Mögliche Klausurfallen: Mono-/binokulare Hinweise vertauscht. Zeitpunkt der Stereopsis falsch."
  },
  {
    "frage": "Wie nennt man Tiefenhinweise, die mit einem Auge funktionieren?",
    "a": "Binokular",
    "b": "Sensorisch",
    "c": "Monokular",
    "d": "Peripher",
    "richtig": "c",
    "begruendung": "Die Lösung trennt korrekt mono- und binokulare Tiefenhinweise und ordnet die Entwicklungszeitpunkte richtig ein (binokulare Disparität = Unterschied der Netzhautbilder) (Stereosehen = Tiefe aus Disparität) Mögliche Klausurfallen: Mono-/binokulare Hinweise vertauscht. Zeitpunkt der Stereopsis falsch."
  },
  {
    "frage": "Was bewies Yonas et al. (1978)?",
    "a": "Siebenmonatige nutzen relative Größe als Tiefenhinweis",
    "b": "Fünfmonatige erkennen keine Tiefe",
    "c": "Tiefe nur bei zwei Augen",
    "d": "Keine Tiefenwahrnehmung vor 1 Jahr",
    "richtig": "a",
    "begruendung": "Die Lösung trennt korrekt mono- und binokulare Tiefenhinweise und ordnet die Entwicklungszeitpunkte richtig ein (binokulare Disparität = Unterschied der Netzhautbilder) (Stereosehen = Tiefe aus Disparität) Mögliche Klausurfallen: Mono-/binokulare Hinweise vertauscht. Zeitpunkt der Stereopsis falsch."
  },
  {
    "frage": "Wann beginnen Babys, Bilder als Symbole zu verstehen?",
    "a": "9 Monate",
    "b": "3 Jahre",
    "c": "19 Monate",
    "d": "Bei Schuleintritt",
    "richtig": "c",
    "begruendung": "Korrekte Definition/Logik gemäß Kap. 5"
  },
  {
    "frage": "Was passiert, wenn Babys ein realistisches Foto sehen?",
    "a": "Sie ignorieren es",
    "b": "Sie weinen",
    "c": "Sie versuchen, das Objekt zu greifen",
    "d": "Sie erkennen Symbolcharakter sofort",
    "richtig": "c",
    "begruendung": "Korrekte Definition/Logik gemäß Kap. 5"
  },
  {
    "frage": "Wie gut ist das Hörsystem bei Geburt entwickelt?",
    "a": "Relativ gut",
    "b": "Kaum funktionsfähig",
    "c": "Besser als visuelles",
    "d": "Nur für Musik empfindlich",
    "richtig": "a",
    "begruendung": "Korrekte Definition/Logik gemäß Kap. 5"
  },
  {
    "frage": "Was ist „auditive Lokalisierung“?",
    "a": "Erkennen von Stimmen",
    "b": "Bestimmung der Schallquelle im Raum",
    "c": "Erlernen von Sprache",
    "d": "Frequenzunterscheidung",
    "richtig": "b",
    "begruendung": "Schallquellenlokalisation über Laufzeit- und Intensitätsdifferenzen schlüssig erklärt (ITD = Laufzeitdifferenz) (ILD = Intensitätsdifferenz) Mögliche Klausurfallen: Nur Lautstärkeunterschiede bedacht. Kopfabstand unterschätzt."
  },
  {
    "frage": "Warum fällt Babys die Lokalisierung schwerer?",
    "a": "Zu kleine Ohren",
    "b": "Keine Ohrenmuschel",
    "c": "Fehlende Erfahrung",
    "d": "Kleiner Kopfabstand zwischen Ohren",
    "richtig": "d",
    "begruendung": "Schallquellenlokalisation über Laufzeit- und Intensitätsdifferenzen schlüssig erklärt (ITD = Laufzeitdifferenz) (ILD = Intensitätsdifferenz) Mögliche Klausurfallen: Nur Lautstärkeunterschiede bedacht. Kopfabstand unterschätzt."
  },
  {
    "frage": "Was verbessert sich im ersten Jahr deutlich?",
    "a": "Kontrastsehen",
    "b": "Geschmackssinn",
    "c": "Schallleitung und neuronale Hörbahnen",
    "d": "Gleichgewicht",
    "richtig": "c",
    "begruendung": "Korrekte Definition/Logik gemäß Kap. 5"
  },
  {
    "frage": "Welche Reflexe sind bei Neugeborenen angeboren?",
    "a": "Greif-, Saug- und Schreitreflex",
    "b": "Nur Greifreflex",
    "c": "Nur Saugreflex",
    "d": "Keine",
    "richtig": "a",
    "begruendung": "Korrekte Definition/Logik gemäß Kap. 5"
  },
  {
    "frage": "Was beschreibt die „Meilenstein-Abfolge“?",
    "a": "Typische Reihenfolge motorischer Entwicklung",
    "b": "Zufällige Bewegungen",
    "c": "Sozialverhalten",
    "d": "Lernfortschritt",
    "richtig": "a",
    "begruendung": "Motorik als Ergebnis dynamischer Systeme aus Körper, Gehirn, Umwelt und Motivation betont (dynamische Systeme = Zusammenspiel mehrerer Teilprozesse) Mögliche Klausurfallen: Nur Reifung betont. Kulturelle Einflüsse ignoriert."
  },
  {
    "frage": "Was zeigt das dynamische Systemmodell (Thelen)?",
    "a": "Motorik entsteht aus Zusammenspiel vieler Systeme",
    "b": "Motorik entwickelt sich linear",
    "c": "Reifung allein",
    "d": "Keine Umweltwirkung",
    "richtig": "a",
    "begruendung": "Motorik als Ergebnis dynamischer Systeme aus Körper, Gehirn, Umwelt und Motivation betont (dynamische Systeme = Zusammenspiel mehrerer Teilprozesse) Mögliche Klausurfallen: Nur Reifung betont. Kulturelle Einflüsse ignoriert."
  },
  {
    "frage": "Wann beginnen Babys typischerweise zu laufen?",
    "a": "12 Monate",
    "b": "6 Monate",
    "c": "9 Monate",
    "d": "18 Monate",
    "richtig": "a",
    "begruendung": "Motorik als Ergebnis dynamischer Systeme aus Körper, Gehirn, Umwelt und Motivation betont (dynamische Systeme = Zusammenspiel mehrerer Teilprozesse) Mögliche Klausurfallen: Nur Reifung betont. Kulturelle Einflüsse ignoriert."
  },
  {
    "frage": "Was ist entscheidend für motorische Fortschritte?",
    "a": "Nur Genetik",
    "b": "Gewicht des Babys",
    "c": "Ernährung",
    "d": "Interaktion aus Reifung, Erfahrung und Motivation",
    "richtig": "d",
    "begruendung": "Korrekte Definition/Logik gemäß Kap. 5"
  },
  {
    "frage": "Welche Rolle spielt der soziokulturelle Kontext?",
    "a": "Starke, da Übungsmöglichkeiten variieren",
    "b": "Keine",
    "c": "Nur in westlichen Ländern",
    "d": "Nur bei Sprache",
    "richtig": "a",
    "begruendung": "Korrekte Definition/Logik gemäß Kap. 5"
  },
  {
    "frage": "Was ist „Habituation“?",
    "a": "Lernen durch Belohnung",
    "b": "Angstreaktion",
    "c": "Gewöhnung an einen Reiz",
    "d": "Klassische Konditionierung",
    "richtig": "c",
    "begruendung": "Die Option trifft die Gewöhnungslogik: Wiederholung senkt die Reaktion; ein neuer Reiz hebt sie an (Habituation = Reaktionsabnahme bei Wiederholung) (Dishabituation = Wiederanstieg bei neuem Reiz) Mögliche Klausurfallen: Habituation mit Ermüdung verwechselt. Dishabituation als bloße Neugier missdeutet."
  },
  {
    "frage": "Was ist „Dishabituation“?",
    "a": "Vergessen",
    "b": "Müdigkeit",
    "c": "Wiederkehr der Reaktion auf neuen Reiz",
    "d": "Konditionierung",
    "richtig": "c",
    "begruendung": "Die Option trifft die Gewöhnungslogik: Wiederholung senkt die Reaktion; ein neuer Reiz hebt sie an (Habituation = Reaktionsabnahme bei Wiederholung) (Dishabituation = Wiederanstieg bei neuem Reiz) Mögliche Klausurfallen: Habituation mit Ermüdung verwechselt. Dishabituation als bloße Neugier missdeutet."
  },
  {
    "frage": "Was versteht man unter „statistischem Lernen“?",
    "a": "Auswendiglernen",
    "b": "Erkennen von Regelmäßigkeiten in der Umwelt",
    "c": "Motorisches Lernen",
    "d": "Zufälliges Verhalten",
    "richtig": "b",
    "begruendung": "Präzise Differenzierung der Lernformen und ihrer Evidenz (operante Konditionierung = Lernen über Konsequenzen) (klassische Konditionierung = Reizkopplung) Mögliche Klausurfallen: Operant vs. klassisch verwechselt. Beobachtung mit bloßer Exposition gleichgesetzt."
  },
  {
    "frage": "Klassische Konditionierung beruht auf…",
    "a": "Verstärkung",
    "b": "Nachahmung",
    "c": "Versuch-Irrtum",
    "d": "Verknüpfung neutraler und unbedingter Reize",
    "richtig": "d",
    "begruendung": "Präzise Differenzierung der Lernformen und ihrer Evidenz (operante Konditionierung = Lernen über Konsequenzen) (klassische Konditionierung = Reizkopplung) Mögliche Klausurfallen: Operant vs. klassisch verwechselt. Beobachtung mit bloßer Exposition gleichgesetzt."
  },
  {
    "frage": "Operante Konditionierung bedeutet…",
    "a": "Lernen durch Beobachtung",
    "b": "Lernen ohne Verstärkung",
    "c": "Lernen durch Konsequenzen des Verhaltens",
    "d": "Automatische Reflexe",
    "richtig": "c",
    "begruendung": "Präzise Differenzierung der Lernformen und ihrer Evidenz (operante Konditionierung = Lernen über Konsequenzen) (klassische Konditionierung = Reizkopplung) Mögliche Klausurfallen: Operant vs. klassisch verwechselt. Beobachtung mit bloßer Exposition gleichgesetzt."
  },
  {
    "frage": "Was ist „Beobachtungslernen“?",
    "a": "Lernen durch Versuch-Irrtum",
    "b": "Lernen durch Reizkopplung",
    "c": "Motorisches Üben",
    "d": "Lernen durch Nachahmung anderer",
    "richtig": "d",
    "begruendung": "Präzise Differenzierung der Lernformen und ihrer Evidenz (operante Konditionierung = Lernen über Konsequenzen) (klassische Konditionierung = Reizkopplung) Mögliche Klausurfallen: Operant vs. klassisch verwechselt. Beobachtung mit bloßer Exposition gleichgesetzt."
  },
  {
    "frage": "Wer prägte das Konzept des Nachahmungslernens?",
    "a": "Skinner",
    "b": "Piaget",
    "c": "Bandura",
    "d": "Vygotsky",
    "richtig": "c",
    "begruendung": "Präzise Differenzierung der Lernformen und ihrer Evidenz (operante Konditionierung = Lernen über Konsequenzen) (klassische Konditionierung = Reizkopplung) Mögliche Klausurfallen: Operant vs. klassisch verwechselt. Beobachtung mit bloßer Exposition gleichgesetzt."
  },
  {
    "frage": "„Rationales Lernen“ meint…",
    "a": "Nutzung von Vorwissen zur Hypothesenbildung",
    "b": "Versuch-Irrtum",
    "c": "Zufälliges Lernen",
    "d": "Belohnungslernen",
    "richtig": "a",
    "begruendung": "Präzise Differenzierung der Lernformen und ihrer Evidenz (operante Konditionierung = Lernen über Konsequenzen) (klassische Konditionierung = Reizkopplung) Mögliche Klausurfallen: Operant vs. klassisch verwechselt. Beobachtung mit bloßer Exposition gleichgesetzt."
  },
  {
    "frage": "„Aktives Lernen“ bedeutet…",
    "a": "Passives Beobachten",
    "b": "Lernen im Schlaf",
    "c": "Reiz-Reaktions-Automatik",
    "d": "Selbstgesteuertes Erkunden",
    "richtig": "d",
    "begruendung": "Präzise Differenzierung der Lernformen und ihrer Evidenz (operante Konditionierung = Lernen über Konsequenzen) (klassische Konditionierung = Reizkopplung) Mögliche Klausurfallen: Operant vs. klassisch verwechselt. Beobachtung mit bloßer Exposition gleichgesetzt."
  },
  {
    "frage": "Wann zeigt sich erstes Gedächtnis?",
    "a": "2 Monate",
    "b": "Geburt",
    "c": "6 Monate",
    "d": "1 Jahr",
    "richtig": "a",
    "begruendung": "Korrekte Definition/Logik gemäß Kap. 5"
  },
  {
    "frage": "Was zeigte Rovee-Collier (Mobile-Versuch)?",
    "a": "Kein Gedächtnis bei Babys",
    "b": "Lernen nur mit Sprache",
    "c": "Keine Habituation",
    "d": "Babys erinnern Lernaufgabe nach Tagen",
    "richtig": "d",
    "begruendung": "Die Option trifft die Gewöhnungslogik: Wiederholung senkt die Reaktion; ein neuer Reiz hebt sie an (Habituation = Reaktionsabnahme bei Wiederholung) (Dishabituation = Wiederanstieg bei neuem Reiz) Mögliche Klausurfallen: Habituation mit Ermüdung verwechselt. Dishabituation als bloße Neugier missdeutet."
  },
  {
    "frage": "Welche Rolle spielt Wiedererkennungsgedächtnis?",
    "a": "Früh entwickelt",
    "b": "Fehlend",
    "c": "Nur bei Sprache",
    "d": "Spät im Schulalter",
    "richtig": "a",
    "begruendung": "Korrekte Definition/Logik gemäß Kap. 5"
  },
  {
    "frage": "Was beeinflusst die Blickrichtung auf Gesichter kulturell?",
    "a": "Soziales Lernen",
    "b": "Gene",
    "c": "Ernährung",
    "d": "Lautstärke",
    "richtig": "a",
    "begruendung": "Die Antwort beschreibt den andere-Ethnie-Effekt und erfahrungsbasierte Spezialisierung präzise (andere-Ethnie-Effekt = bessere Unterscheidung eigener Ethnie) (Wahrnehmungsverengung = Spezialisierung auf häufige Stimuli) Mögliche Klausurfallen: Attraktivitätseffekt statt Gedächtnisvorteil angenommen. Alterseffekte (6 vs. 9 Monate) vertauscht."
  },
  {
    "frage": "Was betonen westliche Erwachsene in Szenen stärker?",
    "a": "Hintergrund",
    "b": "Handlungen",
    "c": "Farben",
    "d": "Zentrale Objekte",
    "richtig": "d",
    "begruendung": "Korrekte Definition/Logik gemäß Kap. 5"
  },
  {
    "frage": "Wie unterscheiden sich ostasiatische Kleinkinder bei der Szenenwahrnehmung?",
    "a": "Sie achten stärker auf Handlungen",
    "b": "Sie fixieren Objekte",
    "c": "Keine Unterschiede",
    "d": "Zufällige Blickbewegungen",
    "richtig": "a",
    "begruendung": "Saubere Trennung zwischen Reizaufnahme (Empfindung) und Interpretation (Wahrnehmung) (Sinnesempfindung = physiologische Reizaufnahme) (Wahrnehmung = Interpretation/Strukturierung sensorischer Daten) Mögliche Klausurfallen: Empfindung und Wahrnehmung vertauscht. Definitionen auf falscher Ebene."
  },
  {
    "frage": "Was zeigte Waxman et al. (2016)?",
    "a": "Westliche Kinder achten auf Objekte, ostasiatische auf Handlungen",
    "b": "Gleiche Aufmerksamkeit in allen Kulturen",
    "c": "Umgekehrt",
    "d": "Kein kultureller Einfluss",
    "richtig": "a",
    "begruendung": "Korrekte Definition/Logik gemäß Kap. 5"
  },
  {
    "frage": "Was zeigt die frühe Wahrnehmungsforschung insgesamt?",
    "a": "Babys sind passiv",
    "b": "Lernen beginnt erst im Kindergarten",
    "c": "Babys sind aktive Lerner",
    "d": "Wahrnehmung ist angeboren und starr",
    "richtig": "c",
    "begruendung": "Saubere Trennung zwischen Reizaufnahme (Empfindung) und Interpretation (Wahrnehmung) (Sinnesempfindung = physiologische Reizaufnahme) (Wahrnehmung = Interpretation/Strukturierung sensorischer Daten) Mögliche Klausurfallen: Empfindung und Wahrnehmung vertauscht. Definitionen auf falscher Ebene."
  },
  {
    "frage": "Wie verlaufen sensorische Entwicklungen allgemein?",
    "a": "Schnell und verflochten",
    "b": "Langsam und unabhängig",
    "c": "Zufällig",
    "d": "Nur genetisch",
    "richtig": "a",
    "begruendung": "Motorik als Ergebnis dynamischer Systeme aus Körper, Gehirn, Umwelt und Motivation betont (dynamische Systeme = Zusammenspiel mehrerer Teilprozesse) Mögliche Klausurfallen: Nur Reifung betont. Kulturelle Einflüsse ignoriert."
  },
  {
    "frage": "Welche Reaktion löst eine Berührung an der Wange des Neugeborenen typischerweise aus?",
    "a": "Greifreflex",
    "b": "Saugreflex",
    "c": "Moro-Reflex",
    "d": "Suchreflex",
    "richtig": "d",
    "begruendung": "Korrekte Definition/Logik gemäß Kap. 5"
  },
  {
    "frage": "Was gilt bei frühkindlichen Reflexen als Warnhinweis?",
    "a": "Starkes Auslösen bei Hunger",
    "b": "Ausbleiben des Moro-Reflexes bei Lärm",
    "c": "Persistenz eines frühen Reflexes über den üblichen Zeitraum hinaus",
    "d": "Unterschiedliche Ausprägung zwischen den Armen",
    "richtig": "c",
    "begruendung": "Korrekte Definition/Logik gemäß Kap. 5"
  },
  {
    "frage": "Warum fällt Neugeborenen auditive Lokalisierung schwerer als älteren Kindern?",
    "a": "Fehlende Cochlea",
    "b": "Zu hohe Schallleitfähigkeit",
    "c": "Kleiner Kopfumfang und fehlende „mentale Karten“ des Hörraums",
    "d": "Überempfindliche Ohrmuschel",
    "richtig": "c",
    "begruendung": "Schallquellenlokalisation über Laufzeit- und Intensitätsdifferenzen schlüssig erklärt (ITD = Laufzeitdifferenz) (ILD = Intensitätsdifferenz) Mögliche Klausurfallen: Nur Lautstärkeunterschiede bedacht. Kopfabstand unterschätzt."
  },
  {
    "frage": "Was bevorzugen Babys typischerweise beim Singen von Betreuungspersonen?",
    "a": "An Erwachsene gerichtetes Singen",
    "b": "Instrumentalmusik",
    "c": "Flüstern mit Musik",
    "d": "An Babys gerichtetes Singen",
    "richtig": "d",
    "begruendung": "Korrekte Definition/Logik gemäß Kap. 5"
  },
  {
    "frage": "Welcher Effekt zeigte eine Intervention mit „Musikstunden“ bei 9-Monatigen?",
    "a": "Bessere Mustererkennung in Musik und Sprache",
    "b": "Kein Effekt",
    "c": "Bessere Mustererkennung in Musik, aber nicht in Sprache",
    "d": "Nur bessere Motorik",
    "richtig": "a",
    "begruendung": "Korrekte Definition/Logik gemäß Kap. 5"
  },
  {
    "frage": "Welche frühe Erfahrung erhöhte später die Akzeptanz von Knoblauchgeschmack (8–9 J.)?",
    "a": "Pränatale Exposition",
    "b": "Kontakt in Beikostphase",
    "c": "Exposition über Muttermilch",
    "d": "Kein Zusammenhang",
    "richtig": "a",
    "begruendung": "Korrekte Definition/Logik gemäß Kap. 5"
  },
  {
    "frage": "Welche Aussage zu bitteren Geschmäckern trifft zu?",
    "a": "Frühe Erfahrung senkt spätere Akzeptanz",
    "b": "Nur Salz zeigt den Effekt",
    "c": "Vor dem 6. Monat erhöht sie spätere Präferenz",
    "d": "Keine Langzeiteffekte",
    "richtig": "c",
    "begruendung": "Korrekte Definition/Logik gemäß Kap. 5"
  },
  {
    "frage": "Was sagte Lebensmittel-Neophobie bei Kleinkindern besser vorher?",
    "a": "Reaktivität auf Gerüche",
    "b": "Reaktivität auf Geschmäcker",
    "c": "Texturpräferenz",
    "d": "Süßpräferenz",
    "richtig": "a",
    "begruendung": "Präzise Differenzierung der Lernformen und ihrer Evidenz (operante Konditionierung = Lernen über Konsequenzen) (klassische Konditionierung = Reizkopplung) Mögliche Klausurfallen: Operant vs. klassisch verwechselt. Beobachtung mit bloßer Exposition gleichgesetzt."
  },
  {
    "frage": "Was bevorzugen Neugeborene beim Geruch?",
    "a": "Muttermilch der eigenen Mutter",
    "b": "Vanille",
    "c": "Neutral",
    "d": "Fremde Parfüms",
    "richtig": "a",
    "begruendung": "Korrekte Definition/Logik gemäß Kap. 5"
  },
  {
    "frage": "Welche Erkundungsform dominiert in den ersten Monaten?",
    "a": "Orale Exploration",
    "b": "Visuelle Exploration",
    "c": "Manuelle Exploration",
    "d": "Symbolische Exploration",
    "richtig": "a",
    "begruendung": "Korrekte Definition/Logik gemäß Kap. 5"
  },
  {
    "frage": "Ab wann verschiebt sich die Exploration deutlich hin zu den Händen?",
    "a": "Geburt",
    "b": "~2 Monate",
    "c": "~4 Monate",
    "d": "~9 Monate",
    "richtig": "c",
    "begruendung": "Korrekte Definition/Logik gemäß Kap. 5"
  },
  {
    "frage": "Welche Befundlage stützt intermodale TAST-→SEH-Zuordnung bei Säuglingen?",
    "a": "Bereits Neugeborene/1-Monatige erkennen den zuvor betasteten Schnuller visuell",
    "b": "Keine",
    "c": "Nur ab 12 Monaten",
    "d": "Nur mit Sprache",
    "richtig": "a",
    "begruendung": "Korrekte Definition/Logik gemäß Kap. 5"
  },
  {
    "frage": "Der McGurk-Effekt bei Säuglingen zeigt…",
    "a": "Keine Integration",
    "b": "Frühe audiovisuelle Integration (z. B. ~4,5 Monate)",
    "c": "Nur akustische Dominanz",
    "d": "Tritt erst im Schulalter auf",
    "richtig": "b",
    "begruendung": "Korrekte Definition/Logik gemäß Kap. 5"
  },
  {
    "frage": "Was illustriert Wahrnehmungsverengung (intermodal)?",
    "a": "Spätere Kinder ordnen fremde Sprechlaute besser zu",
    "b": "Frühe Säuglinge können fremde Laute/Gesichtsbewegungen zuordnen, ältere verlieren das",
    "c": "Keine Entwicklungsänderung",
    "d": "Nur motorisch",
    "richtig": "b",
    "begruendung": "Die Antwort beschreibt den andere-Ethnie-Effekt und erfahrungsbasierte Spezialisierung präzise (andere-Ethnie-Effekt = bessere Unterscheidung eigener Ethnie) (Wahrnehmungsverengung = Spezialisierung auf häufige Stimuli) Mögliche Klausurfallen: Attraktivitätseffekt statt Gedächtnisvorteil angenommen. Alterseffekte (6 vs. 9 Monate) vertauscht."
  },
  {
    "frage": "Was zeigte die Studie mit ehemals blinden Erwachsenen (Katarakt-OP) zu TAST↔SEH-Matching?",
    "a": "Sofort gute Zuordnung",
    "b": "Keine Lernbarkeit",
    "c": "Erfolgreiche Zuordnung erst nach wenigen Tagen visueller Erfahrung",
    "d": "Nur mit Sprache",
    "richtig": "c",
    "begruendung": "Korrekte Definition/Logik gemäß Kap. 5"
  },
  {
    "frage": "Ab wann verstehen Kinder Bilder als Symbole (greifen nicht mehr danach)?",
    "a": "9 Monate",
    "b": "12 Monate",
    "c": "3 Jahre",
    "d": "~19 Monate",
    "richtig": "d",
    "begruendung": "Korrekte Definition/Logik gemäß Kap. 5"
  },
  {
    "frage": "Welche Aussage zu Videochat vs. Fernsehsendung mit 2-Jährigen trifft zu?",
    "a": "Kontingenter Videochat vermittelt Wörter so gut wie Live-Interaktion",
    "b": "Beides gleich gut",
    "c": "Fernsehsendung besser",
    "d": "Kein Lernen über Displays",
    "richtig": "a",
    "begruendung": "Korrekte Definition/Logik gemäß Kap. 5"
  },
  {
    "frage": "Kinder ohne frühe Bilderfahrung…",
    "a": "Verstehen Fotos sofort",
    "b": "Zeigen Überlegenheit in Bildbenennung",
    "c": "Haben anfangs größere Schwierigkeiten mit Fotos/Zeichnungen",
    "d": "Lernen langsamer sprechen",
    "richtig": "c",
    "begruendung": "Korrekte Definition/Logik gemäß Kap. 5"
  },
  {
    "frage": "Welche Aussage zur motorischen Entwicklung ist korrekt?",
    "a": "Linear rein reifungsgetrieben",
    "b": "Nur Körpergewicht zählt",
    "c": "Kultur ohne Einfluss",
    "d": "Reifung + Umwelt + Motivation im dynamischen System",
    "richtig": "d",
    "begruendung": "Motorik als Ergebnis dynamischer Systeme aus Körper, Gehirn, Umwelt und Motivation betont (dynamische Systeme = Zusammenspiel mehrerer Teilprozesse) Mögliche Klausurfallen: Nur Reifung betont. Kulturelle Einflüsse ignoriert."
  },
  {
    "frage": "Was sind „Affordanzen“?",
    "a": "Angebotscharaktere von Dingen/Situationen für Handlungen",
    "b": "Frühkindliche Reflexe",
    "c": "Neuronale Karten",
    "d": "Motorische Barrieren",
    "richtig": "a",
    "begruendung": "Korrekte Definition/Logik gemäß Kap. 5"
  },
  {
    "frage": "Kulturelle Unterschiede bei Meilensteinen zeigen u. a., dass…",
    "a": "überall identische Zeitpunkte gelten",
    "b": "Übungspraktiken (z. B. Mali) frühe Motorik beschleunigen können",
    "c": "Förderung keinen Effekt hat",
    "d": "nur Genetik zählt",
    "richtig": "b",
    "begruendung": "Motorik als Ergebnis dynamischer Systeme aus Körper, Gehirn, Umwelt und Motivation betont (dynamische Systeme = Zusammenspiel mehrerer Teilprozesse) Mögliche Klausurfallen: Nur Reifung betont. Kulturelle Einflüsse ignoriert."
  },
  {
    "frage": "Was beschreibt die kaskadenartige Wirkung früher Motorik?",
    "a": "Auswirkungen auf Wahrnehmung und Sozialverhalten",
    "b": "Nur schnellere Muskeln",
    "c": "Nur Schlaf",
    "d": "Kein Transfer",
    "richtig": "a",
    "begruendung": "Saubere Trennung zwischen Reizaufnahme (Empfindung) und Interpretation (Wahrnehmung) (Sinnesempfindung = physiologische Reizaufnahme) (Wahrnehmung = Interpretation/Strukturierung sensorischer Daten) Mögliche Klausurfallen: Empfindung und Wahrnehmung vertauscht. Definitionen auf falscher Ebene."
  },
  {
    "frage": "Rovee-Collier-Mobile: Worum geht es?",
    "a": "Klassische Konditionierung",
    "b": "Operante Konditionierung (Kontingenz zwischen Strampeln und Mobile)",
    "c": "Beobachtungslernen",
    "d": "Habituation",
    "richtig": "b",
    "begruendung": "Die Option trifft die Gewöhnungslogik: Wiederholung senkt die Reaktion; ein neuer Reiz hebt sie an (Habituation = Reaktionsabnahme bei Wiederholung) (Dishabituation = Wiederanstieg bei neuem Reiz) Mögliche Klausurfallen: Habituation mit Ermüdung verwechselt. Dishabituation als bloße Neugier missdeutet."
  },
  {
    "frage": "Wie lange hielten Babys die Mobile-Kontingenz im Gedächtnis?",
    "a": "3 Monate: 1 Tag; 6 Monate: 3 Tage",
    "b": "3 Monate: 1 Woche; 6 Monate: 2 Wochen",
    "c": "3 Monate: 1 Monat; 6 Monate: 2 Monate",
    "d": "Keine Retention",
    "richtig": "b",
    "begruendung": "Korrekte Definition/Logik gemäß Kap. 5"
  },
  {
    "frage": "Kontextspezifität im Mobile-Paradigma (<6 Monate):",
    "a": "Generalisieren immer",
    "b": "Erinnern nur mit demselben Mobile",
    "c": "Erinnern nur mit anderem Mobile",
    "d": "Kein Einfluss",
    "richtig": "b",
    "begruendung": "Korrekte Definition/Logik gemäß Kap. 5"
  },
  {
    "frage": "Was verlängert die Retention im Mobile-Paradigma zusätzlich?",
    "a": "Schlaf",
    "b": "Neues Mobile im Test",
    "c": "Lärm",
    "d": "Kurze spätere Betrachtung des bewegten Mobiles („Reminder“)",
    "richtig": "d",
    "begruendung": "Korrekte Definition/Logik gemäß Kap. 5"
  },
  {
    "frage": "Klassische Konditionierung bei Neugeborenen wurde u. a. gezeigt durch…",
    "a": "Speichelfluss auf Musik",
    "b": "Blinzelkonditionierung mit Ton (CS) + Luftzug (UCS)",
    "c": "Greifreflex auf Licht",
    "d": "Blickpräferenz auf Gesichter",
    "richtig": "b",
    "begruendung": "Die Antwort beschreibt den andere-Ethnie-Effekt und erfahrungsbasierte Spezialisierung präzise (andere-Ethnie-Effekt = bessere Unterscheidung eigener Ethnie) (Wahrnehmungsverengung = Spezialisierung auf häufige Stimuli) Mögliche Klausurfallen: Attraktivitätseffekt statt Gedächtnisvorteil angenommen. Alterseffekte (6 vs. 9 Monate) vertauscht."
  },
  {
    "frage": "Beobachtungslernen bei Neugeborenen (Zungenstrecken) ist…",
    "a": "empirisch umstritten/inkonsistent",
    "b": "zweifelsfrei belegt",
    "c": "widerlegt",
    "d": "nur bei Affen vorhanden",
    "richtig": "a",
    "begruendung": "Präzise Differenzierung der Lernformen und ihrer Evidenz (operante Konditionierung = Lernen über Konsequenzen) (klassische Konditionierung = Reizkopplung) Mögliche Klausurfallen: Operant vs. klassisch verwechselt. Beobachtung mit bloßer Exposition gleichgesetzt."
  },
  {
    "frage": "Wahrnehmungsverengung meint…",
    "a": "generelle Verschlechterung",
    "b": "Sehfehler",
    "c": "motorische Einengung",
    "d": "erfahrungsgetriebene Verfeinerung mit Verlust breiter Diskriminationsfähigkeit",
    "richtig": "d",
    "begruendung": "Die Antwort beschreibt den andere-Ethnie-Effekt und erfahrungsbasierte Spezialisierung präzise (andere-Ethnie-Effekt = bessere Unterscheidung eigener Ethnie) (Wahrnehmungsverengung = Spezialisierung auf häufige Stimuli) Mögliche Klausurfallen: Attraktivitätseffekt statt Gedächtnisvorteil angenommen. Alterseffekte (6 vs. 9 Monate) vertauscht."
  },
  {
    "frage": "Welche Tiefenhinweis-Sensitivität ist laut Zusammenfassung mit ~7 Monaten typisch?",
    "a": "Keine Tiefenhinweise",
    "b": "Nur binokular",
    "c": "Sensitivität für vielfältige monokulare Tiefenhinweise",
    "d": "Erst nach 2 Jahren",
    "richtig": "c",
    "begruendung": "Die Lösung trennt korrekt mono- und binokulare Tiefenhinweise und ordnet die Entwicklungszeitpunkte richtig ein (binokulare Disparität = Unterschied der Netzhautbilder) (Stereosehen = Tiefe aus Disparität) Mögliche Klausurfallen: Mono-/binokulare Hinweise vertauscht. Zeitpunkt der Stereopsis falsch."
  },
  {
    "frage": "Welche Aussage zur Objektpermanenz ist nach neueren Befunden zutreffend?",
    "a": "Zeigt sich bereits bei jungen Säuglingen (längeres Hinschauen bei „unmöglichen“ Ereignissen)",
    "b": "Entsteht erst nach 1 Jahr",
    "c": "Nur mit Sprache",
    "d": "Erst im Vorschulalter",
    "richtig": "a",
    "begruendung": "Korrekte Definition/Logik gemäß Kap. 5"
  },
  {
    "frage": "Welche Aussage zur auditiven Entwicklung trifft zu?",
    "a": "Bei Geburt unreif",
    "b": "Stagnation im 1. Jahr",
    "c": "Reift erst mit 3 Jahren",
    "d": "Bei Geburt relativ gut entwickelt, reift im 1. Jahr stark weiter",
    "richtig": "d",
    "begruendung": "Schallquellenlokalisation über Laufzeit- und Intensitätsdifferenzen schlüssig erklärt (ITD = Laufzeitdifferenz) (ILD = Intensitätsdifferenz) Mögliche Klausurfallen: Nur Lautstärkeunterschiede bedacht. Kopfabstand unterschätzt."
  },
  {
    "frage": "Warum helfen multimodale Erfahrungen bei auditiver Lokalisierung?",
    "a": "Sie ermöglichen mentale Karten des Hörraums",
    "b": "Sie vergrößern die Ohren",
    "c": "Sie trainieren interaurale Unterschiede",
    "d": "Sie erhöhen die Lautstärke",
    "richtig": "a",
    "begruendung": "Schallquellenlokalisation über Laufzeit- und Intensitätsdifferenzen schlüssig erklärt (ITD = Laufzeitdifferenz) (ILD = Intensitätsdifferenz) Mögliche Klausurfallen: Nur Lautstärkeunterschiede bedacht. Kopfabstand unterschätzt."
  },
  {
    "frage": "Welche Aussage zu manueller Exploration ab ~4 Monaten ist korrekt?",
    "a": "Keine Spezifität",
    "b": "Greifen bleibt unspezifisch",
    "c": "Handlungen passen sich Objekteigenschaften an (z. B. Tasten vs. Schlagen)",
    "d": "Nur Blick folgt Textur",
    "richtig": "c",
    "begruendung": "Korrekte Definition/Logik gemäß Kap. 5"
  },
  {
    "frage": "Was beschreibt die Rolle von Kontingenz im Frühlernkontext am besten?",
    "a": "Unwichtig",
    "b": "Nur bei Musik",
    "c": "Nur bei Sprache",
    "d": "Entscheidend für Videolernen (Videochat) und operantes Lernen",
    "richtig": "d",
    "begruendung": "Präzise Differenzierung der Lernformen und ihrer Evidenz (operante Konditionierung = Lernen über Konsequenzen) (klassische Konditionierung = Reizkopplung) Mögliche Klausurfallen: Operant vs. klassisch verwechselt. Beobachtung mit bloßer Exposition gleichgesetzt."
  },
  {
    "frage": "Welche Reflexe dienen unmittelbar der Nahrungsaufnahme?",
    "a": "Moro und Tonischer Hals",
    "b": "Greif- und Schreitreflex",
    "c": "Husten und Niesen",
    "d": "Such-, Saug- und Schluckreflex",
    "richtig": "d",
    "begruendung": "Korrekte Definition/Logik gemäß Kap. 5"
  },
  {
    "frage": "Welche Aussage zu Bildverständnis und Kultur ist korrekt?",
    "a": "Ohne frühe Bilderfahrung ist 2D→3D-Mapping anfänglich schwerer",
    "b": "Bilderfahrung ist irrelevant",
    "c": "Kinder auf dem Land sind überlegen",
    "d": "Nur Sprache zählt",
    "richtig": "a",
    "begruendung": "Korrekte Definition/Logik gemäß Kap. 5"
  },
  {
    "frage": "Welche Form des Lernens tritt schon bei Neugeborenen im Schlaf auf?",
    "a": "Operante Konditionierung",
    "b": "Statistisches Lernen",
    "c": "Beobachtungslernen",
    "d": "Klassische Konditionierung (Blinzeln)",
    "richtig": "d",
    "begruendung": "Präzise Differenzierung der Lernformen und ihrer Evidenz (operante Konditionierung = Lernen über Konsequenzen) (klassische Konditionierung = Reizkopplung) Mögliche Klausurfallen: Operant vs. klassisch verwechselt. Beobachtung mit bloßer Exposition gleichgesetzt."
  },
  {
    "frage": "Welcher Begriff beschreibt, dass kleine Objekte „aufhebbar“ sind oder flache Flächen „begehbar“?",
    "a": "Affordanzen",
    "b": "Mentale Karte",
    "c": "Habituation",
    "d": "Schemata",
    "richtig": "a",
    "begruendung": "Die Option trifft die Gewöhnungslogik: Wiederholung senkt die Reaktion; ein neuer Reiz hebt sie an (Habituation = Reaktionsabnahme bei Wiederholung) (Dishabituation = Wiederanstieg bei neuem Reiz) Mögliche Klausurfallen: Habituation mit Ermüdung verwechselt. Dishabituation als bloße Neugier missdeutet."
  },
  {
    "frage": "Wie ändert sich das visuelle Abtasten zwischen 1 und 2 Monaten?",
    "a": "Von Innenmerkmalen zu Außenkanten",
    "b": "Von Außenkanten zu Innenmerkmalen (Augen/Mund)",
    "c": "Von Farben zu Formen",
    "d": "Keine Änderung",
    "richtig": "b",
    "begruendung": "Korrekte Definition/Logik gemäß Kap. 5"
  },
  {
    "frage": "Warum entwickeln Frühgeborene die gleichmäßige Augenfolge später?",
    "a": "Wegen Reifungsprozessen des visuellen Systems",
    "b": "Wegen fehlender Erfahrung mit bewegten Reizen",
    "c": "Wegen primär auditorischer Präferenz",
    "d": "Wegen mangelnder Schlafdauer",
    "richtig": "a",
    "begruendung": "Korrekte Definition/Logik gemäß Kap. 5"
  },
  {
    "frage": "Welche frühe Tiefenreaktion zeigen 1-Monatige bei Objektausdehnung (looming)?",
    "a": "Greifen nach dem Objekt",
    "b": "Abwehrendes Blinzeln zum richtigen Zeitpunkt",
    "c": "Kopfabwenden",
    "d": "Keine Reaktion",
    "richtig": "b",
    "begruendung": "Korrekte Definition/Logik gemäß Kap. 5"
  },
  {
    "frage": "Sensible Phase/Stereopsis: Was gilt für unbehandelten Strabismus?",
    "a": "Egal wann behandelt, später keine Folgen",
    "b": "Behandlung erst nach 6 Jahren optimal",
    "c": "Nur Sehschärfe betroffen",
    "d": "Unbehandelt vor 3 Jahren → Risiko dauerhafter Binokularprobleme",
    "richtig": "d",
    "begruendung": "Die Lösung trennt korrekt mono- und binokulare Tiefenhinweise und ordnet die Entwicklungszeitpunkte richtig ein (binokulare Disparität = Unterschied der Netzhautbilder) (Stereosehen = Tiefe aus Disparität) Mögliche Klausurfallen: Mono-/binokulare Hinweise vertauscht. Zeitpunkt der Stereopsis falsch."
  },
  {
    "frage": "Attraktivitätsstudie (Maske): Was passierte bei 12-Monatigen?",
    "a": "Mehr Freude/Spielbeteiligung bei „attraktiver“ Maske",
    "b": "Kein Unterschied im Verhalten",
    "c": "Mehr Rückzug bei „attraktiver“ Maske",
    "d": "Nur Blickzeit änderte sich",
    "richtig": "a",
    "begruendung": "Präzise Differenzierung der Lernformen und ihrer Evidenz (operante Konditionierung = Lernen über Konsequenzen) (klassische Konditionierung = Reizkopplung) Mögliche Klausurfallen: Operant vs. klassisch verwechselt. Beobachtung mit bloßer Exposition gleichgesetzt."
  },
  {
    "frage": "Gesichter im Alltag: Was nimmt zum Ende des 1. Jahres ab?",
    "a": "Blick auf Gesichter (auf ~5 Min/Std)",
    "b": "Blick auf Hände",
    "c": "Blick auf Objekte",
    "d": "Blick auf Bewegung",
    "richtig": "a",
    "begruendung": "Die Antwort beschreibt den andere-Ethnie-Effekt und erfahrungsbasierte Spezialisierung präzise (andere-Ethnie-Effekt = bessere Unterscheidung eigener Ethnie) (Wahrnehmungsverengung = Spezialisierung auf häufige Stimuli) Mögliche Klausurfallen: Attraktivitätseffekt statt Gedächtnisvorteil angenommen. Alterseffekte (6 vs. 9 Monate) vertauscht."
  },
  {
    "frage": "Gesichter von Affen unterscheiden: Wer kann’s?",
    "a": "6-Monatige ebenso gut wie Menschengesichter",
    "b": "Nur Erwachsene",
    "c": "Nur 9-Monatige",
    "d": "Niemand < 1 Jahr",
    "richtig": "a",
    "begruendung": "Die Antwort beschreibt den andere-Ethnie-Effekt und erfahrungsbasierte Spezialisierung präzise (andere-Ethnie-Effekt = bessere Unterscheidung eigener Ethnie) (Wahrnehmungsverengung = Spezialisierung auf häufige Stimuli) Mögliche Klausurfallen: Attraktivitätseffekt statt Gedächtnisvorteil angenommen. Alterseffekte (6 vs. 9 Monate) vertauscht."
  },
  {
    "frage": "Welche Methode zeigt zwei Reize parallel und wertet Blickdauer als Präferenz?",
    "a": "Habituation/Dishabituation",
    "b": "Blickpräferenz („preferential looking“)",
    "c": "Konditioniertes Kopfdrehen",
    "d": "Visuelle Evoked Potentials",
    "richtig": "b",
    "begruendung": "Die Option trifft die Gewöhnungslogik: Wiederholung senkt die Reaktion; ein neuer Reiz hebt sie an (Habituation = Reaktionsabnahme bei Wiederholung) (Dishabituation = Wiederanstieg bei neuem Reiz) Mögliche Klausurfallen: Habituation mit Ermüdung verwechselt. Dishabituation als bloße Neugier missdeutet."
  },
  {
    "frage": "Farben: Was zeigte fNIRS mit 5-Monatigen?",
    "a": "Gehirn reagiert auf Kategoriegrenzen wie bei Erwachsenen",
    "b": "Keine Farbkategorien",
    "c": "Kategorien entstehen erst mit Farbwörtern",
    "d": "Nur Sättigung zählt",
    "richtig": "a",
    "begruendung": "Korrekte Definition/Logik gemäß Kap. 5"
  },
  {
    "frage": "Klassische AV-Matching-Aufgabe (Spelke):",
    "a": "Babys ignorieren Synchronität",
    "b": "Schauen länger auf das mit dem Ton synchronisierte Video",
    "c": "Schauen länger auf das nicht-synchronisierte Video",
    "d": "Bevorzugen zufälliges Rauschen",
    "richtig": "b",
    "begruendung": "Vorrang gemeinsamer Bewegung als Hinweis auf Einheitlichkeit gegenüber statischen Merkmalen (Objekttrennung = Abgrenzung einzelner Gegenstände) (gemeinsame Bewegung = Hinweis auf Einheitlichkeit) Mögliche Klausurfallen: Farbe/Textur überbewertet. Bewegungshinweis ignoriert."
  },
  {
    "frage": "Greifen ohne Sicht – was zeigt die Clifton-Aufgabe?",
    "a": "4–8-Monatige greifen im Dunkeln nach klingenden Objekten",
    "b": "Greifen braucht zwingend Sehen",
    "c": "Nur 12-Monatige schaffen das",
    "d": "Greifen bricht komplett zusammen",
    "richtig": "a",
    "begruendung": "Korrekte Definition/Logik gemäß Kap. 5"
  },
  {
    "frage": "Motorik ↔ 3D-Objektvervollständigung:",
    "a": "Kein Zusammenhang",
    "b": "Nur Sehschärfe relevant",
    "c": "Besseres Sitzen/Greifen → bessere 3D-Vervollständigung",
    "d": "Nur Sprache relevant",
    "richtig": "c",
    "begruendung": "Visus-/Kontrastentwicklung im Säuglingsalter stimmig eingeordnet (Visus = Sehschärfe (Auflösungsvermögen)) (Fovea/Zapfen = Bereich/Photorezeptoren für Details/Farbe) Mögliche Klausurfallen: Dezimalvisus und Snellen vertauscht. Kontrastempfindlichkeit mit Helligkeitssinn gleichgesetzt."
  },
  {
    "frage": "Aktives/rationales Lernen (Stahl & Feigenson):",
    "a": "Überraschungen stören Lernen",
    "b": "Überraschungen werden ignoriert",
    "c": "Kein Effekt unter 2 Jahren",
    "d": "Unerwartetes steigert Exploration zielgerichtet",
    "richtig": "d",
    "begruendung": "Präzise Differenzierung der Lernformen und ihrer Evidenz (operante Konditionierung = Lernen über Konsequenzen) (klassische Konditionierung = Reizkopplung) Mögliche Klausurfallen: Operant vs. klassisch verwechselt. Beobachtung mit bloßer Exposition gleichgesetzt."
  },
  {
    "frage": "Musikpräferenz im Säuglingsalter:",
    "a": "Präferenz für Dissonanz",
    "b": "Keine Präferenzen",
    "c": "Nur Rhythmus zählt",
    "d": "Präferenz für Konsonanz",
    "richtig": "d",
    "begruendung": "Korrekte Definition/Logik gemäß Kap. 5"
  },
  {
    "frage": "„Keks“-Aufgabe (Feigenson et al.): Was gelingt 10–12-Monatigen zuverlässig?",
    "a": "4 vs. 5 Kekse",
    "b": "3 vs. 4 Kekse",
    "c": "1 vs. 2 Kekse",
    "d": "2 vs. 3 Kekse",
    "richtig": "c",
    "begruendung": "Korrekte Definition/Logik gemäß Kap. 5"
  },
  {
    "frage": "Eigene Ethnie & Lernen:",
    "a": "Gesichter der Fremdethnie sind immer vorteilhaft",
    "b": "Mit 9 Monaten Lernen oft besser von Gesichtern der eigenen Ethnie",
    "c": "Kein Einfluss der Ethnie",
    "d": "Effekt erst im Schulalter",
    "richtig": "b",
    "begruendung": "Die Antwort beschreibt den andere-Ethnie-Effekt und erfahrungsbasierte Spezialisierung präzise (andere-Ethnie-Effekt = bessere Unterscheidung eigener Ethnie) (Wahrnehmungsverengung = Spezialisierung auf häufige Stimuli) Mögliche Klausurfallen: Attraktivitätseffekt statt Gedächtnisvorteil angenommen. Alterseffekte (6 vs. 9 Monate) vertauscht."
  },
  {
    "frage": "Warum ist die Kontrastempfindlichkeit anfangs gering?",
    "a": "Zu viele Stäbchen",
    "b": "Pupille zu klein",
    "c": "Linsenfarben fehlen",
    "d": "Unreife Zapfen; nur ~2 % Lichtfang in der Fovea (vs. 65 % bei Erwachsenen)",
    "richtig": "d",
    "begruendung": "Visus-/Kontrastentwicklung im Säuglingsalter stimmig eingeordnet (Visus = Sehschärfe (Auflösungsvermögen)) (Fovea/Zapfen = Bereich/Photorezeptoren für Details/Farbe) Mögliche Klausurfallen: Dezimalvisus und Snellen vertauscht. Kontrastempfindlichkeit mit Helligkeitssinn gleichgesetzt."
  },
  {
    "frage": "Monokulare Tiefenhinweise (7 Monate) in Yonas’ „Fenster“-Aufgabe:",
    "a": "Greifen zufällig",
    "b": "Greifen zur kürzeren Seite",
    "c": "Kein Greifen",
    "d": "Greifen zur längeren (näher wirkenden) Seite",
    "richtig": "d",
    "begruendung": "Die Lösung trennt korrekt mono- und binokulare Tiefenhinweise und ordnet die Entwicklungszeitpunkte richtig ein (binokulare Disparität = Unterschied der Netzhautbilder) (Stereosehen = Tiefe aus Disparität) Mögliche Klausurfallen: Mono-/binokulare Hinweise vertauscht. Zeitpunkt der Stereopsis falsch."
  },
  {
    "frage": "Methodenwissen: Was misst Habituation/Dishabituation?",
    "a": "Herzrate ohne Stimuli",
    "b": "Zunahme der Reaktion bei Wiederholung",
    "c": "Abnahme der Reaktion bei Wiederholung; Anstieg bei Neuheit",
    "d": "Nur motorische Schwellen",
    "richtig": "c",
    "begruendung": "Die Option trifft die Gewöhnungslogik: Wiederholung senkt die Reaktion; ein neuer Reiz hebt sie an (Habituation = Reaktionsabnahme bei Wiederholung) (Dishabituation = Wiederanstieg bei neuem Reiz) Mögliche Klausurfallen: Habituation mit Ermüdung verwechselt. Dishabituation als bloße Neugier missdeutet."
  },
  {
    "frage": "Gesichter-Exposure im Alltag erklärt u. a., dass…",
    "a": "Babys am Jahresende mehr Gesichter sehen",
    "b": "Blick auf Gesichter konstant bleibt",
    "c": "Fokus im 1. Jahr von Gesichtern auf Hände/Objekte verschiebt",
    "d": "Nur Geräusche ausschlaggebend sind",
    "richtig": "c",
    "begruendung": "Die Antwort beschreibt den andere-Ethnie-Effekt und erfahrungsbasierte Spezialisierung präzise (andere-Ethnie-Effekt = bessere Unterscheidung eigener Ethnie) (Wahrnehmungsverengung = Spezialisierung auf häufige Stimuli) Mögliche Klausurfallen: Attraktivitätseffekt statt Gedächtnisvorteil angenommen. Alterseffekte (6 vs. 9 Monate) vertauscht."
  },
  {
    "frage": "Stripes-vs-Grau-Test dient primär wozu?",
    "a": "Bestimmung der Sehschärfe über Blickpräferenz",
    "b": "Farberkennung",
    "c": "Objektpermanenz",
    "d": "Intermodale Integration",
    "richtig": "a",
    "begruendung": "Visus-/Kontrastentwicklung im Säuglingsalter stimmig eingeordnet (Visus = Sehschärfe (Auflösungsvermögen)) (Fovea/Zapfen = Bereich/Photorezeptoren für Details/Farbe) Mögliche Klausurfallen: Dezimalvisus und Snellen vertauscht. Kontrastempfindlichkeit mit Helligkeitssinn gleichgesetzt."
  }
];

