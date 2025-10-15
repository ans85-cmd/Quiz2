const questions = [
  {
    "frage": "Was war das Ziel der Kauai-Studie von Emmy Werner?",
    "a": "Einfluss biologischer und umweltbedingter Faktoren auf die Entwicklung",
    "b": "Ernährungseffekte untersuchen",
    "c": "Medikamentöse Therapien vergleichen",
    "d": "Nur genetische Unterschiede erfassen",
    "richtig": "a",
    "begruendung": "Werner kombinierte biologische Risiken mit Umweltfaktoren über 40 Jahre bei 698 Kindern."
  },
  {
    "frage": "Welche Art von Forschung führte Werner durch?",
    "a": "Experiment",
    "b": "Längsschnittstudie",
    "c": "Querschnittsstudie",
    "d": "Laborstudie",
    "richtig": "b",
    "begruendung": "Die Kinder wurden über Jahrzehnte mehrfach untersucht – klassisches Längsschnittdesign."
  },
  {
    "frage": "Welche Variable hatte den größten Einfluss auf die spätere Entwicklung?",
    "a": "Genetik",
    "b": "Qualität der familiären Umwelt",
    "c": "Geburtsgewicht",
    "d": "Intelligenztests",
    "richtig": "b",
    "begruendung": "Eine stabile, harmonische Familie kompensierte biologische Risiken am stärksten."
  },
  {
    "frage": "Wie nennt man die Fähigkeit, trotz belastender Umstände gesund zu bleiben?",
    "a": "Selbstwirksamkeit",
    "b": "Kompetenz",
    "c": "Resilienz",
    "d": "Reaktanz",
    "richtig": "c",
    "begruendung": "Resilienz = Widerstandsfähigkeit gegen negative Lebensbedingungen."
  },
  {
    "frage": "Welcher Satz beschreibt Michael aus Werners Studie am besten?",
    "a": "Er entwickelte sich trotz Armut negativ.",
    "b": "Er zeigte hohe Resilienz und eine positive Persönlichkeit.",
    "c": "Er blieb geistig zurück.",
    "d": "Er wurde kriminell.",
    "richtig": "b",
    "begruendung": "Michael steht für Kinder, die trotz mehrerer Risikofaktoren erfolgreich werden."
  },
  {
    "frage": "Was zeigt Werners Arbeit grundlegend?",
    "a": "Biologische Faktoren sind entscheidend.",
    "b": "Anlage spielt keine Rolle.",
    "c": "Biologie und Umwelt wirken zusammen.",
    "d": "Nur Umwelt prägt Kinder.",
    "richtig": "c",
    "begruendung": "Entwicklung resultiert aus Wechselwirkung von Anlage und Umwelt."
  },
  {
    "frage": "Warum ist die Erforschung der Kindesentwicklung praktisch relevant?",
    "a": "Sie verbessert Erziehung und soziale Politik.",
    "b": "Nur für philosophische Diskussion.",
    "c": "Zur Förderung von Intelligenztests.",
    "d": "Zur Selektion von Schülern.",
    "richtig": "a",
    "begruendung": "Ziel ist Wohl und Förderung von Kindern."
  },
  {
    "frage": "Was bewies Gershoffs Studie (2012)?",
    "a": "Schlagen ist kulturell neutral.",
    "b": "Schlagen hat keine Effekte.",
    "c": "Schlagen wirkt positiv erzieherisch.",
    "d": "Schlagen verstärkt Aggression langfristig.",
    "richtig": "d",
    "begruendung": "Physische Strafen verschärfen Fehlverhalten im Grundschulalter."
  },
  {
    "frage": "Wie hilft die „Schildkrötentechnik“ Kindern?",
    "a": "Strafkonditionierung",
    "b": "Selbstregulation durch Rückzug und Nachdenken",
    "c": "Emotionale Unterdrückung",
    "d": "Ablenkung durch Belohnung",
    "richtig": "b",
    "begruendung": "Kinder ziehen sich kurz zurück, beruhigen sich und reflektieren ihre Wut."
  },
  {
    "frage": "Worum geht es im Programm „Faustlos“?",
    "a": "Sprachförderung",
    "b": "Musikpädagogik",
    "c": "Training zur Emotionskontrolle und Konfliktlösung",
    "d": "Intelligenztraining",
    "richtig": "c",
    "begruendung": "Deutsche Adaption eines Wut-Regulations-Curriculums von Denham & Burton."
  },
  {
    "frage": "Was zeigte Fergusons Metaanalyse (2015) zu Videospielen?",
    "a": "Nur minimale Steigerung von Aggression",
    "b": "Keine Datenlage",
    "c": "Positive sozial-emotionale Wirkung",
    "d": "Starke Gewaltsteigerung",
    "richtig": "a",
    "begruendung": "Gesamtwirkung sehr gering – kein Beleg für Hauptursache von Aggression."
  },
  {
    "frage": "Welche Gefahr besteht bei Suggestivfragen an Kinderzeugen?",
    "a": "Bessere Erinnerung",
    "b": "Keine Auswirkung",
    "c": "Verfälschte Aussagen durch Anpassung an Erwartungen",
    "d": "Erhöhte Objektivität",
    "richtig": "c",
    "begruendung": "Kinder übernehmen oft Annahmen des Befragers („so war es wohl“)."
  },
  {
    "frage": "Wann sind Aussagen von Kindern am verlässlichsten?",
    "a": "Mit Puppen unterstützt",
    "b": "Nach wiederholtem Nachfragen",
    "c": "Nach langer Vernehmung",
    "d": "Bei spontanen und nicht-suggestiven Befragungen",
    "richtig": "d",
    "begruendung": "Spontane Berichte ohne Beeinflussung sind am genauesten."
  },
  {
    "frage": "Welche Kernaussage bringt die Studie zu rumänischen Waisenhauskindern?",
    "a": "Keine psychischen Folgen.",
    "b": "Dauer der frühen Deprivation bestimmt das Ausmaß der Schädigung.",
    "c": "Alter der Adoption irrelevant.",
    "d": "Adoption kann alles heilen.",
    "richtig": "b",
    "begruendung": "Längere Isolation → stärkere, dauerhafte Entwicklungsdefizite."
  },
  {
    "frage": "Welche Gehirnstruktur zeigte bei den Kindern Auffälligkeiten?",
    "a": "Amygdala",
    "b": "Thalamus",
    "c": "Hippocampus",
    "d": "Kleinhirn",
    "richtig": "a",
    "begruendung": "Verminderte Amygdala-Aktivität bei emotional reaktiven Defiziten."
  },
  {
    "frage": "Was zeigt die Adoptionsstudie über Entwicklungsflexibilität?",
    "a": "Erfahrungen spielen keine Rolle.",
    "b": "Frühe Erfahrungen wirken zeitabhängig.",
    "c": "Nur Gene zählen.",
    "d": "Kultur entscheidet alles.",
    "richtig": "b",
    "begruendung": "Timing der Erfahrung ist kritisch – nach bestimmter Phase kaum Erholung."
  },
  {
    "frage": "Wie nennt man den Entzug von Anreizen, die Entwicklung hemmen?",
    "a": "Desensibilisierung",
    "b": "Deprivation",
    "c": "Depression",
    "d": "Isolation",
    "richtig": "b",
    "begruendung": "Deprivation = Mangel an notwendigen Stimuli → Entwicklungsbeeinträchtigung."
  },
  {
    "frage": "Was glaubte Platon über Wissen?",
    "a": "Lernen ist zufällig.",
    "b": "Kinder besitzen angeborene Ideen.",
    "c": "Wissen entsteht nur durch Erfahrung.",
    "d": "Sprache prägt Wissen.",
    "richtig": "b",
    "begruendung": "Platon → Nativismus: Wissen ist von Geburt an vorhanden."
  },
  {
    "frage": "Aristoteles sah Kindheit als …",
    "a": "Tabula rasa – Erfahrung formt Wissen.",
    "b": "Anlagefixiert.",
    "c": "Göttlich vorbestimmt.",
    "d": "Erziehung überflüssig.",
    "richtig": "a",
    "begruendung": "Erfahrung schreibt auf die „leere Tafel“ des Kindes."
  },
  {
    "frage": "Wie unterschied sich Rousseau von Locke?",
    "a": "Er forderte mehr Strafen.",
    "b": "Er plädierte für natürliche Freiheit und selbstgesteuertes Lernen.",
    "c": "Er verwarf Erziehung komplett.",
    "d": "Er fokussierte nur auf Religion.",
    "richtig": "b",
    "begruendung": "Rousseau betonte Eigenaktivität und spätere formale Erziehung."
  },
  {
    "frage": "Was war das Hauptziel der sozialen Reformbewegung im 19. Jh.?",
    "a": "Einführung von Fabrikunterricht",
    "b": "Bessere Lebens- und Arbeitsbedingungen für Kinder",
    "c": "Förderung der Geburtenrate",
    "d": "Etablierung von Genetik",
    "richtig": "b",
    "begruendung": "Reformer wie Shaftesbury kämpften gegen Kinderarbeit."
  },
  {
    "frage": "Was trug Charles Darwin zur Kindesentwicklung bei?",
    "a": "Erfand IQ-Tests",
    "b": "Erfand die Konditionierung",
    "c": "Erste systematische Baby-Biografie (1877)",
    "d": "Begründete Psychoanalyse",
    "richtig": "c",
    "begruendung": "Darwins Beobachtungen bildeten Grundlage empirischer Entwicklungsforschung."
  },
  {
    "frage": "Was zeigt die Evolutionstheorie für die Psychologie?",
    "a": "Verhalten hat biologische Wurzeln und Anpassungsfunktionen.",
    "b": "Verhalten ist reiner Zufall.",
    "c": "Nur Erziehung prägt Menschen.",
    "d": "Evolution endet mit Geburt.",
    "richtig": "a",
    "begruendung": "Darwin → Variation, Selektion, Vererbung auch auf psychische Merkmale anwendbar."
  },
  {
    "frage": "Was bedeutet „Anlage“ in der Entwicklungspsychologie?",
    "a": "Genetische Grundausstattung des Menschen",
    "b": "Soziale Umwelt",
    "c": "Erziehung",
    "d": "Familienstruktur",
    "richtig": "a",
    "begruendung": "Anlage = vererbte biologische Merkmale."
  },
  {
    "frage": "Was meint „Umwelt“ im wissenschaftlichen Sinn?",
    "a": "Nur Erziehung durch Eltern",
    "b": "Alle materiellen und sozialen Einflüsse",
    "c": "Nur Natur und Klima",
    "d": "Politische Systeme ausschließlich",
    "richtig": "b",
    "begruendung": "Umwelt umfasst Mutterleib, Familie, Schule, Kultur usw."
  },
  {
    "frage": "Wie verhält sich die Anlage-Umwelt-Frage heute?",
    "a": "Interaktion statt Entweder-oder",
    "b": "Nur Gene sind relevant",
    "c": "Nur Erfahrung entscheidet",
    "d": "Unabhängig voneinander",
    "richtig": "a",
    "begruendung": "Entwicklung = ständiges Wechselspiel zwischen beidem."
  },
  {
    "frage": "Was zeigt die Schizophrenie-Forschung zu Zwillingen?",
    "a": "Gleiche Risikoquote wie Bevölkerung",
    "b": "Höhere Risikoquote bei eineiigen Zwillingen (40–50 %)",
    "c": "Keine genetischen Effekte",
    "d": "Nur Umwelt entscheidend",
    "richtig": "b",
    "begruendung": "Genetische Komponente klar nachweisbar, aber nicht allein ausreichend."
  },
  {
    "frage": "Was bedeutet „Epigenetik“?",
    "a": "Genmutation",
    "b": "Erforschung der Genexpressionsänderungen durch Umwelteinflüsse",
    "c": "DNA-Neubildung",
    "d": "Vererbung ohne Gene",
    "richtig": "b",
    "begruendung": "Erfahrungen verändern Protein-Regulation → Gene werden aktiv oder stillgelegt."
  },
  {
    "frage": "Was ist „Methylierung“ im epigenetischen Sinn?",
    "a": "Chemische Abschwächung der Genaktivität",
    "b": "Zunahme von Genkopien",
    "c": "Zerstörung von DNA",
    "d": "Neubildung von RNA",
    "richtig": "a",
    "begruendung": "Methylgruppen reduzieren Genexpression → Einfluss auf Stress und Depression."
  },
  {
    "frage": "Wie kann Stress der Mutter das Kind epigenetisch beeinflussen?",
    "a": "Nur durch Verhalten nach der Geburt",
    "b": "Durch veränderte Methylierung in der DNA des Kindes",
    "c": "Nur durch Ernährung",
    "d": "Gar nicht",
    "richtig": "b",
    "begruendung": "Studien zeigen höhere Methylierung bei Kindern gestresster oder depressiver Mütter."
  },
  {
    "frage": "Wie gestalten Kinder laut moderner Forschung ihre Entwicklung mit?",
    "a": "Durch aktive Auswahl von Reizen und Verhalten",
    "b": "Ausschließlich durch elterliche Steuerung",
    "c": "Passiv durch Gene",
    "d": "Erst im Jugendalter",
    "richtig": "a",
    "begruendung": "Schon Säuglinge steuern Aufmerksamkeit, Spiel und Sprache – sie sind aktive Gestalter."
  },
  {
    "frage": "Was bevorzugen Neugeborene in ihrer Aufmerksamkeit?",
    "a": "Statische Formen",
    "b": "Leere Flächen",
    "c": "Bewegte Objekte und Gesichter, besonders das der Mutter",
    "d": "Lautlose Reize",
    "richtig": "c",
    "begruendung": "Visuelle und soziale Reize, v. a. Gesichter, fördern Bindung und Lernen."
  },
  {
    "frage": "Warum lächeln Babys ihre Mutter im zweiten Monat häufiger an?",
    "a": "Wechselseitige Interaktion stärkt Bindung",
    "b": "Reflexartiger Muskelreiz",
    "c": "Zufällige Bewegung",
    "d": "Bedingter Reflex",
    "richtig": "a",
    "begruendung": "Das soziale Lächeln verstärkt Kommunikation und Bindungsverhalten."
  },
  {
    "frage": "Was zeigt das selbstgesprochene „Babysprache“-Reden allein im Raum?",
    "a": "Sprachstörung",
    "b": "Intrinsische Motivation zum Spracherwerb",
    "c": "Aufmerksamkeitsdefizit",
    "d": "Imitation ohne Sinn",
    "richtig": "b",
    "begruendung": "Kinder üben Sprache eigenmotiviert – Lernen ohne äußere Verstärkung."
  },
  {
    "frage": "Welchen Nutzen hat kindliches Fantasiespiel?",
    "a": "Verlust von Realitätsbezug",
    "b": "Training sozialer und emotionaler Fähigkeiten",
    "c": "Reduktion der Kreativität",
    "d": "Zufällige Beschäftigung",
    "richtig": "b",
    "begruendung": "Rollen- und Symbolspiel fördern Empathie, Selbstkontrolle und Konfliktlösung."
  },
  {
    "frage": "Was lernt ein Kind, das mit einem Löffel auf verschiedene Flächen schlägt?",
    "a": "Physikalische Zusammenhänge und Reaktionsmuster",
    "b": "Disziplin",
    "c": "Sprache",
    "d": "Sozialverhalten",
    "richtig": "a",
    "begruendung": "Experimentierendes Spiel vermittelt Ursache-Wirkungs-Erfahrungen."
  },
  {
    "frage": "Was unterscheidet kontinuierliche von diskontinuierlicher Entwicklung?",
    "a": "Ererbte vs. erlernte Merkmale",
    "b": "Allmähliche vs. sprunghafte Veränderungen",
    "c": "Motorische vs. kognitive Prozesse",
    "d": "Norm vs. Abweichung",
    "richtig": "b",
    "begruendung": "Kontinuierlich = fließend (z. B. Wachstum), diskontinuierlich = Stufen oder Sprünge."
  },
  {
    "frage": "Beth glaubte mit 4 Jahren, das hohe Glas enthalte mehr Wasser – warum?",
    "a": "Motorische Schwäche",
    "b": "Fehlende Wahrnehmung",
    "c": "Fokus nur auf Höhe, nicht auf Breite (präoperationales Denken)",
    "d": "Soziale Beeinflussung",
    "richtig": "c",
    "begruendung": "Kinder konzentrieren sich auf einen Aspekt – typisch für Piagets 2. Stufe."
  },
  {
    "frage": "Was ändert sich in Beths Denken mit 6 Jahren?",
    "a": "Zunahme der Wahrnehmungsschärfe",
    "b": "Erkenntnis der Mengenkonstanz (konkret-operationales Denken)",
    "c": "Reduktion der Intelligenz",
    "d": "Sprachhemmung",
    "richtig": "b",
    "begruendung": "Ab ca. 6–7 Jahren verstehen Kinder, dass Menge beim Umfüllen gleich bleibt."
  },
  {
    "frage": "Was beschreiben Stufentheorien allgemein?",
    "a": "Kontinuierliche Zunahme von Wissen",
    "b": "Zufällige Variation",
    "c": "Entwicklung als Abfolge qualitativer Sprünge",
    "d": "Nur genetische Prozesse",
    "richtig": "c",
    "begruendung": "Stufentheorien (Piaget, Freud, Erikson usw.) sehen klare Phasen mit neuen Denk-/Verhaltensweisen."
  },
  {
    "frage": "Nach Piaget können Zwei- bis Fünfjährige …",
    "a": "Mehrere Variablen gleichzeitig kombinieren",
    "b": "Nur einen Aspekt einer Situation berücksichtigen",
    "c": "Abstrakt logisch denken",
    "d": "Hypothetisch deduzieren",
    "richtig": "b",
    "begruendung": "Präoperationales Stadium: eindimensionales Denken, z. B. nur Höhe."
  },
  {
    "frage": "Was bezeichnet „kognitive Entwicklung“?",
    "a": "Reifung der Motorik",
    "b": "Soziale Integration",
    "c": "Veränderung von Denken, Wahrnehmen, Problemlösen, Sprache",
    "d": "Emotionale Stabilität",
    "richtig": "c",
    "begruendung": "Kognition = alle mentalen Prozesse zur Informationsverarbeitung."
  },
  {
    "frage": "Was ist die Hauptkritik an Stufentheorien?",
    "a": "Kinder verhalten sich völlig sprunghaft",
    "b": "Stufen sind biologisch fix",
    "c": "Entwicklung verläuft oft graduell und bereichsspezifisch",
    "d": "Nur bei Erwachsenen anwendbar",
    "richtig": "c",
    "begruendung": "Empirie zeigt Übergänge und Variation, keine starren Sprünge."
  },
  {
    "frage": "Warum fällt es schwer, Kontinuität und Diskontinuität klar zu trennen?",
    "a": "Hängt von Perspektive und Messintervall ab",
    "b": "Beide schließen sich aus",
    "c": "Nur biologische Merkmale kontinuierlich",
    "d": "Nur Verhalten diskontinuierlich",
    "richtig": "a",
    "begruendung": "Tägliche Beobachtung zeigt Kontinuität, große Abstände wirken sprunghaft."
  },
  {
    "frage": "Was zeigte Tanners (1961) Wachstumskurve?",
    "a": "Kinder wachsen stufenweise im Monatstakt",
    "b": "Wachstum wirkt kontinuierlich oder sprunghaft je nach Betrachtung",
    "c": "Wachstum ist rein genetisch",
    "d": "Nur Umwelt beeinflusst Größe",
    "richtig": "b",
    "begruendung": "Gleiche Daten können beide Sichtweisen stützen – abhängig vom Messintervall."
  },
  {
    "frage": "Was ist die vernünftigste Antwort auf die Kontinuitätsfrage?",
    "a": "„Entwicklung ist immer diskontinuierlich.“",
    "b": "„Es kommt auf Betrachtungsweise und Messzeitpunkt an.“",
    "c": "„Alles ist zufällig.“",
    "d": "„Nur Gene bestimmen Verlauf.“",
    "richtig": "b",
    "begruendung": "Unterschiedliche Ebenen – je nach Perspektive gilt beides."
  },
  {
    "frage": "Wodurch entstehen entwicklungsbedingte Veränderungen?",
    "a": "Durch reinen Zufall",
    "b": "Durch zugrunde liegende Mechanismen biologischer, kognitiver und sozialer Art",
    "c": "Nur durch Eltern",
    "d": "Nur durch Schule",
    "richtig": "b",
    "begruendung": "Mechanismen treiben Entwicklung an (z. B. Lernen, Reifung)."
  },
  {
    "frage": "Welche Rolle spielen neuronale Prozesse bei Veränderungen?",
    "a": "Sie bilden Grundlage für Lernen und Anpassung",
    "b": "Nur beim Erwachsenen",
    "c": "Keine",
    "d": "Nur motorisch relevant",
    "richtig": "a",
    "begruendung": "Synapsenbildung und Plastizität ermöglichen Entwicklungsfortschritt."
  },
  {
    "frage": "Wie beeinflusst der soziokulturelle Kontext die Entwicklung?",
    "a": "Gar nicht",
    "b": "Durch Werte, Normen, Praktiken und Ressourcen",
    "c": "Nur genetisch vermittelt",
    "d": "Ausschließlich über Erziehung der Mutter",
    "richtig": "b",
    "begruendung": "Kultur bestimmt, welche Fähigkeiten und Verhaltensweisen gefördert werden."
  },
  {
    "frage": "Welche Forschungsfrage beschreibt den „soziokulturellen Kontext“?",
    "a": "Wie wirken sich Kultur, Klasse und Gemeinschaft auf Entwicklung aus?",
    "b": "Wie verändert sich DNA?",
    "c": "Wie wächst das Gehirn?",
    "d": "Wie funktioniert Wahrnehmung?",
    "richtig": "a",
    "begruendung": "Ziel ist Verständnis kultureller und sozialer Einflüsse."
  },
  {
    "frage": "Was bedeutet „interindividuelle Unterschiede“?",
    "a": "Unterschiede zwischen Spezies",
    "b": "Warum Kinder sich voneinander unterscheiden",
    "c": "Abweichung von der Norm",
    "d": "Pathologische Varianz",
    "richtig": "b",
    "begruendung": "Analyse der Ursachen individueller Differenzen (Gene, Umwelt, Erziehung)."
  },
  {
    "frage": "Was sind mögliche Quellen interindividueller Unterschiede?",
    "a": "Genetik, Erziehung, Erfahrungen, Wahl der Umwelt",
    "b": "Nur Gene",
    "c": "Nur Zufall",
    "d": "Nur Intelligenz",
    "richtig": "a",
    "begruendung": "Entwicklung entsteht aus komplexem Zusammenspiel dieser Faktoren."
  },
  {
    "frage": "Warum sind Zwillings- und Adoptionsstudien wichtig?",
    "a": "Messen nur Umwelt",
    "b": "Trennen genetische und Umweltanteile",
    "c": "Nur für Biologie relevant",
    "d": "Ersetzen Experimente",
    "richtig": "b",
    "begruendung": "Vergleich genetisch ähnlicher, aber unterschiedlich aufgewachsener Personen."
  },
  {
    "frage": "Warum erkranken nicht alle genetisch Belasteten an Schizophrenie?",
    "a": "Weil Krankheit zufällig ist",
    "b": "Weil Umweltbedingungen moderieren",
    "c": "Weil Gene sich selbst abschalten",
    "d": "Weil Therapie schützt",
    "richtig": "b",
    "begruendung": "Interaktion → nur bei zusätzlicher familiärer Belastung erhöhtes Risiko."
  },
  {
    "frage": "Was illustriert die Epigenetik im Entwicklungszusammenhang?",
    "a": "Erfahrungen verändern Genexpression dauerhaft",
    "b": "Gene bleiben unbeeinflusst",
    "c": "Erziehung löscht DNA",
    "d": "Methylierung verändert IQ direkt",
    "richtig": "a",
    "begruendung": "Umweltreize führen zu chemischen Modifikationen, die Verhalten prägen."
  },
  {
    "frage": "Was zeigte die Studie von Essex et al. (2013)?",
    "a": "Stress wirkt nur psychologisch",
    "b": "Kein Einfluss",
    "c": "Mütterlicher Stress korreliert mit Methylierung im Genom ihrer Kinder",
    "d": "Stress steigert Intelligenz",
    "richtig": "c",
    "begruendung": "Frühe Erfahrungen „gehen unter die Haut“ – biologische Spur von Umwelt."
  },
  {
    "frage": "Welches Beispiel beschreibt „das aktive Kind“?",
    "a": "Ein Säugling reagiert nur passiv",
    "b": "Ein Kind wählt gezielt Objekte, die Geräusche machen",
    "c": "Ein Schüler folgt stur Anweisungen",
    "d": "Ein Baby schläft die meiste Zeit",
    "richtig": "b",
    "begruendung": "Aktive Selektion und Exploration fördern Entwicklung."
  },
  {
    "frage": "Was lernen Kinder durch Regelspiele wie „Mensch ärgere Dich nicht“?",
    "a": "Motorik",
    "b": "Selbstkontrolle und Emotionsregulation",
    "c": "Sprache",
    "d": "Mathematik",
    "richtig": "b",
    "begruendung": "Regelspiele fördern Geduld, Frustrationstoleranz und Fairness."
  },
  {
    "frage": "Was ist das Ziel entwicklungspsychologischer Forschung im Hinblick auf das Kindeswohl?",
    "a": "Selektion von Leistungsstarken",
    "b": "Reduktion von Vielfalt",
    "c": "Wissenschaftlich begründete Förderung von Kindern",
    "d": "Vereinheitlichung der Erziehung",
    "richtig": "c",
    "begruendung": "Erkenntnisse sollen zu besseren Lebens- und Bildungsbedingungen führen."
  },
  {
    "frage": "Welche übergreifende Erkenntnis zieht das Kapitel 1?",
    "a": "Kindesentwicklung ist ein Zusammenspiel biologischer, sozialer und aktiver Prozesse.",
    "b": "Entwicklung ist rein genetisch festgelegt.",
    "c": "Erziehung allein bestimmt Persönlichkeit.",
    "d": "Kinder sind passive Produkte der Umwelt.",
    "richtig": "a",
    "begruendung": "Ganzheitlicher Ansatz – Anlage × Umwelt × Aktivität × Kultur prägen gemeinsam."
  },
  {
    "frage": "Was ist das Ziel der Forschung zu entwicklungsbedingten Veränderungen?",
    "a": "Nur Ergebnisse zu beschreiben",
    "b": "Die zugrunde liegenden Mechanismen von Entwicklung zu identifizieren",
    "c": "Statistiken zu sammeln",
    "d": "Unterschiede zu katalogisieren",
    "richtig": "b",
    "begruendung": "Entwicklungspsychologie will erklären, wie Veränderungen entstehen – nicht nur, dass sie auftreten."
  },
  {
    "frage": "Was versteht man unter einem Entwicklungsmechanismus?",
    "a": "Elternverhalten",
    "b": "Nur genetische Mutation",
    "c": "Prozess, der Entwicklungsveränderungen bewirkt (z. B. Lernen, Reifung)",
    "d": "Sozialgesetz",
    "richtig": "c",
    "begruendung": "Mechanismen erklären, wodurch neue Fähigkeiten entstehen."
  },
  {
    "frage": "Welche neurobiologische Grundlage ist zentral für Lernprozesse in der Entwicklung?",
    "a": "Myelinisierung",
    "b": "Synaptische Plastizität",
    "c": "Reflexbogen",
    "d": "Neurotransmitterabbau",
    "richtig": "b",
    "begruendung": "Veränderungen synaptischer Verbindungen ermöglichen erfahrungsabhängiges Lernen."
  },
  {
    "frage": "Was beschreibt die Theorie von Vygotsky?",
    "a": "Lernen erfolgt durch soziale Interaktion und kulturelle Werkzeuge",
    "b": "Lernen ist ausschließlich individuell",
    "c": "Kinder lernen nur durch Versuch-Irrtum",
    "d": "Kultur spielt keine Rolle",
    "richtig": "a",
    "begruendung": "Vygotsky betonte die soziale Vermittlung und Sprache als Träger kulturellen Wissens."
  },
  {
    "frage": "Wie nennt man das Lernen durch Anleitung erfahrenerer Personen?",
    "a": "Operante Konditionierung",
    "b": "Systemische Sozialisation",
    "c": "Guided Participation",
    "d": "Reinforcement Learning",
    "richtig": "c",
    "begruendung": "Guided Participation = gemeinsames Tun mit gradueller Verantwortungsübertragung."
  },
  {
    "frage": "Was betont Bronfenbrenners ökologisches Systemmodell?",
    "a": "Entwicklung ist zufällig",
    "b": "Mehrschichtige Umweltkontexte beeinflussen Entwicklung",
    "c": "Nur Familie zählt",
    "d": "Gesellschaft hat keinen Einfluss",
    "richtig": "b",
    "begruendung": "Mikro-, Meso-, Exo-, Makrosystem wirken zusammen auf das Kind."
  },
  {
    "frage": "Welcher Begriff beschreibt das bewusste Auswählen einer Umgebung, die zur eigenen Anlage passt?",
    "a": "Aktive Nischenwahl",
    "b": "Reaktive Anpassung",
    "c": "Passives Lernen",
    "d": "Konformitätsdruck",
    "richtig": "a",
    "begruendung": "Kinder suchen Umwelten, die ihren Interessen oder Anlagen entsprechen."
  },
  {
    "frage": "Was meint eine Gen-Umwelt-Korrelation?",
    "a": "Umwelt verändert Gene direkt",
    "b": "Gene beeinflussen, welchen Umwelten man ausgesetzt ist",
    "c": "Gene und Umwelt wirken völlig unabhängig",
    "d": "Zufällige Kombination",
    "richtig": "b",
    "begruendung": "Gene beeinflussen, welche Erfahrungen man macht."
  },
  {
    "frage": "Was beschreibt eine Reaktionsnorm?",
    "a": "Fixe genetische Grenze",
    "b": "Bereich möglicher Phänotypen, den Umweltbedingungen bestimmen",
    "c": "Unveränderliches Verhalten",
    "d": "Normales Sozialverhalten",
    "richtig": "b",
    "begruendung": "Die gleiche Genvariante kann je nach Umwelt unterschiedlich aussehen."
  },
  {
    "frage": "Warum unterscheiden sich Kinder trotz gleicher Gene (z. B. Zwillinge)?",
    "a": "Unvollständige DNA",
    "b": "Zufall allein",
    "c": "Unterschiedliche Erfahrungen und Epigenetik",
    "d": "Erziehung hat keinen Einfluss",
    "richtig": "c",
    "begruendung": "Umwelt und epigenetische Faktoren führen zu Differenzen."
  },
  {
    "frage": "Warum ist Forschungsethik bei Kindern besonders wichtig?",
    "a": "Kinder können Risiken und Nutzen oft nicht selbst beurteilen",
    "b": "Weil Kinder keine Rechte haben",
    "c": "Weil Kinder nicht teilnehmen dürfen",
    "d": "Weil Ergebnisse sonst ungültig sind",
    "richtig": "a",
    "begruendung": "Schutzbedürftigkeit erfordert besonderen Schutz und Zustimmung."
  },
  {
    "frage": "Was gehört NICHT zu ethischen Standards entwicklungspsychologischer Forschung?",
    "a": "Freiwillige Teilnahme",
    "b": "Täuschung ohne Aufklärung",
    "c": "Anonymität",
    "d": "Recht auf Abbruch",
    "richtig": "b",
    "begruendung": "Täuschung ist nur in Ausnahmefällen und mit Nachbesprechung erlaubt."
  },
  {
    "frage": "Was bezeichnet „informierte Einwilligung“?",
    "a": "Zustimmung der Forscher",
    "b": "Zustimmung nach verständlicher Aufklärung über Ziel und Risiken",
    "c": "Automatische Teilnahme bei Minderjährigen",
    "d": "Gesetzliche Pflichtteilnahme",
    "richtig": "b",
    "begruendung": "Teilnehmer müssen Ziel und Risiken verstehen und zustimmen."
  },
  {
    "frage": "Warum ist das Thema „Kindeswohl“ zentral für Forschung?",
    "a": "Erkenntnisse sollen Kindern nützen, nicht schaden",
    "b": "Forschung dient nur Wissenschaftlern",
    "c": "Ethik verhindert Fortschritt",
    "d": "Kinder sind Objekt, nicht Subjekt",
    "richtig": "a",
    "begruendung": "Forschung soll Kindern langfristig profitieren, nicht schaden."
  },
  {
    "frage": "Was ist das Hauptziel moderner Entwicklungspsychologie laut Kapitel 1?",
    "a": "Erstellung fester Entwicklungsnormen",
    "b": "Interdisziplinäres Verständnis kindlicher Entwicklung zur Förderung von Wohlbefinden",
    "c": "Kontrolle elterlicher Erziehung",
    "d": "Reduktion individueller Unterschiede",
    "richtig": "b",
    "begruendung": "Ziel ist ein umfassendes, förderliches Verständnis für Entwicklung."
  },
  {
    "frage": "Welche Forschungsmethode erlaubt es, Veränderungen über die Zeit innerhalb derselben Personen zu beobachten?",
    "a": "Längsschnittstudie",
    "b": "Querschnittstudie",
    "c": "Laborversuch",
    "d": "Korrelation",
    "richtig": "a",
    "begruendung": "Längsschnittstudien messen dieselben Personen mehrfach über die Zeit."
  },
  {
    "frage": "Welche Methode vergleicht verschiedene Altersgruppen zu einem Zeitpunkt?",
    "a": "Querschnittstudie",
    "b": "Experimentelle Studie",
    "c": "Längsschnittstudie",
    "d": "Einzelfallanalyse",
    "richtig": "a",
    "begruendung": "Querschnittstudien vergleichen verschiedene Altersgruppen gleichzeitig."
  },
  {
    "frage": "Was ist das Ziel einer wissenschaftlichen Theorie?",
    "a": "Nur Fakten zu sammeln",
    "b": "Beobachtungen zu erklären, vorherzusagen und systematisch zu ordnen",
    "c": "Philosophische Meinungen zu vertreten",
    "d": "Beobachtungen zu wiederholen",
    "richtig": "b",
    "begruendung": "Theorien ordnen Wissen und ermöglichen Vorhersagen."
  },
  {
    "frage": "Welche Gegenpositionen beschreiben die Debatte Nativismus vs. Empirismus?",
    "a": "Angeborenes Wissen vs. Lernen durch Erfahrung",
    "b": "Sozialisation vs. Gene",
    "c": "Kultur vs. Persönlichkeit",
    "d": "Kontinuität vs. Diskontinuität",
    "richtig": "a",
    "begruendung": "Nativismus betont angeborenes Wissen, Empirismus Erfahrung."
  },
  {
    "frage": "Warum sind Theorien in der Entwicklungspsychologie unverzichtbar?",
    "a": "Sie verhindern neue Forschung",
    "b": "Sie verbinden Einzelergebnisse zu einem kohärenten Gesamtbild",
    "c": "Sie ersetzen Daten",
    "d": "Sie haben nur historischen Wert",
    "richtig": "b",
    "begruendung": "Theorien integrieren Forschungsergebnisse und führen zu Verständnis."
  }
];
