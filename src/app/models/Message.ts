export interface IMessage {
    type?: string;
    title?: string;
    text?: string;
    confirmButton?: string;
    cancelButton?: string;
    confirmButtonText?: string;
}

export class Message implements IMessage{
    type: string;
    title: string;
    text: string;
    confirmButton: string;
    cancelButton: string;
    confirmButtonText: string;   

    constructor(obj: {
        type?:string
        title?: string,
        text?: string,
        confirmButton?: string,
        cancelButton?: string,
        confirmButtonText?: string
        }){
        this.type = obj.type ? obj.type : undefined;
        this.title = obj.title ? obj.title : undefined;
        this.text = obj.text ? obj.text : undefined;
        this.confirmButton = obj.confirmButton ? obj.confirmButton : undefined;
        this.cancelButton = obj.cancelButton ? obj.cancelButton : undefined;
        this.confirmButtonText = obj.confirmButtonText ? obj.confirmButtonText : undefined;
    }
}