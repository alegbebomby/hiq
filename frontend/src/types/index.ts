export interface FileUploadResponse{
    fileText:string
    maxWord:{
        word:string
        count:number
    }
    newText:string
}