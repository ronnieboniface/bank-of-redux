# Redux

### What Is It?
* It provides a single source of truth to our application. All of the data is coming from one central location (the **store**).
* **Provider** gives us  access to our application’s store.
* **Connect** opens a line of communication from a component to the store.

### Think About It Like This
* We keep all of our money in a bank account.
* Our debit card gives us access to that money.
* Any location with an ATM is connected to our bank account. We can take money out or put money in (*mapDispatchToProps*) or just check our balance (*mapStateToProps*).

## The Redux Flow
* An event takes place and tells our application we want to change something about the store. Usually something like a form submission.
* To change the state of our application we call an **action creator**.
* The action creator produces an **action**.
* The action gets passed to **dispatch**.
* Dispatch forwards the action to a **reducer**.
* The reducer creates a **new state** and returns it.

## The Cash Flow

* To change the balance in our bank account, we put our card in the ATM and enter our pin. *This is the event that starts the process.*
* We can choose to make a withdrawal or a deposit. We’ll use a deposit for this example. *Either one of these is an action creator.*
* We feed some amount of cash into the ATM. *This is our action.*
* We hit the little green button on the ATM. *This is dispatching an action.*
* The amount of money is forwarded to the bank. *The action we dispatched is going to our reducer.*
* The bank determines whether this is a deposit or a withdrawal based on which option (deposit or withdrawal) we chose at the ATM. *A reducer decides what to do based on the type of action dispatched to it.*
* We have a new balance in our bank account. Once the ATM prints out the receipt we’ll see how our account balance has changed. *The reducer is creating a new state and returning it.*
