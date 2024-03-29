��#   W u b y W u b e n 
 
| **Use Case ID** | UC004 |
| **Naam** | Quiz Aanpassen en Verwijderen |
| **Korte Beschrijving** | Een medewerker kiest ervoor om een bestaande quiz aan te passen of te verwijderen en selecteert de gewenste actie. |
| **Acteur(s)** | Medewerker |
| **Aannames** | De medewerker is ingelogd op het systeem en heeft de juiste rechten om quizzes aan te passen of te verwijderen. Er zijn bestaande quizzes beschikbaar in het systeem. |
| **Voorwaarden** | Het systeem is beschikbaar en functioneel. |

| **Hoofdscenario** |
| **Actor Action** | **System Responsibility** |
|------------------|-----------------------|
| 1. De medewerker navigeert naar het beheerpaneel voor quizzes. |  |
| 2. De medewerker kiest voor de optie "Quiz Aanpassen" of "Quiz Verwijderen." |  |
| 3.  | Als "Quiz Aanpassen" is gekozen, toont het systeem een lijst met beschikbare quizzes om te bewerken. Als "Quiz Verwijderen" is gekozen, toont het systeem een lijst met beschikbare quizzes om te verwijderen. |
| 4. De medewerker selecteert de quiz die hij/zij wil aanpassen of verwijderen. |  |
| 5.  | Als "Quiz Aanpassen" is gekozen, toont het systeem het bewerkingsformulier voor de geselecteerde quiz, inclusief quizvragen en antwoorden. Als "Quiz Verwijderen" is gekozen, toont het systeem een bevestigingsbericht voor verwijdering. |
| 6. De medewerker kan de quizvragen en/of antwoorden bewerken (voor "Quiz Aanpassen") of bevestigt de verwijdering (voor "Quiz Verwijderen"). |  |
| 7.  | Als "Quiz Aanpassen" is gekozen, valideert het systeem de bewerkingen en slaat de bijgewerkte quiz op in de database. Als "Quiz Verwijderen" is gekozen, verwijdert het systeem de quiz uit de database. |
| 8. De medewerker bevestigt de bewerkingen (voor "Quiz Aanpassen") of de verwijdering (voor "Quiz Verwijderen") en klikt op "Opslaan" (voor "Quiz Aanpassen") of "Verwijderen" (voor "Quiz Verwijderen"). |  |
| 9.  | Als "Quiz Aanpassen" is gekozen, geeft het systeem een bevestigingsbericht weer aan de medewerker. Als "Quiz Verwijderen" is gekozen, geeft het systeem een bevestigingsbericht voor verwijdering weer aan de medewerker. |

| **Alternatieve Scenario's** |
| 6a. De medewerker wil een nieuwe vraag toevoegen aan de quiz (voor "Quiz Aanpassen"). Het systeem staat dit toe en voegt de nieuwe vraag toe aan de quiz. |  |
| 8a. De medewerker klikt op "Annuleren" in plaats van "Opslaan" (voor "Quiz Aanpassen"). Het systeem annuleert de bewerkingen en herstelt de quiz naar de oorspronkelijke staat. |  |

| **Postcondities** | Voor "Quiz Aanpassen": De geselecteerde quiz is bijgewerkt met de door de medewerker aangebrachte bewerkingen. Voor "Quiz Verwijderen": De geselecteerde quiz is verwijderd uit het systeem. |
