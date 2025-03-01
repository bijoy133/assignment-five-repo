//discover btn
const disconverbtn=document.getElementById("question");
if(disconverbtn)
{
  disconverbtn.addEventListener('click',function(){
    window.location.href="/question.html"
  })
}
//home btn
const homebtn=document.getElementById("homeBtn");
if(homebtn)
{
  homebtn.addEventListener('click',function(){
    window.location.href="index.html"
  })
}

const date=new Date();
const formattedDate=date.toLocaleDateString("en-US",{
  weekday:"short",
  year:"numeric",
  month:"short",
  day:"numeric",
}).replace(",", "")


let  hours=String(date.getHours()).padStart(2,0);
const min=String(date.getMinutes()).padStart(2,0);
const sec=String(date.getSeconds()).padStart(2,0);
const ampm=hours>=12? "PM":"AM";
hours=hours%12;
hours=hours?hours:12;
//date show
const cdate=document.getElementById("currentDate").innerText=formattedDate.replace(" ",", ");


//counting
let assignedTask=6;
let completedTask=23;



const assignTaskCount=document.querySelector(".assignedTasks")
const completedTaskCount=document.querySelector(".completedTasks")

//textContent for tasks
assignTaskCount.textContent=assignedTask;
completedTaskCount.textContent=completedTask;
//complete button task

//count for last alert
let count=0;

const cbutton=document.querySelectorAll(".complete");
if(cbutton.length>0)
{
  cbutton.forEach(button=>{
    button.addEventListener("click",function(){
      const taskName=button.closest(".task-card").querySelector("h2").textContent;
      assignedTask-=1;
      completedTask+=1;
      count+=1;
      assignTaskCount.textContent=assignedTask;
      completedTaskCount.textContent=completedTask;

      //activity Log
      const activityLog=document.querySelector('.activityLog');
      const activityItem=document.createElement("div");
      activityItem.classList.add("activity-item");
      const formatedDate2=`${hours}:${min}:${sec} ${ampm}`;
      activityItem.innerHTML=`<h3 class="mb-5 bg-slate-100 rounded shadow-md">You have Complete the Task ${taskName} at ${formatedDate2} </h3>`
      activityLog.appendChild(activityItem);

      //disable button
      button.setAttribute('disabled',true);
      button.classList.add('disabled');

      // message show
      alert(`${taskName} Added Successfully`);

     if(count==6)
     {
     
      alert("You Completed Curernt  Task Successfully");
    
     } 
    })
  })
}


// clear activity
const clearBtn=document.querySelector('.clearHistory');
if(clearBtn)
{
  clearBtn.addEventListener('click',function(){
      const activity=document.querySelector('.activityLog');
      activity.innerHTML='';
      alert('activity cleared Successfully');

    //  reset
    window.location.reload();


  })
}

const colors=['purple','skyblue','red','pink','orange'];
let idx=0;

// theme
const themebtn=document.getElementById("theme");
if(themebtn){
  themebtn.addEventListener('click',function(){
    document.body.style.backgroundColor=colors[idx];
    idx=(idx+1)%colors.length;
  })
}