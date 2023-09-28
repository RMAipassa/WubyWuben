��#   W u b y W u b e n 
 
 | **Use Case ID** | UC002 |
| **Naam** | Quiz Toevoegen |
| **Korte Beschrijving** | Een medewerker kiest ervoor om een quiz toe te voegen en selecteert een quiznaam. |
| **Acteur(s)** | Medewerker |
| **Aannames** | De medewerker is ingelogd op het systeem en heeft de juiste rechten om een quiz toe te voegen. |
| **Voorwaarden** | Het systeem is beschikbaar en functioneel. |

| **Hoofdscenario** |
| **Actor Action** | **System Responsibility** |
|------------------|-----------------------|
| 1. De medewerker navigeert naar het beheerpaneel voor quizzes. |  |
| 2. De medewerker kiest voor de optie "Quiz Toevoegen". |  |
| 3.  | Het systeem toont een formulier waarin de medewerker een quiznaam moet invoeren. |
| 4. De medewerker vult een unieke quiznaam in het formulier in. |  |
| 5.  | Het systeem valideert de ingevoerde quiznaam. |
|  | Het systeem slaat de nieuwe quiz op in de database. |
| 6. De medewerker bevestigt de invoer en klikt op "Quiz Toevoegen". |  |
| 7.  | Het systeem geeft een bevestigingsbericht weer aan de medewerker. |

| **Alternatieve Scenario's** |
| 4a. De medewerker voert een quiznaam in die al bestaat. Het systeem toont een foutmelding en vraagt de medewerker om een andere naam te kiezen. |  |

| **Postcondities** | De nieuwe quiz is toegevoegd aan het systeem met de opgegeven quiznaam. |
