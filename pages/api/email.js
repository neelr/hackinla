import Airtable from "airtable";

export default async function handler(req, res) {
  // Initialize Airtable client

  // Get data from Airtable
  const base = new Airtable({apiKey: process.env.AIRTABLE_KEY}).base(process.env.AIRTABLE_BASE);

  // Add email to Airtable
  if (req.method === "POST" && req.body.email) {
    await base("emails").create([
        {
            fields: {
            mail: req.body.email,
            },
        },
        ]);
    res.status(200).json({ message: "Success" });
    return;
  }

}
