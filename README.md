# LiveTicketz
LiveTicketz is an application for selling, purchasing concerts and events tickets, you can offer tickets with different prices, purchase tickets from other users.

## App High-level features 

⟶ Users can list a ticket for an event for sale <br>
⟶ other users can purchase the offered ticket <br>
⟶ Any user can list tickets for sale and also can purchase tickets <br>
⟶ When a user attempts to purchase a ticket, the ticket is locked for x-mins, and the user must enter the payment info during this x-mins <br>
⟶ While the ticket is locked No other user can purchase the ticket until the ticket is unlocked <br>
⟶ While the ticket is locked The seller of the ticket cannot change the ticket price until the ticket is unlocked <br>


## To check for ingress nginx controller 
```cmd
➜ auth-microservice git:(main) kubectl get pods --namespace=ingress-nginx
NAME                                        READY   STATUS             RESTARTS       AGE
nginx-ingress-controller-858557f64c-cmmdj   0/1     CrashLoopBackOff   21 (12s ago)   60m
```