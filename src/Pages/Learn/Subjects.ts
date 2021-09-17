interface Subject {
    title: string,
    path?: string,
    children?: Subject[]
}

export type Subjects = Subject[]
