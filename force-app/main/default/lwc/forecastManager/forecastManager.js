import { LightningElement } from 'lwc';

opportunities=[]
import getOpportunities from '@salesforce/apex/ManagerClass.getOpportunities';
export default class ForecastManager extends LightningElement {
    
   
    @wire(getOpportunities)
    opportunities;

    getOpportunities({data, error}){
        try{
        return this.opportunities= data}}
        catch{
           console.log(this.opportunities= error)
        }

    setExpectedRevenue(){
        if this.
    }

    }


