const axios = require("axios");

// Define the createToken function to fetch the access token
const createToken = async () => {
    const apiKey = '1WbNReepXPOE6Oz3syB75OFtHKZb0WHdNKgGX5l5u23Kwuy0';
    const apiSecret = 'QswHgSl6TUr4J4hAmCQIfTJB7SfwoRN8ybexbwVKGxGVc2gjr9cnc18zFxqaJPIG';
    const url = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';

    const auth = Buffer.from(apiKey + ':' + apiSecret).toString('base64');
    
    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `Basic ${auth}`
            }
        });
        
        return response.data.access_token; // Return the token for use in stkPush
    } catch (error) {
        console.error("Error creating token:", error);
        throw new Error('Failed to create token');
    }
};

// Define the stkPush function
const stkPush = async (req, res) => {
    const shortCode = 174379;
    const phone = req.body.phone.substring(1);  // Assuming phone number is given without country code
    const amount = req.body.amount;
    const passkey = "bfb279f9aa9bdbcf158e97d71a467cd2e8c893059b10f78e6b72ad1ed2c919";
    const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";

    const date = new Date();
    const timestamp =
        date.getFullYear() +
        ("0" + (date.getMonth() + 1)).slice(-2) +
        ("0" + date.getDate()).slice(-2) +
        ("0" + date.getHours()).slice(-2) +
        ("0" + date.getMinutes()).slice(-2) +
        ("0" + date.getSeconds()).slice(-2);

    const password = new Buffer.from(shortCode + passkey + timestamp).toString("base64");

    const data = {
        BusinessShortCode: shortCode,
        Password: password,
        Timestamp: timestamp,
        TransactionType: "CustomerPayBillOnline",
        Amount: amount,
        PartyA: `254${phone}`,
        PartyB: shortCode,
        PhoneNumber: `254${phone}`,
        CallbackURL: "https://mydomain.com/path",
        AccountReference: "Mpesa Test",
        TransactionDesc: "Testing stk push",
    };

    try {
        // Get token for authorization
        const token = await createToken();

        const response = await axios.post(url, data, {
            headers: {
                authorization: `Bearer ${token}`,
            },
        });

        console.log(response.data);
        res.status(200).json(response.data);
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message);
    }
};

// Export the functions
module.exports = { createToken, stkPush };

