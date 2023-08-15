const newRevenueAnalysis = async (event) => {
  event.preventDefault();
  try {
    if (newRevenue) {
      const response = await fetch("/api/revenue", {
        method: "GET",
        body: JSON.stringify({
             
         }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location.replace("/items");
      } else {
        let errorMessage = "";

        switch (response.status) {
          case 401:
            errorMessage = "Budget already exists!";
            break;
          case 500:
            errorMessage = "Server error.";
            break;
          default:
            errorMessage = "Unknown error.";
            break;
        }
        errorElement.textContent = errorMessage;
      }
    }
  } catch (err) {
    console.log(err);
  }
};


const newExpenseAnalysis = async (event) => {
    event.preventDefault();
    try {
      if (newExpense) {
        const response = await fetch("/api/expense", {
          method: "GET",
          body: JSON.stringify({
            amount,
            category,
            where:{

            }
         
     }),
          headers: { "Content-Type": "application/json" },
        });
  
        if (response.ok) {
          document.location.replace("/items");
        } else {
          let errorMessage = "";
  
          switch (response.status) {
            case 401:
              errorMessage = "Budget already exists!";
              break;
            case 500:
              errorMessage = "Server error.";
              break;
            default:
              errorMessage = "Unknown error.";
              break;
          }
          errorElement.textContent = errorMessage;
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

document.selectgetElementById("#submit-budget").addEventListener
("click", function () {document.location.replace("/budgetanalysis")})

