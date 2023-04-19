export default searchTerm(async function handler(req, res) {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
    },
  };
  const fetchBody = {
    dataSource: process.env.NEXT_PUBLIC_MONGODB_DATA_SOURCE,
    database: "farm_directory",
    collection: "farmers",
  };
  const baseUrl = `${process.env.NEXT_PUBLIC_MONGODB_DATA_API_URL}/action`;

  try {
    switch (req.method) {
      case "GET":
        const term = req.query.term;
        const readData = await fetch(`${baseUrl}/aggregate`, {
          ...fetchOptions,
          body: JSON.stringify({
            ...fetchBody,
            pipeline: [
              {
                $search: {
                  index: "default",
                  text: {
                    query: term,
                    path: {
                      wildcard: "*",
                    },
                    fuzzy: {},
                  },
                },
              },
              { $sort: { postedAt: -1 } },
            ],
          }),
        });
        const readDataJson = await readData.json();
        res.status(200).json(readDataJson.documents);
        break;
      default:
        res.status(405).end();
        break;
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
});
function searchTerm(arg0: (req: any, res: any) => Promise<void>) {
  throw new Error("Function not implemented.");
}

