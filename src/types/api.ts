
export interface DummyResponse {
    dummy: string;
    more: string;
}

export interface UserResponse {
    id: number;
    name: string;
}

export interface MultipleChoiceObject {
    sug: Array<string>,
    cor: number
}

export interface Question {
    q: string,
    t: string,
    obj: MultipleChoiceObject
}
