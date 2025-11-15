import { QuestionType } from "@/enums/QuestionType";
import type { DummyResponse, UserResponse, QuestionObject } from "@/types/api";
import sample from "@/util/ArrayUtils";
import { spongebobQuestionsDE } from "./data";
//  First step is a simple fetch

const DELAY: number = 1000

var questions: Array<QuestionObject> = [
    {
        t: QuestionType.MULTIPLE_CHOICE,
        obj: {
            q: {
                title: 'Hello this is a test?'
            },
            sug: [
                'Hellokitty',
                'nulla consectetur ad quasi quidem sapiente magnam aperiam, nostrum distinctio velit, reprehenderit qui dolore alias illo saepe in beatae voluptates eum eaque aut dignissimos, repudiandae corrupti tempore? Officiis, eos placeat, tempore, natus consectetur corporis numquam nam quibusdam est facilis omnis voluptatem!"',
                'Ozelot',
                'Dubidum',
            ],
            cor: 1,
        }
    },
    ...spongebobQuestionsDE
];

// 1️⃣ Map your mock routes with full types
const mockRoutes: Record<string, any> = {
    "/questions": sample(questions),

    "/mock/user": {
        id: 1,
        name: "Mock Tester",
    } as UserResponse,
};

// 2️⃣ Typed fetcher function
export async function fetcher<T>(url: string, options?: RequestInit): Promise<T> {
    // check mock routes
    if (mockRoutes[url]) {
        return new Promise<T>((resolve) => {
            setTimeout(() => {
                resolve(mockRoutes[url] as T)
            }, DELAY) // 3 seconds delay
        })
    }

    // real API fetch
    const res = await fetch(url, options);
    if (!res.ok) {
        throw new Error(`Fetch error from: ${url}`);
    }

    return (await res.json()) as T;
}

