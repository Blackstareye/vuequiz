import { QuestionType } from "@/enums/QuestionType";
import type { QuestionObject } from "@/types/api";
import { MediaType } from "@/types/media";

export const spongebobQuestionsDE: Array<QuestionObject> = [
    {
        t: QuestionType.MULTIPLE_CHOICE,
        obj: {
            q: {
                title: "Was ist SpongeBobs Lieblingsessen?",
                media: {
                    type: MediaType.IMAGE,
                    path: "https://picsum.photos/300/400"
                }
            },
            sug: ["Krabbenburger", "Pizza", "Eis", "Köderburger"],
            cor: 0,
        },
    },
    {
        t: QuestionType.MULTIPLE_CHOICE,
        obj: {
            q: {
                title: "Wer ist SpongeBobs bester Freund?",
                media: {
                    type: MediaType.VIDEO,
                    path: "https://getsamplefiles.com/download/mp4/sample-1.mp4"
                }
            },
            sug: ["Patrick Star", "Thaddäus", "Mr. Krabs", "Plankton"],
            cor: 0,
        },
    },
    {
        t: QuestionType.MULTIPLE_CHOICE,
        obj: {
            q: {
                title: "Wo arbeitet SpongeBob?",
                media: {
                    type: MediaType.AUDIO,
                    path: "https://de.getsamplefiles.com/download/mp3/sample-1.mp3"
                }
            },
            sug: ["Köderbude", "Krosse Krabbe", "Goofy Goober", "Bikini Bottom Bank"],
            cor: 1,
        },
    },
    {
        t: QuestionType.MULTIPLE_CHOICE,
        obj: {
            q: { title: "Wie heißt SpongeBobs Haustier-Schnecke?" },
            sug: ["Gary", "Schnecki", "Quitschie", "Blubber"],
            cor: 0,
        },
    },
    {
        t: QuestionType.MULTIPLE_CHOICE,
        obj: {
            q: { title: "Welches Instrument spielt Thaddäus?" },
            sug: ["Gitarre", "Klarinette", "Schlagzeug", "Klavier"],
            cor: 1,
        },
    },
    {
        t: QuestionType.MULTIPLE_CHOICE,
        obj: {
            q: { title: "Worauf ist Mr. Krabs besessen?" },
            sug: ["Geld", "Freunde", "Quallenfischen", "Kochen"],
            cor: 0,
        },
    },
    {
        t: QuestionType.MULTIPLE_CHOICE,
        obj: {
            q: { title: "Welche Farbe hat SpongeBob?" },
            sug: ["Gelb", "Blau", "Pink", "Grün"],
            cor: 0,
        },
    },
    {
        t: QuestionType.MULTIPLE_CHOICE,
        obj: {
            q: { title: "Was ist Planktons Ziel?" },
            sug: ["Das Geheimrezept der Krabbenburger stehlen", "Die Krosse Krabbe kaufen", "Bürgermeister werden", "Karate lernen"],
            cor: 0,
        },
    },
    {
        t: QuestionType.MULTIPLE_CHOICE,
        obj: {
            q: { title: "Welcher Charakter wohnt in einer Ananas unter dem Meer?" },
            sug: ["SpongeBob", "Patrick", "Thaddäus", "Sandy"],
            cor: 0,
        },
    },
    {
        t: QuestionType.MULTIPLE_CHOICE,
        obj: {
            q: { title: "Was für ein Tier ist Sandy Cheeks?" },
            sug: ["Eichhörnchen", "Oktopus", "Seestern", "Seepferdchen"],
            cor: 0,
        },
    },
];


export const spongeBobWriting: Array<QuestionObject> = [
    {
        t: QuestionType.WRITING,
        obj: {
            q: { title: "Wie viele Löcher hat Spongebob" },
            answ: "3",
        },
    },
]

