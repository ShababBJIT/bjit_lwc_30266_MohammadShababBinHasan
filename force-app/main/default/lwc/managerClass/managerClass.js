import { LightningElement } from 'lwc';

public with sharing class ManagerClass{
    @AuraEnabled=(cacheable=true)
    public static List<Opportunity> getOpportunities(){
         List<Opportunity> opportunities = [SELECT  Name, Amount, Probability, Expected_Revenue_Overridden__c FROM Opportunity WHERE StageName!=("Proposal/Price Quote"OR"Negotiation/Review"OR "Closed Won" OR "Closed Lost") AND CloseDate == THIS_MONTH];
   
        
        return opportunites;
        }
        
}
   