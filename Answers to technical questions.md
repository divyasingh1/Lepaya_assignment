

  **Q: How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.**
    
    It took 3 hours to architect, design and develop from scartch along with unit testing.
    If I had more time , there are few things I would like to improve in the solution which are as follows: 
    
    1. Logging: Better logging at each level by using some npm package like winston. I would have created a util method for the same.
    2. Validation layer for api
    3. OWASP TOP 10 Security standards
    4. Authentication and authorization middleware for the api
    5. Implemented clusters to make the service for better performance
    6. Error handler to handle and return structured error at all layers
    7. Mocking third party api in unit testing
    8. Maintaining a unique tracing Id accross all requests and print them with each respective log for better tracing of requests. 

  **Q: Describe your solution in plain english. Point out your design decisions and the reasoning behind them.**
    
    Route Layer:
    I created a Route layer which is responsible for 
     1, getting the request, 
     2. calling service layer for logics 
     3. and returning response
    
    After the control comes to Service layer: 
    
    First of all I decided to get the course details by id because I had to know if this course even exists or not. If it does not i should throw.
    then i decided to create an async loop on the learners array, in that loop i fetched details of each learner in parallel using Promise.all. This will save time. instead of processing them one by one, this seems a better approach.
    then I have fetched the trainers detail by id
    Once i keep getting necessay details I attach the response to the json object and return response to the route layer
    
    I have created separate folder and files to handle third party api calls
    
    I have also created separate folder called "utils" to handle common functionalities used accross the service.
    

   **Q: Have you learned something new doing this test? If yes, describe it here.**
    
    I am brainstorming to achieve best solution (Except for promises) to make this api faster.
    I came up with solutions like: 
    1. Clustering
    2. Worker threads etc
    
    After implementation and performance test only I can tell which will be the best solution. We might already be using best solution.

 **Q: How would you improve the HR System API you just used?**
    
    1. They should be authenticated
    2. They should have more filters
    3. I can tell more if I get a change to look into the implementation of those apis

**Q: Describe yourself using JSON**

    
``` 
{
    "name": "Divya",
    "lastname": "Singh",
    "age": 27,
    "gender": "Female",
    "nationality": "Indian",
    "livesin": "Chennai",
    "profession": "Software developer",
    "passions": [
      "Programming",
      "Playing Ukulele",
      "Teaching others"
    ],
     "interests": [
      "Education",
      "Sports",
      "Movies"
    ],
    "dreams": [
      "To spend all my money in good food",
      "To make this world a better place!",
      "To be a part of someting really big and valuable"
    ],
    "believes": [
      "Make a list that you truly want in people and then be that list."
    ]
}
```

