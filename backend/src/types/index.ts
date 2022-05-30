export interface MaxWord{
    word:string
    count: number
}
export interface ProcessFileResponse{
    fileText: string
    newText: string
    maxWord: MaxWord
}