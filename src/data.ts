export interface Experience {
    period: string;
    role: string;
    company: string;
    location: string;
    project?: string;
    description: string;
}

export interface Education {
    period: string;
    title: string;
    institution: string;
}

export const experiences: Experience[] = [
    {
        period: "2026",
        role: "Fullstack-Entwicklerin, Praktikum",
        company: "UpTeam GmbH",
        location: "Berlin, Deutschland",
        project: "Enterprise Task Management System",
        description: "Entwicklung einer hochgradig interaktiven Benutzeroberfläche mit React/Redux und TypeScript. Implementierung einer nahtlosen Drag-and-Drop Funktionalität mit dnd-kit für das Board- und Aufgabenmanagement. Entwicklung skalierbarer Microservices mit Java 17 und Spring Boot 3.x unter Nutzung von Spring Data JPA. Einsatz von MapStruct/Lombok für sauberen und wartbaren Code. Implementierung einer sicheren Benutzerzugriffskontrolle mittels Spring Security und JWT (rollenbasierte Berechtigungen). Erstellung komplexer Task-Workflows und Validierungen mit Formik und Yup. Optimierung der Deployment-Pipelines durch Docker-Containerisierung und Gradle."
    },
    {
        period: "2018 – 2022",
        role: "IT-Support-Mitarbeiterin",
        company: "GRAN Contact Center",
        location: "Cherson, Ukraine",
        description: "Technischer Support für Anwender, Betreuung von IT-Infrastruktur, Fehleranalyse und Behebung von Hard- und Softwareproblemen. Optimierung und Anpassung der Benutzeroberfläche mittels HTML und CSS zur Verbesserung der Workflow-Effizienz der Telefonischen Kundenberater."
    },
    {
        period: "2002 – 2018",
        role: "IT-Ingenieur und Software-Support",
        company: "Hauptverwaltung des Pensionsfonds der Ukraine im Gebiet Cherson",
        location: "Abteilung für Rentenauszahlungen, Cherson, Ukraine",
        description: "Unterstützung und Betreuung automatisierter Systeme zur Verarbeitung von Rentendokumentationen. Entwicklung von Anwendungen in FoxPro zur Arbeit mit Datenbanken. Erhebung und Auswertung статистической данных для Berichterstattung über Rentenzahlungen. Erstellung von Excel-VBA-Makros zur Beschleunigung der Datenerfassung. Automatisierung von Start- und Begleitprozessen von Programmen zur Rentenberechnung mithilfe von AutoIt."
    },
    {
        period: "1999 – 2000",
        role: "Software-Entwicklerin",
        company: "Fabrik \"Kherson Combines\"",
        location: "Cherson, Ukraine",
        description: "Entwicklung von Anwendungsprogrammen in FoxPro zur Datenbankverwaltung."
    },
    {
        period: "1996 – 1997",
        role: "Oberreferentin (Abteilung für Prozessautomatisierung)",
        company: "Zentrum für Rentenzahlungen",
        location: "Cherson, Ukraine",
        description: "Digitalisierung von Datensätzen und Automatisierung der Rentenberechnungen."
    }
];

export const educations: Education[] = [
    { period: "2025", title: "Fullstack developer", institution: "AIT TR GmbH (Berlin, Deutschland)" },
    { period: "2017", title: "PHP-Kurs", institution: "Wezom Web Studio (Cherson, Ukraine)" },
    { period: "1991 – 1996", title: "Diplom-Systemingenieurin", institution: "Nationale Technische Universität Cherson" },
    { period: "1987 – 1991", title: "Programmiertechnikerin", institution: "Maschinenbau-Kolleg Cherson" }
];
