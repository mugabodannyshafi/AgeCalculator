function calculateDate()
{
    let date = document.getElementById('date').value
    let month = document.getElementById('month').value
    let year = document.getElementById('year').value
    if(date === '')
    {
        alert('Enter Dates')
    }
    else if(month === '')
    {
        alert('Enter Month')
    }
    else if(year === '')
    {
        alert('Enter a Year')
    }
    else
    {
     let date1 = new Date()
     let thisDate = date1.getDate()   
     let thisMonth =1 + date1.getMonth()
     let thisYear =  date1.getFullYear()
     let everyMonth = [31,28,31,30,31,30,31,31,30,31,30,31]
        if(date > thisDate)
        {
           thisDate = thisDate + everyMonth[thisMonth - 1]
           thisMonth = thisMonth - 1;
        }
        if(month > thisMonth)
        {
           thisMonth += 12
           thisYear -= 1
        }
        let d = thisDate - date
        let m = thisMonth - month
        let y = thisYear - year
       if(y < 0)
       {
        alert('The date you are specifying is not correct because it is greater than today')
       }
       else{
        document.getElementById("output").innerHTML = `Your Age is ${y} Years ${m} Months and ${d} Days`;
       }
        
     }

    }