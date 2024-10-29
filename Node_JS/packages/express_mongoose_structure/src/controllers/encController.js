const addLeadController = (req, res) => {
    const { email, name, phone } = req.body;
    let lead_id = 0;


    res.status(201).json({
        message: "LEAD ADDED SUCCESS!",
        lead_id,
    })
}

module.exports = { addLeadController };