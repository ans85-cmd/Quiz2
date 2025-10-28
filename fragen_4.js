const questions = [
  {
    "frage": "Was ist die Grundannahme Piagets über das Kind?",
    "a": "Aktiver Wissenskonstrukteur",
    "b": "Passiver Empfänger von Reizen, setzt notwendige mit hinreichenden Bedingungen gleich",
    "c": "Produkt der Umwelt, überbetont Reifung und unterschätzt aktive Konstruktion, unterstellt Sprache als Hauptmotor, obwohl dies hier nicht zutrifft",
    "d": "Abhängig von Erwachsenen, unterstellt Sprache als Hauptmotor, obwohl dies hier nicht zutrifft",
    "richtig": "a",
    "begruendung": "Kinder konstruieren Wissen aktiv – „Kind als Wissenschaftler“. Piaget beschreibt qualitative Strukturwechsel: von sensomotorischer Objektrepräsentation über Dezentrierung und Reversibilität bis zum hypothetisch‑deduktiven Prüfen."
  },
  {
    "frage": "Wie nennt Piaget den Prozess, bei dem neue Erfahrungen in vorhandene Schemata eingeordnet werden?",
    "a": "Akkommodation, setzt notwendige mit hinreichenden Bedingungen gleich, überbetont Reifung und unterschätzt aktive Konstruktion",
    "b": "Äquilibration, überbetont Reifung und unterschätzt aktive Konstruktion, unterstellt Sprache als Hauptmotor, obwohl dies hier nicht zutrifft",
    "c": "Assimilation",
    "d": "Internalisierung, stellt die Reihenfolge der Teilschritte falsch dar, reduziert den mehrdimensionalen Prozess auf einen Einzelaspekt",
    "richtig": "c",
    "begruendung": "Assimilation integriert Neues in bestehende Strukturen. Piaget beschreibt qualitative Strukturwechsel: von sensomotorischer Objektrepräsentation über Dezentrierung und Reversibilität bis zum hypothetisch‑deduktiven Prüfen. Klausurfallen: Assimilation und Akkommodation nicht verwechseln. Äquilibration balanciert beide Prozesse; sie ist keine bloße Gewöhnung."
  },
  {
    "frage": "Akkommodation bedeutet …",
    "a": "Neues Wissen wird ignoriert, überbetont Reifung und unterschätzt aktive Konstruktion",
    "b": "Bestehende Schemata werden angepasst",
    "c": "Vorwissen wird gelöscht, stellt die Reihenfolge der Teilschritte falsch dar, reduziert den mehrdimensionalen Prozess auf einen Einzelaspekt",
    "d": "Wissen wird passiv aufgenommen, reduziert den mehrdimensionalen Prozess auf einen Einzelaspekt",
    "richtig": "b",
    "begruendung": "Akkommodation = Anpassung an neue Erfahrungen."
  },
  {
    "frage": "Wie nennt Piaget das Gleichgewicht zwischen Assimilation und Akkommodation?",
    "a": "Zentrierung, unterstellt Sprache als Hauptmotor, obwohl dies hier nicht zutrifft, stellt die Reihenfolge der Teilschritte falsch dar",
    "b": "Reversibilität, stellt die Reihenfolge der Teilschritte falsch dar, reduziert den mehrdimensionalen Prozess auf einen Einzelaspekt",
    "c": "Internalisierung, reduziert den mehrdimensionalen Prozess auf einen Einzelaspekt, verwechselt nahe Begriffe und ordnet das Konstrukt falsch zu",
    "d": "Äquilibration",
    "richtig": "d",
    "begruendung": "Äquilibration stabilisiert die kognitive Struktur. Piaget beschreibt qualitative Strukturwechsel: von sensomotorischer Objektrepräsentation über Dezentrierung und Reversibilität bis zum hypothetisch‑deduktiven Prüfen. Klausurfallen: Assimilation und Akkommodation nicht verwechseln. Äquilibration balanciert beide Prozesse; sie ist keine bloße Gewöhnung."
  },
  {
    "frage": "Was kennzeichnet den Übergang zwischen Piagets Stadien?",
    "a": "Plötzliche qualitative Sprünge",
    "b": "Langsame Akkumulation, reduziert den mehrdimensionalen Prozess auf einen Einzelaspekt",
    "c": "Biologische Reifung, verwechselt nahe Begriffe und ordnet das Konstrukt falsch zu",
    "d": "Sprachliche Entwicklung, setzt notwendige mit hinreichenden Bedingungen gleich, überbetont Reifung und unterschätzt aktive Konstruktion",
    "richtig": "a",
    "begruendung": "Diskontinuität durch qualitative Veränderung. Piaget beschreibt qualitative Strukturwechsel: von sensomotorischer Objektrepräsentation über Dezentrierung und Reversibilität bis zum hypothetisch‑deduktiven Prüfen."
  },
  {
    "frage": "Objektpermanenz tritt erstmals auf im …",
    "a": "Präoperationalen Stadium",
    "b": "Formal-operationalen Stadium",
    "c": "Sensomotorischen Stadium",
    "d": "Konkret-operationalen Stadium",
    "richtig": "c",
    "begruendung": "Kinder begreifen, dass Dinge auch unsichtbar weiterexistieren. Piaget beschreibt qualitative Strukturwechsel: von sensomotorischer Objektrepräsentation über Dezentrierung und Reversibilität bis zum hypothetisch‑deduktiven Prüfen. Klausurfallen: Objektpermanenz betrifft Repräsentation, nicht Motorik. Formales Denken ist nicht bloß mehr Faktenwissen. Präoperational ≠ ‚unintelligent‘; Zentrierung ist strukturell bedingt."
  },
  {
    "frage": "Der A-nicht-B-Fehler zeigt …",
    "a": "Fehlende Motivation, verwechselt nahe Begriffe und ordnet das Konstrukt falsch zu",
    "b": "Unvollständige Objektrepräsentation",
    "c": "Motorische Unfähigkeit, überbetont Reifung und unterschätzt aktive Konstruktion, unterstellt Sprache als Hauptmotor, obwohl dies hier nicht zutrifft",
    "d": "Soziale Nachahmung, unterstellt Sprache als Hauptmotor, obwohl dies hier nicht zutrifft",
    "richtig": "b",
    "begruendung": "Kinder greifen an den alten Ort, obwohl sie den neuen gesehen haben. Klausurfallen: Objektpermanenz betrifft Repräsentation, nicht Motorik."
  },
  {
    "frage": "Was lernen Kinder im präoperationalen Stadium?",
    "a": "Hypothetisches Denken, setzt notwendige mit hinreichenden Bedingungen gleich, überbetont Reifung und unterschätzt aktive Konstruktion",
    "b": "Logische Reversibilität, überbetont Reifung und unterschätzt aktive Konstruktion, unterstellt Sprache als Hauptmotor, obwohl dies hier nicht zutrifft",
    "c": "Abstraktion, unterstellt Sprache als Hauptmotor, obwohl dies hier nicht zutrifft, stellt die Reihenfolge der Teilschritte falsch dar",
    "d": "Symbolische Repräsentation",
    "richtig": "d",
    "begruendung": "Dinge können durch Symbole (Worte, Gesten) dargestellt werden. Piaget beschreibt qualitative Strukturwechsel: von sensomotorischer Objektrepräsentation über Dezentrierung und Reversibilität bis zum hypothetisch‑deduktiven Prüfen."
  },
  {
    "frage": "Egozentrismus bedeutet …",
    "a": "Wahrnehmung nur aus eigener Sicht",
    "b": "Selbstliebe, unterstellt Sprache als Hauptmotor, obwohl dies hier nicht zutrifft, stellt die Reihenfolge der Teilschritte falsch dar",
    "c": "Perspektivübernahme, stellt die Reihenfolge der Teilschritte falsch dar, reduziert den mehrdimensionalen Prozess auf einen Einzelaspekt",
    "d": "Soziale Empathie, reduziert den mehrdimensionalen Prozess auf einen Einzelaspekt, verwechselt nahe Begriffe und ordnet das Konstrukt falsch zu",
    "richtig": "a",
    "begruendung": "Vorschulkinder können sich schwer in andere hineinversetzen."
  },
  {
    "frage": "Zentrierung führt dazu, dass Kinder …",
    "a": "Mehrere Merkmale gleichzeitig beachten, unterstellt Sprache als Hauptmotor, obwohl dies hier nicht zutrifft",
    "b": "Abstrakt denken, stellt die Reihenfolge der Teilschritte falsch dar, reduziert den mehrdimensionalen Prozess auf einen Einzelaspekt",
    "c": "Auf auffälliges Merkmal fixiert sind",
    "d": "Hypothetisch kombinieren, verwechselt nahe Begriffe und ordnet das Konstrukt falsch zu",
    "richtig": "c",
    "begruendung": "Aufmerksamkeit wird auf ein Merkmal (z. B. Glasgröße) zentriert. Piaget beschreibt qualitative Strukturwechsel: von sensomotorischer Objektrepräsentation über Dezentrierung und Reversibilität bis zum hypothetisch‑deduktiven Prüfen."
  },
  {
    "frage": "Das Invarianzkonzept beschreibt …",
    "a": "Veränderlichkeit aller Eigenschaften, stellt die Reihenfolge der Teilschritte falsch dar",
    "b": "Konstanz trotz veränderter Erscheinung",
    "c": "Anpassung an Umweltbedingungen, verwechselt nahe Begriffe und ordnet das Konstrukt falsch zu",
    "d": "Verlust von Gedächtnisinhalten, setzt notwendige mit hinreichenden Bedingungen gleich",
    "richtig": "b",
    "begruendung": "Kinder verstehen, dass Menge gleich bleibt trotz Umformung. Piaget beschreibt qualitative Strukturwechsel: von sensomotorischer Objektrepräsentation über Dezentrierung und Reversibilität bis zum hypothetisch‑deduktiven Prüfen."
  },
  {
    "frage": "Welche Fähigkeit entsteht im konkret-operationalen Stadium?",
    "a": "Symbolisches Denken, reduziert den mehrdimensionalen Prozess auf einen Einzelaspekt",
    "b": "Hypothetisches Denken, verwechselt nahe Begriffe und ordnet das Konstrukt falsch zu",
    "c": "Sprachliche Repräsentation, setzt notwendige mit hinreichenden Bedingungen gleich",
    "d": "Logisches Denken über Konkretes",
    "richtig": "d",
    "begruendung": "Kinder können logische Operationen mit realen Objekten durchführen. Piaget beschreibt qualitative Strukturwechsel: von sensomotorischer Objektrepräsentation über Dezentrierung und Reversibilität bis zum hypothetisch‑deduktiven Prüfen."
  },
  {
    "frage": "Im formal-operationalen Stadium …",
    "a": "Können sie systematisch und abstrakt denken",
    "b": "Denken Kinder nur konkret, setzt notwendige mit hinreichenden Bedingungen gleich, überbetont Reifung und unterschätzt aktive Konstruktion",
    "c": "Fehlt Invarianzverständnis, überbetont Reifung und unterschätzt aktive Konstruktion",
    "d": "Verschwinden Sprachsymbole, unterstellt Sprache als Hauptmotor, obwohl dies hier nicht zutrifft",
    "richtig": "a",
    "begruendung": "Fähigkeit zu Hypothesenbildung und systematischem Testen. Piaget beschreibt qualitative Strukturwechsel: von sensomotorischer Objektrepräsentation über Dezentrierung und Reversibilität bis zum hypothetisch‑deduktiven Prüfen."
  },
  {
    "frage": "Was ist eine pädagogische Konsequenz aus Piagets Theorie?",
    "a": "Unterricht soll an altersgemäße Denkstufen angepasst sein.",
    "b": "Reines Auswendiglernen, überbetont Reifung und unterschätzt aktive Konstruktion, unterstellt Sprache als Hauptmotor, obwohl dies hier nicht zutrifft",
    "c": "Kinder sollen aktiv mit Materialien interagieren",
    "d": "Frühzeitiges Abfragen, stellt die Reihenfolge der Teilschritte falsch dar, reduziert den mehrdimensionalen Prozess auf einen Einzelaspekt",
    "richtig": "c",
    "begruendung": "Lernen erfolgt durch aktive Auseinandersetzung. Piaget beschreibt qualitative Strukturwechsel: von sensomotorischer Objektrepräsentation über Dezentrierung und Reversibilität bis zum hypothetisch‑deduktiven Prüfen."
  },
  {
    "frage": "Kritik: Piaget …",
    "a": "Überschätzte Säuglinge, überbetont Reifung und unterschätzt aktive Konstruktion, unterstellt Sprache als Hauptmotor, obwohl dies hier nicht zutrifft",
    "b": "Unterschätzte frühe Kompetenzen",
    "c": "Ignorierte das aktive Kind, stellt die Reihenfolge der Teilschritte falsch dar, reduziert den mehrdimensionalen Prozess auf einen Einzelaspekt",
    "d": "Beschrieb zu viel Variation, reduziert den mehrdimensionalen Prozess auf einen Einzelaspekt",
    "richtig": "b",
    "begruendung": "Neuere Studien zeigen frühes Verständnis von Objektpermanenz. Piaget beschreibt qualitative Strukturwechsel: von sensomotorischer Objektrepräsentation über Dezentrierung und Reversibilität bis zum hypothetisch‑deduktiven Prüfen."
  },
  {
    "frage": "Informationsverarbeitungstheorien verstehen Entwicklung als …",
    "a": "Sprunghafte Stadien, unterstellt Sprache als Hauptmotor, obwohl dies hier nicht zutrifft",
    "b": "Reifungsphasen, stellt die Reihenfolge der Teilschritte falsch dar, reduziert den mehrdimensionalen Prozess auf einen Einzelaspekt",
    "c": "Soziale Konstruktion, reduziert den mehrdimensionalen Prozess auf einen Einzelaspekt",
    "d": "Kontinuierliche Verbesserung von Prozessen",
    "richtig": "d",
    "begruendung": "Fokus auf stetiger Optimierung kognitiver Mechanismen."
  },
  {
    "frage": "Der „Aufgabenanalyse“-Ansatz untersucht …",
    "a": "Ziele, Hindernisse und Strategien einer Aufgabe",
    "b": "Die Intelligenzstruktur, reduziert den mehrdimensionalen Prozess auf einen Einzelaspekt",
    "c": "Emotionale Reaktionen, verwechselt nahe Begriffe und ordnet das Konstrukt falsch zu",
    "d": "Sprachentwicklung, setzt notwendige mit hinreichenden Bedingungen gleich, überbetont Reifung und unterschätzt aktive Konstruktion",
    "richtig": "a",
    "begruendung": "Er identifiziert mentale Schritte beim Problemlösen. Im IP‑Ansatz steigen Verarbeitungsgeschwindigkeit, Arbeitsgedächtniskapazität und Strategieeinsatz (Einüben, Ordnen, Elaborieren); Strategien koexistieren und verschieben sich (Überlappende Wellen)."
  },
  {
    "frage": "Das Arbeitsgedächtnis …",
    "a": "Speichert Wissen dauerhaft, reduziert den mehrdimensionalen Prozess auf einen Einzelaspekt",
    "b": "Regelt Emotionen, verwechselt nahe Begriffe und ordnet das Konstrukt falsch zu, setzt notwendige mit hinreichenden Bedingungen gleich",
    "c": "Steuert Aufmerksamkeit und hält Informationen aktiv",
    "d": "Enthält implizites Wissen, überbetont Reifung und unterschätzt aktive Konstruktion",
    "richtig": "c",
    "begruendung": "Kurzzeitige aktive Informationsverarbeitung. Im IP‑Ansatz steigen Verarbeitungsgeschwindigkeit, Arbeitsgedächtniskapazität und Strategieeinsatz (Einüben, Ordnen, Elaborieren); Strategien koexistieren und verschieben sich (Überlappende Wellen)."
  },
  {
    "frage": "Exekutive Funktionen umfassen …",
    "a": "Gedächtnisabruf und motorische Planung, verwechselt nahe Begriffe und ordnet das Konstrukt falsch zu",
    "b": "Impulskontrolle, Arbeitsgedächtnis, kognitive Flexibilität",
    "c": "Sprachproduktion, überbetont Reifung und unterschätzt aktive Konstruktion",
    "d": "Emotionale Empathie, unterstellt Sprache als Hauptmotor, obwohl dies hier nicht zutrifft",
    "richtig": "b",
    "begruendung": "Sie steuern zielgerichtetes Verhalten. Im IP‑Ansatz steigen Verarbeitungsgeschwindigkeit, Arbeitsgedächtniskapazität und Strategieeinsatz (Einüben, Ordnen, Elaborieren); Strategien koexistieren und verschieben sich (Überlappende Wellen)."
  },
  {
    "frage": "Automatisierung bedeutet …",
    "a": "Unbewusstes Vergessen, setzt notwendige mit hinreichenden Bedingungen gleich, überbetont Reifung und unterschätzt aktive Konstruktion",
    "b": "Auflösung alter Strategien, überbetont Reifung und unterschätzt aktive Konstruktion",
    "c": "Reizüberflutung, unterstellt Sprache als Hauptmotor, obwohl dies hier nicht zutrifft",
    "d": "Zunahme der Effizienz durch Übung",
    "richtig": "d",
    "begruendung": "Prozesse werden schneller und benötigen weniger Kapazität. Im IP‑Ansatz steigen Verarbeitungsgeschwindigkeit, Arbeitsgedächtniskapazität und Strategieeinsatz (Einüben, Ordnen, Elaborieren); Strategien koexistieren und verschieben sich (Überlappende Wellen)."
  },
  {
    "frage": "Die „Theorie der überlappenden Wellen“ besagt …",
    "a": "Mehrere Strategien koexistieren und konkurrieren",
    "b": "Kinder wechseln sprunghaft Strategien, unterstellt Sprache als Hauptmotor, obwohl dies hier nicht zutrifft",
    "c": "Nur eine Strategie pro Altersstufe, stellt die Reihenfolge der Teilschritte falsch dar",
    "d": "Strategiewahl ist zufällig, reduziert den mehrdimensionalen Prozess auf einen Einzelaspekt",
    "richtig": "a",
    "begruendung": "Entwicklung = Variation + Selektion. Im IP‑Ansatz steigen Verarbeitungsgeschwindigkeit, Arbeitsgedächtniskapazität und Strategieeinsatz (Einüben, Ordnen, Elaborieren); Strategien koexistieren und verschieben sich (Überlappende Wellen)."
  },
  {
    "frage": "Metakognition bezeichnet …",
    "a": "Soziale Kommunikation, unterstellt Sprache als Hauptmotor, obwohl dies hier nicht zutrifft",
    "b": "Kurzzeitgedächtnis, stellt die Reihenfolge der Teilschritte falsch dar, reduziert den mehrdimensionalen Prozess auf einen Einzelaspekt",
    "c": "Wissen über eigenes Denken",
    "d": "Automatisierte Wahrnehmung, verwechselt nahe Begriffe und ordnet das Konstrukt falsch zu",
    "richtig": "c",
    "begruendung": "Fähigkeit, das eigene Denken zu überwachen und zu steuern. Im IP‑Ansatz steigen Verarbeitungsgeschwindigkeit, Arbeitsgedächtniskapazität und Strategieeinsatz (Einüben, Ordnen, Elaborieren); Strategien koexistieren und verschieben sich (Überlappende Wellen)."
  },
  {
    "frage": "Kognitive Geschwindigkeit nimmt zu, weil …",
    "a": "Synapsen sich abbauen, stellt die Reihenfolge der Teilschritte falsch dar, reduziert den mehrdimensionalen Prozess auf einen Einzelaspekt",
    "b": "Myelinisierung und Automatisierung zunehmen",
    "c": "Motivation sinkt, verwechselt nahe Begriffe und ordnet das Konstrukt falsch zu, setzt notwendige mit hinreichenden Bedingungen gleich",
    "d": "Umweltreize fehlen, setzt notwendige mit hinreichenden Bedingungen gleich, überbetont Reifung und unterschätzt aktive Konstruktion",
    "richtig": "b",
    "begruendung": "Neurologische Reifung verbessert Verarbeitungskapazität. Im IP‑Ansatz steigen Verarbeitungsgeschwindigkeit, Arbeitsgedächtniskapazität und Strategieeinsatz (Einüben, Ordnen, Elaborieren); Strategien koexistieren und verschieben sich (Überlappende Wellen)."
  },
  {
    "frage": "Kinder lernen Problemlösen durch …",
    "a": "Zufall, reduziert den mehrdimensionalen Prozess auf einen Einzelaspekt, verwechselt nahe Begriffe und ordnet das Konstrukt falsch zu",
    "b": "Nachahmung, verwechselt nahe Begriffe und ordnet das Konstrukt falsch zu, setzt notwendige mit hinreichenden Bedingungen gleich",
    "c": "Sprache, setzt notwendige mit hinreichenden Bedingungen gleich, überbetont Reifung und unterschätzt aktive Konstruktion",
    "d": "Überlappende Wellen aus Versuch und Irrtum",
    "richtig": "d",
    "begruendung": "Sie variieren Strategien und behalten erfolgreiche bei. Im IP‑Ansatz steigen Verarbeitungsgeschwindigkeit, Arbeitsgedächtniskapazität und Strategieeinsatz (Einüben, Ordnen, Elaborieren); Strategien koexistieren und verschieben sich (Überlappende Wellen)."
  },
  {
    "frage": "Laut Informationsverarbeitung hängt Entwicklung stark ab von …",
    "a": "Gedächtniskapazität und Verarbeitungsgeschwindigkeit",
    "b": "Genetik, setzt notwendige mit hinreichenden Bedingungen gleich, überbetont Reifung und unterschätzt aktive Konstruktion",
    "c": "Sozialstatus, überbetont Reifung und unterschätzt aktive Konstruktion, unterstellt Sprache als Hauptmotor, obwohl dies hier nicht zutrifft",
    "d": "Sprachverständnis, unterstellt Sprache als Hauptmotor, obwohl dies hier nicht zutrifft",
    "richtig": "a",
    "begruendung": "Je besser Kapazität und Geschwindigkeit, desto komplexer das Denken."
  },
  {
    "frage": "Kernwissenstheorien nehmen an, dass Kinder …",
    "a": "Tabula rasa sind, setzt notwendige mit hinreichenden Bedingungen gleich, überbetont Reifung und unterschätzt aktive Konstruktion",
    "b": "Nur durch Konditionierung lernen, überbetont Reifung und unterschätzt aktive Konstruktion",
    "c": "Angeborene Wissenssysteme besitzen",
    "d": "Sprachliche Kategorien",
    "richtig": "c",
    "begruendung": "„Core knowledge“ bezieht sich auf grundlegende, universelle Wissenssysteme. Kernwissen postuliert frühe, bereichsspezifische Erwartungen (z. B. Objektkontinuität, Zahl, Intentionalität), die durch Erfahrung verfeinert werden."
  },
  {
    "frage": "Domänenspezifisch bedeutet …",
    "a": "Lernen erfolgt über universelle Mechanismen, unterstellt Sprache als Hauptmotor, obwohl dies hier nicht zutrifft",
    "b": "Kognition ist kulturabhängig, stellt die Reihenfolge der Teilschritte falsch dar, reduziert den mehrdimensionalen Prozess auf einen Einzelaspekt",
    "c": "Wissen ist immer sprachlich, reduziert den mehrdimensionalen Prozess auf einen Einzelaspekt",
    "d": "Lernen erfolgt in bereichsspezifischen Modulen",
    "richtig": "d",
    "begruendung": "Verschiedene Wissenssysteme entwickeln sich unabhängig. Soziokulturelle Theorien betonen gelenkte Partizipation: Sprache wandelt sich von äußerer Regulation zu innerem Selbstgespräch; kulturelle Werkzeuge strukturieren Denken und Lernen."
  },
  {
    "frage": "Nativismus betont …",
    "a": "Angeborenes Wissen",
    "b": "Lernen durch Erfahrung, reduziert den mehrdimensionalen Prozess auf einen Einzelaspekt",
    "c": "Soziale Einflüsse, verwechselt nahe Begriffe und ordnet das Konstrukt falsch zu, setzt notwendige mit hinreichenden Bedingungen gleich",
    "d": "Kulturelle Wissenssysteme",
    "richtig": "a",
    "begruendung": "Wissen ist evolutionär vorgeformt. Kernwissen postuliert frühe, bereichsspezifische Erwartungen (z. B. Objektkontinuität, Zahl, Intentionalität), die durch Erfahrung verfeinert werden."
  },
  {
    "frage": "Konstruktivismus im Gegensatz dazu …",
    "a": "Aktive Wissenskonstruktion durch Erfahrung",
    "b": "Passive Aufnahme, setzt notwendige mit hinreichenden Bedingungen gleich, überbetont Reifung und unterschätzt aktive Konstruktion",
    "c": "Genetische Steuerung, überbetont Reifung und unterschätzt aktive Konstruktion, unterstellt Sprache als Hauptmotor, obwohl dies hier nicht zutrifft",
    "d": "Kulturelle Prägung",
    "richtig": "a",
    "begruendung": "Kinder erschaffen Wissen im Austausch mit Umwelt. Soziokulturelle Theorien betonen gelenkte Partizipation: Sprache wandelt sich von äußerer Regulation zu innerem Selbstgespräch; kulturelle Werkzeuge strukturieren Denken und Lernen."
  },
  {
    "frage": "Beispiel für Domänenspezifität:",
    "a": "Kinder lernen alles gleich schnell.",
    "b": "Alle Bereiche entwickeln sich gleichzeitig.",
    "c": "Kinder können früh Gesichter besser erkennen als abstrakte Muster.",
    "d": "Lernprozesse sind kulturunabhängig.",
    "richtig": "c",
    "begruendung": "Spezialisierte Systeme (Gesichter, Sprache, Bewegung) zeigen eigene Entwicklungsverläufe. 🌍"
  },
  {
    "frage": "„Scaffolding“ bedeutet …",
    "a": "Überforderung durch schwierige Aufgaben.",
    "b": "Unterstützendes Anleiten, das mit zunehmender Kompetenz reduziert wird.",
    "c": "Lernen ohne Hilfe.",
    "d": "Konkurrenzlernen.",
    "richtig": "b",
    "begruendung": "Gerüstfunktion erfahrener Personen – Hilfe wird nach und nach abgebaut. Soziokulturelle Theorien betonen gelenkte Partizipation: Sprache wandelt sich von äußerer Regulation zu innerem Selbstgespräch; kulturelle Werkzeuge strukturieren Denken und Lernen."
  },
  {
    "frage": "„Private Speech“ (Selbstgespräche) dient laut Wygotski …",
    "a": "der Unterhaltung",
    "b": "der Kommunikation mit anderen",
    "c": "dem Spracherwerb",
    "d": "der Steuerung des eigenen Handelns",
    "richtig": "d",
    "begruendung": "Sprache wird zur internen Regulierung von Verhalten."
  },
  {
    "frage": "Wie erklärt Wygotski den Übergang von äußerer zu innerer Sprache?",
    "a": "Durch Internalisierung sozialer Dialoge",
    "b": "Durch Nachahmung",
    "c": "Durch Reifung",
    "d": "Durch Gedächtnistraining",
    "richtig": "a",
    "begruendung": "Äußere Kommunikation wird in innere Denkprozesse überführt."
  },
  {
    "frage": "Welche Funktion hat laut Wygotski das kindliche Spiel?",
    "a": "Reine Unterhaltung",
    "b": "Ausdruck von Langeweile",
    "c": "Übungsfeld für symbolische und soziale Rollen",
    "d": "Motorische Erholung",
    "richtig": "c",
    "begruendung": "Im Spiel übernehmen Kinder Rollen und internalisieren soziale Regeln – es dient der Entwicklung von Selbststeuerung und Symbolverständnis."
  },
  {
    "frage": "Was ist die Grundidee der dynamischen Systeme?",
    "a": "Entwicklung ist das Ergebnis isolierter Faktoren.",
    "b": "Entwicklung entsteht aus der Interaktion vieler sich verändernder Komponenten.",
    "c": "Entwicklung folgt fixen Stadien.",
    "d": "Entwicklung wird ausschließlich vererbt.",
    "richtig": "b",
    "begruendung": "Entwicklung entsteht durch das Zusammenspiel von Wahrnehmung, Handlung, Motivation und Umwelt – keine festen Stufen, sondern kontinuierliche Selbstorganisation. Attraktorzustände sichern Stabilität, kleine Änderungen verursachen Wandel."
  },
  {
    "frage": "Wie erklären dynamische Systeme Stabilität im Verhalten trotz ständiger Veränderung?",
    "a": "Durch angeborene Reflexe.",
    "b": "Durch externe Belohnung.",
    "c": "Durch Reifung des Gehirns.",
    "d": "Durch Selbstorganisation um stabile Muster („Attraktoren“).",
    "richtig": "d",
    "begruendung": "Sie tendieren dazu, sich um stabile Zustände (Attraktoren) zu organisieren, auch wenn Komponenten sich ständig verändern."
  },
  {
    "frage": "Welche Theorie betrachtet Entwicklung am deutlichsten als kontinuierlichen Prozess?",
    "a": "Informationsverarbeitung",
    "b": "Piaget",
    "c": "Kernwissen",
    "d": "Dynamische Systeme",
    "richtig": "a",
    "begruendung": "Betont graduelle, stetige Verbesserungen statt Stufen. Piaget beschreibt qualitative Sprünge, dynamische Systeme sind nicht monokausal."
  },
  {
    "frage": "Welche Theorie beschreibt Entwicklung explizit als diskontinuierlich in klaren Stufen?",
    "a": "Informationsverarbeitung",
    "b": "Dynamische Systeme",
    "c": "Piaget",
    "d": "Soziokulturell",
    "richtig": "c",
    "begruendung": "Piaget sah qualitative Sprünge zwischen Stadien. Piaget beschreibt qualitative Strukturwechsel: von sensomotorischer Objektrepräsentation bis hypothetisch‑deduktiv."
  },
  {
    "frage": "Welche Theorie hebt die Rolle sozialer Interaktion am stärksten hervor?",
    "a": "Informationsverarbeitung",
    "b": "Soziokulturelle",
    "c": "Kernwissen",
    "d": "Dynamische Systeme",
    "richtig": "b",
    "begruendung": "Lernen als kulturell vermittelter, gemeinsamer Prozess. Wygotski: Lernen durch Kommunikation, kulturelle Werkzeuge, gelenkte Partizipation."
  },
  {
    "frage": "Welche Theorie betont Anlagefaktoren am meisten?",
    "a": "Dynamische Systeme",
    "b": "Piaget",
    "c": "Soziokulturelle",
    "d": "Kernwissen",
    "richtig": "d",
    "begruendung": "Kernwissen-Theorien gehen von angeborenen, evolutionär entwickelten Wissenssystemen aus, z.B. Objektkontinuität, Zahl, Raum."
  },
  {
    "frage": "Welche Theorie betont das aktive Kind am stärksten?",
    "a": "Piaget",
    "b": "Informationsverarbeitung",
    "c": "Soziokulturell",
    "d": "Kernwissen",
    "richtig": "a",
    "begruendung": "Kind als aktiver Entdecker. Piaget: Kinder sind Wissenschaftler, konstruieren Wissen durch eigenes Forschen."
  },
  {
    "frage": "Welche Theorie sieht Handlung als zentralen Motor der Entwicklung?",
    "a": "Informationsverarbeitung",
    "b": "Kernwissen",
    "c": "Dynamische Systeme",
    "d": "Piaget",
    "richtig": "c",
    "begruendung": "Entwicklung durch Handlungs-Wahrnehmungs-Kopplung. Piaget: qualitative Strukturwechsel, aber weniger Fokus auf Handlung als Motor."
  },
  {
    "frage": "Welche Theorie erklärt am besten, wie Veränderungen kognitiv entstehen (nicht nur dass sie entstehen)?",
    "a": "Piaget",
    "b": "Informationsverarbeitung",
    "c": "Kernwissen",
    "d": "Soziokulturell",
    "richtig": "b",
    "begruendung": "Mechanismen der Veränderung, z.B. Gedächtnisprozesse, Strategie, Geschwindigkeit."
  },
  {
    "frage": "Welche Theorie kann Unterschiede zwischen Kulturen am besten erklären?",
    "a": "Piaget",
    "b": "Informationsverarbeitung",
    "c": "Kernwissen",
    "d": "Soziokulturelle",
    "richtig": "d",
    "begruendung": "Kulturelle Werkzeuge, Sprache und soziale Interaktion prägen Entwicklung."
  },
  {
    "frage": "Welche Theorie liefert die präzisesten empirischen Modelle (z.B. Computer-Simulationen)?",
    "a": "Informationsverarbeitung",
    "b": "Piaget",
    "c": "Soziokulturell",
    "d": "Dynamische Systeme",
    "richtig": "a",
    "begruendung": "Formale, modellhafte Beschreibung von Denkprozessen. Übertragbar in Simulationen."
  },
  {
    "frage": "Welche Theorie lässt sich am besten auf pädagogische Förderpraxis anwenden?",
    "a": "Kernwissen",
    "b": "Informationsverarbeitung",
    "c": "Soziokulturelle",
    "d": "Dynamische Systeme",
    "richtig": "c",
    "begruendung": "Konzepte wie Scaffolding, Zone der nächsten Entwicklung, soziale Interaktion sind praktisch umsetzbar."
  }
];

