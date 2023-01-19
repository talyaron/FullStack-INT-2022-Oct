the app I chose is Google

Model: 
is the data holder and doesn't have any actions of it's own.
it gives information to the controller via get requests or gets updated via set / delete requests from the controller

Controller:
will hold of the logical opertaions, in this case:
 it will make http requests to the db -> search()
 it will send the recieved data to the view to display 

View:
will display the information that the controller sends it.  
also cathes events that happen via event listners
it will search the data that was inputed into the search bar -> onClick={search()}