# Habits-UI-Component
This is a component that I have been creating for the productivity app: prodzr

Welcome! if you are reading this in means that your are interested in my aplication, I am glad. As I mention on my website I cannot link the entire repository of the prodzr project. Here comes a brief explination of how the component I have been building should behave. It is not perfect but i think it can give you a good idea of what i can do and what still stands before me. 

-----------------------------

This Component is used in the prodzr app in order to show and track habits. 

The user specifies on which days he will commit himself to performing a task, this days will be considered "required" all others will be considered "not required".
Based on this the component will display the days of the current week with diferent colors to signalize their status. 
The user can change the status by simply clicking on the given day. The status that are posible for a given day will be cycled by clicking. 

these include: 

"COMPLETED" -> the user clicked a given day signalizing that he completed his Habit.

"MINI"      -> The used completed a shorter version of his Habit than intended.

"SKIPPED"   -> For reason beyond his control he was not able to perform the habit.

"FAILED"    -> even though the habit day was marked as required he did not complete it .

"REQUIRED"  -> habit has to be performed today or it will automatically be considered failed.

"NOTREQUIRED" -> Habit does not have to be performed today (but can)

Each status also has a correponding icon.
I will be using a habitsData.js file to simulate interaction with the backend.

I belive the rest will become clear if you look at the code. 
Hope you like it and if not please let me know what i can improve if you have the time !!! 





