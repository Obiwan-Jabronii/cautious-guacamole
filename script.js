var currentDayEl = document.getElementById("currentDay")
var containerEl = document.getElementById("container")
const timeblock = document.querySelectorAll("[data-hour]");
const saveBtn = document.querySelectorAll("#saveBtn");

let mySchedule = [
    {
        scheduleblock: "block1",
        text: ""
        
    },
    {
        scheduleblock: "block2",
        text: ""

    },
    {
        scheduleblock: "block3",
        text: ""
        
    },
    {
        scheduleblock: "block4",
        text: ""
        
    },
    {
        scheduleblock: "block5",
        text: ""
        
    },
    {
        scheduleblock: "block6",
        text: ""
        
    },
    {
        scheduleblock: "block7",
        text: ""
        
    },
    {
        scheduleblock: "block8",
        text: ""
        
    },
    {
        scheduleblock: "block9",
        text: ""
        
    },
    {
        scheduleblock: "block10",
        text: ""
        
    }
];
console.log(timeblock)

let showDate = function() {

    
    let currentDate = moment().format("dddd, MMMM Do YYYY");

    
    currentDayEl.textContent = currentDate;
};


let blockColor = function () {
   
    let currentTime = moment().hour();

    
    for (let i = 0; i < timeblock.length; i++) {
        
      
        if (timeblock[i].dataset.hour == currentTime) {
            timeblock[i].classList.add("present");
        }
        else if (timeblock[i].dataset.hour > currentTime) {
            timeblock[i].classList.add("future");
        }
        else if (timeblock[i].dataset.hour < currentTime) {
            timeblock[i].classList.add("past");
        };
    };
};



var updateTask= function(event) {
    event.preventDefault();   
    let savedTasksArr = []
    for (var i=0;i<[mySchedule].length; i++) {
        savedTasksArr.push(mySchedule[i].value);
    }
    localStorage.setItem("tasks", JSON.stringify(savedTasksArr));
}



var loadTasks = function() {
    var savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (!savedTasks) {
        return false;
    }
    for (let i = 0; i < [mySchedule].length; i++) {
        
        mySchedule[i].value = savedTasks[i];
    }
}

    
    for (let i = 0; i < [mySchedule].length; i++) {
           
        if (mySchedule[i].scheduleblock = $(timeblock)[i].classList[1]) {

            $(timeblock)[i].textContent = mySchedule[i].text;
        };
    }
     
    


saveBtn.forEach(item => {
    item.addEventListener('click', updateTask)
});


// ** FUNCTION CALLS **
showDate();
blockColor();
loadTasks();