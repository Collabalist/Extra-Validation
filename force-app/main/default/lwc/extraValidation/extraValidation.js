import { LightningElement, api } from 'lwc';

export default class ExtraValidation extends LightningElement {

    @api validationExpression;
    @api errorMsg;

    @api
    validate(){
        if(this.validationExpression == true){
            return {isValid: true};
        }else{
            return {
                isValid: false,
                errorMessage: this.errorMsg
            };
        }
    }
}