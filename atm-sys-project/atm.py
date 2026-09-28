class Atm:
    def __init__(self, name, pin, balance=0, acct_no=None):
        self.name = name
        self.balance = balance
        self.pin = pin
        self.acct_no = acct_no

    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            return self.balance
        
    def withdraw(self, amount):
        if amount > 0 and amount <= self.balance:
            self.balance -= amount
            return self.balance
        else:
            return "Insufficient funds"
    def transfer(self, amount, recipient, pin):
        if pin == self.pin:
            if amount > 0 and amount <= self.balance:
                self.balance -= amount
                recipient.balance += amount
                return self.balance
            else:
                return "Insufficient funds"
        else:
            return "Invalid PIN"

    def show_transaction_history(self):
        # This method can be implemented to show transaction history
        for i in range(1, 6):
            print(f"Transaction {i}: Placeholder for transaction details")
        
class Recipient:
    def __init__(self, name, acct_no, balance=0):
        self.name = name
        self.acct_no = acct_no
        self.balance = balance

    def show_balance(self):
        if self.balance > 0:
            print(f" Dear {self.name}, your account balance is ${self.balance}")



my_atm = Atm("Jude", 1234, 1000, "1000000001")
my_atm2 = Atm("John", 5678, 500, "1000000002")

recipient = Recipient("Alice", "1234567890", 300)

accounts = {
    my_atm.acct_no: my_atm,
    my_atm2.acct_no: my_atm2,
    recipient.acct_no: recipient,
}

recipient.show_balance()

while True:
    print("Welcome to the ATM")
    print("1. Deposit")
    print("2. Withdraw")
    print("3. Check Balance")
    print("4. Transfer")
    print("5. Exit")

    choice = input("Enter your choice (1 through 5): ").strip()

    if choice == "1":
        amount = float(input("Enter amount to deposit: ").strip())
        my_atm.deposit(amount)
        print(f"New balance: {my_atm.balance}")
    elif choice == "2":
        amount = float(input("Enter amount to withdraw: ").strip())
        result = my_atm.withdraw(amount)
        if result == "Insufficient funds":
            print(result)
        else:
            print(f"New balance: {result}")
    elif choice == "3":
        print(f"Current balance: {my_atm.balance}")
        
    elif choice == "4":
        amount = float(input("Enter amount to transfer: ").strip())
        recipient_acct = input("Enter recipient's Account Number: ").strip()
        transfer_recipient = accounts.get(recipient_acct)
        if transfer_recipient is None:
            print("Account not found.")
        else:
            pin = int(input("Enter your PIN: "))
            result = my_atm.transfer(amount, transfer_recipient, pin)
            if isinstance(result, str):
                print(result)
            else:
                print(f"Transfer successful. Your new balance: {result}")
                print(f"{transfer_recipient.name}'s new balance: {transfer_recipient.balance}")
    elif choice == "5":
        print("Thank you for using the ATM.")
        break
    else:
        print("Invalid choice. Please try again.")
