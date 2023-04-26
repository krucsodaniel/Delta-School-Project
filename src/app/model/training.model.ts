export interface TrainingModel {
    name: string,
    description: string,
    teacher: string,
    id?:string,
    max: number,
    applicants: number,
    imageURL: string
}