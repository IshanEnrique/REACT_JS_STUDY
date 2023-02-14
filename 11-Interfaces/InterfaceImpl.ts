interface Account{
     name:string,
     accountNo:string
     balance:number
     branch:string
     bank:string
     transactionHistory:string[]
     deposit(accountNo:string,amount:number):string
     withdraw(accountNo:string,amount:number):string

}


class HdfcBank implements Account{
    public transactionHistory:string[]=[]
    constructor(
     public name:string,
     public accountNo:string,
     public balance:number,
     public branch:string,
     public bank:string
     
    ){
        this.transactionHistory.push(`Dear ${name}, Your account in ${bank} of branch ${branch} has been successfully opened with amount Rs. ${balance} on date - ${new Date()}.`)
    }
    
    deposit(accountNo:string,amount:number):string {
        this.balance+=amount
        this.transactionHistory.push(`Rs. ${amount} - Credit - Account No - ${accountNo} on date - ${new Date()}`)
        return `Dear ${this.name}, Rs. ${amount} has been successfully deposited into your account. Your available A/C balance is : ${this.balance}`
    }

    withdraw(accountNo:string,amount:number):string {
        if(this.balance-amount>0){

            this.balance-=amount
            this.transactionHistory.push(`Rs. ${amount} - Debit - Account No - ${accountNo} on date - ${new Date()}`)
            return `Dear ${this.name}, Rs. ${amount} has been successfully deposited into your account. Your available A/C balance is : ${this.balance}`
        }else{
            return `Dear ${this.name}, Your A/C has insufficent balance to withdraw amount Rs. ${amount} . Your available A/C balance is : ${this.balance}`
        }
    }

    showTransactionHistory(){
        this.transactionHistory.map((transaction)=>{
          return  console.log(transaction)
        })
    }
  
}

let rahul:HdfcBank=new HdfcBank("Rahul","4038001500083079",500,"Noida","HDFC Bank");
rahul.showTransactionHistory()
rahul.deposit(rahul.accountNo,10000)
rahul.deposit(rahul.accountNo,5000)
rahul.showTransactionHistory()