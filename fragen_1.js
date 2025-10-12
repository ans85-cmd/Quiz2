const questions = [
  {
    frage: "Was war das Ziel der Kauai-Studie von Emmy Werner?",
    a: "Nur genetische Unterschiede erfassen",
    b: "Einfluss biologischer und umweltbedingter Faktoren auf die Entwicklung",
    c: "Ernährungseffekte untersuchen",
    d: "Medikamentöse Therapien vergleichen",
    richtig: "b",
    begruendung: "Werner kombinierte biologische Risiken mit Umweltfaktoren über 40 Jahre bei 698 Kindern."
  },
  {
    frage: "Was versteht man unter dem ‚False-Consensus-Effekt‘?",
    a: "Menschen überschätzen, wie viele andere ihre Meinung teilen",
    b: "Menschen unterschätzen ihre Beliebtheit",
    c: "Menschen erinnern sich falsch an Konsensentscheidungen",
    d: "Menschen sind unfähig, eigene Vorurteile zu erkennen",
    richtig: "a",
    begruendung: "Der Effekt beschreibt, dass Menschen glauben, ihre Meinung sei weit verbreitet, auch wenn sie es nicht ist."
  },
  {
    frage: "Was ist mit ‚Selbsterfüllender Prophezeiung‘ gemeint?",
    a: "Man ignoriert eigene Vorhersagen",
    b: "Eine Erwartung beeinflusst Verhalten so, dass sie eintritt",
    c: "Man erfüllt anderen unbewusst ihre Wünsche",
    d: "Man erkennt zufällige Ereignisse als Muster",
    richtig: "b",
    begruendung: "Wenn man erwartet, dass jemand scheitert, behandelt man ihn entsprechend – was das Scheitern wahrscheinlicher macht."
  },
  {
    frage: "Was bedeutet der ‚Halo-Effekt‘?",
    a: "Menschen mit hohen Stirnen wirken intelligenter",
    b: "Eine positive Eigenschaft überstrahlt andere Einschätzungen",
    c: "Man blendet schlechte Eigenschaften aus",
    d: "Charismatische Menschen wirken glaubwürdiger",
    richtig: "b",
    begruendung: "Z.B. kann Attraktivität dazu führen, dass jemand auch als intelligenter eingeschätzt wird."
  },
  {
    frage: "Was zeigte das Stanford-Prison-Experiment?",
    a: "Gruppenzwang fördert Aggression",
    b: "Machtpositionen beeinflussen Verhalten stark",
    c: "Autorität wird selten hinterfragt",
    d: "Gefängnisse machen Menschen psychisch krank",
    richtig: "b",
    begruendung: "Die Rollenverteilung führte schnell zu Missbrauch durch 'Wärter', obwohl es ein Rollenspiel war."
  },
  {
    frage: "Was beschreibt der Begriff ‚Kognitive Dissonanz‘?",
    a: "Widersprüchliche Gedanken erzeugen Unbehagen",
    b: "Gedanken lassen sich leicht ändern",
    c: "Menschen denken irrational bei Stress",
    d: "Gedanken beeinflussen Emotionen direkt",
    richtig: "a",
    begruendung: "Wenn Verhalten und Einstellung nicht übereinstimmen, entsteht Dissonanz, die Menschen reduzieren wollen."
  },
  {
    frage: "Was bewirkt soziale Erleichterung?",
    a: "Man wird langsamer vor Publikum",
    b: "Man leistet Besseres bei einfachen Aufgaben vor anderen",
    c: "Man meidet Gruppenarbeit",
    d: "Man denkt klarer allein",
    richtig: "b",
    begruendung: "Bei gut gelernten Aufgaben verbessert die Anwesenheit anderer die Leistung."
  },
  {
    frage: "Was ist ‚Konformität‘ in der Sozialpsychologie?",
    a: "Unabhängiges Denken",
    b: "Sich Gruppenmeinungen anpassen",
    c: "Normen ablehnen",
    d: "Vermeidung von Gruppen",
    richtig: "b",
    begruendung: "Menschen passen sich häufig Gruppenmeinungen an – selbst wenn diese offensichtlich falsch sind."
  },
  {
    frage: "Was zeigte das Milgram-Experiment?",
    a: "Menschen helfen Fremden oft spontan",
    b: "Menschen folgen Autorität auch gegen ihr Gewissen",
    c: "Gruppendruck kann Verhalten ändern",
    d: "Menschen imitieren gewaltfreies Verhalten",
    richtig: "b",
    begruendung: "Teilnehmer verabreichten (vermeintlich) gefährliche Stromschläge auf Anweisung."
  },
  {
    frage: "Was ist die ‚Fundamentale Attributionsfehler‘?",
    a: "Verhalten wird auf Persönlichkeit statt Situation zurückgeführt",
    b: "Man unterschätzt sich selbst systematisch",
    c: "Man denkt, andere handeln irrational",
    d: "Man übernimmt keine Verantwortung",
    richtig: "a",
    begruendung: "Man neigt dazu, Verhalten anderer auf deren Charakter zu schieben – und nicht auf äußere Umstände."
  },
  {
    frage: "Was beschreibt der ‚Bystander-Effekt‘?",
    a: "Mehr Zuschauer führen zu mehr Hilfe",
    b: "Mehr Zuschauer senken Hilfsbereitschaft",
    c: "Zuschauer greifen immer ein",
    d: "Menschen helfen lieber allein",
    richtig: "b",
    begruendung: "In Gruppen fühlen sich Einzelne weniger verantwortlich – dadurch sinkt die Wahrscheinlichkeit zu helfen."
  },
  {
    frage: "Was ist mit 'sozialer Faulheit' gemeint?",
    a: "Man ist in Gruppen aktiver",
    b: "Einzelpersonen strengen sich weniger an, wenn Beitrag nicht messbar ist",
    c: "Man ruht sich auf Erfolgen anderer aus",
    d: "Gruppen fördern Leistung immer",
    richtig: "b",
    begruendung: "Wenn individuelle Leistung nicht sichtbar ist, sinkt oft die Anstrengung."
  },
  {
    frage: "Was ist der 'Foot-in-the-Door'-Effekt?",
    a: "Man lehnt große Bitte eher ab",
    b: "Man erfüllt große Bitte eher nach kleinerer Zustimmung",
    c: "Man widersetzt sich Anweisungen leichter",
    d: "Man wird skeptischer bei Bitten",
    richtig: "b",
    begruendung: "Wer erst eine kleine Bitte erfüllt, willigt später eher in eine größere ein."
  },
  {
    frage: "Was beschreibt ‚Gruppendenken‘?",
    a: "Effektives Brainstorming",
    b: "Gruppe vermeidet Konflikte & trifft schlechte Entscheidungen",
    c: "Gruppe denkt rationaler als Einzelne",
    d: "Einzelmeinungen zählen mehr",
    richtig: "b",
    begruendung: "Kritische Stimmen werden unterdrückt, um Einigkeit zu wahren – was zu Fehlern führt."
  },
  {
    frage: "Was ist ein Stereotyp?",
    a: "Individuelle Beobachtung",
    b: "Verallgemeinerung über Gruppe",
    c: "Emotionale Reaktion",
    d: "Beweisbare Eigenschaft",
    richtig: "b",
    begruendung: "Stereotype sind vereinfachte, verallgemeinerte Annahmen über Gruppen."
  },
  {
    frage: "Was bedeutet soziale Identität?",
    a: "Nur persönliche Eigenschaften zählen",
    b: "Menschen definieren sich über Gruppenzugehörigkeit",
    c: "Menschen lehnen Gruppen ab",
    d: "Individuen sind isoliert",
    richtig: "b",
    begruendung: "Ein Teil des Selbstkonzepts basiert auf Gruppenzugehörigkeit (z.B. Nationalität, Beruf)."
  },
  {
    frage: "Was meint der Begriff ‚Outgroup-Homogenität‘?",
    a: "Man sieht Fremdgruppen als vielfältig",
    b: "Man sieht Eigengruppe als gleich",
    c: "Man sieht Fremdgruppen als gleichförmiger als die eigene",
    d: "Alle Gruppen wirken unterschiedlich",
    richtig: "c",
    begruendung: "Mitglieder der Fremdgruppe erscheinen 'alle gleich', während Eigengruppe als vielfältiger erlebt wird."
  },
  {
    frage: "Was sind soziale Normen?",
    a: "Biologische Reflexe",
    b: "Offizielle Gesetze",
    c: "Erwartete Verhaltensregeln in Gruppen",
    d: "Unveränderliche Eigenschaften",
    richtig: "c",
    begruendung: "Soziale Normen sind implizite Regeln, wie man sich in bestimmten Situationen verhalten soll."
  },
  {
    frage: "Was beschreibt der Begriff ‚implizite Einstellung‘?",
    a: "Bewusste Meinung",
    b: "Unbewusste Bewertung von Objekten oder Personen",
    c: "Eindeutig geäußerte Haltung",
    d: "Gleichgültigkeit",
    richtig: "b",
    begruendung: "Implizite Einstellungen wirken oft unbewusst auf Verhalten und Entscheidungen ein."
  },
  {
    frage: "Was bedeutet ‚Reaktanz‘?",
    a: "Man passt sich freiwillig an",
    b: "Man hilft spontan",
    c: "Man widersetzt sich Einschränkungen der Freiheit",
    d: "Man reagiert ruhig auf Stress",
    richtig: "c",
    begruendung: "Wenn Freiheit bedroht wird, steigt Motivation, das Gegenteil zu tun (z.B. Verbot → Reaktanz)."
  },
  {
    frage: "Was besagt die Theorie des sozialen Vergleichs von Festinger?",
    a: "Menschen vergleichen sich selten mit anderen",
    b: "Vergleiche mit anderen dienen der Selbsteinschätzung",
    c: "Vergleiche sind nur in Familien relevant",
    d: "Soziale Vergleiche schwächen das Selbstwertgefühl immer",
    richtig: "b",
    begruendung: "Festinger argumentierte, dass Menschen ihre Fähigkeiten und Meinungen durch Vergleiche mit anderen bewerten."
  },
  {
    frage: "Was beschreibt der 'self-serving bias'?",
    a: "Man schreibt Erfolge äußeren Umständen zu",
    b: "Man schreibt Misserfolge sich selbst zu",
    c: "Man erklärt Erfolge mit eigenen Fähigkeiten, Misserfolge mit äußeren Umständen",
    d: "Man sieht sich selbst als Durchschnitt",
    richtig: "c",
    begruendung: "Dieser Attributionsfehler dient dem Schutz des Selbstwerts."
  },
  {
    frage: "Was ist das Ziel von Persuasion?",
    a: "Wissen zu überprüfen",
    b: "Gedankenlesen zu fördern",
    c: "Einstellungen oder Verhalten zu verändern",
    d: "Konflikte zu vermeiden",
    richtig: "c",
    begruendung: "Persuasion zielt darauf ab, Einstellungen gezielt durch Kommunikation zu beeinflussen."
  },
  {
    frage: "Was beschreibt die zentrale Route der Persuasion?",
    a: "Oberflächliche Reize beeinflussen Entscheidungen",
    b: "Man verarbeitet Argumente gründlich und logisch",
    c: "Man wird durch Gruppendruck überzeugt",
    d: "Entscheidungen basieren auf Emotionen",
    richtig: "b",
    begruendung: "Bei der zentralen Route steht die sorgfältige kognitive Verarbeitung im Mittelpunkt."
  },
  {
    frage: "Was beschreibt die periphere Route der Persuasion?",
    a: "Man analysiert Argumente kritisch",
    b: "Emotionen und oberflächliche Hinweise wirken stärker als Logik",
    c: "Man lehnt Überzeugung grundsätzlich ab",
    d: "Man entscheidet immer rational",
    richtig: "b",
    begruendung: "Z.B. beeinflusst Attraktivität des Sprechers oder Musik die Überzeugungskraft stärker als Inhalte."
  },
  {
    frage: "Was ist eine injunktive Norm?",
    a: "Was Menschen typischerweise tun",
    b: "Was moralisch oder sozial geboten ist",
    c: "Ein Gesetzestext",
    d: "Eine individuelle Meinung",
    richtig: "b",
    begruendung: "Injunktive Normen geben an, welches Verhalten von der Gesellschaft als richtig angesehen wird."
  },
  {
    frage: "Was ist eine deskriptive Norm?",
    a: "Was Menschen tun (unabhängig davon, ob es gut ist)",
    b: "Was rechtlich erlaubt ist",
    c: "Was in der Vergangenheit getan wurde",
    d: "Was individuell bevorzugt wird",
    richtig: "a",
    begruendung: "Deskriptive Normen basieren auf der Wahrnehmung dessen, was andere tun."
  },
  {
    frage: "Was bedeutet 'ingroup bias'?",
    a: "Bevorzugung der Fremdgruppe",
    b: "Ablehnung aller Gruppen",
    c: "Bevorzugung der Eigengruppe gegenüber Fremdgruppen",
    d: "Neutralität zwischen Gruppen",
    richtig: "c",
    begruendung: "Menschen tendieren dazu, Mitglieder der eigenen Gruppe positiver zu bewerten."
  },
  {
    frage: "Was ist ein Sündenbockmechanismus?",
    a: "Übernahme von Verantwortung",
    b: "Falsche Beschuldigung einer Gruppe für Probleme",
    c: "Einzelfallanalyse",
    d: "Objektive Fehlerbewertung",
    richtig: "b",
    begruendung: "Eine Gruppe wird zum Ziel von Frustration, obwohl sie nicht schuld ist."
  },
  {
    frage: "Was zeigt der minimal group paradigm (Tajfel)?",
    a: "Gruppeneinteilung muss sehr bedeutungsvoll sein",
    b: "Sogar willkürliche Gruppenzuordnungen führen zu Diskriminierung",
    c: "Menschen bevorzugen Außenseiter",
    d: "Gruppenbildung ist rational",
    richtig: "b",
    begruendung: "Selbst bei zufälliger Gruppenzuweisung bevorzugen Menschen ihre eigene Gruppe."
  },
  {
    frage: "Was ist 'sozialer Einfluss'?",
    a: "Einfluss physischer Reize",
    b: "Veränderung von Einstellungen oder Verhalten durch andere",
    c: "Nur negative Beeinflussung",
    d: "Einfluss durch Naturkatastrophen",
    richtig: "b",
    begruendung: "Sozialer Einfluss umfasst Konformität, Gehorsam und Beeinflussung durch Gruppen."
  },
  {
    frage: "Was beschreibt der Begriff 'Affiliation'? ",
    a: "Vermeidung sozialer Kontakte",
    b: "Streben nach sozialem Anschluss",
    c: "Unabhängigkeit in Gruppen",
    d: "Führung in Gruppen",
    richtig: "b",
    begruendung: "Affiliation bedeutet das Bedürfnis nach Zugehörigkeit und sozialen Kontakten."
  },
  {
    frage: "Was ist der 'Pygmalion-Effekt'?",
    a: "Geringe Erwartungen führen zu Misserfolg",
    b: "Hohe Erwartungen führen zu besserer Leistung",
    c: "Kinder sind resistent gegen Erwartungen",
    d: "Nur Lehrer sind betroffen",
    richtig: "b",
    begruendung: "Erwartungen beeinflussen Leistungen – z.B. durch Lehrer, die Schülern mehr zutrauen."
  },
  {
    frage: "Was bedeutet 'Deindividuation'?",
    a: "Bewusstsein für Normen wird geschärft",
    b: "Personen handeln in Gruppen verantwortungsbewusster",
    c: "Verlust von Selbstwahrnehmung und Verantwortungsgefühl in Gruppen",
    d: "Stärkung des Ich-Gefühls",
    richtig: "c",
    begruendung: "In Gruppen fühlen sich Individuen anonym und neigen eher zu impulsivem Verhalten."
  },
  {
    frage: "Was ist 'soziale Kategorisierung'?",
    a: "Vermeidung von Gruppen",
    b: "Einteilung von Menschen in Gruppen zur Vereinfachung",
    c: "Zufällige Gruppenzuordnung",
    d: "Ablehnung aller Kategorien",
    richtig: "b",
    begruendung: "Soziale Kategorisierung hilft, Informationen schnell einzuordnen – kann aber zu Vorurteilen führen."
  },
  {
    frage: "Was ist der Unterschied zwischen Vorurteil und Diskriminierung?",
    a: "Kein Unterschied",
    b: "Vorurteil ist Verhalten, Diskriminierung ist Meinung",
    c: "Vorurteil = Einstellung, Diskriminierung = Verhalten",
    d: "Beides ist gleich legal",
    richtig: "c",
    begruendung: "Vorurteile sind kognitive Einstellungen, Diskriminierung ist darauf basierendes Verhalten."
  },
  {
    frage: "Was bedeutet 'Aggression' in der Sozialpsychologie?",
    a: "Unabsichtliches Verhalten",
    b: "Verhalten mit Ziel, anderen zu schaden",
    c: "Ärger ohne Handlung",
    d: "Passives Verhalten",
    richtig: "b",
    begruendung: "Aggression ist ein intendiertes Verhalten mit dem Ziel, zu verletzen oder zu schaden."
  },
  {
    frage: "Was ist 'altruistisches Verhalten'?",
    a: "Egoistisches Handeln mit Nutzen für andere",
    b: "Unbeabsichtigte Hilfeleistung",
    c: "Hilfe ohne Eigennutz",
    d: "Nur Hilfe an Familie",
    richtig: "c",
    begruendung: "Altruismus ist Hilfeleistung, ohne eine Belohnung oder Vorteil zu erwarten."
  },
  {
    frage: "Was beschreibt 'Empathie-Altruismus-Hypothese'?",
    a: "Nur Verwandten wird geholfen",
    b: "Hilfe erfolgt aus strategischen Gründen",
    c: "Empathie führt zu selbstloser Hilfe",
    d: "Hilfe erfolgt nie ohne Nutzen",
    richtig: "c",
    begruendung: "Nach Batson motiviert Empathie altruistisches Verhalten – auch wenn es einem selbst schadet."
  },
  {
    frage: "Was ist der 'Just-World-Belief'?",
    a: "Glaube an eine ungerechte Welt",
    b: "Menschen bekommen, was sie verdienen",
    c: "Zufall bestimmt das Leben",
    d: "Welt ist willkürlich",
    richtig: "b",
    begruendung: "Der Glaube an eine gerechte Welt kann zu Opferabwertung führen („Sie wird schon schuld sein“)."
  },
  {
    frage: "Was beschreibt der 'Bystander-Effekt'?",
    a: "Helfen nimmt zu, je mehr Menschen anwesend sind",
    b: "Individuen helfen eher, wenn viele andere da sind",
    c: "Die Anwesenheit anderer senkt die Wahrscheinlichkeit zu helfen",
    d: "Hilfeverhalten ist unabhängig von der Gruppengröße",
    richtig: "c",
    begruendung: "Je mehr Zuschauer, desto geringer fühlt sich der Einzelne verantwortlich – Verantwortungsdiffusion."
  },
  {
    frage: "Was ist Verantwortungsdiffusion?",
    a: "Man übernimmt mehr Verantwortung in Gruppen",
    b: "Verantwortung wird gleichmäßig verteilt",
    c: "In Gruppen fühlt sich niemand alleine verantwortlich",
    d: "Man nimmt Führung automatisch an",
    richtig: "c",
    begruendung: "Menschen schieben Verantwortung auf andere Gruppenmitglieder ab – besonders in Notfällen."
  },
  {
    frage: "Was bedeutet 'Konformität'?",
    a: "Widerstand gegen Gruppenmeinung",
    b: "Übereinstimmung mit Gruppenmeinung oder Normen",
    c: "Unabhängigkeit von sozialem Druck",
    d: "Rebellion gegen soziale Erwartungen",
    richtig: "b",
    begruendung: "Konformität beschreibt die Anpassung des Verhaltens an Gruppenstandards – z.B. bei Asch."
  },
  {
    frage: "Was zeigte das Konformitätsexperiment von Asch?",
    a: "Menschen handeln immer rational",
    b: "Gruppenzwang beeinflusst nur Kinder",
    c: "Viele Menschen passen sich falschen Gruppenurteilen an",
    d: "Gruppenurteile werden ignoriert",
    richtig: "c",
    begruendung: "Teilnehmer gaben falsche Antworten, wenn die Mehrheit dies tat – obwohl sie wussten, dass sie falsch waren."
  },
  {
    frage: "Was war das Ziel des Milgram-Experiments?",
    a: "Testen von Intelligenz",
    b: "Untersuchung von Lernprozessen",
    c: "Studie zu Gehorsam gegenüber Autorität",
    d: "Wirkung von Strafe auf Lernen",
    richtig: "c",
    begruendung: "Milgram zeigte, dass viele Menschen Anweisungen folgen, selbst wenn diese moralisch fragwürdig sind."
  },
  {
    frage: "Was war ein zentrales Ergebnis des Milgram-Experiments?",
    a: "Niemand folgte den Anweisungen",
    b: "Alle lehnten Gehorsam ab",
    c: "Ein großer Teil ging bis zur maximalen Stromschlagstufe",
    d: "Nur aggressive Menschen folgten",
    richtig: "c",
    begruendung: "Viele Probanden folgten den Befehlen – trotz moralischer Bedenken – bis zum Äußersten."
  },
  {
    frage: "Was ist Gruppendenken (groupthink)?",
    a: "Gruppenentscheidungen sind rationaler",
    b: "Kritisches Denken wird in Gruppen gefördert",
    c: "Streben nach Harmonie führt zu schlechten Entscheidungen",
    d: "Individuelle Meinungen setzen sich durch",
    richtig: "c",
    begruendung: "Gruppen streben nach Einigkeit und unterdrücken abweichende Meinungen – was zu Fehlentscheidungen führen kann."
  },
  {
    frage: "Was ist Gruppenkohäsion?",
    a: "Die Tendenz, Gruppen zu vermeiden",
    b: "Bindung und Zusammenhalt innerhalb einer Gruppe",
    c: "Mangel an Kommunikation",
    d: "Trennung von Gruppen",
    richtig: "b",
    begruendung: "Gruppenkohäsion stärkt das Zugehörigkeitsgefühl und beeinflusst Leistung und Konformität."
  },
  {
    frage: "Was ist 'soziales Faulenzen'?",
    a: "Einzelne arbeiten in Gruppen härter",
    b: "Gruppenarbeit erhöht individuelle Verantwortung",
    c: "Individuen strengen sich weniger an, wenn sie nicht einzeln bewertet werden",
    d: "Führungspersonen arbeiten weniger",
    richtig: "c",
    begruendung: "Wenn persönliche Leistung nicht messbar ist, sinkt oft der individuelle Einsatz."
  },
  {
    frage: "Was ist 'soziale Erleichterung'?",
    a: "Leistung nimmt durch Anwesenheit anderer ab",
    b: "Leistung verbessert sich bei gut geübten Aufgaben durch Anwesenheit anderer",
    c: "Gruppendruck führt zu Stress",
    d: "Nur Führungskräfte profitieren von Gruppen",
    richtig: "b",
    begruendung: "Bei einfachen oder gut geübten Aufgaben steigert Publikum die Leistung – bei schwierigen Aufgaben kann sie sinken."
  },
  {
    frage: "Was bedeutet Reaktanz?",
    a: "Passive Anpassung an Regeln",
    b: "Starker Wunsch nach Einordnung",
    c: "Widerstand gegen wahrgenommene Einschränkung der Freiheit",
    d: "Gehorsam gegenüber Autoritäten",
    richtig: "c",
    begruendung: "Reaktanz ist eine psychologische Reaktion auf empfundene Einschränkungen – Menschen handeln dann oft entgegen der Einschränkung."
  },
  {
    frage: "Was beschreibt die Theorie der kognitiven Dissonanz (Festinger)?",
    a: "Widerspruch zwischen Kognition und Emotion wird ignoriert",
    b: "Menschen leben gut mit inneren Konflikten",
    c: "Widersprüchliche Gedanken erzeugen Unbehagen, das reduziert werden soll",
    d: "Menschen vermeiden es, nachzudenken",
    richtig: "c",
    begruendung: "Kognitive Dissonanz entsteht bei Widersprüchen zwischen Einstellung und Verhalten – Menschen versuchen, das aufzulösen."
  },
  {
    frage: "Was ist ein Beispiel für Dissonanzreduktion?",
    a: "Rationalisierung widersprüchlichen Verhaltens",
    b: "Ignorieren aller Informationen",
    c: "Verleugnung der Realität",
    d: "Wechsel der Persönlichkeit",
    richtig: "a",
    begruendung: "Z.B. sagt man sich: 'Rauchen entspannt mich' – obwohl man weiß, dass es gesundheitsschädlich ist."
  },
  {
    frage: "Was bedeutet 'Foot-in-the-door-Technik'?",
    a: "Man stellt eine große Bitte zuerst",
    b: "Man fängt mit einer kleinen Bitte an, der eher zugestimmt wird",
    c: "Man droht zuerst, um Zustimmung zu bekommen",
    d: "Man bittet nur schriftlich",
    richtig: "b",
    begruendung: "Eine kleine Bitte erhöht die Wahrscheinlichkeit, dass später auch eine größere erfüllt wird."
  },
  {
    frage: "Was bedeutet 'Door-in-the-face-Technik'?",
    a: "Man bittet um etwas Kleines, dann etwas Großes",
    b: "Man beginnt mit einer überzogenen Bitte, die abgelehnt wird, um dann eine kleinere durchzusetzen",
    c: "Man schlägt die Tür zu",
    d: "Man vermeidet Bitten generell",
    richtig: "b",
    begruendung: "Nach einer abgelehnten großen Bitte erscheint die folgende kleinere Bitte vernünftiger – und wird öfter akzeptiert."
  },
  {
    frage: "Was ist 'Commitment' im sozialen Einfluss?",
    a: "Unverbindliche Zusage",
    b: "Wechselnde Entscheidungen",
    c: "Verpflichtung zu einem Verhalten oder Ziel",
    d: "Ablehnung sozialer Bindung",
    richtig: "c",
    begruendung: "Commitment erhöht die Wahrscheinlichkeit, dass Menschen ein Verhalten beibehalten."
  },
  {
    frage: "Was ist der 'Overjustification Effect'?",
    a: "Externe Belohnung steigert intrinsische Motivation",
    b: "Belohnung für etwas reduziert die ursprüngliche Motivation",
    c: "Menschen handeln immer aus Interesse",
    d: "Lob fördert immer Leistung",
    richtig: "b",
    begruendung: "Wenn eine an sich interessante Tätigkeit belohnt wird, sinkt oft die innere Motivation."
  },
  {
    frage: "Was versteht man unter 'Selbstwahrnehmungstheorie' (Bem)?",
    a: "Gefühle bestimmen Verhalten",
    b: "Verhalten wird unbewusst gesteuert",
    c: "Menschen schließen aus ihrem Verhalten auf ihre Einstellungen",
    d: "Einstellungen entstehen nur durch Erziehung",
    richtig: "c",
    begruendung: "Man beobachtet das eigene Verhalten und interpretiert daraus die eigene Einstellung."
  },
  {
    frage: "Was beschreibt der 'False Consensus Effect'?",
    a: "Man denkt, dass die eigene Meinung selten ist",
    b: "Man überschätzt, wie sehr andere die eigene Meinung teilen",
    c: "Man glaubt, dass niemand einem zustimmt",
    d: "Man geht immer vom Gegenteil aus",
    richtig: "b",
    begruendung: "Menschen nehmen oft an, dass ihre Überzeugungen weit verbreitet sind – auch wenn das nicht stimmt."
  },
  {
    frage: "Was ist soziale Wahrnehmung?",
    a: "Wahrnehmung von Farben in Gruppen",
    b: "Analyse von Umweltreizen",
    c: "Wie wir andere Menschen wahrnehmen und beurteilen",
    d: "Wahrnehmung ohne Kontext",
    richtig: "c",
    begruendung: "Soziale Wahrnehmung ist zentral für Urteile, Stereotype, und Attribution."
  },
  {
    frage: "Was beschreibt der Fundamentale Attributionsfehler?",
    a: "Man macht situative Einflüsse für das Verhalten anderer verantwortlich",
    b: "Man überschätzt externe Faktoren beim Verhalten anderer",
    c: "Man unterschätzt den Einfluss persönlicher Merkmale",
    d: "Man überschätzt persönliche Merkmale und unterschätzt situative Faktoren",
    richtig: "d",
    begruendung: "Wir neigen dazu, Verhalten anderer auf deren Persönlichkeit zurückzuführen, statt auf äußere Umstände."
  },
  {
    frage: "Was ist der Akteur-Beobachter-Divergenz-Effekt?",
    a: "Beobachter und Akteur beschreiben Verhalten gleich",
    b: "Beobachter betonen Situation, Akteure Persönlichkeit",
    c: "Akteure führen eigenes Verhalten auf Situation zurück, Beobachter auf Persönlichkeit",
    d: "Akteure unterschätzen den Einfluss der Umwelt",
    richtig: "c",
    begruendung: "Menschen erklären ihr eigenes Verhalten meist situativ, das anderer jedoch dispositionell."
  },
  {
    frage: "Was ist eine selbsterfüllende Prophezeiung?",
    a: "Ein Irrtum, der sich als falsch herausstellt",
    b: "Eine Vorhersage, die gerade deshalb wahr wird, weil sie gemacht wurde",
    c: "Ein Horoskop",
    d: "Eine wissenschaftliche Theorie",
    richtig: "b",
    begruendung: "Erwartungen beeinflussen unser Verhalten – das führt dazu, dass die Erwartung real wird."
  },
  {
    frage: "Was versteht man unter Stereotypen?",
    a: "Individuelle Einschätzungen",
    b: "Fakten über soziale Gruppen",
    c: "Verallgemeinerte Meinungen über Gruppen",
    d: "Unterschiede innerhalb von Gruppen",
    richtig: "c",
    begruendung: "Stereotype sind kognitive Vereinfachungen – oft ungenau oder verzerrt."
  },
  {
    frage: "Was unterscheidet ein Vorurteil von einem Stereotyp?",
    a: "Vorurteile sind kognitiv, Stereotype emotional",
    b: "Vorurteile beinhalten Bewertung, Stereotype beschreiben nur",
    c: "Stereotype sind falsch, Vorurteile korrekt",
    d: "Es gibt keinen Unterschied",
    richtig: "b",
    begruendung: "Stereotype sind beschreibend, Vorurteile enthalten eine emotionale Bewertung."
  },
  {
    frage: "Was ist Diskriminierung?",
    a: "Eine Meinung",
    b: "Kognitive Verzerrung",
    c: "Negatives Verhalten gegenüber Gruppenmitgliedern",
    d: "Neutrale Beurteilung",
    richtig: "c",
    begruendung: "Diskriminierung ist die Verhaltenskomponente von Vorurteilen – z.B. Ausschluss, Ungleichbehandlung."
  },
  {
    frage: "Wie kann man Vorurteile abbauen (nach Allport)?",
    a: "Durch Ignorieren",
    b: "Durch Bestrafung",
    c: "Durch Kontakt unter bestimmten Bedingungen",
    d: "Durch Gruppentrennung",
    richtig: "c",
    begruendung: "Allports Kontakthypothese sagt, dass gleichberechtigter Kontakt Vorurteile reduzieren kann."
  },
  {
    frage: "Was ist 'ingroup bias'?",
    a: "Bevorzugung der Fremdgruppe",
    b: "Gleichbehandlung aller",
    c: "Bevorzugung der eigenen Gruppe gegenüber der Fremdgruppe",
    d: "Zufällige Bewertung",
    richtig: "c",
    begruendung: "Menschen bewerten Mitglieder ihrer eigenen Gruppe positiver als Außenstehende – oft automatisch."
  },
  {
    frage: "Was ist der 'Fremdgruppenhomogenitätseffekt'?",
    a: "Eigene Gruppe erscheint einheitlich",
    b: "Fremdgruppe wird als sehr vielfältig wahrgenommen",
    c: "Fremdgruppe wird als einheitlicher wahrgenommen als die eigene",
    d: "Alle Gruppen wirken gleich",
    richtig: "c",
    begruendung: "Man nimmt die eigene Gruppe als differenziert wahr, andere Gruppen hingegen als einheitlich."
  },
  {
    frage: "Was bedeutet Deindividuation?",
    a: "Stärkere Selbstkontrolle in Gruppen",
    b: "Verlust von Selbstbewusstsein und Verantwortungsgefühl in Gruppen",
    c: "Verstärkung der Individualität",
    d: "Zunahme von Selbstreflexion",
    richtig: "b",
    begruendung: "Menschen in Gruppen verhalten sich oft impulsiver oder aggressiver, wenn sie sich anonym fühlen."
  },
  {
    frage: "Was ist der soziale Vergleich (Festinger)?",
    a: "Vergleich mit Prominenten",
    b: "Vergleich mit Idealen",
    c: "Menschen bewerten sich selbst durch den Vergleich mit anderen",
    d: "Menschen vergleichen nur materielle Dinge",
    richtig: "c",
    begruendung: "Zur Selbsteinschätzung vergleichen sich Menschen mit anderen – z.B. in Leistung, Aussehen oder Meinung."
  },
  {
    frage: "Was ist der 'Selbstwertdienliche Attributionsstil'?",
    a: "Gute Ergebnisse werden extern erklärt",
    b: "Erfolge schreibt man sich selbst zu, Misserfolge äußeren Umständen",
    c: "Alles wird auf Pech geschoben",
    d: "Man nimmt immer die Schuld auf sich",
    richtig: "b",
    begruendung: "Menschen schützen ihren Selbstwert durch günstige Attribution von Erfolg und Misserfolg."
  },
  {
    frage: "Was versteht man unter 'Self-Handicapping'?",
    a: "Man schützt sein Selbstwertgefühl durch das Schaffen von Ausreden für potenzielles Versagen",
    b: "Man trainiert bewusst falsche Strategien",
    c: "Man sabotiert andere",
    d: "Man hilft sich selbst",
    richtig: "a",
    begruendung: "Durch z. B. absichtliches Nichtlernen kann man Versagen später auf äußere Umstände schieben."
  },
  {
    frage: "Was ist 'implizite Einstellung'?",
    a: "Bewusste Überzeugung",
    b: "Langsam erlernte Meinung",
    c: "Automatische, oft unbewusste Bewertung",
    d: "Vergessene Einstellung",
    richtig: "c",
    begruendung: "Implizite Einstellungen sind unbewusst und beeinflussen unser Verhalten, oft ohne dass wir es merken."
  },
  {
    frage: "Was ist 'Explizite Einstellung'?",
    a: "Unbewusste Vorliebe",
    b: "Versteckte Meinung",
    c: "Bewusst geäußerte Überzeugung",
    d: "Unreflektiertes Verhalten",
    richtig: "c",
    begruendung: "Explizite Einstellungen sind bewusst und lassen sich direkt über Fragen erfassen."
  },
  {
    frage: "Was ist die Theorie des geplanten Verhaltens (Ajzen)?",
    a: "Verhalten ist unvorhersehbar",
    b: "Nur soziale Normen bestimmen Verhalten",
    c: "Verhalten ergibt sich aus Einstellung, subjektiver Norm und wahrgenommener Kontrolle",
    d: "Verhalten hängt nur von Motivation ab",
    richtig: "c",
    begruendung: "Einstellung, soziale Erwartungen und wahrgenommene Verhaltenskontrolle bestimmen unsere Absicht zu handeln."
  },
  {
    frage: "Was ist Aggression in der Sozialpsychologie?",
    a: "Versehentliches Verhalten",
    b: "Verhalten mit der Absicht, zu schaden",
    c: "Spielverhalten",
    d: "Wut ohne Handlung",
    richtig: "b",
    begruendung: "Aggression ist zielgerichtetes Verhalten, das darauf abzielt, anderen zu schaden – physisch oder psychisch."
  },
  {
    frage: "Was ist instrumentelle Aggression?",
    a: "Aggression zur Befriedigung von Wut",
    b: "Spontane Gewalt",
    c: "Geplante Aggression mit einem Ziel",
    d: "Aggression nur unter Alkohol",
    richtig: "c",
    begruendung: "Instrumentelle Aggression dient der Zielerreichung – z. B. bei einem Raubüberfall."
  },
  {
    frage: "Was ist feindselige Aggression?",
    a: "Aggression ohne Absicht",
    b: "Geplante Aggression für ein Ziel",
    c: "Aggression aus Ärger oder Wut heraus",
    d: "Konstruktives Verhalten",
    richtig: "c",
    begruendung: "Feindselige Aggression entsteht aus Emotionen wie Wut – ohne rationales Ziel."
  },
  {
    frage: "Was ist Altruismus?",
    a: "Hilfsverhalten ohne Erwartung von Gegenleistung",
    b: "Hilfsverhalten aus Eigennutz",
    c: "Beobachtung von Hilfe",
    d: "Freiwillige Untätigkeit",
    richtig: "a",
    begruendung: "Altruistisches Verhalten ist uneigennützig – man hilft anderen ohne Nutzen für sich selbst."
  }
];

