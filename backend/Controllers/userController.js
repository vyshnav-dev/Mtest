import Form from "../Modals/formModal.js";



  const formData = async (req, res) => {
    console.log('ppp',req.body);
  
    try {
      const user = await Form.create({
        Name,
        Age,
        Email,
        Phone,
        Cource,
        Education
      });
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  




export{formData,}