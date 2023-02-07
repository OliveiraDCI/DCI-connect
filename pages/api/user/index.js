import { getSession, getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(async function handler(req, res) {
  try {
    const { accessToken } = await getAccessToken(req, res);
    const { user } = await getSession(req, res);

    const baseUrl = `${process.env.MONGODB_DATA_API_URL}/action`;

    console.log("request body --> ", req.body);

    switch (req.method) {
      case "POST":
        await new Promise(resolve => setTimeout(resolve, 2000));
        const readData = await fetch(`${baseUrl}/updateOne`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Request-Headers": "*",
            jwtTokenString: accessToken
          },
          body: JSON.stringify({
            dataSource: process.env.MONGODB_DATA_SOURCE,
            database: "dci_connect",
            collection: "users",
            filter: { email: user.name }, // 'name' is the 'email' in Auth0 user object
            update: {
              $set: {
                firstName: req.body?.firstName,
                lastName: req.body?.lastName,
                picture: req.body?.picture,
                email: req.body?.email,
                city: req.body?.city,
                courseName: req.body?.courseName,
                courseEndDate: req.body?.courseEndDate,
                iLike: req.body?.iLike,
                description: req.body?.description,
                languages: req.body?.languages,
                employed: req.body?.employed,
                company: req.body?.company,
                position: req.body?.position,
                topics: req.body?.topics,
                likes: req.body?.likes
              }
            },
            upsert: true
          })
        });

        const readDataJson = await readData.json();

        if (readDataJson) console.log("readDataJson --> ", readDataJson);

        res.status(200).json(readDataJson);
        break;

      case "PUT":
        const updateData = await fetch(`${baseUrl}/findOne`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Request-Headers": "*",
            jwtTokenString: accessToken
          },
          body: JSON.stringify({
            dataSource: process.env.MONGODB_DATA_SOURCE,
            database: "dci_connect",
            collection: "users",
            filter: { email: user.name } // 'name' is the 'email' in Auth0 user object
          })
        });
        const updateDataJson = await updateData.json();

        console.log("findOne on PUt request --> ", updateDataJson);

        res.status(200).json(updateDataJson);
        break;

      default: // Method Not Allowed
        res.status(405).end();
        break;
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});
