import type { MediaType } from "./media";

export interface DummyResponse {
    dummy: string;
    more: string;
}

export interface UserResponse {
    id: number;
    name: string;
}



export interface Question {
    title?: string
    media?: {
        type: MediaType
        path: string
    }
}

export interface MultipleChoiceObject {
    q: Question,
    sug: Array<string>,
    cor: number
}

export interface QuestionObject {
    t: string,
    obj: MultipleChoiceObject
}
