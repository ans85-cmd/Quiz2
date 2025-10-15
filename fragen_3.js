const questions = [
  {
    "frage": "Welche drei zentralen Elemente beschreibt das Modell der Vererbungs- und Umwelteinflüsse?",
    "a": "Genotyp, Epigenetik, Verhalten",
    "b": "Chromosomen, Gene, Proteine",
    "c": "Genotyp, Phänotyp, Umwelt",
    "richtig": "c",
    "begruendung": "Diese drei bestimmen gemeinsam die Entwicklung des Kindes."
  },
  {
    "frage": "Was bezeichnet der Begriff Genotyp?",
    "a": "Alle beobachtbaren Eigenschaften eines Individuums",
    "b": "Das genetische Material, das ein Individuum erbt",
    "c": "Die Gesamtheit der Umweltbedingungen",
    "richtig": "b",
    "begruendung": "Der Genotyp ist der ererbte genetische Code."
  },
  {
    "frage": "Was beschreibt der Phänotyp?",
    "a": "Die genetische Ausstattung",
    "b": "Das beobachtbare Erscheinungsbild eines Organismus",
    "c": "Nur körperliche Merkmale",
    "richtig": "b",
    "begruendung": "Der Phänotyp umfasst körperliche und Verhaltensmerkmale."
  },
  {
    "frage": "Was sind Chromosomen?",
    "a": "Zellorganellen ohne DNA",
    "b": "Lange DNA-Moleküle, die genetische Information tragen",
    "c": "Proteine zur Energiegewinnung",
    "richtig": "b",
    "begruendung": "Chromosomen bestehen aus DNA und enthalten Gene."
  },
  {
    "frage": "Wie viele Chromosomen enthält eine menschliche Körperzelle?",
    "a": "23",
    "b": "46",
    "c": "92",
    "richtig": "b",
    "begruendung": "23 Chromosomenpaare, insgesamt 46."
  },
  {
    "frage": "Was passiert beim Crossing-over?",
    "a": "Austausch von Proteinen zwischen Zellen",
    "b": "Austausch von DNA-Abschnitten zwischen Chromosomen",
    "c": "Mutation des gesamten Genoms",
    "richtig": "b",
    "begruendung": "Crossing-over fördert genetische Vielfalt."
  },
  {
    "frage": "Was beschreibt eine Mutation?",
    "a": "Eine Veränderung der Zellmembran",
    "b": "Eine Veränderung in einem DNA-Abschnitt",
    "c": "Eine Kopie eines Gens",
    "richtig": "b",
    "begruendung": "Mutationen verändern genetische Information."
  },
  {
    "frage": "Welche Chromosomen bestimmen das Geschlecht?",
    "a": "1–22",
    "b": "X und Y",
    "c": "22 und 23",
    "richtig": "b",
    "begruendung": "Geschlechtschromosomen sind X und Y."
  },
  {
    "frage": "Wer bestimmt genetisch das Geschlecht des Kindes?",
    "a": "Die Mutter",
    "b": "Der Vater",
    "c": "Beide zu gleichen Teilen",
    "richtig": "b",
    "begruendung": "Nur der Vater liefert X- oder Y-Chromosom."
  },
  {
    "frage": "Was ist ein Allele?",
    "a": "Unterschiedliche Formen eines Gens",
    "b": "Ein Protein",
    "c": "Ein Chromosom",
    "richtig": "a",
    "begruendung": "Allele bestimmen Varianten eines Merkmals."
  },
  {
    "frage": "Wann spricht man von homozygot?",
    "a": "Wenn beide Allele identisch sind",
    "b": "Wenn beide unterschiedlich sind",
    "c": "Wenn kein Allel aktiv ist",
    "richtig": "a",
    "begruendung": "Homozygot = zwei gleiche Allele."
  },
  {
    "frage": "Wann ist ein Merkmal dominant?",
    "a": "Wenn es nur bei zwei gleichen Allelen auftritt",
    "b": "Wenn es bei heterozygotem Genotyp exprimiert wird",
    "c": "Wenn es rezessiv vererbt wird",
    "richtig": "b",
    "begruendung": "Dominante Allele setzen sich durch."
  },
  {
    "frage": "Was bedeutet polygenetische Vererbung?",
    "a": "Ein Gen beeinflusst viele Merkmale",
    "b": "Mehrere Gene beeinflussen ein Merkmal",
    "c": "Ein Gen ist durch Mutation zerstört",
    "richtig": "b",
    "begruendung": "Polygen = viele Gene wirken zusammen."
  },
  {
    "frage": "Was ist ein Endophänotyp?",
    "a": "Äußerlich sichtbare Eigenschaft",
    "b": "Neurobiologische Zwischenstufe zwischen Genotyp und Verhalten",
    "c": "Ein Umwelteinfluss",
    "richtig": "b",
    "begruendung": "Endophänotypen vermitteln genetische Effekte auf Verhalten."
  },
  {
    "frage": "Was machen Regulatorgene?",
    "a": "Steuern die Aktivität anderer Gene",
    "b": "Produzieren Hormone",
    "c": "Steuern nur Körpergröße",
    "richtig": "a",
    "begruendung": "Sie regulieren Genexpression."
  },
  {
    "frage": "Was ist eine Genotyp-Umwelt-Interaktion?",
    "a": "Gene und Umwelt wirken unabhängig voneinander",
    "b": "Genetische Anlage beeinflusst Reaktion auf Umwelt",
    "c": "Umwelt bestimmt ausschließlich Verhalten",
    "richtig": "b",
    "begruendung": "Umweltwirkungen hängen von Genetik ab."
  },
  {
    "frage": "Was beschreibt das Beispiel Phenylketonurie (PKU)?",
    "a": "Nur genetische Störung",
    "b": "Gen-Umwelt-Interaktion",
    "c": "Nur Umwelteinfluss",
    "richtig": "b",
    "begruendung": "Krankheit nur bei normaler Ernährung → Umweltabhängig."
  },
  {
    "frage": "Welche Variante des MAOA-Gens erhöht das Risiko antisozialen Verhaltens bei Misshandlung?",
    "a": "Aktive Variante",
    "b": "Inaktive Variante",
    "c": "Mutierte Variante",
    "richtig": "b",
    "begruendung": "Inaktive MAOA-Variante + Misshandlung → stark erhöhtes Risiko."
  },
  {
    "frage": "Was bedeutet „Phänotyp des Kindes – Umwelt des Kindes“?",
    "a": "Umwelt bestimmt Gene",
    "b": "Kind gestaltet aktiv seine Umwelt",
    "c": "Gene bleiben unverändert",
    "richtig": "b",
    "begruendung": "Kinder wählen und prägen aktiv ihre Umwelten."
  },
  {
    "frage": "Beispiel für kindliche Umweltgestaltung:",
    "a": "Eltern wählen Hobbys",
    "b": "Kind sucht selbst Freunde und Aktivitäten",
    "c": "Lehrer bestimmen Verhalten",
    "richtig": "b",
    "begruendung": "Kind beeinflusst aktiv soziale Umwelt."
  },
  {
    "frage": "Was ist Epigenetik?",
    "a": "Veränderung der DNA-Sequenz",
    "b": "Umweltbedingte Veränderung der Genexpression ohne DNA-Veränderung",
    "c": "Mutation im Genom",
    "richtig": "b",
    "begruendung": "Epigenetische Mechanismen verändern Genaktivität."
  },
  {
    "frage": "Was beschreibt DNA-Methylierung?",
    "a": "Entfernen von DNA",
    "b": "Anheften von Methylgruppen zur Genstilllegung",
    "c": "Verstärkung der Transkription",
    "richtig": "b",
    "begruendung": "Methylierung blockiert Transkription in Promotorregion."
  },
  {
    "frage": "Welche tierischen Studien belegen epigenetische Effekte?",
    "a": "Pavlovs Hunde",
    "b": "Rattenpflegestudien (Weaver et al.)",
    "c": "Skinner-Käfige",
    "richtig": "b",
    "begruendung": "Rattenjunge bei fürsorglicher Pflege → geringere Stressreaktion."
  },
  {
    "frage": "Was bewirkte schlechte mütterliche Fürsorge bei Ratten?",
    "a": "Höhere Glukokortikoidaktivität",
    "b": "Geringere Genexpression und erhöhte Angst",
    "c": "Kein Unterschied",
    "richtig": "b",
    "begruendung": "Schlechte Fürsorge → epigenetische Hemmung."
  },
  {
    "frage": "Was zeigt die Epigenetik in Bezug auf Trauma beim Menschen?",
    "a": "Keine Auswirkungen",
    "b": "Stress verändert Methylierungsmuster dauerhaft",
    "c": "Nur genetisch bedingt",
    "richtig": "b",
    "begruendung": "Missbrauch → veränderte Stressgenexpression."
  },
  {
    "frage": "Was untersucht die Verhaltensgenetik?",
    "a": "Nur Erbkrankheiten",
    "b": "Zusammenspiel von Genetik und Umwelt auf Verhalten",
    "c": "Nur Umweltfaktoren",
    "richtig": "b",
    "begruendung": "Ziel: Erklärungsanteile von Genen und Umwelt."
  },
  {
    "frage": "Was sind die zwei Grundannahmen der Verhaltensgenetik?",
    "a": "Umwelt bestimmt Verhalten",
    "b": "Genetisch ähnliche Individuen sind sich ähnlicher; geteilte Umwelt macht ähnlich",
    "c": "Gene sind irrelevant",
    "richtig": "b",
    "begruendung": "Diese Prinzipien leiten Zwillings- und Adoptionsstudien."
  },
  {
    "frage": "Was untersuchen quantitative verhaltensgenetische Designs?",
    "a": "Zufallsstichproben ohne Statistik",
    "b": "Natürliche Variationen genetischer & Umweltfaktoren",
    "c": "Künstliche Mutation",
    "richtig": "b",
    "begruendung": "Vergleich natürlicher Unterschiede."
  },
  {
    "frage": "Was ist eine Zwillingsstudie?",
    "a": "Vergleich von Brüdern und Schwestern",
    "b": "Vergleich eineiiger und zweieiiger Zwillinge",
    "c": "Vergleich von Eltern und Kindern",
    "richtig": "b",
    "begruendung": "Misst genetischen Einfluss anhand Ähnlichkeit."
  },
  {
    "frage": "Was bedeutet „monozygot“?",
    "a": "Zwei befruchtete Eizellen",
    "b": "Eine befruchtete Eizelle, zwei Embryonen",
    "c": "Zwei Spermien",
    "richtig": "b",
    "begruendung": "Monozygot = eineiig = genetisch identisch."
  },
  {
    "frage": "Was bedeutet „dizygot“?",
    "a": "Ein Gen für zwei Merkmale",
    "b": "Zwei befruchtete Eizellen",
    "c": "Ein Chromosom doppelt",
    "richtig": "b",
    "begruendung": "Zweieiig = genetisch wie Geschwister (≈ 50 %)."
  },
  {
    "frage": "Was misst man in Zwillingsstudien typischerweise?",
    "a": "Unterschiede in Ernährung",
    "b": "Korrelationen zwischen Merkmalen",
    "c": "Blutdruckwerte",
    "richtig": "b",
    "begruendung": "Korrelationsvergleiche zur Schätzung von Erblichkeit."
  },
  {
    "frage": "Wann wird ein starker genetischer Einfluss angenommen?",
    "a": "Wenn MZ-Korrelation > DZ-Korrelation",
    "b": "Wenn DZ-Korrelation höher",
    "c": "Wenn keine Korrelation",
    "richtig": "a",
    "begruendung": "Größerer Unterschied → genetischer Anteil."
  },
  {
    "frage": "Was kann die Annahme gleicher Umweltbedingungen bei Zwillingen verzerren?",
    "a": "Unterschiedliche Plazentateilung",
    "b": "Gleiches Alter",
    "c": "Gleiche Gene",
    "richtig": "a",
    "begruendung": "Chorionizität beeinflusst pränatale Umwelt."
  },
  {
    "frage": "Was prüft eine Adoptionsstudie?",
    "a": "Einfluss der Schulbildung",
    "b": "Ähnlichkeit zu biologischen vs. Adoptiveltern",
    "c": "Nur Umwelt",
    "richtig": "b",
    "begruendung": "Vergleicht genetischen vs. Umwelteinfluss."
  },
  {
    "frage": "Wann gilt ein Merkmal als stark erblich laut Adoptionsstudien?",
    "a": "Wenn Adoptivkinder ihren Adoptiveltern ähneln",
    "b": "Wenn sie ihren biologischen Eltern ähneln",
    "c": "Wenn keine Ähnlichkeit besteht",
    "richtig": "b",
    "begruendung": "Ähnlichkeit zu biologischen Eltern → genetischer Einfluss."
  },
  {
    "frage": "Wie nennt man die Kombination von Zwillings- und Adoptionsdesign?",
    "a": "Quasi-Experiment",
    "b": "Adoptiertenzwillingsstudie",
    "c": "Familienstudie",
    "richtig": "b",
    "begruendung": "Vergleich getrennt aufgewachsener MZ-Zwillinge."
  },
  {
    "frage": "Was bedeutet „Erblichkeit“ im statistischen Sinn?",
    "a": "Anteil genetischer Varianz an Gesamtvarianz",
    "b": "Prozentsatz der Gene",
    "c": "Wahrscheinlichkeit, ein Merkmal zu erben",
    "richtig": "a",
    "begruendung": "Bezieht sich auf Populations-, nicht Individualebene."
  },
  {
    "frage": "Wie hoch ist die Erblichkeit der Intelligenz typischerweise?",
    "a": "20 %",
    "b": "50 %",
    "c": "90 %",
    "richtig": "b",
    "begruendung": "Ca. 50 % der Varianz auf genetische Unterschiede."
  },
  {
    "frage": "Warum sind Erblichkeitswerte nicht auf Individuen übertragbar?",
    "a": "Weil sie populationsspezifisch sind",
    "b": "Weil Gene zufällig sind",
    "c": "Weil Intelligenz nicht messbar ist",
    "richtig": "a",
    "begruendung": "Werte gelten nur für Population, Zeit, Kontext."
  },
  {
    "frage": "Wie verändert Umwelt Homogenität den Erblichkeitswert?",
    "a": "Er sinkt",
    "b": "Er steigt",
    "c": "Bleibt gleich",
    "richtig": "b",
    "begruendung": "Weniger Umweltvarianz → Genanteil wirkt stärker."
  },
  {
    "frage": "Beispiel: Hungersnot in Population – was passiert mit Erblichkeit der Körpergröße?",
    "a": "Erhöht sich",
    "b": "Sinkt",
    "c": "Bleibt gleich",
    "richtig": "b",
    "begruendung": "Mehr Umweltunterschiede → geringere Erblichkeit."
  },
  {
    "frage": "Was bedeutet „multifaktoriell“?",
    "a": "Nur genetische Faktoren",
    "b": "Mehrere genetische und Umweltfaktoren wirken zusammen",
    "c": "Nur Umwelt",
    "richtig": "b",
    "begruendung": "Komplexes Zusammenspiel."
  },
  {
    "frage": "Was ist die Hauptmethode zur Erblichkeitsschätzung?",
    "a": "Prozentrechnung",
    "b": "Korrelationen zwischen Verwandten",
    "c": "Beobachtung ohne Statistik",
    "richtig": "b",
    "begruendung": "Statistische Korrelationen zwischen Verwandten."
  },
  {
    "frage": "Warum sind Zwillingsstudien nicht völlig eindeutig?",
    "a": "Keine genetischen Unterschiede",
    "b": "Unterschiedliche Umweltähnlichkeiten",
    "c": "Keine Kontrollgruppe",
    "richtig": "b",
    "begruendung": "Annahme gleicher Umwelten ist oft falsch."
  },
  {
    "frage": "Was zeigen Ergebnisse von Polderman et al. (2015)?",
    "a": "Kaum genetische Effekte",
    "b": "Alle Merkmale zeigen genetischen Einfluss",
    "c": "Umwelt dominiert vollständig",
    "richtig": "b",
    "begruendung": "Über 17 000 Merkmale, alle erblich > 0."
  },
  {
    "frage": "Warum ähneln sich eineiige Zwillinge trotz identischer Gene nicht vollständig?",
    "a": "Epigenetische Unterschiede",
    "b": "Differierende Gene",
    "c": "Zufällige Fehler",
    "richtig": "a",
    "begruendung": "Unterschiedliche Genexpression im Lauf der Entwicklung."
  },
  {
    "frage": "Welche Art von Merkmalen zeigt besonders hohe Erblichkeit?",
    "a": "Körpergröße",
    "b": "Sprachgebrauch",
    "c": "Politische Haltung",
    "richtig": "a",
    "begruendung": "Biologisch stabile Merkmale stark genetisch geprägt."
  },
  {
    "frage": "Was kann die Erblichkeit von Intelligenz mit zunehmendem Alter tun?",
    "a": "Sinken",
    "b": "Steigen",
    "c": "Gleich bleiben",
    "richtig": "b",
    "begruendung": "Mit wachsender Selbstselektion nimmt Genwirkung zu."
  },
  {
    "frage": "Welche Umwelt beeinflusst IQ besonders stark in der Kindheit?",
    "a": "Peergruppen",
    "b": "Gemeinsame Familienumwelt",
    "c": "Gene",
    "richtig": "b",
    "begruendung": "Frühe geteilte Umwelt prägt stark."
  },
  {
    "frage": "Was sind „nicht-geteilte Umwelteinflüsse“?",
    "a": "Erfahrungen, die nur ein Kind macht",
    "b": "Alle genetischen Einflüsse",
    "c": "Nur pränatale Einflüsse",
    "richtig": "a",
    "begruendung": "Individuelle Erfahrungen, die Unterschiede erzeugen."
  },
  {
    "frage": "Beispiel für nicht-geteilte Umwelt:",
    "a": "Gemeinsames Elternhaus",
    "b": "Unterschiedliche Freunde",
    "c": "Gleiche Schule",
    "richtig": "b",
    "begruendung": "Individuelle soziale Erfahrungen."
  },
  {
    "frage": "Was besagt das Konzept der Gen-Umwelt-Korrelation?",
    "a": "Gene beeinflussen Auswahl und Gestaltung der Umwelt",
    "b": "Gene verändern Umwelt direkt",
    "c": "Gene sind unabhängig",
    "richtig": "a",
    "begruendung": "Menschen suchen Umwelten, die zu genetischen Dispositionen passen."
  },
  {
    "frage": "Beispiel für Gen-Umwelt-Korrelation:",
    "a": "Eltern mit Leseschwäche lesen weniger vor",
    "b": "Kinder mit Brille lesen mehr",
    "c": "Schulpflicht",
    "richtig": "a",
    "begruendung": "Genetische Leseschwäche beeinflusst Umweltangebot."
  },
  {
    "frage": "Welche Aussage über Gene und Umwelt ist korrekt?",
    "a": "Gene wirken unabhängig von Umwelt",
    "b": "Gene und Umwelt sind ständig in Wechselwirkung",
    "c": "Umwelt bestimmt Gene vollständig",
    "richtig": "b",
    "begruendung": "Entwicklungsprozesse sind immer interaktiv."
  },
  {
    "frage": "Zentrales Fazit des Kapitels „Biologie und Verhalten“:",
    "a": "Gene bestimmen Verhalten allein",
    "b": "Entwicklung beruht auf komplexer Interaktion von Genen, Umwelt und Aktivität des Kindes",
    "c": "Umwelt ist entscheidend",
    "richtig": "b",
    "begruendung": "Alle drei Faktoren wirken dynamisch zusammen."
  },
  {
    "frage": "Was ist das Ziel von GWAS in der Verhaltensgenetik?",
    "a": "Ein einzelnes Gen pro Merkmal zu finden",
    "b": "Viele DNA-Varianten mit Merkmalen zu assoziieren",
    "c": "Nur Familienvergleiche durchzuführen",
    "richtig": "b",
    "begruendung": "GWAS verknüpft zahlreiche SNP-Varianten über das ganze Genom mit komplexen Merkmalen."
  },
  {
    "frage": "Welche Aussage trifft auf die meisten entwicklungsrelevanten Merkmale zu (z. B. IQ, Temperament)?",
    "a": "Monogen",
    "b": "Polygen",
    "c": "Rein umweltbedingt",
    "richtig": "b",
    "begruendung": "Die relevanten Merkmale werden durch viele Gene in Kombination beeinflusst."
  },
  {
    "frage": "Welche Datenbasis nutzt GCTA-/DNA-basierte Ansätze im Unterschied zu klassischen Familiendesigns primär?",
    "a": "Zwillingspaare",
    "b": "Nicht verwandte Individuen",
    "c": "Nur Adoptivkinder",
    "richtig": "b",
    "begruendung": "DNA-basierte Methoden erlauben Analysen in großen Samples nicht verwandter Personen."
  },
  {
    "frage": "Wofür steht SNP im GWAS-Kontext?",
    "a": "Sequenz-Normal-Profil",
    "b": "Single-Nucleotide Polymorphism",
    "c": "Synaptischer Neuro-Prozess",
    "richtig": "b",
    "begruendung": "GWAS verknüpft Einzelnukleotid-Polymorphismen mit Merkmalen."
  },
  {
    "frage": "Was zeigte eine große Studie zu genetischen Regionen für Intelligenz (~80 000 Erwachsene)?",
    "a": "Keine genetischen Effekte",
    "b": "18 Regionen, v. a. im Hirngewebe exprimiert",
    "c": "Ein einzelnes Hauptgen",
    "richtig": "b",
    "begruendung": "Identifiziert wurden 18 genetische Regionen, die mit IQ-Unterschieden zusammenhängen."
  },
  {
    "frage": "Warum sind molekulargenetische Designs besonders nützlich für seltene Entwicklungsstörungen?",
    "a": "Kleine Fallzahlen reichen immer",
    "b": "Sie erlauben große, nicht verwandte Samples",
    "c": "Sie ersetzen Diagnostik",
    "richtig": "b",
    "begruendung": "Seltene Störungen erfordern häufig große Stichproben nicht verwandter Personen."
  },
  {
    "frage": "Was ist ein zentraler Vorteil DNA-basierter Designs gegenüber reinen Familiendesigns?",
    "a": "Keine Statistik nötig",
    "b": "Bessere Generalisierbarkeit über Familien hinaus",
    "c": "Sie messen Umwelt nicht mit",
    "richtig": "b",
    "begruendung": "DNA-basierte Analysen gehen über Familienvergleiche hinaus und verbessern Generalisierbarkeit."
  },
  {
    "frage": "Warum sind sehr große, diverse Samples für molekulargenetische Studien wichtig?",
    "a": "Um Stichprobenbias (gebildete/wohlhabende) zu reduzieren",
    "b": "Um weniger Rechenleistung zu brauchen",
    "c": "Um monogene Modelle zu bestätigen",
    "richtig": "a",
    "begruendung": "Viele frühere Arbeiten überrepräsentierten wohlhabende, gebildete Gruppen; große Samples erhöhen die Übertragbarkeit."
  },
  {
    "frage": "Welche Aussage ist korrekt?",
    "a": "Ein einzelner SNP erklärt i. d. R. große Varianzanteile",
    "b": "Viele SNPs haben kleine Effekte auf komplexe Merkmale",
    "c": "SNPs sind nur bei Krankheiten relevant",
    "richtig": "b",
    "begruendung": "Bei komplexen Merkmalen addieren sich viele kleine Effekte."
  },
  {
    "frage": "Wozu dienen molekulargenetische Methoden in der Entwicklungspsychologie primär?",
    "a": "Kausale Umweltmanipulation",
    "b": "Mechanismen zwischen DNA-Varianten und Verhalten identifizieren",
    "c": "IQ direkt erhöhen",
    "richtig": "b",
    "begruendung": "Sie verknüpfen spezifische DNA-Sequenzen mit Verhaltensunterschieden, um Mechanismen aufzudecken."
  },
  {
    "frage": "Wann beginnt die Neurogenese beim Menschen ungefähr?",
    "a": "Bei der Geburt",
    "b": "Ca. 42 Tage nach Empfängnis",
    "c": "Im Jugendalter",
    "richtig": "b",
    "begruendung": "Teilung der Zellen im Neuralrohr beginnt früh pränatal (~Tag 42)."
  },
  {
    "frage": "Wann ist die pränatale Neurogenese weitgehend abgeschlossen?",
    "a": "Nach 18 Wochen",
    "b": "Nach 40 Wochen",
    "c": "Mit 2 Jahren",
    "richtig": "a",
    "begruendung": "Die frühe Neurogenese endet etwa 18 Wochen nach Befruchtung."
  },
  {
    "frage": "Wo werden im Erwachsenenalter neue Neurone besonders gebildet?",
    "a": "Thalamus",
    "b": "Hippocampus",
    "c": "Kleinhirnrinde",
    "richtig": "b",
    "begruendung": "Adulte Neurogenese ist v. a. im Hippocampus nachgewiesen."
  },
  {
    "frage": "Wodurch wird adulte Neurogenese beeinflusst?",
    "a": "Gar nicht",
    "b": "Durch Umweltkontext: Belohnung ↑, Bedrohung ↓",
    "c": "Nur durch Gene",
    "richtig": "b",
    "begruendung": "Günstige vs. ungünstige Bedingungen modulieren Neurogenese."
  },
  {
    "frage": "Welche Funktion haben Gliazellen in der frühen Migration?",
    "a": "Sie sind nur Immunzellen",
    "b": "Sie bauen Synapsen ab",
    "c": "Sie bieten ein Gerüst zur Zielsuche",
    "richtig": "c",
    "begruendung": "Glia stellt ein Leitgerüst für wandernde Neurone bereit."
  },
  {
    "frage": "Was bezeichnet Arborisierung?",
    "a": "Axon-Myelinisierung",
    "b": "Ausbildung neuer Dendritenbäume",
    "c": "Synapseneliminierung",
    "richtig": "b",
    "begruendung": "Starke Verzweigung/Komplexitätszunahme der Dendriten."
  },
  {
    "frage": "Wann beginnt die Myelinisierung im Gehirn?",
    "a": "Nur postnatal",
    "b": "Vor der Geburt, bis ins junge Erwachsenenalter",
    "c": "Erst in der Pubertät",
    "richtig": "b",
    "begruendung": "Start pränatal, Fortsetzung bis ins frühe Erwachsenenalter."
  },
  {
    "frage": "Welche Areale reifen typischerweise früher?",
    "a": "Präfrontale Assoziationsareale",
    "b": "Sensorische und motorische Areale",
    "c": "Limbische Areale",
    "richtig": "b",
    "begruendung": "Posterior-sensorische/motorische Regionen reifen vor frontalen exekutiven Netzwerken."
  },
  {
    "frage": "Was zeigt die Kurve der Synaptogenese über den Kortex hinweg?",
    "a": "Einheitliches Timing",
    "b": "Regional unterschiedliche Zeitverläufe",
    "c": "Nur frontale Zunahme",
    "richtig": "b",
    "begruendung": "Visueller Kortex: frühes Plateau; frontal: später."
  },
  {
    "frage": "Was passiert bei der Synapsenreduktion?",
    "a": "Aktive Synapsen werden abgebaut",
    "b": "Kaum aktivierte Synapsen werden selektiv eliminiert",
    "c": "Alle Synapsen bleiben erhalten",
    "richtig": "b",
    "begruendung": "Selektive Eliminierung ≈ 40 % des Überschusses."
  },
  {
    "frage": "In welchen Entwicklungsphasen sind starke Umbauten (Überproduktion/Abbau) typisch?",
    "a": "Nur in der Pubertät",
    "b": "Erste Monate/Jahre und erneut in der Pubertät",
    "c": "Nur im Kleinkindalter",
    "richtig": "b",
    "begruendung": "Wellen frühes Leben + Pubertät."
  },
  {
    "frage": "Welche kortikale Region reift zuletzt aus (bes. exekutive Funktionen)?",
    "a": "Primär visueller Kortex",
    "b": "Somatosensorischer Kortex",
    "c": "Dorsolateraler präfrontaler Kortex",
    "richtig": "c",
    "begruendung": "Späte Reifung; Synapsenreduktion bis ca. Anfang 30."
  },
  {
    "frage": "Welche Methode misst die Diffusionsrichtung von Wasser zur Beurteilung weißer Substanz?",
    "a": "fNIRS",
    "b": "DTI (Diffusions-Tensor-Bildgebung)",
    "c": "EEG",
    "richtig": "b",
    "begruendung": "DTI erfasst Faserbahnentwicklung/Myelinisierung."
  },
  {
    "frage": "Welche Aussage zur rs-fMRT trifft zu?",
    "a": "Nur für aktive Aufgaben",
    "b": "Misst Ruheaktivität; auch bei schlafenden Säuglingen",
    "c": "Benötigt Kontrastmittel",
    "richtig": "b",
    "begruendung": "Ruhezustandsnetzwerke sind früh nachweisbar."
  },
  {
    "frage": "Was misst fNIRS indirekt?",
    "a": "Elektrische Spikes",
    "b": "Sauerstoffierungsbedingte Absorption nahinfraroten Lichts",
    "c": "Magnetische Felder von Muskeln",
    "richtig": "b",
    "begruendung": "Gut durchblutete Areale absorbieren NIR-Licht stärker."
  },
  {
    "frage": "Was zeigt das Musiker-Beispiel (Blasinstrumente) zur Plastizität?",
    "a": "Keine strukturellen Effekte",
    "b": "Vergrößerung repräsentierender Kortexareale",
    "c": "Nur funktionelle, keine anatomischen Effekte",
    "richtig": "b",
    "begruendung": "Mehr kortikale Zellen für kontrollierte Lippenrepräsentation."
  },
  {
    "frage": "Welche Auffälligkeit ist bei Autismus häufig beschrieben?",
    "a": "Reduzierte Synapsendichte",
    "b": "Erhöhte Synapsendichte/kortikale Dicke in Teilbereichen",
    "c": "Übermäßige Synapsenreduktion im Jugendalter",
    "richtig": "b",
    "begruendung": " Hinweise auf erhöhte Dichte/Dicke in einigen Arealen."
  },
  {
    "frage": "Welche Störung wird mit übermäßiger Synapsenreduktion in der Adoleszenz in Verbindung gebracht?",
    "a": "Dyslexie",
    "b": "Schizophrenie",
    "c": "ADHS",
    "richtig": "b",
    "begruendung": "Evidenz für anomale Reduktionen in der Pubertät."
  },
  {
    "frage": "Wie verläuft die Myelinisierung räumlich?",
    "a": "Von Kortex nach Hirnstamm",
    "b": "Vom Hirnstamm Richtung Kortex",
    "c": "Zufällig",
    "richtig": "b",
    "begruendung": "Start tief im Gehirn, dann Ausbreitung nach lateral/rostral."
  },
  {
    "frage": "Was illustrieren Längsschnitt-MRT-Karten (5–20 J.) zur Reifung?",
    "a": "Frühe Reifung frontaler Areale",
    "b": "Spätere Reifung frontaler/exekutiver Areale",
    "c": "Konstante graue Substanz",
    "richtig": "b",
    "begruendung": "Posterior schneller, präfrontal spät; graue → weiße Substanz."
  },
  {
    "frage": "Was ist erfahrungserwartende Plastizität?",
    "a": "Idiosynkratische Lernanpassung",
    "b": "Feinabstimmung basierend auf universellen Inputs",
    "c": "Genetische Fixierung",
    "richtig": "b",
    "begruendung": "Das Gehirn „erwartet“ arttypische Erfahrungen (z. B. Stimmen, Sehen)."
  },
  {
    "frage": "Welcher Nachteil ist mit erfahrungserwartender Plastizität verbunden?",
    "a": "Mehr Gene nötig",
    "b": "Erhöhte Verletzlichkeit bei Reizdeprivation",
    "c": "Keine sensiblen Phasen",
    "richtig": "b",
    "begruendung": "Fehlen erwarteter Inputs kann irreversibel schaden."
  },
  {
    "frage": "Klassisches Tiermodell sensibler Phasen im Sehsystem:",
    "a": "Ratten-Labyrinth",
    "b": "Katzenausformung bei Okklusion eines Auges",
    "c": "Taubenzirkeltraining",
    "richtig": "b",
    "begruendung": "Hubel & Wiesel: Okklusion in sensibler Phase → dauerhafte Reorganisation."
  },
  {
    "frage": "Humanes Analogon zur Deprivation im visuellen System:",
    "a": "Strabismus im Erwachsenenalter",
    "b": "Angeborener Katarakt in früher Kindheit",
    "c": "Kurzsichtigkeit im Schulalter",
    "richtig": "b",
    "begruendung": "Je später die Entfernung, desto schlechter die Sehschärfe; teils Cross-Modal-Reorganisation."
  },
  {
    "frage": "Beispiel für erfahrungsabhängige Plastizität im Tiermodell:",
    "a": "Immer gleich viele Synapsen",
    "b": "Enriched Environment → mehr Synapsen/Dornfortsätze",
    "c": "Käfigarmut → mehr Kortexdicke",
    "richtig": "b",
    "begruendung": "Komplexe Umwelt erhöht synaptische/strukturelle Marker."
  },
  {
    "frage": "Welche soziale/umweltbezogene Bedingung steht im Exkurs mit verlangsamtem Hirnwachstum in Verbindung?",
    "a": "Hoher SES",
    "b": "Armut/niedriger SES",
    "c": "Nur Genetik",
    "richtig": "b",
    "begruendung": "Niedriger SES ist mit geringerem Volumen grauer Substanz assoziiert (frühe Kindheit)."
  },
  {
    "frage": "Welche Art Erfahrung kann Kortexrepräsentationen bei Erwachsenen verändern (natürl. Experiment)?",
    "a": "Sudoku",
    "b": "Jahrelanges Instrumentalspiel (Blasinstrumente)",
    "c": "Zufälliges Hören",
    "richtig": "b",
    "begruendung": "Größere Repräsentationen für intensiv trainierte Effektorbereiche."
  },
  {
    "frage": "Was passiert bei fehlendem auditiven/visuellen Input in sensiblen Phasen?",
    "a": "Keine Änderung",
    "b": "Cross-modale Übernahme betroffener Kortexareale",
    "c": "Nur periphere Anpassung",
    "richtig": "b",
    "begruendung": "Z. B. Katarakt/angeborene Taubheit: Umorganisation betroffener Areale."
  },
  {
    "frage": "Welche Kernaussage zu sensiblen Phasen trifft zu?",
    "a": "Zeitfenster beliebig verschiebbar",
    "b": "Es gibt phasenspezifische hohe Empfänglichkeit; Änderungen oft irreversibel",
    "c": "Nur bei Sprache",
    "richtig": "b",
    "begruendung": "Kurzzeitig „offene Fenster“ für bestimmte Reize/Netzwerke."
  },
  {
    "frage": "Welche Alltagsimplikation folgt aus erfahrungs-erwartender Plastizität?",
    "a": "Frühe fehlende Stimulation ist unproblematisch",
    "b": "Rechtzeitige Versorgung/Intervention (z. B. Katarakt-OP) ist kritisch",
    "c": "Späte Kompensation reicht immer",
    "richtig": "b",
    "begruendung": "Outcome hängt stark vom Timing im sensiblen Fenster ab."
  },
  {
    "frage": "Wie stark verändern sich Größe und Gewicht von Geburt bis ~20 J.?",
    "a": "2× größer; 5× schwerer",
    "b": "3× größer; 15–20× schwerer",
    "c": "4× größer; 8× schwerer",
    "richtig": "b",
    "begruendung": "Typische Größen-/Gewichtszunahme über die Kindheit/Adoleszenz."
  },
  {
    "frage": "Wann ist der Körperfettanteil relativ am höchsten?",
    "a": "In der Pubertät",
    "b": "In der Säuglingszeit",
    "c": "Im Grundschulalter",
    "richtig": "b",
    "begruendung": "Höchste Anteile früh; dann Rückgang bis ~6–8 J."
  },
  {
    "frage": "Wie verläuft Wachstum zeitlich?",
    "a": "Gleichförmig",
    "b": "Besonders steil im 1.–2. LJ und in der frühen Pubertät",
    "c": "Nur Sprünge im Vorschulalter",
    "richtig": "b",
    "begruendung": "Markante Beschleunigungen früh und in der Adoleszenz."
  },
  {
    "frage": "Zephalokaudales Muster bedeutet hier:",
    "a": "Füße wachsen zuerst",
    "b": "Kopfregion ist anfangs relativ sehr groß",
    "c": "Arme wachsen vor Kopf",
    "richtig": "b",
    "begruendung": "Kopf ≈ 50 % der Länge (2 Monate), im Erwachsenenalter ≈ 10 %."
  },
  {
    "frage": "Welche Hormone steuern Größenwachstum/Sexualreife besonders?",
    "a": "Adrenalin und Insulin",
    "b": "Wachstumshormon und Thyroxin",
    "c": "Östrogen allein",
    "richtig": "b",
    "begruendung": "Genetik wirkt u. a. über Hypophysen-Wachstumshormon und Schilddrüsen-Thyroxin."
  },
  {
    "frage": "Welcher Säkulartrend wird berichtet?",
    "a": "Kleinere Erwachsene als früher",
    "b": "Größere Körperhöhe und frühere Menarche",
    "c": "Spätere Menarche in niedrigen SES",
    "richtig": "b",
    "begruendung": "Verbesserte Ernährung/Gesundheit; frühere Menarche v. a. bei niedrigerem SES, Übergewicht/Stress als Faktoren."
  },
  {
    "frage": "Wichtiger Vorteil von Muttermilch gegenüber Ersatznahrung:",
    "a": "Enthält keine Antikörper",
    "b": "Stärkt Immunsystem; antibakteriell",
    "c": "Mehr Kalorien",
    "richtig": "b",
    "begruendung": "Muttermilch ist keimarm und liefert Antikörper; auch Vorteile für die Mutter."
  },
  {
    "frage": "Kognitive Effekte des Stillens laut Evidenzlage:",
    "a": "Groß und eindeutig",
    "b": "Existieren evtl., aber eher klein; Konfundierung beachten",
    "c": "Nicht untersuchbar",
    "richtig": "b",
    "begruendung": " Hinweise auf kleinere Langzeiteffekte; soziale Faktoren konfundieren."
  },
  {
    "frage": "Wo ist Stillen besonders bedeutsam aus Public-Health-Sicht?",
    "a": "Länder mit exzellenter Wasserqualität",
    "b": "Regionen mit unsicherem Trinkwasser/geringer Infrastruktur",
    "c": "Nur wohlhabende Länder",
    "richtig": "b",
    "begruendung": "Flaschennahrung erfordert sauberes Wasser/Hygiene; Stillen senkt Risiken."
  },
  {
    "frage": "Welche Geschmacksreaktion zeigen Neugeborene typischerweise?",
    "a": "Positive Reaktion auf bitter",
    "b": "Neutrale Reaktion auf süß",
    "c": "Positive auf süß/umami; negative auf bitter",
    "richtig": "c",
    "begruendung": "Angeborene Gesichtsausdrücke spiegeln Grundqualitäten wider."
  },
  {
    "frage": "Ab wann tritt eine klare Präferenz für salzig auf?",
    "a": "Geburt",
    "b": "Ca. ab 4 Monaten",
    "c": "Schulalter",
    "richtig": "b",
    "begruendung": "Salzpräferenz entwickelt sich erst nach einigen Monaten."
  },
  {
    "frage": "Was beschreibt Nahrungsmittel-Neophobie bei Kleinkindern?",
    "a": "Vorliebe für Neues",
    "b": "Vermeidung Unbekannten",
    "c": "Nur kulturell gelernt",
    "richtig": "b",
    "begruendung": "Adaptive Vorsicht – besonders im Übergang zu fester Kost."
  },
  {
    "frage": "Effektive Strategie gegen Neophobie:",
    "a": "Einmal zeigen reicht",
    "b": "Bestechen („Iss Spinat, dann Dessert“)",
    "c": "Wiederholte Exposition (≈ 6–15-mal) inkl. Probieren",
    "richtig": "c",
    "begruendung": "Wiederholtes Probieren über Wochen erhöht Akzeptanz; Bestechung/Restriktion problematisch."
  },
  {
    "frage": "Welche elterliche Praxis erhöht Risiko für höheren BMI?",
    "a": "Modelllernen an gesundem Essverhalten",
    "b": "Nahrung zur Emotionsregulation einsetzen",
    "c": "Gemeinsames Kochen",
    "richtig": "b",
    "begruendung": "Essen als Gefühlssteuerung korreliert mit höherem BMI/Übergewicht."
  },
  {
    "frage": "Soziale Einflüsse auf kindliche Nahrungswahl:",
    "a": "Vorbilder sind irrelevant",
    "b": "Kinder übernehmen Vorlieben ähnlicher Personen (z. B. gleiche Sprache)",
    "c": "Nur Eltern zählen",
    "richtig": "b",
    "begruendung": "Frühe soziale Kategorisierung lenkt Präferenzen."
  },
  {
    "frage": "Marketingeffekt im Schulsetting:",
    "a": "Cartoon-Gemüse senkt Gemüsekonsum",
    "b": "Cartoon-Banner + Spots steigern Gemüsekonsum deutlich",
    "c": "Kinder ignorieren Banner",
    "richtig": "b",
    "begruendung": "Branding kann auch gesunde Wahl signifikant erhöhen."
  },
  {
    "frage": "Trend übergewichtiger Kinder (1975–2016) weltweit:",
    "a": "Rückläufig",
    "b": "Stetig ansteigend",
    "c": "Stabil",
    "richtig": "b",
    "begruendung": "Internationale Daten zeigen klaren Anstieg."
  },
  {
    "frage": "Welcher Lebensstilfaktor ist stärker mit Übergewicht assoziiert als reine Aktivitätsmenge?",
    "a": "Handschriftübungen",
    "b": "Bildschirmzeit",
    "c": "Musikunterricht",
    "richtig": "b",
    "begruendung": "Mehr Bildschirmzeit → höheres Risiko, stärker als Aktivitätsniveau."
  },
  {
    "frage": "Welcher Kontext erschwert Zugang zu gesunden Lebensmitteln?",
    "a": "Bauernmärkte",
    "b": "„Nahrungswüsten“ in Innenstädten",
    "c": "Schulmensa",
    "richtig": "b",
    "begruendung": "Minimärkte/teure Fertigware limitieren gesunde Optionen."
  },
  {
    "frage": "Temperamentsfaktor mit Risiko für Adipositas:",
    "a": "Hohe Selbstkontrolle",
    "b": "Impulsivität/Jähzorn",
    "c": "Introversion",
    "richtig": "b",
    "begruendung": "Geringe Impulskontrolle korreliert mit höherem BMI/mehr Junkfood."
  },
  {
    "frage": "Welcher Anteil kindlicher Todesfälle <5 J. hängt global mit Unterernährung zusammen (grobe Größenordnung)?",
    "a": "Fast die Hälfte",
    "b": "< 5 %",
    "c": "Unbedeutend",
    "richtig": "a",
    "begruendung": "Unterernährung ist an ~der Hälfte der Todesfälle beteiligt und erhöht Infektionsrisiken."
  },
  {
    "frage": "Sinnvolle Maßnahmen gegen Unterernährung auf Bevölkerungsebene:",
    "a": "Süßwaren subventionieren",
    "b": "Stillförderung, Mikronährstoffe, Wasserhygiene",
    "c": "Nur Diäten verbieten",
    "richtig": "b",
    "begruendung": "Maternal-Kind-Programme inkl. Jod/Eisen/Vitamin A und Hygiene wirken."
  },
  {
    "frage": "Wirkprinzip von Impfungen:",
    "a": "Unterdrücken Antikörperbildung",
    "b": "Induzieren Antikörper gegen (abgeschwächte/inaktive) Erreger",
    "c": "Ersetzen das Immunsystem",
    "richtig": "b",
    "begruendung": "Immunisierung über Antikörperproduktion nach Antigenkontakt."
  },
  {
    "frage": "Globaler Nutzen laut WHO (Größenordnung):",
    "a": "Kaum messbar",
    "b": "2–3 Mio. verhinderte Todesfälle/Jahr",
    "c": "100 Fälle/Jahr",
    "richtig": "b",
    "begruendung": "WHO-Schätzung zu vermeidbaren Todesfällen (z. B. Masern, Polio)."
  },
  {
    "frage": "Welche Krankheit wurde vollständig eradiziert?",
    "a": "Masern",
    "b": "Pocken",
    "c": "Röteln",
    "richtig": "b",
    "begruendung": "Pocken sind ausgerottet; andere benötigen weiterhin hohe Durchimpfung."
  },
  {
    "frage": "Status der behaupteten MMR-Autismus-Verbindung:",
    "a": "Bestätigt",
    "b": "Beruht auf gefälschten Daten; kein Zusammenhang",
    "c": "Ungeprüft",
    "richtig": "b",
    "begruendung": "Wakefield-Arbeit zurückgezogen; zahlreiche Studien falsifizieren Zusammenhang."
  },
  {
    "frage": "Warum ist Herdenimmunität entscheidend?",
    "a": "Nur um Kosten zu sparen",
    "b": "Schützt auch jene, die (noch) nicht geimpft werden können",
    "c": "Nur relevant bei Erwachsenen",
    "richtig": "b",
    "begruendung": "Ungeimpfte (z. B. zu jung, immunsupprimiert) profitieren von hohen Impfraten."
  },
  {
    "frage": "Beispiel für Folgen sinkender Impfraten:",
    "a": "Weniger Ausbrüche",
    "b": "Masernausbruch 2015 in Kalifornien; viele Ungeimpfte",
    "c": "Pockenrückkehr 2018",
    "richtig": "b",
    "begruendung": "Dokumentierter Masernausbruch bei unzureichender Durchimpfung."
  },
  {
    "frage": "Landesgesetzliches Beispiel (Deutschland):",
    "a": "Keine Impfpflichten diskutiert",
    "b": "Masern-Impfpflicht für Kita/Schule seit 01.03.2020",
    "c": "Impfungen generell verboten",
    "richtig": "b",
    "begruendung": "Gesetzliche Verpflichtung vor Eintritt in Gemeinschaftseinrichtungen."
  },
  {
    "frage": "Innovative Impfstoff-Logistik in entlegenen Regionen (Beispiel):",
    "a": "Keine Kühlung nötig",
    "b": "Impfstoff-Lieferung per Drohne (z. B. Vanuatu)",
    "c": "Nur per Post",
    "richtig": "b",
    "begruendung": "Drohnen überwinden Infrastrukturprobleme/Kühlketten-Hürden."
  }
];

